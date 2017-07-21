<template>
  <div class="contacts-view">
    <div class="list-block">
      <div class="list-group">
        <ul>
          <li>
            <a href="#" class="item-link item-content">
              <div class="item-media"><i class="btn-col btn-xpy"></i></div>
              <div class="item-inner">
                <div class="item-title">新的朋友</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="item-link item-content">
              <div class="item-media"><i><img class="iconimg"  src="http://lorempixel.com/68/68/people/12"/></i></div>
              <div class="item-inner">
                <div class="item-title">群聊</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="item-link item-content">
              <div class="item-media"><i ><img class="iconimg"  src="http://lorempixel.com/68/68/people/12"/></i></div>
              <div class="item-inner">
                <div class="item-title">标签</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="item-link item-content">
              <div class="item-media"><i><img class="iconimg"  src="http://lorempixel.com/68/68/people/12"/></i></div>
              <div class="item-inner">
                <div class="item-title">公众号</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="list-group" v-for="(group,key) in contacts">
        <ul>
          <li class="list-group-title">{{key}}</li>
          <li v-for="contact in group ">
            <a href="#" class="item-link item-content">
              <div class="item-media"><i><img class="iconimg"  :src="contact.url"/></i></div>
              <div class="item-inner">
                <div class="item-title">{{contact.name}}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        contacts: {
          'A': [
            {
              name: '阿大',
              url: 'http://lorempixel.com/68/68/people/1'
            },
            {
              name: '阿二',
              url: 'http://lorempixel.com/68/68/people/2'
            },
            {
              name: '阿三',
              url: 'http://lorempixel.com/68/68/people/3'
            }
          ],
          'B': [
            {
              name: '比尔盖茨',
              url: 'http://lorempixel.com/68/68/people/4'
            }, {
              name: '比尔盖茨',
              url: 'http://lorempixel.com/68/68/people/5'
            }],
          'C': [
            {
              name: '曹操',
              url: 'http://lorempixel.com/68/68/people/6'
            },
            {
              name: '曹仁',
              url: 'http://lorempixel.com/68/68/people/7'
            },
            {
              name: '曹植',
              url: 'http://lorempixel.com/68/68/people/8'
            },
            {
              name: '曹爽',
              url: 'http://lorempixel.com/68/68/people/9'
            }
          ],
          'D': [
            {
              name: '大大泡泡糖',
              url: 'http://lorempixel.com/68/68/people/10'
            }
          ],
          'E': [
            {
              name: '二丫子',
              url: 'http://lorempixel.com/68/68/people/0'
            }
          ]
        }
      }
    }
  }
</script>
<style>
  .iconimg{
    width: 40px;
    height: 40px;
  }
  .iconblue {
    color: cornflowerblue;
    font-size: 30px;
  }
</style>
