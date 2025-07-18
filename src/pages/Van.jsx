import '../server'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Van() {

  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVans = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/vans')

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`)
        }
        const data = await res.json()
        setVans(data.vans)
      } catch (error) {
        setError(error)
        console.error('Error;', error)

      } finally {
        setLoading(false)
      }
    }
    fetchVans()

  }, [])
  if (loading) {
    return <p>loading...</p>
  }
  if (error) {
    return <p>error: {error.message}</p>
  }

  const vansElement = vans.map(van => (
    <div key={van.id} className='van-card'>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={van.name}  className='van-image'/>
        <h3 className='van-title'>{van.name}</h3>
        <p className='van-price'>{van.price}<span>/day</span></p>
        <i className={`van-type ${van.type} selected`}>{van.type.toUpperCase()}</i>
      </Link>
    </div>
  ))

  return (
    <section className='vans-section'>
      <h1>Explore our van options</h1>
      <div className='vans-container'>
        {vansElement}
      </div>
    </section>
  )




  /* 
      FORMA SIMPLE

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
    ) */
}