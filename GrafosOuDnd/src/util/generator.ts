export function generateObject(){
    const dnd =  ["Decomposição", "Guia", "Infestação", "On/Off", "Shilelah", "Comunar", "Estabilizar", "Mensagem", "Prestidigitação", "Alarme", "Bom fruto", "Ankheg", "Azer", "Amizade", "Dao", "Djinni", "Fomoriano", "Glabrezu", "Piercer", "Scout", "Roper", "Esqueleto", "Vrock", "Metamorfose", "Criar passagem", "Missão"];
    const grafos = ["Feixo transitivo direto", "Kohn", "M-Maximal", "Isomorfo", "Homeomorfo", "Berge", "Emparelhamento", "Simplex", "Planaridade", "Coloração de faces", "Guloso", "Aresta", "Kosaraju", "Fleury", "Prim", "Kruskal", "Dijkstra", "K-4", "Casamento perfeito", "M-flor", "Pseudovértice", "Expansão", "Árvore"]
    var qualTipo = getRandomInt(0,1)
    

    var obj = {
        nome: qualTipo==1? dnd[getRandomInt(0, dnd.length-1)]: grafos[getRandomInt(0, grafos.length-1)],
        tipo: qualTipo==1?'dnd': 'grafos',
        tamanho: dnd.length + grafos.length - 2
    }

    return obj;

}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
