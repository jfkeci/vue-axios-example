<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <h1>Posts</h1>
    <!-- <input
      type="text"
      v-model="postTitle"
      @keyup.enter="addPost"
      placeholder="Title"
    />
    <br />
    <input
      type="text"
      v-model="postBody"
      @keyup.enter="addPost"
      placeholder="Body"
    /> -->
    <List />
  </div>
</template>

<script>
import List from "./views/List";
import Header from "./components/Header";

// import Create from "./views/Create";
// import Edit from "./vieews/Edit";

export default {
  name: "App",
  components: {
    List,
    Header,
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

li {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;
}
</style>
