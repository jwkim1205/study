<template>
  <div>
      <!-- v-for="(items, i) in onerooms" :key="i" -->
    <img :src="onerooms.image" class="room-img">
    <h4 @click="send">{{ onerooms.title }}</h4>
    <p>$ {{ onerooms.price }}</p>
    <p>{{ onerooms.content }}</p>
  </div>
</template>

<script>
export default {
    name : 'card',
    props : {
        onerooms : Object
    },
    methods: {
        send(){
            this.$emit('openModal', this.onerooms.id)
        }
    },

}
</script>

<style>

</style>