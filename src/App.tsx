import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }
  console.log(loggingIdentity([1,2,3,4,5]));

  return (
    <div className="App">
   
   
    </div>
  );
}

export default App;
