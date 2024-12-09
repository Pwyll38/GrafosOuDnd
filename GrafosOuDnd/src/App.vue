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
    var passados = ref([])
    var fim = ref(false)
    return {
      obj,
      cor,
      pontos,
      tents,
      tentou,
      passados,
      fim
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
      this.getNovoObjeto()
      this.tentou = false
      this.passados.push(this.obj.nome)
    },
    getNovoObjeto() {

      for (let i = 0; i < this.obj.tamanho; i++) {
        var novo = generateObject()
        if (!this.passados.includes(novo.nome)) {
          this.obj = novo
          break
        }
      }

      if(this.passados.length==this.obj.tamanho){ 
      console.log("Cabou")
      this.fim = true
      }
      
    }
  }
}

</script>

<template>
  <div v-if="!this.fim">
  <p>Pontos: {{ pontos }}/{{ tents }} ({{ Math.floor(100*pontos/tents) }}%)</p>


  <p>O termo a seguir vem da matéria de Grafos e Computabilidade ou do jogo Dungeons and Dragons?</p>
  <h1 class="nome">{{ obj.nome }}</h1>

  <button @click="check('grafos')" :disabled='this.tentou'>Grafos</button>
  <button @click="check('dnd')" :disabled='this.tentou'>DnD</button>

  <button v-if="tentou" @click="proximo()">Proximo</button>

  </div>

  <div v-if="this.fim">

    <h1>Pontuação final: {{ pontos }}/{{ tents }} ({{ 100*pontos/tents }})</h1>

  </div>

</template>

<style scoped>
.nome {
  color: v-bind(cor)
}
</style>
