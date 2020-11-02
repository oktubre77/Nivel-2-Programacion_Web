const nombres = ["German","Tomas","Abril","Sandra","Vanesa"];

var listanombres=""
for(let nombre of nombres){
    listanombres += `${nombre} * `
}

console.log(`Lista de Nombres : ${listanombres}`)
console.log("cantidad de elementos : " + nombres.length)