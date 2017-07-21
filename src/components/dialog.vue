  <template>
  <f7-page class="message-page">
    <f7-navbar :title="dialog.name" back-link=" " sliding>
      <div class="right">
        <a :href="toUser(dialog.id)" class="link">
          <i class="iconfont icon-my hearder-icon"></i>
        </a>
      </div>
    </f7-navbar>
    <f7-messages>
      <f7-message v-for="(message, index) in dialog.messages"
                  :text="message.text"
                  :avatar="message.avatar"
                  :type="message.type"
                  :day="message.day"
                  :time="message.time"
                  @click="onClick"
                  @click:text="onTextClick"
                  @click:name="onNameClick"
                  @click:avatar="onAvatarClick"
                  :class="message.last ? 'dialog last' : 'dialog'"
      ></f7-message>
    </f7-messages>
    <f7-messagebar placeholder="Message" send-link="发送" @submit="onSubmit" class="dialog-msgbar"></f7-messagebar>
  </f7-page>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        dialog: state => state.dialog
      })
    },
    mounted () {
      this.$store.dispatch('getDialog', {chatId: this.$route.params.chatId})
    },
    data: function () {
      return {
        avatar: '/static/img/pyq-tx.png'
      }
    },
    methods: {
      toUser (id) {
        return '/dia_detail/' + id
      },
      onClick: function (event) {
      },
      onAvatarClick: function () {
      },
      onTextClick: function () {
      },
      onNameClick: function () {
      },
      onSubmit: function (text, clear) {
        if (text.trim().length === 0) return
        this.dialog.messages.push({
          avatar: this.avatar,
          text: text,
          date: (function () {
            var now = new Date()
            var hours = now.getHours()
            var minutes = now.getMinutes()
            return hours + ':' + minutes
          })()
        })
        clear()
      }
    }
  }
</script>
<style>
  .dialog {
    margin-bottom: 15px;
    font-size: 15px;
  }

  .dialog .message-avatar {
    opacity: 1;
  }

  .last {
    bottom: 1000px;
  }

  .message-text {
    font-size: 15px;
  }

  .dialog-msgbar {
    height: 7%;
  }

  .page-content {
    height: 93%;
  }
</style>
