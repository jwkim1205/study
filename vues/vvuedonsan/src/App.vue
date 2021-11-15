<template>
  <div class="menu">
    <a v-for="navLink in nav" :key="navLink"> {{ navLink }} </a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">
  
  원룸샵

  <div v-for="(item,i) in 3" :key="item">
    <h4> {{ products[i] }} </h4>
    <p> {{ pay[i] }} </p>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      pay : [70, 100, 60],
      nav: ['Home', 'Products', 'Show', 'About']
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
}
</style>
