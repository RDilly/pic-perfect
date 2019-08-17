import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ImageUploader from 'vue-image-upload-resize'
import vuetify from './plugins/vuetify'

Vue.use(ImageUploader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  render: function(h) {
    return h(App)
  }
}).$mount('#app')
