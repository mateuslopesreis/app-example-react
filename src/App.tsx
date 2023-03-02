import './App.css'
import Button from './components/Button'
import { Formulario } from './components/Formulario'
import { Nav } from './components/Nav'
import { Title } from './components/Title'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { StatesExample } from './pages/StatesExample'
import { Teste } from './pages/Teste'

function App() {
  return (
    <div id="App">
      <StatesExample/>
       <Nav />
    </div>
  )
}

export default App
