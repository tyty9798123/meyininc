<template>
    <div>
        <!--
            這個頁面呈現：
            Init：全部文章（可選公開文章/私人文章）
            新增文章按鈕
            管理文章按鈕
            依照年月份查詢（選項，選擇之後直接渲染）
            依照標籤查詢（選項，選擇之後直接渲染）
            時間排序（未新增）
        -->
        <div class="container">
            <md-button class="md-raised md-primary" @click="$router.push('/article/new')">新增文章</md-button>
            <md-button class="md-raised float-right" style="background: #ffc107; color: #5B5B5B;">管理文章</md-button>
            <hr>
            <div class="row">
                <div class="col-12 col-md-4">
                    <md-field>
                        <label for="tags">標籤</label>
                        <md-select v-model="selectedTags" name="tags" id="tags" multiple>
                            <md-option value="fight-club">Fight Club</md-option>
                            <md-option value="godfather">Godfather</md-option>
                            <md-option value="godfather-ii">Godfather II</md-option>
                            <md-option value="godfather-iii">Godfather III</md-option>
                            <md-option value="godfellas">Godfellas</md-option>
                            <md-option value="pulp-fiction">Pulp Fiction</md-option>
                            <md-option value="scarface">Scarface</md-option>
                        </md-select>
                    </md-field>
                </div>
                <div class="col-12 col-md-4">
                    <md-field>
                        <label for="year_month">年月份</label>
                        <md-select v-model="selectedMonth" name="year_month" id="year_month" multiple>
                        <md-option value="fight-club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                        <md-option value="godfather-ii">Godfather II</md-option>
                        <md-option value="godfather-iii">Godfather III</md-option>
                        <md-option value="godfellas">Godfellas</md-option>
                        <md-option value="pulp-fiction">Pulp Fiction</md-option>
                        <md-option value="scarface">Scarface</md-option>
                        </md-select>
                    </md-field>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center">
                        <md-radio v-model="is_public" value="public" class="md-primary">公開</md-radio>
                        <md-radio v-model="is_public" value="private">私人</md-radio>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4">
                    <md-field>
                    <label>查詢文字</label>
                    <md-input v-model="searchText"></md-input>
                    </md-field>
                </div>
                <div class="col-12 col-md-4">
                    <md-button class="md-raised md-primary w-100" @click="searchBtn()">立即查詢</md-button>
                </div>
                <div class="col-12 col-md-4">
                    <md-button class="md-raised w-100" v-text="reverseText" @click="reverseList()"></md-button>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12">
                    <md-table class="md-card">
                        <md-table-row>
                            <md-table-head>狀態</md-table-head>
                            <md-table-head>文章</md-table-head>
                            <md-table-head>作者</md-table-head>
                            <md-table-head>發文日期</md-table-head>
                        </md-table-row>
                        <md-table-row v-for="(item, index) in article_list" :key="item.id">
                            <md-table-cell>{{ item.status }}</md-table-cell>
                            <md-table-cell>
                                <md-badge v-if="item.is_recent" class="text-left md-square" md-content="New" />
                                <nuxt-link :to="`/article/${item.articleID}`">
                                    {{ item.articleTitle }}
                                </nuxt-link>
                            </md-table-cell>
                            <md-table-cell>{{ item.userName }}({{ item.userAccount }})</md-table-cell>
                            <md-table-cell>{{ item.created_at | formatDate }}</md-table-cell>
                        </md-table-row>
                    </md-table>
                    <md-progress-bar v-if="is_loading_list" md-mode="indeterminate"></md-progress-bar>
                </div>
            </div>
        </div>
        <md-dialog-alert
        :md-active.sync="show_dialog"
        :md-content="dialog_content"
        md-confirm-text="確認" />
    </div>
</template>
<script>
export default {
    asyncData({app}) {
            
    },
    data(){
        return {
            selectedTags: [],
            selectedMonth: [],
            is_public: "public",
            searchText: '',
            article_list: [],
            show_dialog: false,
            dialog_content: '',
            reverseText: '切換為: 時間最久排列',
            is_loading_list: true,
            cached_article_list: []
        }
    },
    async created() {
        var vm = this;
        let { data } = await vm.$axios.get('/api/article/get_article_list');
        if (data.success) {
            let results = data.result.map( (item, index, array) => {
                const timestamp = new Date(item.created_at).valueOf() / 1000;
                const RECENT_WEEK_SECONDS = 604800;
                let is_recent = false;
                if ( ((new Date() / 1000) - RECENT_WEEK_SECONDS) < timestamp ){
                    is_recent = true;
                }

                return {
                    ...item,
                    status: "公開",
                    is_recent
                }
            })
            vm.article_list = results;
            vm.cached_article_list = results;
            vm.is_loading_list = false;
        }
        else {

        }

    },
    methods: {
        reverseList() {
            let vm = this;
            if (vm.reverseText == '切換為: 時間最近排列'){
                vm.reverseText = '切換為: 時間最久排列';
            }
            else{
                vm.reverseText = '切換為: 時間最近排列';
            }
            vm.article_list = vm.article_list.reverse();
        },
        searchBtn(){
            let vm = this;
            let searchText = vm.searchText;
            if (searchText.trim() == ''){
                vm.article_list = vm.cached_article_list;
                return;
            }
            vm.article_list = [];
            for (let i = 0; i < vm.cached_article_list.length; i++){
                if ( vm.cached_article_list[i].articleTitle.includes(searchText) || vm.cached_article_list[i].articleContent.includes(searchText) ){
                    vm.article_list.push(vm.cached_article_list[i]);
                }
            }
        }
    },
}
</script>
<style scoped>

</style>