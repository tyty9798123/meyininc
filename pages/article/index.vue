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
                        <md-radio v-model="is_public" value="true" class="md-primary">公開</md-radio>
                        <md-radio v-model="is_public" value="Primary">私人</md-radio>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-8">
                    <md-field md-inline>
                    <label>查詢</label>
                    <md-input v-model="searchText"></md-input>
                    </md-field>
                </div>
                <div class="col-12 col-md-4">
                    <md-button class="md-raised w-100">最近</md-button>
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
                        <md-table-row>
                            <md-table-cell>公開</md-table-cell>
                            <md-table-cell><md-badge class="text-left md-square" md-content="New" /><nuxt-link to="/">[計算機網路] 31_CSMA-CA協議</nuxt-link></md-table-cell>
                            <md-table-cell>管理員</md-table-cell>
                            <md-table-cell>2020/10/06 12:50:33</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                            <md-table-cell>私人</md-table-cell>
                            <md-table-cell><md-badge class="text-left md-square" md-content="New" />[計算機網路] 31_CSMA-CA協議</md-table-cell>
                            <md-table-cell>管理員</md-table-cell>
                            <md-table-cell>2020/10/06 12:50:33</md-table-cell>
                        </md-table-row>
                    </md-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selectedTags: [],
            selectedMonth: [],
            is_public: '',
            searchText: ''
        }
    }
}
</script>
<style scoped>

</style>