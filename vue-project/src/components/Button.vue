<template>
    <a href="https:/www.cilalabs.com" target="_blank"><button class="btn">{{name}}</button></a>
</template>

<script>
export default {
    name: 'Button',
    props: {
        name: String
    }
}
</script>

<style scoped>
    .btn{
        color:white;
        background-color: rgb(14, 168, 96);
        padding : 10px 30px;
        border:0px;
        outline: none;
        border-radius:50px;
        font-size:19px;
        margin-top: 100px;
    }
</style>