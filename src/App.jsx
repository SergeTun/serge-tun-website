import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx';
import Body from './components/body.jsx';

function App() {
  
  return (
    <div>
      <h1>
        <Header />
      </h1>
      <Body />
    </div>
    
  )
}

export default App
