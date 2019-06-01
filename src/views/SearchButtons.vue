<template>
  <div class="hello">
    <h1>{{ PokemonFinder}}</h1>
<div>
  <b-button>Search by Pokemon Name</b-button>
  <b-button >Search by Pokemon Type</b-button>
  <p>
      <router-link to="/typesearch">Search for Pokemon by Type</router-link>
      <router-link to="/namesearch">Search for Pokemon By Name<router-link>
    </p>
</div>

</template>

<script>
export default {
  name: 'SearchButtons',
  props: {
    msg: String
  }
}
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
