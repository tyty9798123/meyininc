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
            <md-button class="md-raised md-primary" @click="$router.push('/articles/new')">新增文章</md-button>
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
                        <md-button class="md-raised w-100">最近</md-button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selectedTags: [],
            selectedMonth: [],
            is_public: ''
        }
    }
}
</script>
<style scoped>

</style>