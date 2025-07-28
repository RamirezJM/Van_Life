import '../server'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Van() {

  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get('type')
/*   console.log(typeFilter) */

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

  const filterVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

  const vansElement = filterVans.map(van => (
    <div key={van.id} className='van-card'>
{/*       <Link to={`/vans/${van.id}`}> */}
          <Link to={van.id}>
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
      <nav className='vans-nav'>
        <button onClick={() => {setSearchParams({type: 'simple'})}} 
          className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>

        <button onClick={() => {setSearchParams({type: 'rugged'})}} 
          className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
        
        <button onClick={() => {setSearchParams({type: 'luxury'})}}
          className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
        
        {typeFilter ? (<button onClick={() => {setSearchParams({})}}>Clear filters</button>) : null}
        
        
         {/* <Link to='?type=simple' className='van-type simple'>Simple</Link>
         <Link to='?type=rugged' className='van-type rugged'>Rugged</Link>
         <Link to='?type=luxury' className='van-type luxury'>Luxury</Link>
         <Link to='.' className='van-type clear-filters'>Clear filters</Link> */}
      </nav>
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