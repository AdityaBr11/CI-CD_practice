import {useState} from 'react'
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  return (
    <div className='App'>
      <h1>{count}</h1>
      <div>
         <button onClick={()=>setCount(count-1)}>DEC</button>
         <button onClick={()=>setCount(count+1)}>INC</button>
      </div>
    </div>
  );
}

export default App;
