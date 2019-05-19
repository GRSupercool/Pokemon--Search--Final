<template>
  <div class="rhymesaurus">
    <form v-on:submit.prevent="findWords"><!-- TODO: Use a submit event handler to allow the findWords method to handle this form submission. -->
      <p>Find rhymes for <input type="text" v-model="rhyme"> related to <input type="text" v-model="phrase"> <button type="submit">Search</button></p>
    </form>
    <!-- TODO: Add a v-if conditional to make this results list show only if there are results and if the length is greater than 0. -->
    <ul class="results" v-if:="results && results.length > 0">
      <!-- TODO: Add a v-for loop to the LI tag to loop through the items in the results. -->
      <li class="item" v-for="(item,index) of results" :key="index">
        <p><strong><!-- TODO: Output word -->{{item.word}}</strong></p>
        <p><!-- TODO: Output score -->{{item.score}}</p>
      </li>
    </ul>

    <!-- TODO: Add a `v-else-if` conditional to make this message only show if there are no results returned (but we have actually attempted a request). -->
    <div class="no-results" v-else-if:= "results && results.length === 0">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

    <!-- TODO: Add a v-if conditional to make this errors list show only if there are errors and if the length is greater than 0. -->
    <ul class="errors" v-if="error && errors.length > 0">
      <!-- TODO: Add a v-for loop to the LI tag to loop through the errors. -->
      <li v-for="(errors, index) of errors" :key="index">
        <!-- TODO: Output each error. -->
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
// TODO: Import axios properly here.
import axios from 'axios'

export default {
  name: 'Rhymesaurus',
  data () {
    return {
      results: null,
      errors: [],
      phrase: '',
      rhyme: ''
    }
  },

  methods: {
    findWords: function() {
      axios.get('https://api.datamuse.com/words',{
        params: {
          ml: this.phrase,
          rel_rhy: this.rhyme
        }
      })
        .then(response => {
          this.results=response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  },
   get methods() {
     return this._methods_1;
   },
   set methods(value) {
     this._methods_1=value;
   },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods=value;
  },
    // TODO: Create the findWords method.

    // TODO: Complete the following inside of the findWords method.
      // TODO: Create an axios.get statement that requests from https://api.datamuse.com/words
      // TODO: Create the params object
      // TODO: Set the `ml` parameter equal to `this.phrase`
      // TODO: Set the `rel_ehy` parameter equal to `this.rhyme`
      // TODO: Create a `then` clause
      // TODO: Inside the `then` clause, set `this.results` equal to `response.data`
      // TODO: Create a `catch` clause
      // TODO: Inside the `catch` clause, push the new `error` onto the `this.errors` array
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rhymesaurus {
  font-size: 1.4rem;
}

input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
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
  background: rgba(0,0,0,0.7);
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
