<template>
    <div>

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

</style>
