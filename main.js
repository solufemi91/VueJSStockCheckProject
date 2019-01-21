
Vue.component('product', {
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


    <div class="cart">
      <p>Cart{{cart}}</p>
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
      cart: 0
    }
  },

  methods: {
    addToCart(){
      this.cart += 1
    },
    updateProduct(index){
      this.selectedVariant = index
      console.log(index)
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
    }
  }


})


var app = new Vue({
  el: '#app'
})
