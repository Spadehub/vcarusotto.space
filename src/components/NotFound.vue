<template>
  <section class="main">
    <span>Error 404:</span>
    <h2>Page Not Found</h2>
    <router-link to="/home">Go back to the Home Page</router-link>
  </section>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
.main{
  margin-top: 100px;
  height: 50vh;
}
  a{
    font-size: inherit;
    text-decoration: none;
    outline: 0.2rem solid transparent;
    outline-offset: 5px;
    background-color: var(--secondary-hover-color);
    color: var(--text-color);
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: outline-color .3s, background-color .1s;
  }
  a:hover{
    outline-color: var(--highlight-color-secondary);
  }
  a:active{
    background-color: var(--tertiary-color);
  }
</style>