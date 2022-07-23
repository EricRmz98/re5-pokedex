import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './components/Login'
import Pokedex from './components/Pokedex'

function App() {

  return (
   <HashRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/pokedex' element={<Pokedex/>}/>
    </Routes>
   </HashRouter>
  )
}

export default App
