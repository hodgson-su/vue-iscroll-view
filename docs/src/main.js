import Vue from 'vue'
import IScrollView from '../../index.js'
import IScroll from 'iscroll'

import App from './App.vue'

Vue.use(IScrollView, IScroll)

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)

/* eslint-disable no-new */
new Vue({
  el: rootNode,
  render (h) {
    return h(App)
  }
})
