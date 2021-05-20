<template>
    <div class="pg-container py-5 bg-light" >
        <div class="container">
            <div class="pg-breadcrumb">
                <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
            </div>
            <h1 id="pg-tit">News Details</h1>
            <ArticleDetails 
                :articleImg="articleDetails.urlToImage"
                :articleCategory="articleDetails.category"
                :articleTitle="articleDetails.title"
                :articleContent="articleDetails.content"
            />
        </div>
    </div>
    
</template>

<script>
// @ is an alias to /src
import ArticleDetails from '@/components/ArticleDetails.vue'
export default {
  name: 'newsDetails',
  components: {
    ArticleDetails,
  },
  data(){
      return{
          articleDetails: [],
          categories: [],
          breadcrumbItems: [
            {
                text: 'Home',
                href: '/'
            },
            {
                text: 'News',
                href: '/news'
            },
            {
                text: 'News Details',
                active: true
            }
        ]
      }
  },
  mounted: function (){
    this.axios.get('/newsapi.json').then((response) => {
        this.articleDetails = response.data.articles.find((article) => parseInt(article.id) === parseInt(this.$route.params.id));
        this.categories = response.data.sourceCategory;
        this.articleDetails.category = this.returnCategoryName(this.articleDetails.sourceID);
    })    
  },
  methods: {
      returnCategoryName(catId){
          let categoryObj =  this.categories.find((category) => category.id === catId);  
          return categoryObj.name;
      },
  }
  
}
</script>