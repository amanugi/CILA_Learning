Vue.component('product-details',{
    props:{
        details:{
            type:Array,
            required: true
        }
    },
    template: `
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>
    `
})

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
            <img v-bind:src="image" alt="socks-img">
        </div>
        <div class="product-info">
            <h1>{{product}}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
        
            <product-details :details="details"></product-details>

        <div v-for="(variant,index) in variants" 
        :key="variant.variantId"
        class="color-circle"
        :style="{backgroundColor: variant.variantColor}"
        @click="updateProduct(index)">
        </div>

        <button v-on:click="addtoCart" 
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
        >
        Add to Cart
        </button>

        <product-review></product-review>
            
        </div>  
    </div> 
    `,
    data() {
        return {
            product: 'Socks',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    variantId: 1356,
                    variantColor: 'blue',
                    variantImage: './assets/socks_blue.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 1357,
                    variantColor: 'green',
                    variantImage: './assets/socks_green.jpg',
                    variantQuantity: 0
                }
            ]
        }
    },
    methods: {
        addtoCart(){
           this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index){
            this.selectedVariant = index
        }
    },
    computed: {
        image(){
           return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(){
            if(this.premium){
                return "Free"
            }
            return 3.99
        }
    }
})

Vue.component('product-review',{
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <p>
        <label for="name">Name:</label>
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
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})