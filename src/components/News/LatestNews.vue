<template>
  <section id="latest-news" class="my-4">
    <div class="articles-container">
        <div class="container">
            <h3 class="font-weight-bold">Latest News</h3>
            <div class="row">
                <Article 
                    v-for="article in articles" v-bind:key="article.id" 
                    :articleImg="article.urlToImage"    
                    :articleTitle="article.title"
                    :articleCategory="article.category"
                    :articleDescription="article.description"
                    :articleDate="article.publishedAt"
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
            let catName = this.returnArticleCategoryName(article.sourceID, this.categories);
            article.category = catName;
        });
        
    })
    
  }
}
</script>

