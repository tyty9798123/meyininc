<template>
<div>
    <div class="container">
        <h1 style="font-size: 32px;">[計算機網路] 31_CSMA-CA協議</h1>
        <hr>
        <span>作者: 管理員(admin)</span>
        <hr>
        <div class="text-left">
            <span>文章發表日期: 2020/04/03 19:00:22</span>
            <br>
            <span>最後更新日期: 2020/04/03 19:00:22</span>
        </div>
        <hr>
        <div v-html="content" style="word-break: break-all;">
        </div>
        <md-chips v-model="tags" md-static></md-chips>
        <md-field>
            <label>留言</label>
            <md-textarea v-model="commentText"></md-textarea>
        </md-field>
    </div>

</div>
</template>

<script>
export default {
    data: function(){
        return {
            title: '',
            content: `
<p><a href="https://www.bilibili.com/video/BV19E411D78Q?p=31">https://www.bilibili.com/video/BV19E411D78Q?p=31</a></p>

<p><img alt="" src="https://meyinweb-cdn.s3-ap-northeast-1.amazonaws.com/uploads/htjfmnt92w.png" style="width: 600px; height: 364px;" /></p>

<hr />
<p>解決隱蔽站問題：</p>

<p><img alt="" src="https://meyinweb-cdn.s3-ap-northeast-1.amazonaws.com/uploads/r9orlt5mbb.png" style="width: 600px; height: 240px;" /></p>

<hr />
<p><img alt="" src="https://meyinweb-cdn.s3-ap-northeast-1.amazonaws.com/uploads/01as6bf8wz.png" style="width: 600px; height: 224px;" />&nbsp;</p>`,
            tags: [
                'New York',
                'Amsterdam',
                'Tokyo',
                'Rome'
            ],
            commentText: ''
        }
    }
}
</script>

<style>
    
</style>