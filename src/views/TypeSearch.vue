<template>
  <div class="TypeSearch">
    <h2>View Pokemon in National Pokedex</h2>
    <p>
      <router-link to="/typeSearch">Sign Up to View National Pokedex</router-link>
    </p>
<form
  id="app"
  @submit="checkForm"
  action="https://pokemondb.net/pokedex/national"
  method="post"
>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="name">Name</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>

  <p>
    <label for="age">age</label>
    <input
      id="age"
      v-model="age"
      type="number"
      name="age"
      min="0"
    >
  </p>

  <p>
    <label for="pokemon">Favorite Pokemon</label>
    <select
      id="pokemon"
      v-model="pokemon"
      name="pokemon"
    >
      <option>ViewAll</option>
    </select>
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
    <ul class="results" v-if="results && Object.keys(results).length > 0">
      <li class="item">
        <p>
          <strong>{{this.results.type}}</strong>
        </p>
        <img :src="`${this.results.sprites.front_default}`" />
      </li>
      <!-- <li class="item" v-for="(item,index) of results" :key="index">
        <p>
          <strong>{{item.name}}</strong>
        </p>
        <img :src="`${item.sprites.front_default}`" />
      </li> -->
    </ul>


    <div class="no-results" v-else-if="results && Object.keys(results).length === 0">
      <h2>Enter valid Pokemon Type</h2>
    </div>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(errors, index) of errors" :key="index">Pokemon not found</li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Typesearch",
  data() {
    return {
      results: null,
      errors: [],
      type: ""

    };
  },

  methods: {
    getPokemon: function() {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/`,{
        })
        .then(response => {
          this.results = response.data;
          console.log(this.results.type);
          console.log(this.results.sprites.front_default);
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Namesearch {
  font-size: 1.4rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>
