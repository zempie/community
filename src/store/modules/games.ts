import Vue from 'vue';
import { LoginState } from "src/store/modules/user";


enum GameLoadState {
    none,       //로드전
    loading,    //로드중
    loaded,     //로드완료
    complete,   //모든게임 로드완료
}

export {
    GameLoadState,
}

export default {
    state: {

        limit: 20,

        officialGames: [],
        challengeGames: [],
        affiliateGames: [],


        crtOriginGames: [],
        searchGames: [],
        isSearchGame: false,

        isOfficialPage: true,

        officialLoadState: GameLoadState.none,
        challengeLoadState: GameLoadState.none,
        affiliateLoadState: GameLoadState.none,

        game: {},
    },
    getters: {
        // loadedGames : (state : any) => {
        //     return state.loadedGames;
        // },

        // games : ( state : any ) => {
        //     return state.games;
        // },

        officialGames: (state: any) => {
            return state.officialGames;
        },

        challengeGames: (state: any) => {
            return state.challengeGames;
        },

        affiliateGames: (state: any) => {
            return state.affiliateGames;
        },

        officialLoadState: (state: any) => {
            return state.officialLoadState;
        },

        challengeLoadState: (state: any) => {
            return state.challengeLoadState;
        },

        affiliateLoadState: (state: any) => {
            return state.affiliateLoadState;
        },

        gameByTitle: (state: any) => (title: string) => {
            let game = state.officialGames.find((game: any) => game.title === title);
            if (!game) {
                game = state.challengeGames.find((game: any) => game.title === title);
            }
            if (!game) {
                game = state.affiliateGames.find((game: any) => game.title === title);
            }

            return game;
        },

        gameByPathname: (state: any) => (pathname: string) => {
            let game = state.officialGames.find((game: any) => game.pathname === pathname);
            if (!game) {
                game = state.challengeGames.find((game: any) => game.pathname === pathname);
            }
            if (!game) {
                game = state.affiliateGames.find((game: any) => game.pathname === pathname);
            }

            return game;
        },

        isSearchGame: (state: any) => {
            return state.isSearchGame;
        },
        searchGames: (state: any) => {
            return state.searchGames;
        },
        isOfficialPage: (state: any) => {
            return state.isOfficialPage;
        },
        game: (state: any) => {
            return state.game;
        },
    },

    mutations: {
        // games : ( state : any, payload : any ) => {
        //     state.games = payload;
        // },
        // loadedGames : ( state : any, payload : any ) => {
        //     state.loadedGames = payload;
        // },

        officialGames: (state: any, payload: any) => {
            state.officialGames = payload;
        },
        challengeGames: (state: any, payload: any) => {
            state.challengeGames = payload;
        },
        affiliateGames: (state: any, payload: any) => {
            state.affiliateGames = payload;
        },
        officialLoadState: (state: any, payload: any) => {
            state.officialLoadState = payload;
        },
        challengeLoadState: (state: any, payload: any) => {
            state.challengeLoadState = payload;
        },
        affiliateLoadState: (state: any, payload: any) => {
            state.affiliateLoadState = payload;
        },

        isSearchGame: (state: any, payload: any) => {
            state.isSearchGame = payload;
        },
        searchGames: (state: any, payload: any) => {
            state.searchGames = payload;
        },
        isOfficialPage: (state: any, payload: any) => {
            state.isOfficialPage = payload;
        },
        game: (state: any, payload: any) => {
            state.game = payload;
        },
    },
    actions: {
        clearGames: async (context: any, category: number = 1) => {
            const gameKeys = ['challengeGames', 'officialGames', 'affiliateGames'];
            const stateKeys = ['challengeLoadState', 'officialLoadState', 'affiliateLoadState'];
            const gameKey = gameKeys[category];
            const stateKey = stateKeys[category];

            context.commit(gameKey, []);
            context.commit(stateKey, GameLoadState.none);
        },

        loadGames: async (context: any, { category, sort, dir }) => {

            //dir = asc, desc

            const gameKeys = ['challengeGames', 'officialGames', 'affiliateGames'];
            const stateKeys = ['challengeLoadState', 'officialLoadState', 'affiliateLoadState'];
            const gameKey = gameKeys[category];
            const stateKey = stateKeys[category];

            if (context.state[stateKey] === GameLoadState.none ||
                context.state[stateKey] === GameLoadState.loaded) {

                const limit = context.state.limit;
                const offset = context.state[gameKey].length;
                context.commit(stateKey, GameLoadState.loading);

                const result = await Vue.$api.games(limit, offset, category, sort, dir);
                if (!result || result.error) {
                    result && result.error && console.error(result.error);
                    context.commit(gameKey, []);
                    context.commit(stateKey, GameLoadState.complete);
                    return [];
                }

                let { games } = result;
                let arr = context.state[gameKey].slice();
                arr = arr.concat(games);

                context.commit(gameKey, arr);

                if (games.length < limit) {
                    context.commit(stateKey, GameLoadState.complete);
                }
                else {
                    context.commit(stateKey, GameLoadState.loaded);
                }

                return arr;
            }
            else if (context.state[stateKey] === GameLoadState.loading) {
                await function () {
                    return new Promise((resolve, reject) => {
                        function wait() {
                            if (context.state[stateKey] === GameLoadState.loading) {
                                setTimeout(wait, 500);
                            } else {
                                return resolve(null);
                            }
                        }
                        wait();
                    })
                }
            }
            return context.state[gameKey];
        },

        // loadingGame : async (context : any) => {
        //     return new Promise((resolve, reject) => {
        //         function wait() {
        //             if ( !context.state.loadedGames ) {
        //                 setTimeout(wait, 500);
        //             } else {
        //                 return resolve(context.getters.loginState);
        //             }
        //         }
        //         wait();
        //     })
        // }
    }
}

