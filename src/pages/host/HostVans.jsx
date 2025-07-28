import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
export default function HostVans(){
  
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch('/api/host/vans')

        if(!res.ok){
          throw new Error(`HTTP error, ${error.status}`)
        }
        const data = await res.json()
        setVans(data.vans)
      } catch (error) {
        setError(error)
        console.error('Error:', error)      
      } finally{
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
   /*  <Link to={`/host/vans/${van.id}`} */
    <Link to={van.id}
    key={van.id}
    className="host-vans-link">
      <article className="host-van-single" key={van.id}>
      <img src={van.imageUrl} alt={van.name} />
      <div className="-host-van-info">
        <h3>{van.name}</h3>
        <p>{van.price}/day</p>
      </div>
      </article>
    </Link>
  ))
  
  
  return (
    <section className="host-vans-section">
      <h1>Your Listed Vans</h1>
     
        {vans.length > 0 ?  <div className="host-vans-list">{vansElement}</div> 
          : (<h2>...Loading</h2>)}
     

    </section>

  )
}