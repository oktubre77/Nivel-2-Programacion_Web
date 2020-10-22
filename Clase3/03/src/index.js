import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';


const Dolar =()=>{
    const [dolares, setDolares] = useState( [] )
    const getDolar= () => {
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
          .then(response => response.json())
          .then(dolares => setDolares(dolares))
          .catch(err => console.log(err.message))
      }
      useEffect(() => {
        getDolar()
      }, [dolares])
      return (  
        <section>
          {dolares.filter( dolar => dolar.casa.nombre==="Dolar Oficial").map(money =>
        <div key={money.id}>
          <h1>Casa: {money.casa.nombre}</h1>
          <p>venta : {money.casa.venta}</p>
          <p>compra : {money.casa.compra}</p>
         </div>
           )} 
      </section>  
    );
}

ReactDOM.render( <Dolar/>, document.getElementById('root') );

