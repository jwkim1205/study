<template>
    <div class="black-bg" v-if="modal == true">
        <div class="white-bg">
            <img :src=" onerooms[num].image">
            <h4>{{ onerooms[num].title }}</h4>
            <!-- <input @input="month = $event.target.value" type="text" placeholder="개월 살겠습니다."> -->
            <input v-model.number="month" type="text" placeholder="개월 살겠습니다.">
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
            month : 3,
        }
    },
    watch: {
        month(a, b){
            if(a >= 13){
                alert('13이상 입력하지 마시오');
                a = b;
            }else if(a == String){
                alert('문자는 입력할 수 없습니다.')
            }
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
    beforeUpdate(){
        if(this.month < 3){
            alert('3개월 이상 선택해주세요')
        }else if(this.month == -2){
            this.month = 3
        }
    }
}
</script>

<style>

</style>