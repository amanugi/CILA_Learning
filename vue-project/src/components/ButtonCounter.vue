<template>
    <button class="btn" v-on:click="count++">You clicked me {{count}} times </button>
</template>

<script>
export default {
    name: 'ButtonCounter',
    props :{

    },
    data(){
        return {
            count: 0
        }
    }
}
</script>

<style scoped>
    .btn{
        color:white;
        background-color: rgb(168, 14, 14);
        padding : 10px 30px;
        border:0px;
        border-radius:50px;
        outline: none;
        font-size:19px;
        margin-top: 300px;
        
    }
</style>