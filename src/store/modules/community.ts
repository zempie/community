import Vue from 'vue'

export default {
    state: {
        communityList: [],
    },
    getters: {
        communityList(state: any) {
            return state.communityList;
        },
    },
    mutations: {
        communityList(state: any, payload: any) {
            state.communityList = payload;
        },
    },
    actions: {

    },
}
