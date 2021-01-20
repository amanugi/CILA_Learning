<template>
    <div>
        <h1>Delete Post </h1>
        <table border="1px">
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Author</td>
                <td>Action</td>
            </tr>
            <tr v-for="user in users" :key="user.id"> 
                <td>{{user.id}}</td>
                <td>{{user.title}}</td>
                <td>{{user.author}}</td>
                <td><Button class="btn" v-on:click="deleteUser(user.id)">Delete</Button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DeletePost',
    data() {
        return {
            users: null
        }
    },
    methods: {
        getUsers(){
            this.axios.get('http://localhost:3000/posts').then((result) => {    // fetching the data from api
                console.warn(result);
                this.users = result.data;
                this.getUsers();
            })
        },
        deleteUser(id) {
            this.axios.delete('http://localhost:3000/posts/'+id).then((result) => {
                console.warn(result);
                this.getUsers();
            })
        }
    },
    mounted() {

        this.getUsers();
    }
}
</script>

<style scoped>
    table {
        margin-left: 39%;
        margin-bottom: 5%;
        align-items: center;
    }
    td {
        padding: 10px;
    }
    .btn{
        cursor: pointer;
    }
</style>