export default {
    state: {
        hashtagList: [],
        userTagList: []
    },
    getters: {
        hashtagList(state: any) {
            return state.hashtagList;
        },
        userTagList(state: any) {
            return state.userTagList;
        }
    },

    mutations: {
        hashtagList(state: any, payload: any) {
            state.hashtagList.push(payload);
        },
        userTagList(state: any, payload: any) {
            state.userTagList.push(payload);
        },
    },
    actions: {
        resetHashtag(context: any) {
            context.state.hashtagList = [];
            context.state.userTagList = [];
        }
    }
}

