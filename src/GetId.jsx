import { useState } from 'react';
import './App.css';
import getId from './Functions/getId';

function App() {
  const [kv, setKv] = useState([]);
  const add = () => {
    setKv((k) => [...k, getId('KV')]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>GRUD</h1>
        <button onClick={add}>A-DD</button>
        <div className="flex">
          {kv.map((kv, i) => (
            <div className="red" key={i}>
              {kv}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}
export default App;
