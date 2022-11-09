import React from 'react'
import './App.css';
import HookCount from './components/HookCount';
import HookCounterTwo from './components/HookCounterTwo';
import HookCountFour from './components/HookCountFour';
import HookCountTree from './components/HookCountTree';

function App() {
  return (
    <div className="App">
   <HookCount />
  < HookCounterTwo/>
 <HookCountTree/>
 <HookCountFour/>
    </div>
  );
}

export default App;
