/*
Con NODE: JSON  de torneo con equipos, pg, pe,pp,gf,gc. 
Calcular puntaje, dif gol y campeón (o empatados en el primer puesto). Y mostrarlo en Node
Recordar que PG es 3 puntos y PE 1 punto (PP es 0 puntos)
*/
const array = [
    {"Equipo": "Barcelona", "PG": 22, "PE": 7, "PP": 6, "GF": 49, "GC": 33,},
    {"Equipo": "Getafe", "PG": 14, "PE": 11, "PP": 9, "GF": 42, "GC": 31,},
    {"Equipo": "Real Sociedad", "PG": 15, "PE": 6, "PP": 13, "GF": 51, "GC": 43,},
    {"Equipo": "Atletico Madrid", "PG": 16, "PE": 15, "PP": 4, "GF": 47, "GC": 26,},
    {"Equipo": "Valencia", "PG": 13, "PE": 11, "PP": 11, "GF": 45, "GC": 51,},
    {"Equipo": "Villareal", "PG": 16, "PE": 6, "PP": 12, "GF": 54, "GC": 44,},
    {"Equipo": "Real Madrid", "PG": 23, "PE": 8, "PP": 3, "GF": 62, "GC": 21,},
]

for( let i of Object.keys(array)){
    
    if(i=='0'){
        const barcelona= Object.values(array[0])
        console.log(barcelona)
        const valor = calcularPtos(barcelona)
        console.log(valor)
        const diferncia = caculaDifgoles(barcelona)
        console.log(diferncia)
    }
    if(i=='1'){
        const gatafe= Object.values(array[1])
        console.log(gatafe)
        const valor = calcularPtos(gatafe)
        console.log(valor)
        const diferncia = caculaDifgoles(gatafe)
        console.log(diferncia)

    }
}

//const barcelona= Object.values(array[0])
//const gatafe= Object.values(array[1])
const realSociedad= Object.values(array[2])
const altleticoMadrid= Object.values(array[3])
const valencia= Object.values(array[4])
const villareal=Object.values(array[5])
const realMadrid=Object.values(array[6])

function calcularPtos(equipo){
   return ((equipo[1]*3) + (equipo[2]*1))
}

function caculaDifgoles(equipo){
    return (equipo[4]) - (equipo[5])
}

//const valor = calcularPtos(barcelona)
//const diferncia = caculaDifgoles(barcelona)
//console.log(valor,diferncia)



