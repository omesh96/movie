import { useState,useEffect } from 'react'
import {fetchDataFromApi} from "./utils/api"


function App() {

  const apiTesting=async()=>{
  fetchDataFromApi(`/movie/popular`)
 .then((data)=> console.log(data))
  
  }
 
  useEffect(()=>{
  apiTesting()
  },[])

  return (
    <>
      <div className='app'>
        App
      </div>
    </>
  )
}

export default App
