import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
  
  const {description} = useOutletContext()
  return(
    <p>{description}</p>
  )
}