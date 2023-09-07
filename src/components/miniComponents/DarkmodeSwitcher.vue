<template>
  <TransitionGroup tag="ul" name="slide-fade" class="darkmode-toggle">
    <li class="material-symbols-outlined" v-if="isDarkMode">dark_mode</li>
    <li class="material-symbols-outlined" v-else>light_mode</li>
  </TransitionGroup>
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
    height: 50px;
    width: 50px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--tertiary-color);
    color: whitesmoke;
    border-radius: 50%;
    border: rgba(0,0,0,0%) solid 2px;
    overflow: hidden;
    cursor: pointer;
  }
  .darkmode-toggle li{
    position: absolute;
  }
  /*Transition Animation*/
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: transform 1s ease;
  }
  .slide-fade-leave-to {
    transform: translateY(-130%);
  }
  .slide-fade-enter-from{
    transform: translateY(130%);
  }
</style>