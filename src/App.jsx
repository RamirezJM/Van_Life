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
import HostVans from './pages/host/HostVans'
import HostVansDetails from './pages/host/HostVansDetails'
import HostLayout from './HostLayout'
import HostVanInfo from './pages/host/HostVansInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'


function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Van />} />
            <Route path='vans/:id' element={<VanDetails />} />

            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVansDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path='pricing' element={<HostVanPricing />} />
                <Route path='photos' element={<HostVanPhotos />} />

              </Route>
            </Route>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
