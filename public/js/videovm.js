Vue.component('review-stars', {
  template: `<div class="star-rating">
        <label class="star-rating-star" v-for="rating in ratings"
        :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
        v-on:click="updateValue(rating)" v-on:mouseover="updateValue(rating)" v-on:mouseout="updateValue(rating)">
        <input class="star-rating star-rating-checkbox" type="radio" :value="rating"
        v-model="value" :disabled="disabled">★</label></div>`,
  props: ['value', 'disabled'],
  data: function(){
    return {
      ratings: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    updateValue: function(value) {
      if(!this.disabled){
        this.$emit('input', value);
      }
    }
  }
});

// Vue.component( 'social-sharing' ,{
//   template: `<network network="facebook">
//      <i class="ion-social-facebook"></i>Facebook
//    </network>
//    <network network="instagram">
//      <i class="ion-social-instagram"></i>Instagram
//    </network>
//    <network network="twitter">
//      <i class="ion-social-twitter"></i>Twitter
//    </network>`,
//    props: ['network'],
//    data: {
//
//    }
// });


var videoApp = {
  addReviews(data){
    // process the review data and push it into the Vue instance
    data.forEach(review => videoApp.vm.reviews.push(review));
  },

  vm: new Vue({
    el: '#video',
    delimiters: ["${", "}"],
    data: {
      reviews: [],
      numStars: 0,
      review: "",
      movies: appData.movies,
      comments: commentData.comments
    },
    methods: {
      // do a post with all the new review stuff
      addReview(){
        let movieId = document.querySelector('.movId').textContent; //grab the movie id

        axios.post('/api', {
          id: movieId,
          stars: this.numStars,
          comment: this.review
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

        //push things to the review array
        this.reviews.push({
          comments_copy: this.review,
          comments_rating: this.numStars,
          comments_date: `${ new Date() }`
        });
        this.review = "";
        this.numStars = 0;
      }
    }
  })
}

videoApp.addReviews(commentData.comments);
