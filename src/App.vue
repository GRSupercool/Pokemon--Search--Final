<template>
  <div id="app">
    <h1>Pokemon</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
  margin-left:200px;
  background-color:white;
  max-width:100%;
 
}
 body {
    background-color: #f3d21a;
    margin:0;
    min-height:100vh;
    overflow-x:hidden;
    line-height: 1.5;
    font:780 72.5% tahoma;
    background-image:url(assets/clean_pikachu.png);
    background-position: 97% 14vh;
    background-repeat:no-repeat;
    background-size: auto 87vh;
    filter:drop-shadow(-6px, 40px, 23px, rgba(black, 0.5));
    max-width:50%;
    background-image:relative;
  }
  .aside{
  padding: 1em;
  padding-bottom: 4.5em;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  }
  
  *,::before, ::after{
    box-sizing:border-box;
    overflow:hidden;
  }

</style>
