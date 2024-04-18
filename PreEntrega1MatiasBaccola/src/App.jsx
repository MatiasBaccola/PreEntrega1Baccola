
import './App.css'
import Brand from './components/Brand'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <div className='header__container'>
      <Brand />
      <NavBar />
    </div>
    <ItemListContainer saludo="Saludos Tutorr!!"/>
    </div>
  )
}

export default App
