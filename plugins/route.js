export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    //do something to validate
    if( to["name"] == 'users-log_in' ){
      app.$axios.post('/api/users/is_login').then(data => {
        if (data['data']['is_login']){
          app.router.go(-1);
        }
      })
    }
    next();
  })
}