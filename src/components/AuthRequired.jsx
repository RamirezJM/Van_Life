import { Outlet, Navigate } from "react-router-dom"

export default function AuthRequired(){
  const auth = false

  if(!auth){
    return <Navigate to='/login' state={{message : "You must log in first"}}/>
  }
  return <Outlet/>
}