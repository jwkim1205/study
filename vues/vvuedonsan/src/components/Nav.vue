<template>
  <div>
    <nav class="navigation">
        <ul>
            <li v-for="(item, i) in navItem" :key="item"><a :href=" '/' + navItem[i]">{{ navItem[i] }}</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
        navItem : Array
    }
}
</script>

<style>
    .navigation{
        background-color: #0088cc;
        border-radius: 5px;
    }
    .navigation ul{
        display: flex;
        padding: 20px;
        justify-content: center;
        list-style: none;
    }
    .navigation ul li{
        margin: 0px 5px;
    }
    .navigation ul li a{
        color: #ffffff;
        font-weight: bold;
        text-decoration: none;
    }

</style>