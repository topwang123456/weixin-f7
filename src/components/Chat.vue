<template>
  <div class="chat-view">
    <f7-list media-list contacts>
      <f7-list-item swipeout @swipeout:deleted="onSwipeoutDeleted"
                    v-for="chat in chats"
                    :title="chat.title"
                    :media="'<div class=\'noticeimg\' data-num='+ chat.noticenum + '><img class=\'noticeimg\' src='+chat.imgUrl+ '></div>'"
                    :link="'/dialog/'+ chat.id"
                    :text="chat.text"
                    :after="chat.lastTime"
      >
        <f7-swipeout-actions>
          <f7-swipeout-button close color="blue">标为未读</f7-swipeout-button>
          <f7-swipeout-button delete>删除</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        chats: state => state.chats
      })
    },
    mounted () {
      this.$store.dispatch('getChats')
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>
<style>
  .pages {
    background-color: transparent;
  }

  .list-block {
    margin-top: 0px;
  }

  .noticeimg {
    width: 60px;
    height: 60px;
    background-color: #333;
    color: #fff;
    position: relative;
  }

  .noticeimg:after {
    content: attr(data-num);
    line-height: 17px;
    font-size: 10px;
    width: 15px;
    height: 15px;
    text-align: center;
    border-radius: 50%;
    background-color: #ff3b30;
    position: absolute;
    top: -10px;
    right: -10px;
  }
</style>
