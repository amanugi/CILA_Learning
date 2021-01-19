<template>
    <div>
        <h1>Coding Ninjas Courses</h1>
        <div>
            <ul>
                <li v-for="course in listofCourses" :key="course.id">{{course.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

export default {
    name: 'Courses',
    data() {
        return {
            listofCourses: []
        }
    },
    mounted() {
        Vue.axios.get('https://api.codingninjas.com/api/v3/courses').then(res => {
            this.listofCourses = res.data.data.courses;
            console.warn(res);
        })
    }
}
</script>

<style>
    
</style>