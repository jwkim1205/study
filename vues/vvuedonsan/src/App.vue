<template>
  <div class="menu">
    <a v-for="navLink in nav" :key="navLink"> {{ navLink }} </a>
  </div>  
  
  <Discount />

  원룸샵

  <!-- <Card /> -->

  <Card @openModal="modal = true; num = $event" :onerooms="onerooms[i]" v-for="(oneroom, i) in onerooms " :key="i"/>

  <Modal @closeModal="modal = false;" :onerooms="onerooms" :modal="modal" :num="num"/>

</template>

<script>
import data from './assets/script/oneroom.js';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  data(){
    return {
      Obj : {name: 'kim', age: 20},
      nav: ['Home', 'Products', 'Show', 'About'],
      modal: false,
      onerooms: data,
      num: 0,
    }
  },
  methods: {

  },
  components: {
    Discount,
    Modal,
    Card
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

h4{
  cursor: pointer;
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
