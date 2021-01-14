<template>
  <div id="app">
    <Navbar></Navbar>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Button name="Click Me"></Button>
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Button from "./components/Button.vue";
import ButtonCounter from "./components/ButtonCounter.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    Navbar,
    Button,
    ButtonCounter
  },
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
