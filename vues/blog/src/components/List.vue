<template>
  <div v-for="(itemList, i) in post" :key="i">
    <h3 @click="$router.push('/detail/' + [i])">{{ itemList.title }}</h3>
    <p>{{ itemList.date }}</p>
  </div>
</template>

<script>
export default {
    name: 'List.vue',
    props: {
        post: Object
    }
}
</script>

<style>

</style>