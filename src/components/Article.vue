<template>
    <div class="col-md-4">
        <div class="article-card">
          <b-card
            :img-src="articleImg"
            img-alt="Image"
            img-top
            tag="article"
          >
          <div class="card-actions">
            <a><font-awesome-icon :icon="['far', 'heart']"/></a>
            <a><font-awesome-icon :icon="['fas', 'share-alt']"/></a>
          </div>
          <div class="card-title">
            <router-link :to="'/newsDetails/' + articleRoute">
                  {{articleTitle}}
            </router-link>
          </div>
            <div class="card-categories">
              {{articleCategory}}
            </div>
            <b-card-text>
              {{articleDescription}}
            </b-card-text>
            <b-card-text class="card-date">
              <span class="text-secondary mr-2"><font-awesome-icon :icon="['far', 'calendar']"/></span> {{articleDate}}
            </b-card-text>

          </b-card>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Article',
  props: {
    articleImg: String,
    articleTitle: String,
    articleCategory: String,
    articleDescription: String,
    articleDate: String,
    articleRoute: Number,
    

  }
}
</script>

