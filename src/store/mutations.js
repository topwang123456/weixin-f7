import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.INIT_CHATS] (state, {chats}) {
    Vue.set(state, 'chats', chats)
  },
  [types.INIT_DIALOG] (state, {dialog}) {
    Vue.set(state, 'dialog', dialog)
  },
  [types.DIALOG_LIST] (state, {dialogList}) {
    Vue.set(state, 'dialogList', dialogList)
  }
}
