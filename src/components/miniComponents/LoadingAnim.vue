<template>
  <div class="dot">
    <span id="1"/>
    <span id="2"/>
    <span id="3"/>
  </div>
</template>

<script>
export default {
  name: "LoadingAnim"
}
</script>

<style scoped>
.dot{
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.dot * {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d750f2;
  animation: ease 1s infinite;
  animation-direction: alternate;
}
.dot span:nth-child(1){
  animation-delay: 0s;
}
.dot span:nth-child(2){
  animation-delay: .25s;
}
.dot span:nth-child(3){
  animation-delay: .5s;
}

@keyframes ease {
  0% {
    background-color: rgb(119, 22, 135);
    width: 20px;
    height: 20px;
  }
  100% {
    background-color: rgb(32, 86, 169);
    width: 30px;
    height: 30px;
  }
}
</style>