<template>
  <li>
    {{ todo.text }}
    <button v-on:click="$emit('remove')">X</button>
  </li>
</template>

<script>
  export default {
    name: 'List',
    props: ['todo']
  }
</script>
