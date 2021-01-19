<template>
    <div>
        <h1>Form using Checkbox and Radio button</h1>
        <input type="username" placeholder="Your Name" v-model="signUp.username"> <br><br>
        <input type="password" placeholder="Your password" v-model="signUp.password"><br><br>
        <p>Select Hobbies</p>
        <input type="checkbox" id="cricket" value="cricket" v-model="signUp.hobbies" />
        <label for="cricket"> Cricket  </label>
        <input type="checkbox" id="football" value="football" v-model="signUp.hobbies"/>
        <label for="football"> Football </label>
        <br><br>
        <p>Select Gender</p>
        <input type="radio" id="male" value="male" v-model="signUp.gender" />
        <label for="male"> Male </label>
        <input type="radio" id="female" value="female" v-model="signUp.gender" />
        <label for="female"> Female </label>
        <br><br>
        <button @click="signupUser">Sign Up</button>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            signUp: {
                username: null,
                password: null,
                hobbies: [],
                gender: null
            }
        }
    },
    methods: {
        signupUser() {
            console.warn(this.signUp);
        }
    }
}
</script>