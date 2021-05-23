<template>
  <section id="latest-news" class="my-4">
    <div class="articles-container">
        <div class="container">
            <div class="latest-news-header-wrap">
                <h3 class="font-weight-bold">Latest News</h3>
                <div><router-link to="/news">View All <font-awesome-icon icon="arrow-right" /></router-link></div>
            </div>
            
            <div class="row">
                <Article 
                    v-for="article in articles" v-bind:key="article.id" 
                    :articleImg="article.urlToImage"    
                    :articleTitle="article.title"
                    :articleCategory="article.category"
                    :articleDescription="article.description"
                    :articleDate="article.date"
                    :articleRoute="article.id"
                />
            </div>

            
            
        </div>
    </div>
  </section>
</template>

<script>
import Article from './Article'

export default {
  name: 'LatestNews',
  components: {
      Article
  },
  data(){
      return{
          articles: [],
          categories: [],
      }
  },
  mounted: function (){
    this.axios.get('newsapi.json').then((response) => {
        this.articles = response.data.articles.filter((article) => article.showOnHomepage === true);
        this.categories = response.data.sourceCategory;
        this.articles.forEach(article => {
            article.category = this.returnArticleCategoryName(article.sourceID, this.categories);
            article.date = this.returnArticleDate(article.publishedAt);
        });
        
    })
    
  }
}
</script>

