<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <md-field>
                        <label>文章名稱</label>
                        <md-input v-model="article_title"></md-input>
                    </md-field>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <md-switch v-model="is_private">設定為私人文章</md-switch>
                        </div>
                        <div class="col-12 col-md-8">
                            <md-field>
                                <label for="movies">標籤</label>
                                <md-select v-model="selections" name="movies" id="movies" multiple>
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
                    </div>
                </div>
                <div class="row">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            article_title: '',
            is_private: '',
            selections: [] //tags
        }
    },
}
</script>

<style scoped>
    
</style>