<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >
    </p>
    <input type="text" v-model="search" placeholder="Search title.." />
    <ul>
      <li v-for="value in filteredList" class="text-center">
        id: {{ value.judul }} |
        {{ id }}
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import axios from 'axios';
const url =
  'https://api.airtable.com/v0/appTjJ62VlXlQygqr/tblVPlqco0kra9Gap?api_key=keyR8rYGOyxgPY76u';

export default {
  data() {
    return {
      search: '',
      results: [],
    };
  },
  mounted() {
    axios.get(url).then((response) => {
      this.results = response.data.records;
    });
  },
  computed: {
    filteredList() {
      return this.results.filter((memo) => {
        return memo.id.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
