import Vue from 'vue'
import Vuex from 'vuex'


const moduleFiles = require.context('./modules', true, /\.ts$/);
const modules = moduleFiles.keys().reduce((modules: any, modulePath: string) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = moduleFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});


Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    strict: false,
})
