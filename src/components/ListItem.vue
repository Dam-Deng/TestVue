<template>
  <li>
    {{ todo.text }}
    <button v-on:click="$emit('remove')">X</button>
  </li>
</template>

<script>
  export default {
    name: 'ListItem',
    props: ['todo']
  }
</script>

<style>
  .fade-enter-active {
    transition: opacity .5s
  }

  .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .fade-move {
    transition: transform 1s;
  }
</style>
