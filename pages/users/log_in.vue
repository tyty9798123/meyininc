<template>
    <div>
        <div class="container">
            <md-field>
                <label>帳號</label>
                <md-input v-model="account" @keyup.enter="login"></md-input>
            </md-field>
            <md-field>
                <label>密碼</label>
                <md-input type="password" v-model="password" @keyup.enter="login"></md-input>
            </md-field>
            <md-button class="md-dense md-raised md-primary" @click="login();">登入</md-button>
        </div>
        <md-dialog-alert
        :md-active.sync="show_message"
        :md-content="login_message"
        md-confirm-text="Close" />
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            account: '',
            password: '',
            show_message: false,
            login_message: '',
        }
    },
    created() {
    },
    methods: {
        async login() {
            let vm = this;
            let account = vm.account, password = vm.password;
            let response = await vm.$axios.$post('/api/users/login', {account, password} );
            let { success } = response;
            if ( success ) {
                vm.login_message = "登入成功";
                vm.show_message = true;
                vm.$router.go(-1);
            }
            else{
                vm.login_message =  response.message;
                vm.show_message = true;
            }
        }
    }
}
</script>

<style scoped>
    
</style>