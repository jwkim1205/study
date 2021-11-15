<template>
  <div class="menu">
    <a v-for="navLink in nav" :key="navLink"> {{ navLink }} </a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">
  
  원룸샵

  <div>  
    <h4 :class="클라스" :style="스타일">{{products[0]}} 원룸</h4>
    <p>{{ price1 }} 만원</p>
    <button @click="increase0">허의매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>

  <div>
    <h4> {{ products[1] }}원룸</h4>
    <p>{{ price2 }} 만원</p>
    <button @click="increase1">허의매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>

  <div>
    <h4> {{ products[2] }}원룸</h4>
    <p>{{ price3 }} 만원</p>
    <button @click="increase2">허의매물신고</button>
    <span>신고수 : {{ 신고수[2] }}</span>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      신고수 : [0, 0, 0],
      products: {
        locate : ['역삼동원룸', '천호동원룸', '마포구원룸'],
        pay : [70, 100, 60]
      },
      nav: ['Home', 'Products', 'Show', 'About']
    }
  },
  methods: {
    increase0(){
      this.신고수[0]++;
    },
    increase1(){
      this.신고수[1]++;
    },
    increase2(){
      this.신고수[2]++;
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
