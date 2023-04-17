import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputText } from './components/inputText'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ola tudo bem</h1>
      
      <InputText
        id="nome"
        name="nome"
        placeholder="nome"
      />

      <InputText
        id="sobrenome"
        name="sobrenome"
        placeholder="sobrenome"
      />

    </>

  );
}

export default App
