import Vue from 'vue';

export default {
    state: {
        gameList: [],
    },
    getters: {

        gameList: (state: any) => {
            return state.gameList;
        },
    },

    mutations: {

        gameList: (state: any, payload: any) => {
            state.gameList = payload;
        },
    },
    actions: {
        // getGameList: async (context: any, { userUid, user }) => {
        //     let games: any[] = [];
        //     const result = await Vue.$api.channel(userUid);

        //     if (!result || result.error) {
        //         console.error(result);
        //     } else {
        //         const { target } = result;
        //         user = target;
        //         const { dev_games } = user;
        //         if (dev_games) {
        //             const arr = [];
        //             for (let i = 0; i < dev_games.length; i++) {
        //                 dev_games[i].user = user;
        //                 if (dev_games[i].activated) {
        //                     arr.push(dev_games[i]);
        //                 }
        //             }
        //             games = arr;
        //             context.commit("gameList", games);
        //         }

        //         // if (games.length > 5) {
        //         //     this.games = this.games.splice(0, 5);
        //         // }
        //         // // this.email = this.user.email;
        //         // // this.description = this.user.profile.description;

        //         // document.title = this.user.name;
        //     }
        // }

    }
}

