
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">

    <div class="product-image">
      <img :src="image" :alt="altText">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>

      <p v-if="inventory > 10">In Stock</p>
      <p v-else-if="inventory > 0 && inventory <10">Almost out of stock</p>
      <p v-else>Out of stock!</p>
      <span v-if="onSale">On Sale!</span>

      <ul>
        <li v-for="detail in details">{{detail}}</li>
      </ul>

      <div class="color-box"
      v-for="(variant, index) in variants"
      :key="variant.variantId"
      :style="{ backgroundColor: variant.variantColor }"
      @mouseover="updateProduct(index)">
      </div>

    </div>

    <button v-on:click="addToCart"
    :disabled="!inStock"
    :class="{ disabledButton: !inStock }">Add to cart</button>
    <p>User is premium: {{ premium }}</p>
    <p>Shipping: {{ shipping }}</p>

    <product-review @review-submitted="addReview"></product-review>

    <div>
      <h2>Reviews</h2>
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <ul>
        <li v-for="review in reviews">
        <p>{{ review.name }}</p>
        <p>Rating: {{ review.rating }}</p>
        <p>{{ review.review }}</p>
        </li>
      </ul>
    </div>

  </div>
  `,
  data(){
    return{
      product : "Socks",
      brand: 'Vue Mastery',
      selectedVariant: 0,
      altText : "image not available",
      inventory: 100,
      onSale : true,
      details: ["80% cotton", "20% polyester", "gender-neautral"],
      variants: [
        {
          variantId: 123,
          variantColor: "green",
          variantImage: "greenSocks.jpeg",
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "blueSocks.jpg",
          variantQuantity: 0
        }
      ],
      cart: 0,
      reviews: []
    }
  },

  methods: {
    addToCart(){
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index){
      this.selectedVariant = index
      console.log(index)
    },
    addReview(productReview) {
      this.reviews.push(productReview)
    }
  },

  computed: {
    title(){
      return this.brand + '' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },

    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },

    shipping(){
      if(this.premium){
        return "Free"
      } else
      {
        return 2.99
      }
    }
  }


})


Vue.component('product-review', {
  template: `
  <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <input v-model="name">
      <input id="name" v-model="name" placeholder="name">
    </p>

    <p>
      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
    </p>

    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>

    <p>
      <input type="submit" value="Submit">
    </p>
  </form>
  `,

  data(){
    return{
      name: null,
      review: null,
      rating: null
    }
  },

  methods: {
    onSubmit() {
     let productReview = {
       name: this.name,
       review: this.review,
       rating: this.rating
     }
     this.$emit('review-submitted', productReview)
     this.name = null
     this.review = null
     this.rating = null
   }
  }




})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id){
      this.cart.push(id)
    }
  }
})

Vue.config.devtools = true
