import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import View from './pages/View'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id/view' element={<View />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
