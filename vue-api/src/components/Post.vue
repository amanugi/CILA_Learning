<template>
    <div>
        <h1>Submit data with Post</h1> <br>
        <form @submit="submitPost" method="post">
            <input type="text" placeholder="Title" v-model="postData.title" /> <br><br>
            <input type="text" placeholder="Author" v-model="postData.author" /> <br><br>
            <button class="btn" type="submit">Post Data</button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

export default {
    name: 'Post',
    data() {
        return {
            postData: {
                title: null,
                author: null
            }
        }
    },
    methods: {
        submitPost(e){          // e is an event
             this.axios.post('http://localhost:3000/posts', this.postData).then((result) => {
                 console.log("result", result);
             })
             e.preventDefault();
        }

    }
}
</script>

<style>
    .btn {
        cursor:pointer
    }
    hr{
        background: black;
    }
</style>