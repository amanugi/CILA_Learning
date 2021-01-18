<template>
  <div id="app">
    <Navbar></Navbar>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Button name="Click Me"></Button>
    <ButtonCounter></ButtonCounter> <br> <br>
    <Child v-bind:users="users"></Child>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Button from "./components/Button.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
import Child from "./components/Child.vue";


export default {
  name: "App",
  components: {
    //HelloWorld,
    Navbar,
    Button,
    ButtonCounter,
    Child
  },
  data() {
    return {users: [
      {name: "Aman"},
      {name: "Ankush"},
      {name: "Parikh"}
    ]}
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
