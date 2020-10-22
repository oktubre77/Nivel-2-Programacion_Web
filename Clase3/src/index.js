import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

/*
Con React (sin rutas): mostrar todos los usuarios de https://jsonplaceholder.typicode.com/users 
cuyo name comienza con C
Los datos a mostrar son:
Nombre
Email
website
company name
company catchPhrase


*/
const Listar = () => {
  const [user, setUser] = useState([])
  
  //const [user, setUser] = useState( {name:"----",email:"---"} )

  const getUser = () => {
    // Traemos la info de un JSON online
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => {setUser(user)})
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    getUser()
  }, [user])
    
  return (  
    <section>
                
        {user.filter( use => use.name.slice(0,1)==="C").map(usuario =>
        <div key={usuario.id}>
          <h1>Name: {usuario.name}</h1>
          <p>Email : {usuario.email}</p>
          <p>Website : {usuario.website}</p>
          <p>Company: {usuario.company.name}</p>
          <p>CompanyCatch: {usuario.company.catchPhrase}</p> 
        </div>

      )} 
      </section>        
 
  )
}

ReactDOM.render(<Listar />, document.getElementById('root'));

