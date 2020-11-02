const nombres = ["Andrés", "Carlos", "Liliana", "Soledad","Ana", "Carolina", "Magdalena",
"Silvia", "Marcos", "Elena", "Carla", "Antonio"]

for (let nombre of nombres){
    let posicionA=nombre.indexOf("A")
    let posicionB=nombre.indexOf("B")
    let posicionC=nombre.indexOf("C")

    if(posicionA != -1){
        console.log(`Nombre con A : ${nombre} `)
    }
    if(posicionB != -1){
        console.log(`Nombre con B : ${nombre} `)
    }
    if(posicionC != -1){
        console.log(`Nombre con C : ${nombre} `)
    }
}