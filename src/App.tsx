
import './App.css';

function App() {

  function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }
  console.log(loggingIdentity([1,2,3,4,5]));

  //Generic Types
function identity<Type>(arg:Type):Type{
    return arg;
  }
let Myidentity:<Type>(arg:Type) => Type = identity;

//can use different names for genertic type paramters
let identi:<input>(arg:input) => input = identity;

let ide : {<Type>(arg:Type):Type}  = identity;
  return (
    <div className="App">
   
   
    </div>
  );
}

export default App;
