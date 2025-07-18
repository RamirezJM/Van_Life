import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/Van'
import Footer from './components/Footer'
import VanDetails from './pages/VanDetails'


function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Van />} />
          <Route path='/vans/:id' element={<VanDetails />} />
        </Routes>
      </main>
      <Footer />


    </>
  )
}

export default App
