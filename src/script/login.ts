import firebase from 'firebase/app';
import {LoginState} from "@/store/modules/user";
import store from "@/store"
import Cookie from "@/script/cookie";
import Vue from "vue";
// import {firebaseInitStartTime} from "boot/firebase";

const cookieName = process.env.VUE_APP_COOKIE_NAME;

class Login {

    static async autoLogin() {
        // console.log('파이어베이스 초기화 : ' +  (Date.now() - firebaseInitStartTime) / 1000 );
        if( store.getters.loginState === LoginState.none ) {
            const currentUser = firebase.auth().currentUser;
            console.log('autoLogin', currentUser)
            if ( currentUser ) {
                // console.log(currentUser);

                const idToken = await currentUser.getIdToken();
                // console.log('아이디 토큰 갱신 : ' +  (Date.now() - firebaseInitStartTime) / 1000 );

                store.commit('idToken', idToken);
                // console.log(idToken);

                const cookie = Cookie.read( cookieName );
                // console.log( cookie, currentUser.uid, cookie === currentUser.uid );
                if( cookie && cookie === currentUser.uid ) {
                    const result = await Vue.$api.user();
                    // console.log('유저정보 세팅 : ' +  (Date.now() - firebaseInitStartTime) / 1000 );
                    if( !result || result.error ) {
                        await Login.logout();
                    }
                    else {
                        const { user } = result;
                        store.commit('user', user);
                        await Login.login();
                    }
                }
                else if( cookie ) {
                    //쿠키는 있지만 기존 사용자랑 다른 상태
                    // console.log('로그아웃(쿠키다름) : ' +  (Date.now() - firebaseInitStartTime) / 1000 );
                    await firebase.auth().signOut();
                }
                else {
                    // console.log('로그아웃(쿠키없음) : ' +  (Date.now() - firebaseInitStartTime) / 1000 );
                    await Login.logout();
                }
            }
            else {
                const cookie = Cookie.read(cookieName);
                if( cookie ) {
                    const result = await Vue.$api.session();
                    // console.log('세션 확인 : ' +  (Date.now() - firebaseInitStartTime) / 1000 );
                    // console.log(result);
                    if( !result || result.error ) {
                        await Login.logout();
                    }
                    else {
                        const { customToken } = result;
                        store.commit('loginState', LoginState.customToken );
                        await firebase.auth().signInWithCustomToken( customToken );
                        // console.log('커스텀토큰 로그인 : ' +  (Date.now() - firebaseInitStartTime) / 1000 );
                    }
                }
                else {
                    await Login.logout();
                }
            }
        }
        else if( store.getters.loginState === LoginState.customToken ) {
            const currentUser = firebase.auth().currentUser;
            const idToken = await currentUser!.getIdToken();
            // console.log('커스텀토큰 로그인 - 토큰갱신 : ' +  (Date.now() - firebaseInitStartTime) / 1000 );
            store.commit('idToken', idToken);
            // console.log(idToken);
            const result = await Vue.$api.user();
            // console.log('커스텀토큰 로그인 - 유저 정보 갱신 : ' +  (Date.now() - firebaseInitStartTime) / 1000 );
            if( !result || result.error ) {
                await Login.logout();
            }
            else {
                const { user } = result;
                store.commit('user', user);
                await Login.login();
            }
        }
    }

    static async login() {
        console.log('when??', store.getters.user)
        store.commit('loginState', LoginState.login );
        Cookie.write( cookieName, store.getters.user.uid, 30, process.env.VUE_APP_COOKIE_DOMAIN );
    }

    static async logout() {
        await firebase.auth().signOut();
        await store.dispatch('logout');
        // await store.commit('clearMail');
        Cookie.delete( cookieName, process.env.VUE_APP_COOKIE_DOMAIN );
    }

}

export default Login;
