

var app = new Vue({
  el: '#app',
  data : {
    product : "Socks",
    image : "socks.jpg",
    altText : "image not available",
    inStock : true,
    inventory: 100,
    onSale : true,
    details: ["80% cotton", "20% polyester", "gender-neautral"],
    variants: [
      {
        variantId: 123,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    sizes: ["small", "medium", "large"]
  }
})
