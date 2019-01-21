

var app = new Vue({
  el: '#app',
  data : {
    product : "Socks",
    brand : "Vue Mastery",
    //image : "socks.jpg",
    selectedVariant: 0,
    altText : "image not available",
    inStock : true,
    inventory: 100,
    onSale : true,
    details: ["80% cotton", "20% polyester", "gender-neautral"],
    variants: [
      {
        variantId: 123,
        variantColor: "green",
        variantImage: "greenSocks.jpeg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "blueSocks.jpg"
      }
    ],
    cart: 0

  },

  methods: {
    addToCart(){
      this.cart += 1
    },
    updateProduct(imageLink){
      this.image = imageLink
    }
  },

  computed: {
    title(){
      return this.brand + '' + this.product
    }

  }


})
