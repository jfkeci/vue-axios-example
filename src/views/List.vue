<template>
  <div class="container">
    <b-container fluid>
      <!-- User Interface controls -->
      <b-row>
        <b-col lg="12" class="my-1">
          <b-col sm="6" class="my-1">
            <b-form-group
              label="Filter"
              label-for="filter-input"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  id="filter-input"
                  v-model="filter"
                  type="search"
                  placeholder="Type to Search"
                ></b-form-input>
              </b-input-group>
            </b-form-group>
          </b-col>

          <b-col sm="6" class="my-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="fill"
              size="sm"
              class="my-0"
            ></b-pagination>
          </b-col>
        </b-col>
      </b-row>
      <b-table
        striped
        hover
        :items="posts"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
      ></b-table>
    </b-container>
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
        { key: "title", label: "Title", sortable: true },
        { key: "body", label: "Body", sortable: true },
      ],
      posts: [],
      postTitle: "",
      postBody: "",
      userId: 1,
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5],
      filter: null,
      filterOn: [],
    };
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.posts.length;
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
  onFiltered(filteredItems) {
    this.totalRows = filteredItems.length;
    this.currentPage = 1;
  },
};
</script>