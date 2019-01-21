

var app = new Vue({
  el: '#app',
  data : {
    product : "Socks",
<<<<<<< HEAD
    brand : "Vue Mastery",
=======
    brand: 'Vue Mastery',
>>>>>>> 8f180b8118a2698ece2573fe67a4d7b4988c2269
    //image : "socks.jpg",
    selectedVariant: 0,
    altText : "image not available",
    //inStock : true,
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
  },

  computed: {
    title(){
      return this.brand + '' + this.product
    }

  }




})

Vue.component('product', {
  template: `
  <div class="product">
    ...
  </div>

  `,
  data() {
    return {

    }
  },

  methods: {

  },

  computed: {

  }

})
