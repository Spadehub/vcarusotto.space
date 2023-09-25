<template>
  <transition-group tag="ul" name="slide-fade" class="darkmode-toggle">
    <li class="material-symbols-outlined" v-if="isDarkMode">dark_mode</li>
    <li class="material-symbols-outlined" v-else>light_mode</li>
  </transition-group>
</template>

<script>
export default {
  name: "DarkmodeSwitcher",
  props:{
    isDarkMode: Boolean
  }
}
</script>

<style scoped>
  .darkmode-toggle {
    height: 46px;
    width: 46px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--tertiary-color);
    color: whitesmoke;
    border-radius: 50%;
    border: rgba(0,0,0,0%) solid 2px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .darkmode-toggle li{
    position: absolute;
  }
</style>