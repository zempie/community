import Vue, { PluginObject } from 'vue';
import axios, { AxiosInstance } from "axios";
import store from './../store';

declare module 'vue/types/vue' {
    interface Vue {
        $axios: AxiosInstance,
    }

    interface VueConstructor {
        $axios: AxiosInstance
    }
}


let config = {
    baseURL: process.env.VUE_APP_BASE_API || ""
};

const _axios = axios.create(config);


const Plugin: PluginObject<any> = {
    install: (Vue) => {
        Vue.$axios = _axios;
    },
};
Plugin.install = (Vue) => {
    Vue.$axios = _axios;
    Object.defineProperties(Vue.prototype, {
        $axios: {
            get() {
                return _axios;
            },
        },
    });
};

Vue.use(Plugin);
export default Plugin;
