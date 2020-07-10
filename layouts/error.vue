<template>
  <section class="container">
    <md-empty-state
      md-rounded
      md-icon="bubble_chart"
      md-label="頁面不存在"
      md-description="我們找不到您在尋找的頁面。">
    </md-empty-state>
    <div class="d-flex justify-content-center mt-3">
      <md-button class="md-raised md-accent" @click="goHome()">回到首頁</md-button>
    </div>
  </section>
</template>
<script>
export default {
  props: ['error'],
  methods: {
    goHome(){
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
