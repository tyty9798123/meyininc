<template>
    <div>
        <Navbar />
    </div>
</template>

<script>
import axios from '~/plugins/axios'
import Navbar from '~/components/Navbar.vue'

export default {    
  components: {
    Navbar,
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

</style>
