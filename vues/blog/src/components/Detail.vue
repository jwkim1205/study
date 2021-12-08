<template>
  
  <div class="detail">
    <h4>상세페이지</h4>
    <h5>{{post[$route.params.id].title}}</h5>
    <p>{{post[$route.params.id].content}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        post: Array
    }
}
</script>

<style>

</style>