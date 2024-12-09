<script>

import { generateObject } from './util/generator';
import { ref } from 'vue';

export default {
  setup() {
    var obj = ref(generateObject())
    var cor = ref('white')
    var pontos = ref(0)
    var tents = ref(0)
    var tentou = ref(false)
    return {
      obj,
      cor,
      pontos,
      tents,
      tentou
    }
  },

  methods: {
    check(resposta) {
      this.tentou = true;
      this.tents++;
      if (this.obj.tipo == resposta) {
        this.pontos++
        this.cor = 'green'
      } else {
        this.cor = 'red'
      }
    },
    proximo() {
      this.cor = 'white'
      this.obj = generateObject()
      this.tentou = false
    }
  }
}

</script>

<template>
  <p>Pontos: {{ pontos }}/{{ tents }}</p>
  <p>O termo a seguir vem da matéria de Grafos e Computabilidade ou do jogo Dungeons and Dragons?</p>
  <h1 class="nome">{{ obj.nome }}</h1>

  <button @click="check('grafos')" :disabled = 'this.tentou'>Grafos</button>
  <button @click="check('dnd')" :disabled = 'this.tentou'>DnD</button>

  <button @click="proximo()">Proximo</button>

</template>

<style scoped>
.nome {
  color: v-bind(cor)
}
</style>
