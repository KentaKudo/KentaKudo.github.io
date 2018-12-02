import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
require('jquery.easing')
require('bootstrap')

require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')
require('bootstrap/dist/css/bootstrap.css')

Vue.prototype.jquery = jquery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
