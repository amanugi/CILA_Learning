<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" /> <br>
    <SignUp> </SignUp> <br><br>
    <Login> </Login>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import SignUp from "./components/SignUp.vue"
import Login from "./components/Login.vue"


export default {
  name: "App",
  components: {
    //HelloWorld,
    SignUp,
    Login
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
