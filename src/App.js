import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';






function App (){
    const loopHome = {
      display: 'flex',
      flexWarp: 'warp',
      alignItems: 'center',
      justifyContent: 'center',
    };
    const hero ={
      backgroundColor: 'rgb(0, 99, 90)',
      height: '100vh',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    const gridDetails = [
      {name: "nokia", cart:"0", dis: "lala lala"},
      {name: "Samsung", cart:"0", dis: "nana nana"},
      {name: "Apple", cart:"0", dis: "bla bla bla"}
    ]
    
    const result = gridDetails.map(x => <Product title={x.name} cart={x.cart} dis={x.dis}></Product>)
    return(
      <div style={hero}>
        <div style={loopHome}>
        {result}
        </div>
      </div>
    )
  };

  function CartCount (){
    const buttonStyle = {
      backgroundColor: '#24c9a4',
      color: '#fff',
      border:'none',
      borderRadius: '3px',
      padding: '10px',
      fontSize: '23px',
      cursor: 'pointer',
    };
    const titleStyle = {
      color: '#fff',
      fontSize: '28px',
    };
    let [cart, setCart] = useState(0);
    const newCart = () => setCart (cart +1);
    return (
      <div>

        <p style={titleStyle} > inCart: {cart}</p>
        <button style={buttonStyle} onClick={newCart}>Add to cart</button>
        
      </div>
    )
  }

function Product(props){
  const loopStyle = {
    border: '1px solid gray',
    borderRadius: '3px',
    padding: '20px',
    width: '300px',
    height: '200px',
    margin:'0px 5px',
  }
  const titleBtyle = {
    color: '#fff',
    fontSize: '28px',
  };
  

  return (
    
    
      <div style={loopStyle}>
        <h1 style={titleBtyle}>product: {props.title}</h1>
        <p style={titleBtyle}>discrb: {props.dis}</p>
        <CartCount></CartCount>
      </div>
    

  );
};






export default App;

