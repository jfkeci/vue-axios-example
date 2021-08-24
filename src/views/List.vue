<template>
  <div class="container">
    <b-table striped hover :items="posts" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export default {
  name: "app",
  data() {
    return {
      fields: [
        { key: "id", label: "Id" },
        { key: "userId", label: "User Id" },
        { key: "title", label: "Title" },
        { key: "body", label: "Body" },
      ],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      posts: [],
      postTitle: "",
      postBody: "",
      userId: 1,
    };
  },
  async created() {
    try {
      const res = await axios.get(BASE_URL);
      this.posts = res.data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async addPost() {
      const res = await axios.post(BASE_URL, {
        userId: this.userId,
        title: this.postTitle,
        body: this.postBody,
      });
      this.posts = [...this.posts, res.data];
      this.postTitle = "";
      this.postBody = "";
    },
  },
};
</script>