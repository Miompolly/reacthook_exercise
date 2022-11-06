import React from 'react'
import './App.css';
import HookCount from './components/HookCount';
import HookCounterTwo from './components/HookCounterTwo';
import HookCountTree from './components/HookCountTree';

function App() {
  return (
    <div className="App">
   <HookCount />
  < HookCounterTwo/>
 <HookCountTree/>
    </div>
  );
}

export default App;
