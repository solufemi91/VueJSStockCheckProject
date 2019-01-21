

var app = new Vue({
  el: '#app',
  data : {
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

// Vue.component('product', {
//   template: `
//   <div class="product">
//     ...
//   </div>
//
//   `,
//   data() {
//     return {
//
//     }
//   },
//
//   methods: {
//
//   },
//
//   computed: {
//
//   }
//
// })
