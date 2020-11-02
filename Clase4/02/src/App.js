import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,NavLink,useParams } from 'react-router-dom'


/*
De https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json
Mostrar en la home / - Todos los títulos de los libros en una lista con un link a /libro/:isbn
En libro/isbn (Ej: /libro/1935182722). Mostrar:
Título
ISBN
Páginas
Tapa como imagen (thumbnailUrl)
Descripción longDescription
Autores
Categorías

*/

const Libro = () => {
  const [Libro, setLibro] = useState( [] )
  let params = useParams();
  const getLibro = () => {
    fetch('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json')
      .then(response => response.json())
      .then( Libro => {setLibro(Libro);})
      .catch(err => console.log(err.message))
  }


  useEffect(() => {getLibro();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [])
return (  
  <section>
    
    {Libro.filter( book => parseInt(book.isbn)===parseInt(params.id)).map(libro=>
    <>
          <h2 key={libro.isbn}><span>Titulo :</span> {libro.title}</h2>
          <h4><strong>isbn:</strong>{libro.isbn}</h4>
          <h4>Paginas: {libro.pageCount}</h4>
          <h4>Imagen: {libro.thumbnailUrl}</h4> 
          <h4>Descripcion : {libro.longDescription} </h4>
          <h4>Autores : {libro.authors} </h4>
          <h4>Categorias : {libro.categories} </h4>
          <br/>
      </>)
      }
            <p><Link to="/">Regresar a la home</Link></p>
                
  </section>    
)
}

/*Busco Lista de Paises con la Letra A:*/
const Libros = () => {
    const [Libros, setLibros] = useState( [] )
  
    function getLibros() {
      fetch("https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json")
        .then(response => response.json())
        .then(Libros => setLibros(Libros))
        .catch(err => console.log(err.message))
    }
  
    useEffect(() => {
      getLibros()
    }, [])
    //const PaisArray=  Object.keys(Paises);
    return (  
      <ul>
          {Libros.map(libros=>
          <li key={libros.isbn}><NavLink to={"/Libros/"+ libros.isbn}> {libros.title}</NavLink>
          </li>
          )}    
          
      </ul> 
       
    )
  }

  const App = () => (
        <div className="App">
          <header className="App-header">          
            <h1 className="App-title">Lista Titulo de Libros</h1>
          </header>
          <Switch>
            <Route exact path="/"><Libros/></Route>
            <Route exact path="/Libros/:id"><Libro/></Route>
          </Switch>        
        </div>
      );
export default App;