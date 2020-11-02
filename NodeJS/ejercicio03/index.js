/*
Con NODE: Obtener el promedio de las notas Pedro del siguiente JSON y mostrarlo en consola con NODE.
 En otra consola mostrar la materia con mayor promedio.
const notas = [{"Pedro":{
"Matematica": 10,
"Geografia": 6,
"Historia": 9}
},
{"Juana":{
"Matematica": 5,
"Geografia": 10,
"Historia": 7} 
}]

*/
const notas = [{"Pedro":{
    "Matematica": 10,
    "Geografia": 6,
    "Historia": 9}
    },
    {"Juana":{
    "Matematica": 5,
    "Geografia": 10,
    "Historia": 7} 
    }]
        
    const clasificaciones= Object.values(notas)
    const matematica=clasificaciones[0]["Pedro"]["Matematica"]
    const geografia=clasificaciones[0]["Pedro"]["Geografia"]
    const historia=clasificaciones[0]["Pedro"]["Historia"]
    const Promedio=(matematica+geografia+historia)/3
    console.log(`El promedio de notas de Pedro: ${Promedio.toFixed(2)}`)

    //clasificaciones.reduce((a,b) => ({x:a["Pedro"]["Matematica"] + b["Juana"]["Matematica"]}))
    const suma_mate=clasificaciones.reduce(function(a,b){return a["Pedro"]["Matematica"] + b["Juana"]["Matematica"]})
    const suma_geo = clasificaciones.reduce(function(a,b){return a["Pedro"]["Geografia"] + b["Juana"]["Geografia"]})
    const suma_his = clasificaciones.reduce(function(a,b){return a["Pedro"]["Historia"] + b["Juana"]["Historia"]})
    
    if (suma_mate/2 > suma_geo/2 && suma_mate/2 >suma_his/2 ){
        console.log("El promedio mas por Materia Matermatica : "+suma_mate/2)
    }else if (suma_geo/2 > suma_mate/2 && suma_geo/2 >suma_his/2 ){
        console.log("El promedio mas por Materia  Geografia: "+suma_geo/2)
    }else{
        console.log("El promedio mas por Materia Historia: "+suma_his/2)
    }

    
    
    
  