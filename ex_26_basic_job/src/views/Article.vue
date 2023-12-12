<template>
  <div class="article-page">
    <div
      v-for="(article, index) in articleList"
      :key="article.id"
      @click="$router.push(`/detail/${article.id}`)"
      class="article-item"
      >
      <div class="head">
        <img :src="article.creatorAvatar" :alt="index" />
        <div class="con">
          <p class="title">{{ article.stem }}</p>
          <p class="other">{{ article.creatorName }} | {{ article.createdAt }}</p>
        </div>
      </div>
      <div class="body">
         {{ article.content }}
      </div>
      <div class="foot">点赞 {{ article.likeCount }} | 浏览 {{ article.views }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
export default {
  name: 'ArticlePage',
  data () {
    return {
      articleList: []
    }
  },
  async created() {
    // 发送 ajax 请求, 获取首页文章列表数据
    const res = await axios({
      url: "https://mock.boxuegu.com/mock/3083/articles",
      method: "get"
    });
    // 渲染数据
    this.articleList = res.data.result.rows;
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
