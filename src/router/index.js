import chats from '../components/Chat.vue'
let routes = [{
  path: '/chat',
  component: chats
}, {
  path: '/dialog/:chatId/',
  component: require('../components/dialog.vue')
}, {
  path: '/pengyouquan/',
  component: require('../components/pengyouquan.vue')
}, {
  path: '/dia_detail/:chatId/',
  component: require('../components/dialog-detail.vue')
}]
export default routes
