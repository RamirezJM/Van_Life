import '../server'
import { useState, useEffect } from 'react'

export default function Van() {

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vansElement = vans.map(van => (
    <div key={van.id} className='van-card'>
      <img src={van.imageUrl} alt={van.name} />
      <h3>{van.name}</h3>
      <p>{van.price}<span>/day</span></p>
    </div>
  ))

 return (
    <div>
      {vansElement}
    </div>
  )
}