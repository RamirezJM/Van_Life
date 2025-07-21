import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/Van'
import VanDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './HostLayout'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Van />} />
            <Route path='vans/:id' element={<VanDetails />} />

            <Route path='host' element={<HostLayout />}>
              <Route path='host' element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
