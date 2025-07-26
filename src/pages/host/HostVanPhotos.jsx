import { useOutletContext } from "react-router-dom"

export default function Photos(){
  const {imageUrl} = useOutletContext()
  
  return (
    <img src={imageUrl} alt="van image" />
  )
}