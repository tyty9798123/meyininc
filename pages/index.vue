<template>
    <div>
        <v-app>
            <v-alert type="info">
            I'm an info alert.
            </v-alert>
            <div class="mt-5">
                <v-btn small>Normal</v-btn>
            </div>
            <div class="mt-5">
                <v-btn small color="primary">Primary</v-btn>
            </div>
        </v-app>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {    
  async asyncData () {
    //let { data } = await axios.get('/api/users')
    //return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>

</style>
