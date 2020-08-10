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
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <ckeditor :config="editorConfig" :editor="editor"></ckeditor>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <div class="text-center">   
                                <md-button class="md-raised md-primary">發布</md-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
let ClassicEditor
if (process.browser) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
}

export default {
    data: function(){
        return {
            article_title: '',
            is_private: '',
            selections: [], //tags
            editor: ClassicEditor,
            //更多設定：https://ithelp.ithome.com.tw/articles/10211769
            editorConfig: {
                // 客製化設定

            }
        }
    },
    created(){
    }
}
</script>

<style scoped lang="scss">
    :root {
    --ck-image-style-spacing: 1.5em;
    }
    .image-style {
    .image-style-side,
    .image-style-align-left,
    .image-style-align-center,
    .image-style-align-right {
        max-width: 50%;
    }

    .image-style-side {
        float: right;
        margin-left: var(--ck-image-style-spacing);
    }

    .image-style-align-left {
        float: left;
        margin-right: var(--ck-image-style-spacing);
    }

    .image-style-align-center {
        margin-left: auto;
        margin-right: auto;
    }

    .image-style-align-right {
        float: right;
        margin-left: var(--ck-image-style-spacing);
    }
    }
</style>