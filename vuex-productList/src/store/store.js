import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Banana Skin', price: 30},
            {name: 'Shiny Stars', price: 50},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 90}
          ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                  name: '**' + product.name + '**',
                  price: product.price / 2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state,payload) => {
            state.products.forEach( product => {
                product.price -= payload;
            });
        }
    },
    actions: {
        reducePrice: (context,payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload)
            }, 2000);
        }
    }
})