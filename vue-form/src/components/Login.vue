<template>
    <div>
        <hr>
        <h1>Form Validation</h1>
            <div v-if="error.length">
                <p v-for="e in error" v-bind:key="e.id">{{e}}</p>
            </div>
            <form @submit="login">
                <input type="text" placeholder="Your name" v-model="name" required/> <br><br>
                <input type="password" placeholder="Your password" v-model="password" required/> <br><br>
                <button type="submit">Login</button>
            </form>
    </div>

</template>

<script>
export default {
    name: 'Login',
    data() {
        return{
            error: [],
            name: null,
            password: null
        }
    },
    methods: {
        login(e) {
            if(this.name && this.password){
                console.warn("No error");
                this.error.push("Submitted");
                //this.error.empty();
            }
            // console.warn("Hello");
            e.preventDefault();
        }
    }
}
</script>

<style>
    hr {
        background-color: black;
    }
</style>