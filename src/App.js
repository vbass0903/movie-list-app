import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import { useState, useEffect } from 'react'
// import '@fontsource/roboto';

function App() {
  const [screen, setScreen] = useState("list")

  const changeScreen = (change) => {
    setScreen(change)
  }
  
  return (
    <div className="App">
      <Header curScreen={screen} onChange={changeScreen}/>
      <Main inScreen={screen}/>
    </div>
  );
}

export default App;
