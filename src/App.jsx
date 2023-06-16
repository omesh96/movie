import { useState,useEffect } from 'react'
import {fetchDataFromApi} from "./utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './Store/homeSlice'
import AllRoutes from './AllRoutes/AllRoutes'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


function App() {

 
  const dispatch = useDispatch()
  const {url}=useSelector((state)=> state.home)
 
  console.log("url",url)

  const apiTesting=()=>{
  fetchDataFromApi(`/movie/popular`).then((data)=> {
  console.log(data)
  dispatch(getApiConfiguration(data))
 })
  
  }
 
  useEffect(()=>{
  apiTesting()
  },[])

  return (
    <>
      <div className='app'>
      {/* <Header /> */}
       <AllRoutes />
       {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
