<template>
    <div>
        <div class="container">
            <div class="text-center">
            <md-card>
                <md-card-media>
                    <img src="https://vuematerial.io/assets/examples/card-image-1.jpg" alt="People">
                </md-card-media>

                <md-card-header>
                    <div class="md-title">About Me</div>
                    <br>
                    <div class="md-subhead">Programmer, Mentor, Long term value Investor</div>
                </md-card-header>
                <md-card-content>
                    大家好！我是劉謹賢，目前是北部某科技大學資訊管理系的大四學生，我的興趣是寫程式、雲端資訊教育以及投資理財。
                </md-card-content>
            </md-card>
            </div>
        </div>
        <hr>
        <md-tabs>
            <md-tab md-label="資訊技術" exact>
                <p>自從進入大學後，我花了兩年多的時間積極學習資訊技術，以自主學習為主。我熱愛Programming，也會定期學習新的資訊技能，使自己有足夠的競爭力去面對未來的挑戰。</p>
                <p>因為這段時間學習資訊技術的關係，很幸運，我尋找到了自我價值、做真正喜歡的事情，原本我並不是一個很有自信的人，但我相信從此開始，能為我的未來鋪路，學習更多技能，甚至學習其他領域的知識。</p>
                <hr>
                <p>前端（Front-end）：</p>

                <ul>
                    <li>CSS: ElementUI, Material UI Design（不是很強）, Bootstrap</li>
                    <li>JS: 熟ES6語法, 主要以 Vue.js(Vue-Cli, Vuex) 架構開發</li>
                    <li>使用 Webpack 進行打包、模組化開發（不是很強）</li>
                </ul>

                <p>後端（Back-end）：</p>

                <ul>
                    <li>Node.js (Express框架)</li>
                    <li>Ruby On Rails</li>
                    <li>PHP</li>
                </ul>

                <p>資料庫（Database）：</p>

                <ul>
                    <li>MySQL</li>
                    <li>MSSQL</li>
                    <li>PostgreSQL（不是很強）</li>
                    <li>MongoDB（不是很強）</li>
                </ul>

                <p>版本控制（Version Control）：</p>

                <ul>
                    <li>Git</li>
                    <li>經常性使用Github</li>
                </ul>

                <p>手機開發（Mobile）：</p>

                <ul>
                    <li>Android(Java)</li>
                    <li>iOS(Swift)（不是很強）</li>
                </ul>

                <p>作業系統（Operating System）:</p>

                <ul>
                    <li>MacOS(開發)</li>
                    <li>Ubuntu(伺服器使用)</li>
                </ul>

                <p>雲端服務：</p>

                <ul>
                    <li>VPS: Linode, Vultr</li>
                    <li>AWS(S3, EC2 Load Balacing, Auto Scaling, RDS, Cloud Front)，熟悉分散式架構</li>
                    <li>Mail: AWS SES</li>
                    <li>Others: Cloudflare(CDN)</li>
                </ul>

                <p>Web Service:</p>

                <ul>
                    <li>Apache2</li>
                    <li>Nginx</li>
                </ul>

                <p>Others：</p>

                <ul>
                    <li>Python - BeautifulSoup, Selenium</li>
                    <li>SAS EG</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                    <li>C#(Windows Form)</li>
                    <li>C++（不是很強）</li>
                </ul>

                <p>&nbsp;</p>

                <p>網頁作品：</p>

                <ul>
                    <li>電子商務網站（串接OAuth、金流）</li>
                    <li>募資網站（不是很強）</li>
                    <li>後台管理網站（Single Page, CORS, 前後端分離架構）（不是很強）</li>
                    <li>IG-Message-UI</li>
                </ul>

                <p>手機開發作品：</p>

                <ul>
                    <li>Android 聊天軟體</li>
                    <li>Android Bingo 線上遊戲（不是很強）</li>
                    <li>iOS節拍器（不是很強）</li>
                    <li>iOS影片播放APP（不是很強）</li>
                    <li>iOS購物APP（不是很強）</li>
                </ul>

                <p>C語言作品：</p>

                <ul>
                    <li>字幕檔自動產生器（不是很強）</li>
                    <li>自製簡易Web Service（不是很強）</li>
                </ul>

                <p>Desktop作品：</p>

                <ul>
                    <li>翻國旗遊戲</li>
                </ul>
            </md-tab>

            <md-tab md-label="熱愛教育">
                Pages tab
                <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
            </md-tab>

            <md-tab md-label="投資理財">
                理財是年輕人必須理解的，我上過理財投資訓練營14天，以及投資股票入門班，......未完
            </md-tab>
            
            <md-tab md-label="興趣學科">
                Posts tab
                <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
            </md-tab>
        </md-tabs>
    </div>
</template>
<script>
export default {
    head () {
        return {
            title: '自我介紹'
        }
    },
}
</script>
<style lang="scss" scoped>
    .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
  }

</style>