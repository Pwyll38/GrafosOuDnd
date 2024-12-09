<script>
import { ref } from 'vue'
import { generateObject } from '../util/generator';

export default {
  setup() {
    return {
      ...generateObject()
    };
  }
}


const count = ref(0)
</script>

<template>
  <h1>{{ generateObject().nome }}</h1>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
