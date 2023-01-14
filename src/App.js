import logo from './logo.svg';
import './App.css';
import { woocommerce } from "./woocommerce";
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    const a = async function getCategories(){
      return await woocommerce.get('products/categories',{per_page:50})
     .then(res => console.log(res))
     
    }

   a()
   
    
    
  },[])
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
