<template>
    <div>
      <div class="text-center title">
        <b>
          <font size="6">B</font>
          <font size="4">ERKSHIRE </font>
          <font size="6">H</font>
          <font size=4>ATHAWAY </font>
          <font size="2">INC.<br>3555 Farnam Street<br>Omaha, NE 68131</font>
          <br>Official Home Page
        </b>
      </div>

      <hr>
      <div class="row">
        <div class="col-12 col-md-6 mt-2">
          <md-toolbar class="md-transparent">
            <h3 class="md-title">
              <nuxt-link to='/author_introduction'>
              <img src="~/assets/img/info_introduce.png" width="40"> 
                作者自我介紹
              </nuxt-link>
            </h3>
          </md-toolbar>
        </div>
        <div class="col-12 col-md-6 mt-2">
          <md-toolbar class="md-transparent">
            <h3 class="md-title">
              <nuxt-link to='/article'>
              <img src="~/assets/img/article.png" width="40"> 
                文章
              </nuxt-link>
            </h3>
          </md-toolbar>
        </div>
        <div class="col-12 col-md-6 mt-2">
          <md-toolbar class="md-transparent">
            <h3 class="md-title">
              <nuxt-link to='/reminding'>
              <img src="~/assets/img/bells.png" width="40"> 
                會員提醒事項
              </nuxt-link>
            </h3>
          </md-toolbar>
        </div>
        <div class="col-12 col-md-6 mt-2">
          <md-toolbar class="md-transparent">
            <h3 class="md-title">
              <nuxt-link to='/portfolio'>
              <img src="~/assets/img/portfolio.jpeg" width="40"> 
                作品集
              </nuxt-link>
            </h3>
          </md-toolbar>
        </div>
        <div class="col-12 col-md-6 mt-2">
          <md-toolbar class="md-transparent">
            <h3 class="md-title">
              <nuxt-link to='/users/log_in'>
              <img src="~/assets/img/login.png" width="40"> 
                管理員登入
              </nuxt-link>
            </h3>
          </md-toolbar>
        </div>
      </div>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {    
  components: {
  },
  async asyncData () {
    //let { data } = await axios.get('/api/users')
    //return { users: data }
  },
  head () {
    return {
      title: 'MeYin 線上學習筆記'
    }
  }
}
</script>

<style scoped>
  .title{
    color: #000080;
  }
</style>
