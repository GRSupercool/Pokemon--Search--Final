# Using Pokemon APIs to Provide Data

> Practicing using the Pokemon APIs to retreive data in an application.



This project is designed to practice creating simple API requests from within a
Vue.js application. We will make requests and use them to populate information
for our users. For this project, we will make requests to the [Pokemon API](https://pokeapi.co/),




## Project Goals
The goal for this project is to make functional Pokemon Finder. This feature
allows a user to search forpokemon by name.  If no words are found, then the user
gets an error message. The user can also  search the national pokedex for more pokemon infomration.


## Basic Requirements
In order to successfully complete this project, we must fulfill the following
requirements. The requirements below are organized according to the file we will
modify to fulfill them.

**`/src/components/NameSearch.vue`**

`<template>`

* Set up an event handler to trigger the `PokemonName` method when the `form` is submitted
* Use a conditional to control the display of the `ul.results` element so it only displays when results are ready to be shown
* Use a loop to process all of the results into list items
    * Output the word in each list item
    * Output the score for each word in each list item
* Use a conditional to control the display of the `.no-results` message, which should only show when the user has attempted a search and no words have been found
* Use a conditional to control the display of the `ul.errors` element so it only displays when there are errors ready to be shown
* Use a loop to process all of the errors and display them for the user

`<script>`

* Import axios for use in the component logic
* Create a method called `PokemonName` 
* Within the `Pokemon` method, create an `axios.get()` statement that will make a request to `https://pokeapi.co/`
    * Define the `params` for Pokemon Name
    * Define a `then` clause that sets the component's `results` value to the value of `response.data`
    * Define a `catch` clause that will add any error to the `errors` array in the component

**`/src/components/PokemonType.vue`**
* Implement a similar interface to take user to National Pokedex
    * Create the necessary template to allow the user to enter at least one search parameter
    * Create the necessary method to handle the form submission and API request


**`/src/router/index.js`**

* Add the new component to the import statements in the router definitions file
* Add the new route to the router definitions list 


## Instructions for working with this application

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

```

**Note:** This application has been configured to build files to the `/docs` directory, making it compatible with the "Serve from `master` `/docs` directory" setting for GitHub Pages. Please adjust your GH Pages settings accordingly on your repository settings page.

For detailed explanation on how Vue works, check out the [guide](https://cli.vuejs.org/guide/) and [docs for vue-loader](https://cli.vuejs.org/config/#css-loaderoptions).

## Credits
This project makes use of the [Pokemon API](https://pokeapi.co/)
