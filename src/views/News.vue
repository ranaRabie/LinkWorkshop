<template>
    <div class="pg-container py-5 bg-light" >
        <div class="container">
            <div class="pg-breadcrumb">
                <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
            </div>
            <h1 id="pg-tit">News</h1>
            <div class="filter-container mb-3">
                <div class="row align-items-end">
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="article-start-date">From</label>
                            <input type="date" v-model="filterStartDate" @change="filterArticles" placeholder="Select" id="article-start-date" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="article-end-date">To</label>
                            <input type="date" v-model="filterEndDate" @change="filterArticles" id="article-end-date" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="article-categories">Category</label>
                            <select @change="filterArticles()" v-model="filterCategory" id="article-categories" class="form-control">
                                <option value="" selected disabled>Select</option>
                                <option v-for="category in categories" v-bind:key="category.id" :value="category.id">{{category.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-5">
                        <div class="form-group form-attached-btn">
                            <input type="text" @change="filterArticles()" placeholder="Search by Title" v-model="filterTitle" id="article-title" class="form-control">  
                            <button @click="filterArticles()" class="btn btn-secondary text-white"><font-awesome-icon icon="search" /></button>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-1">
                        <div class="form-group">
                            <a class="text-secondary text-nowrap">Sort by <font-awesome-icon icon="sort" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="articles-container">
                <div v-if="displayedPosts.length === 0" class="alert alert-danger text-center">No Articles</div>
                <div class="row">
                    <Article 
                        v-for="(article, index) in displayedPosts" v-bind:key="index" 
                        :articleImg="article.urlToImage"    
                        :articleTitle="article.title"
                        :articleCategory="article.category"
                        :articleDescription="article.description"
                        :articleDate="article.date"
                        :articleRoute="article.id"
                    />
                </div>
            </div>
            <div class="paging-container">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item">
                            <button type="button" class="page-link" v-if="page != 1" @click="page--"> <font-awesome-icon :icon="['fas', 'angle-left']"/> </button>
                        </li>
                        <li class="page-item">
                            <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" v-bind:key="pageNumber" @click="page = pageNumber" v-bind:class="[page === pageNumber ? 'active' : '']"> {{pageNumber}} </button>
                        </li>
                        <li class="page-item">
                            <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> <font-awesome-icon :icon="['fas', 'angle-right']"/> </button>
                        </li>
                    </ul>
                </nav>	
            </div>
        </div>
    </div>
    
</template>

<script>
// @ is an alias to /src
import Article from '@/components/News/Article.vue'
export default {
  name: 'newsDetails',
  components: {
    Article,
  },
  data(){
      return{
            categories: [],
          
            articles: [],

            posts : [''],
            page: 1,
            perPage: 12,
            pages: [],

            filterTitle: '',
            filterCategory: '',
            filterStartDate: '',
            filterEndDate: '',

          breadcrumbItems: [
            {
                text: 'Home',
                href: '/'
            },
            {
                text: 'News',
                active: true
            }
        ]
      }
  },
     mounted: function (){
        this.getArticles();
    },
    methods: {
        getArticles(){
            this.axios.get('newsapi.json').then((response) => {
                this.articles = response.data.articles;
                this.sortArticles();
                this.posts = this.articles;
                this.categories = response.data.sourceCategory;
                this.posts.forEach(article => {
                    article.category = this.returnArticleCategoryName(article.sourceID, this.categories);
                    article.date = this.returnArticleDate(article.publishedAt);
                });
            });
        },
        sortArticles(){
            this.articles = this.articles.sort((a,b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        },
        setPages () {
			let numberOfPages = Math.ceil(this.posts.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		},
        filterArticles(){
            if(this.filterStartDate != '' || this.filterEndDate != ''){ // Filter By Date
                const ed = new Date(this.filterEndDate).getTime(),
                  sd = new Date(this.filterStartDate).getTime();
                this.posts = this.articles.filter(d => {
                    var time = new Date(d.publishedAt).getTime();
                    if(isNaN(ed)){
                        return (sd < time);        
                    }else if(isNaN(sd)){
                        return (time < ed);
                    }else{
                        return (sd < time && time < ed);
                    }
                });
                if(this.filterCategory != ''){
                    this.posts = this.posts.filter((article) => article.sourceID === this.filterCategory && article.title.toLowerCase().includes(this.filterTitle.toLowerCase()));
                }else{
                   this.posts = this.posts.filter((article) => article.title.toLowerCase().includes(this.filterTitle.toLowerCase()));
                }
            }else if(this.filterCategory != ''){ // Filter By Category
                this.posts = this.articles.filter((article) => article.sourceID === this.filterCategory && article.title.toLowerCase().includes(this.filterTitle.toLowerCase()));
            }else{ // Filter By Title
                this.posts = this.articles.filter((article) => article.title.toLowerCase().includes(this.filterTitle.toLowerCase()));
            }

            this.setPages();
            this.paginate(this.posts);
        },
    },
    computed: {
		displayedPosts () {
			return this.paginate(this.posts);
		},
	},
	watch: {
		posts () {
			this.setPages();
		}
	},
}
</script>
<style scoped>
button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}
</style>