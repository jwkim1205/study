<template>
  <div class="menu">
    <a v-for="navLink in nav" :key="navLink"> {{ navLink }} </a>
  </div>  
  원룸샵

  <div v-for="items, i in onerooms" :key="items.id">
    <img :src="onerooms[i].image" class="room-img">
    <h4>{{ onerooms[i].title }}</h4>
    <p>$ {{ onerooms[i].price }}</p>
    <p>{{ onerooms[i].content }}</p>
  </div>

  <div class="black-bg" v-if="modal == true" @click="modal = false">
    <div class="white-bg">
      <button class="close" @click="modal = false">닫기</button>
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
    </div>
  </div>

</template>

<script>
import data from './assets/script/oneroom.js';

export default {
  name: 'App',
  data(){
    return {
      신고수 : [0, 0, 0],
      products: {
        locate : ['역삼동원룸', '천호동원룸', '마포구원룸'],
        pay : [70, 100, 60]
      },
      nav: ['Home', 'Products', 'Show', 'About'],
      modal: false,
      onerooms: data
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

.room-img{
  width: 100%;
  max-width: 450px;
  margin-top: 40px;
}

body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
  top: 0px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
