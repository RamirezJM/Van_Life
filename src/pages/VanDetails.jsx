import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export default function VanDetails(){
  
  const [van, setVan] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const params = useParams()
  const vanId = params.id

  
  useEffect(() => {
    const fetchVan = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/vans/${vanId}`)

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`)
        }
        const data = await res.json()
        
        setVan(data.vans)
      } catch (error) {
        setError(error)
        console.error('Error;', error)

      } finally {
        setLoading(false)
      }
    }
    if(vanId){
    fetchVan()
    }
  }, [vanId])

   if (loading) {
    return <p>loading...</p>
  }
  if (error) {
    return <p>error: {error.message}</p>
  }
  if(!van){
    return <p>Van no encontrada!</p>
  }

  
  
  return(
    <section className="van-details-section">
      <div className="van-details-container">
        <div className="van-info">
          <h2>{van.name}</h2>
          <i className={`van-type ${van.type} selected`}>{van.type.toUpperCase()}</i>
          <p>{van.price}<span>/day</span></p>
          <p>{van.description}</p>
          <button>Rent this Van</button>
        </div>
        <img src={van.imageUrl} alt={van.title} />
      </div>

    </section>
  ) 
}