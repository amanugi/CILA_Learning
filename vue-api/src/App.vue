<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> <br> -->
    <Courses> </Courses> <br><br> <hr>
    <Post> </Post> <br><br> <hr>
    <DeletePost> </DeletePost>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Courses from "./components/Courses.vue";
import Post from "./components/Post.vue";
import DeletePost from "./components/DeletePost.vue";


export default {
  name: "App",
  components: {
    Courses,
    Post,
    DeletePost
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
