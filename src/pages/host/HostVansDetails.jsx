import { useEffect, useState } from "react"
import { useParams , Link, NavLink, Outlet} from "react-router-dom"


export default function HostVansDetails(){
  const [van, setVan] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const params = useParams()
  const vanId = params.id

  useEffect(() => {
    const fetchVan = async () => {
      try {
      setLoading(true)
      const res = await fetch(`/api/host/vans/${vanId}`)

      if(!res.ok){
        throw new Error(`HTTP error: ${res.status}`)
      }
      const data = await res.json()
      setVan(data.vans)  
      
    } catch (error) {
        console.error('Error:', error)
        setError(error)
      }
      finally{
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

  return (
    <>
      <Link to='..' relative="path">Back to all vans</Link>
      <section className="host-van-details-section">
      <div className="host-van-details-container">
         <img src={van.imageUrl} alt={van.title} />
        <div className="van-info">
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p>{van.price}<span>/day</span></p>
        </div>
       
      </div>
      <nav className="van-details-nav">
        <NavLink to='.' className={({isActive}) => isActive ? 'host-link-active' : 'host-link'} end>Details</NavLink>
        <NavLink to='pricing' className={({isActive}) => isActive ? 'host-link-active' : 'host-link'}>Pricing</NavLink>
        <NavLink to='photos' className={({isActive}) => isActive ? 'host-link-active' : 'host-link'}>Photos</NavLink>
      </nav>
    <Outlet/>
    </section>
</>
  )
}