import axios from 'axios'
import * as types from './mutation-types'

export function getChats ({commit}) {
  axios.get('/chats').then(res => {
    let chats = res.data
    commit(types.INIT_CHATS, {
      chats
    })
  })
}
export function getDialog ({commit}, chatId) {
  axios.get('/dialog/' + chatId.chatId).then(res => {
    let dialog = res.data
    commit(types.INIT_DIALOG, {
      dialog
    })
  })
}
export function getDialogList ({commit}, chatId) {
  axios.get('/dialogList/' + chatId.chatId).then(res => {
    let dialogList = res.data
    commit(types.DIALOG_LIST, {
      dialogList
    })
  })
}
