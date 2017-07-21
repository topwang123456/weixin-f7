<template>
  <f7-page pull-to-refresh @ptr:refresh="onRefresh" id="pyq">
    <f7-navbar back-link=" " title="朋友圈" sliding>
      <div class="right">
        <a href="/sousuo/" class="link" data-animate-pages="false" data-ignore-cache="true">
          <i class="iconfont icon-xiangji hearder-icon"></i>
        </a>
      </div>
    </f7-navbar>
    <div class="pyq_fm" @click="changePyqbj">
    </div>
    <div class="pyq_tx" @click="toMyPhotos"></div>
    <div class="list-block  pyq-list">
      <ul>
        <li class="item-content" style="align-items: baseline">
          <div class="item-media"><i><img class="iconimg" src="/static/img/sanpang.jpg"/></i></div>
          <div class="item-inner">
            <div class="item-title pyq-title"><a href="/xxx">三胖</a>
              <div class="pyq-content">
                <div>哈哈哈，看我帅不帅</div>
                <img src="/static/img/sanpang.jpg" @click.stop="openPhotoBrowser('/static/img/sanpang.jpg')"/>
                <div class="content-bottom">
                  <span class="pyq-time">32分钟前</span>
                  <a href="#" @click="show = !show"><i class="iconfont icon-gengduo gengduo ripple"></i></a>
                  <transition name="slide-fade">
                    <div class="pl_div" v-show="show">
                      <div class="pl_left">
                        <i class="iconfont icon-02 py-font"> 赞</i>
                      </div>
                      <div class="pl_right">
                        <i class="iconfont icon-pinglun py-font"> 评论</i>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="item-content" style="align-items: baseline">
          <div class="item-media"><i><img class="iconimg" src="/static/img/hujintao.png"/></i></div>
          <div class="item-inner">
            <div class="item-title"><a href="/xxx">胡主席</a>
              <div class="pyq-content">
                <img src="/static/img/sanpang.jpg"/>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </f7-page>
</template>
<script>
  export default {
    mounted: function () {
      window.f7.pullToRefreshTrigger()
    },
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      onRefresh: function () {
        setTimeout(function () {
          window.f7.pullToRefreshDone()
        }, 1000)
      },
      changePyqbj: function () {
        var buttons1 = [
          {
            text: this.$t('changePyqbj')
          }
        ]
        var buttons2 = [
          {
            text: this.$t('cancel'),
            color: 'red'
          }
        ]
        var groups = [buttons1, buttons2]
        window.f7.actions(groups)
      },
      toMyPhotos: function () {
        this.$f7.mainView.router.load({url: '/dialog/'})
      },
      openPhotoBrowser: function (url) {
        let pb = this.$f7.photoBrowser({
          zoom: 400,
          theme: 'dark',
          photos: [url],
          navbar: false,
          toolbar: false,
          onClick: function (swiper, event) {
            pb.close()
          }
        })
        pb.open()
      }
    }
  }
</script>
<style>
  .pyq_fm {
    width: 100%;
    height: 200px;
    background: url("/static/img/bg-login.jpg");
  }

  .pyq_tx {
    background: url(/static/img/pyq-tx.png) no-repeat;
    width: 100px;
    height: 100px;
    top: 200px;
    right: 10px;
    position: absolute;
    z-index: 1000;
  }

  .pyq-list {
    margin-top: 70px;
  }

  .pyq-list ul {
    background: #efeff4;
  }

  .pyq-list .pyq-content {
    width: 100%;
  }

  .pyq-list .pyq-content img {
    margin-right: 10px;
    margin-top: 5px;
    width: 100px;
    height: 100px;
  }

  .pyq-title {
    width: 100%;
  }

  .pyq-title .content-bottom {
    width: 100%;
    margin-top: 5px;
  }

  .pyq-title .content-bottom .pyq-time {
    font-size: 10px;
  }

  .pyq-title .content-bottom .gengduo {
    color: #71869c;
    float: right;
  }

  .pyq-title .content-bottom .pl_div {
    float: right;
    margin-right: 10px;
    background-color: #2c3e50;
    color: white;
    width: 150px;
    height: 30px;
    text-align: center;
  }

  .pyq-title .content-bottom .pl_div .pl_left {
    float: left;
    width: 50%;
    vertical-align: middle;
    line-height: 30px
  }

  .pyq-title .content-bottom .pl_div .pl_right {
    float: right;
    width: 50%;
    vertical-align: middle;
    line-height: 30px
  }

  .py-font {
    font-weight: 100;
    font-size: 14px;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
