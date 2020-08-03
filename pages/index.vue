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
      <div class="col-12 col-md-6">
        <md-toolbar>
          <h3 class="md-title">
            <nuxt-link to='/author_introduction'>
            <img src="~/assets/img/info_introduce.png" width="40"> 
              作者自我介紹
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
