<template>
  <div class="discount">
    <h4>지금 결제하면 {{ sale }}% 할인</h4>
  </div>
</template>

<script>
export default {
    name: 'Discount',
    props: {
      sale: Number
    }
}
</script>

<style>
.discount{
  background-color: #eee;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}
</style>