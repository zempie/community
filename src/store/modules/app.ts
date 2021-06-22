export default {
    state: {
        supportEmail: process.env.VUE_APP_SUPPORT_EMAIL
    },
    getters: {
        supportEmail(state: any) {
            return state.supportEmail;
        },
    },

    mutations: {},
    actions: {}
}

