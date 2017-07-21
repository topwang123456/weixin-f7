<template>
  <f7-page>
    <f7-navbar v-if="!dialoginfo.isGroup" back-link=" " sliding :title="$t('dialog_detail')">
    </f7-navbar>
    <f7-navbar v-else back-link=" " sliding :title="$t('dialog_detail')+'(' + dialoginfo.memberNum + ')'">
    </f7-navbar>
    <div class="detail_list">
      <!-- 聊天用户列表 -->
      <div class="detail_list_item" v-for="member in dialoginfo.members" @click="toUser(member.mid)">
        <img :src="member.imgUrl" class="item_img"/>
        <span class="item_name" v-if="member.name.length > 3">{{substr(member.name)}}</span>
        <span class="item_name" v-else>{{member.name}}</span>
      </div>
    </div>
    <div class="clearfix"></div>
    <f7-list class="dialog_item_list">
      <f7-list-group v-if="dialoginfo.isGroup">
        <f7-list-item :title="$t('group_name')" link="#">{{dialoginfo.title}}</f7-list-item>
        <f7-list-item :title="$t('group_qr')" link="#"><i class="iconfont icon-erweima"></i></f7-list-item>
        <f7-list-item :title="$t('group_announcement')" link="#">{{dialoginfo.announcement}}</f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item :title="$t('lookforRecord')" link="#"></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item :title="$t('noDisturb')"><f7-input type="switch" id="disturbId" name="noDisturb" class="item_switch" @change="onChange" v-model="dialoginfo.noDisturb"></f7-input></f7-list-item>
        <f7-list-item :title="$t('stick')"><f7-input type="switch" id="stickId" name="isStick" class="item_switch" @change="onChange" v-model="dialoginfo.isStick"></f7-input></f7-list-item>
        <f7-list-item :title="$t('saceTo')" v-if="dialoginfo.isGroup"><f7-input type="switch" id="saveToId" name="saveTo" class="item_switch" @change="onChange" v-model="dialoginfo.saveTo"></f7-input></f7-list-item>
      </f7-list-group>
      <f7-list-group v-if="dialoginfo.isGroup">
        <f7-list-item :title="$t('nickName')" >{{dialoginfo.nickName}}</f7-list-item>
        <f7-list-item :title="$t('showNickName')"><f7-input type="switch" id="showNickNameId" name="showNickName" class="item_switch" @change="onChange" v-model="dialoginfo.showNickName"></f7-input></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item :title="$t('lookforRecord')" link="#"></f7-list-item>
      </f7-list-group>
    </f7-list>
  </f7-page>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        dialoginfo: state => state.dialogList
      })
    },
    mounted () {
      this.$store.dispatch('getDialogList', {chatId: this.$route.params.chatId})
    },
    data: function () {
      return {}
    },
    methods: {
      toUser: function (mid) {
        console.log(mid)
      },
      substr: function (name) {
        return name.substring(0, 2) + '...'
      },
      onChange: function (event) {
        console.log(event.target.name)
        console.log(this.$$('#' + event.target.id).prop('checked'))
      }
    }
  }
</script>
<style>
  .detail_list {
    margin-top: 20px;
    background-color: white;
    width: 100%;
    height: auto;
    float: left;
    padding-bottom: 20px;
  }

  .detail_list .detail_list_item {
    width: 50px;
    height: 60px;
    margin-top: 20px;
    margin-left: 20px;
    display: inline-block;
    text-align: center;
  }

  .detail_list .detail_list_item .item_img {
    width: 48px;
    height: 50px;
  }

  .detail_list .detail_list_item .item_name {
    margin: 0 auto;
  }

  .dialog_item_list .list-block-group{
    margin-top: 30px;
  }
  .dialog_item_list .item_switch {
    width: 15%;
    float: right;
  }
</style>
