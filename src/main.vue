<template>
  <div id="app">
    <div class="views">
      <div class="view navbar-through view-main">
        <div class="popover popover-links plus-menu">
          <div class="popover-inner">
            <div class="list-block">
              <ul class="plus-menu-item">
                <li><a href="#" class="list-button item-link"><i class="iconfont icon-liaotian"></i>发起群聊</a></li>
                <li><a href="#" class="list-button item-link"><i class="iconfont icon-saoyisao"></i>添加朋友</a></li>
                <li><a href="#" class="list-button item-link"><i class="iconfont icon-saoyisao"></i>扫一扫</a></li>
                <li><a href="#" class="list-button item-link"><i class="iconfont icon-saoyisao"></i>收付款</a></li>
              </ul>
            </div>
          </div>
        </div>
        <f7-page tabbar-fixed>
          <f7-tabs>
            <f7-tab id="tab1" active>
              <f7-view url="/chat/"></f7-view>
            </f7-tab>
            <f7-tab id="tab2">
              <p>Tab 2</p>
            </f7-tab>
            <f7-tab id="tab3">
              <p>Tab 3</p>
            </f7-tab>
            <f7-tab id="tab4">
              <p>Tab 4</p>
            </f7-tab>
          </f7-tabs>
          <f7-navbar title="微信" class="header">
            <div class="right">
              <a href="/sousuo" class="link external" data-animate-pages="false" data-ignore-cache="true">
                <i class="iconfont icon-sousuo hearder-icon"></i>
              </a>
              <a href="#" class="link open-popover" data-popover=".popover-links">
                <i class="iconfont icon-plus hearder-icon"></i>
              </a>
            </div>
          </f7-navbar>
          <f7-toolbar tabbar labels>
            <a href="#tab1" class="tab-link active" >
              <i class="icon iconfont icon-liaotian">
                <span class="badge bg-red">5</span>
              </i>
              <span class="tabbar-label">微信</span>
            </a>
            <a href="#tab2" class="tab-link">
              <i class="icon iconfont icon-qunzutianchong">
              </i>
              <span class="tabbar-label">联系人</span>
            </a>
            <a href="#tab3" class="tab-link">
              <i class="icon iconfont icon-faxian"></i>
              <span class="tabbar-label">发现</span>
            </a>
            <a href="#tab4" class="tab-link">
              <i class="icon iconfont icon-my"></i>
              <span class="tabbar-label">我</span>
            </a>
          </f7-toolbar>
        </f7-page>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .chatView {
    background-color: aliceblue;
  }
  .header {
    background-color: #2c3e50;
    margin-bottom: 2px;
    color: white;
  }
  .hearder-icon{
    color: white;
  }
  .plus-menu  {
    width: 200px;
  }
  .plus-menu {
    background: #2c3e50;
  }
  .plus-menu .plus-menu-item li .item-link {
    color: white;
    text-align: left;
  }
  .plus-menu .plus-menu-item li .item-link i{
    margin-right: 20px;
  }
</style>
