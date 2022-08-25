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
    textAlign: 'center',
  }
  const gridDetails = [
    {name: "nokia", price:"42000", dis: "lala lala"},
    {name: "Samsung", price:"27000", dis: "nana nana"},
    {name: "Apple", price:"98999", dis: "bla bla bla"}
  ]
for (let index = 0; index < gridDetails.length; index++) {
      const element = gridDetails[index];
  var forLoop = <Product title={element.name} price={element.price} dis={element.dis}></Product>
    };
  
 
  const result = gridDetails.map(x => <Product title={x.name} price={x.price} dis={x.dis}></Product>)
  return(
    

    <div style={hero}>
    <Counter></Counter>
      <div style={loopHome}>
      {result}
      {forLoop}
      </div>
      
    </div>
  )
};

function Product(props){
  const loopStyle = {
    border: '1px solid gray',
    borderRadius: '3px',
    padding: '20px',
    width: '300px',
    height: '200px',
    margin:'0px 5px'
  }
  const titleStyle = {
    color: '#fff',
    fontSize: '28px',
  };

  const buttonStyle = {
    backgroundColor: '#24c9a4',
    color: '#fff',
    border:'none',
    borderRadius: '3px',
    padding: '10px',
    fontSize: '23px',
  };
  
  
  return (
    
    
      <div style={loopStyle}>
        <h1 style={titleStyle}>product: {props.title}</h1>
        <p style={titleStyle}>discrb: {props.dis}</p>
        <p style={titleStyle}> Price: {props.price}</p>
        <button style={buttonStyle}>Add to car Now</button>
      </div>
    

  );
};

function Counter(){
  const [count, setCount] = useState(10);
  const incraseCount = () => setCount(count + 1);

  return(
    <div>
      <h1 style={{margin: '0px', padding: ' 0 50px',}}>Counter: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Incease Counter</button>
      <button onMouseMove={() => setCount(count - 1)}>Decrase counter</button>
    </div>
  )
  }




export default App;
