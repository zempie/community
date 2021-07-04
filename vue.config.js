module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,

    chainWebpack: config => {
        config.plugins.delete('case-sensitive-paths')
    },

    transpileDependencies: [
      'vuetify'
    ]
}
