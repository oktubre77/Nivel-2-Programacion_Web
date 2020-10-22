import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,NavLink,useParams } from 'react-router-dom'
import preload from "./preload.gif";

const Tarea = () => {
  const [tarea, setTarea] = useState( [] )
  let params = useParams();
  const getTarea = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(tarea => {setTarea(tarea);})
      .catch(err => console.log(err.message))
  }


  useEffect(() => { getTarea();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [])
      return (  
      <section>
        <h1>{ params.id } - {tarea.title}</h1>
         <p>Estado de la Tarea: {tarea.completed?tarea.completed:<img src={preload} alt="preload" width="16"/>}</p>   
         <p><Link to="/">Regresar a la home</Link></p>
      </section>    
  )
}
/*Busco las tareas del user 8*/
const Tareas = () => {
    const [tareas, setTareas] = useState( [] )
  
    function getTareas() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(tareas => setTareas(tareas))
        .catch(err => console.log(err.message))
    }
  
    useEffect(() => {
      getTareas()
    }, [])
  
    return (  
      <ul>
          {tareas.filter( tarea => tarea.userId===8).map( trabajo =>
          <li key={trabajo.id}><NavLink to={"/tarea/"+trabajo.id}>
          {trabajo.title}</NavLink>
          </li>
            )}    
          
      </ul> 
       
    )
  }

  const App = () => (
        <div className="App">
          <header className="App-header">          
            <h1 className="App-title">Lista de Tareas UsuarioId: 8</h1>
          </header>
          <Switch>
            <Route exact path="/"><Tareas/></Route>
            <Route exact path="/Tarea/:id"><Tarea/></Route>
          </Switch>        
        </div>
      );
export default App;