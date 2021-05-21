<template>
    <div>
        <article id="article-details" class="article-card">
            <b-card
            :img-src="articleImg"
            img-alt="Image"
            img-top
            tag="article"
          >

            <div class="card-categories">
              {{articleCategory}}
            </div>
            <div class="card-title-container">
                <div class="card-title">
                    {{articleTitle}}
                </div>   
                <div class="card-actions">
                    <a><font-awesome-icon :icon="['far', 'heart']"/></a>
                    <a><font-awesome-icon :icon="['fas', 'share-alt']"/></a>
                </div> 
            </div>    
          
            
            <b-card-text>
              {{articleContent}}
            </b-card-text>

          </b-card>
        </article>
        <related-articles />
    </div>
</template>

<script>
import RelatedArticles from './RelatedArticles.vue'
export default {
  components: { RelatedArticles },
  name: 'ArticleDetails',
  props: {
    articleImg: String,
    articleTitle: String,
    articleCategory: String,
    articleContent: String,
  }
}
</script>
