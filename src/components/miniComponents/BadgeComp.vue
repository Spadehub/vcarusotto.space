<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: "BadgeComp",
  props: ['text', 'text_color', 'bg_color']
}
</script>

<style scoped>
  span {
    background: v-bind(bg_color);
    color: v-bind(text_color);
    border-radius: 10px;
    padding-inline: 10px;
  }
</style>