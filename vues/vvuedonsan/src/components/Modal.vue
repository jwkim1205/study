<template>
    <div class="black-bg" v-if="modal == true">
        <div class="white-bg">
            <img :src=" onerooms[num].image">
            <h4>{{ onerooms[num].title }}</h4>
            <!-- <input @input="month = $event.target.value" type="text" placeholder="개월 살겠습니다."> -->
            <input v-model="month" type="text" placeholder="개월 살겠습니다.">
            <textarea v-model="month"></textarea>
            <select v-model="month">
                <option>1</option>
                <option>10</option>
                <option>20</option>
            </select>
            <p>{{month}}개월 선택함 : {{ onerooms[num].price * month }}</p>
            <p>{{ onerooms[num].content }}</p>
            <Discount />
            <button @click="closeModal" class="close">Close</button>
        </div>
  </div>
</template>

<script>
export default {
    name : 'Modal',
    data() {
        return {
            month : 1,
        }
    },
    props: {
      onerooms : Array,
      modal : Boolean,
      num : Number
    },
    methods: {
        closeModal(){
            this.$emit('closeModal')
        },
    },
}
</script>

<style>

</style>