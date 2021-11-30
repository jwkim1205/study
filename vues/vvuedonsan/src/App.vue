<template>
  <div class="menu">
    <a v-for="navLink in nav" :key="navLink"> {{ navLink }} </a>
  </div>  
  
  <Discount v-if="showDiscount == true" :sale="sale"/>

  <button @click="priceSort">가격순 정렬 오름차순</button>
  <button @click="priceSortReverse">가격순 정렬 내림차순</button>
  <button @click="sortBack">원래대로</button>
  <button @click="textSort">가나다순 정렬</button>
  <button @click="textSortReverse">다나가순 정렬</button>
  

  원룸샵

  <!-- <Card /> -->

  <Card @openModal="modal = true; num = $event" :onerooms="onerooms[i]" v-for="(oneroom, i) in onerooms " :key="i"/>

  <transition name="fade">
    <Modal @closeModal="modal = false;" :onerooms="onerooms" :modal="modal" :num="num"/>
  </transition>

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
      oneroomsOrigin : [...data],
      num: 0,
      showDiscount: true,
      sale: 30
    }
  },
  methods: {
    priceSort(){
      this.onerooms.sort(function(a,b){
        return a.price - b.price
      })
    },
    priceSortReverse(){
      this.onerooms.sort(function(a,b){
        return b.price - a.price
      })
    },
    textSort(){
      this.onerooms.sort(function(a,b){
        return (a.title.toString().toLowerCase() < b.title.toString().toLowerCase()) ? -1 : (a.title.toString().toLowerCase() == b.title.toString().toLowerCase()) ? 0 : 1;
      });
    },
    textSortReverse(){
      this.onerooms.sort(function(a,b){
        return (a.title.toString().toLowerCase() > b.title.toString().toLowerCase()) ? -1 : (a.title.toString().toLowerCase() == b.title.toString().toLowerCase()) ? 1 : 0;
      });
    },
    sortBack(){
      this.onerooms = [...this.oneroomsOrigin]
    }
  },
  components: {
    Discount,
    Modal,
    Card
  },
  mounted(){
    setInterval(()=>{
      this.sale--;
    }, 1000);
    setTimeout(()=>{
      this.showDiscount = false;
    },31000);
  }
}
</script>

<style>
.fade-enter-from{
  transform: translateY(-1000px);
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  transform: translateY(0px);
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{
  opacity: 0;
}

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
