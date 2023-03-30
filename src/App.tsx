import './App.css'
import Button from './components/ButtonUI'
import { Formulario } from './components/Formulario'
import { Gallery } from './components/Gallery'
import { Nav } from './components/Nav'
import { Title } from './components/Title'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { StatesExample } from './pages/StatesExample'
import { Teste } from './pages/Teste'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Agenda } from './pages/Agenda'
import { GalleryPage } from './pages/GalleryPages'



function App() {
  return (
    <div id="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Gallery' element={<GalleryPage/>}/>
            <Route path='/Agenda' element={<Agenda/>}/>
          </Routes>
          <Nav />
       </BrowserRouter>
    </div>
  )
}

export default App
