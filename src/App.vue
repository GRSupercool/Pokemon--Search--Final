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
  width:40%;
  height:100%;
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
    filter:drop-shadow(-6px, 40px, 23px, rgba(black, 0.5))
  }
  .aside{
  padding: 1em;
  padding-bottom: 4.5em;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  }

  .trigger{
    position:relative;
    z-index: 2;
  }

  .social{
    font-family:tahoma;
    text-transform: uppercase;
    letter-spacing:2px;
  }
  .social ul{
    list-style:none;
    margin: 0;
    padding: 0;
  }
  .social ul li{
    margin: 0.25em;
    padding: 1em;
    writing-mode:vertical-rl;
    transform: rotate(180deg);
    font-size: 1rem;

  }

  .social ul li a{
    text-decoration:none;
    color: #c21807;
  }

  .social ul li a hover:hover{
    color: #f00;
  }
  .title{
    position:relative;
    padding-bottom: 1.2em;
    height:100%;
    text-transform:uppercase;
    white-space:nowrap;
    font-size: 2.3rem;
    writing-mode:vertical-rl;
    transform: rotate(180deg);
    user-select: none;
    pointer-events: none;
    margin-top: -40px;
  }


    
    .right-aside{
      color:white;
      width:80%;
      background-color:white;
      padding-right:60em;

    }
  *,::before, ::after{
    box-sizing:border-box;
    overflow:hidden;
  }

</style>
