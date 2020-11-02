import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,NavLink,useParams } from 'react-router-dom'


/*
De https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json
Mostrar en / los nombres de los países que comienzan con A. En un ul. Cada pais debe tener un link a /pais/:pais (Ej: pais/Argentina).
*/

const Pais = () => {
  const [Pais, setPais] = useState( [] )
  let params = useParams();
  const getPais = () => {
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json')
      .then(response => response.json())
      .then(Pais => {setPais(Pais);})
      .catch(err => console.log(err.message))
  }


  useEffect(() => { getPais();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [])
return (  
  <section>
    <h1>Ciudades:</h1>
      <ul>
{Pais[params.id]? Pais[params.id].map((city, i) => <li>nombre ciudad:{city}---indice:{i}</li>): null}
        </ul>
         <p><Link to="/">Regresar a la home</Link></p>
          
  </section>    
)
}

/*Busco Lista de Paises con la Letra A:*/
const Paises = () => {
    const [Paises, setPaises] = useState( [] )
  
    function getPaises() {
      fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json')
        .then(response => response.json())
        .then(Paises => setPaises(Paises))
        .catch(err => console.log(err.message))
    }
  
    useEffect(() => {
      getPaises()
    }, [])
    const PaisArray=  Object.keys(Paises);
    return (  
      <ul>
          {PaisArray.filter(Pais => Pais[0].toUpperCase()==="A").map((country,indice)=>
          <li key={indice}><NavLink to={"/Pais/"+ country}> {country}</NavLink>
          </li>
          )}    
          
      </ul> 
       
    )
  }

  const App = () => (
        <div className="App">
          <header className="App-header">          
            <h1 className="App-title">Lista de Paises con A</h1>
          </header>
          <Switch>
            <Route exact path="/"><Paises/></Route>
            <Route exact path="/Pais/:id"><Pais/></Route>
          </Switch>        
        </div>
      );
export default App;