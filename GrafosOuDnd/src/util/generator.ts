export function generateObject(){
    const dnd =  ["Decomposição", "Guia", "Infestação", "On/Off", "Shilelah", "Comunar"];
    const grafos = ["Feixo transitivo direto", "Kohn", "M-Maximal", "Isomorfo", "Homeomorfo", "Berge", "Emparelhamento máximo", "Simplex", "Planaridade", "Coloração de faces", "Guloso", "Aresta"]
    var qualTipo = getRandomInt(0,1)
    

    var obj = {
        nome: qualTipo==1? dnd[getRandomInt(0, dnd.length-1)]: grafos[getRandomInt(0, grafos.length-1)],
        tipo: qualTipo==1?'dnd': 'grafos'
    }

    return obj;

}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
