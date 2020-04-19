/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
              <a class="navbar-brand" href="#">VueJS App</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                  </li>
                </ul>
              </div>
            </nav>
        </header>    
    `,
    data: function() {
      return {};
    }
});

Vue.component('app-footer', {
    template: `
        <footer>
            <div class="container">
                <p>Copyright &copy {{ year }} Flask Inc.</p>
            </div>
        </footer>
    `,
    data: function() {
        return {
            year: (new Date).getFullYear()
        }
    }
})

Vue.component('news-list', {
    template: `
                <div class="row" style="margin-left:80px">
                        <div v-for="(article, index) in articles" v-if="index < 9" >
                                <div  class="col-lg-10 news card cardme both">
                                <ul class="news__list  card-body" style="list-style-type:none">
                                <li  class="news__item card-title"> {{ article.title }} </li>
                                <img style="width:100%" v-bind:src="article.urlToImage">
                                <br/>
                                <li class="news__item card-text"> {{ article.description }} </li>
                                </ul>
                                </div>
                            <br/>
                        </div>
                </div>
    `,

    created: function() {
        let self = this;

        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=60b1d42f5489434493779aa257b87b23')
        .then(function(response) {
        return response.json();
        })
        .then(function(data) {
            console.log(data);
            self.articles = data.articles;
        });
    },

    data: function() {
        return {
            articles: []
        }
    }
 });


let app = new Vue({
    el: '#app',
    data: {
        welcome: 'Hello World! Welcome to VueJS'
    }
});

