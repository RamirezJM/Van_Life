import { useOutletContext } from "react-router-dom"

export default function Pricing(){
  const {price} = useOutletContext()
  
  return (
    <p>{price}</p>

  )

}
