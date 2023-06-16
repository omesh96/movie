import React, { useState } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'

const HeroBanner = () => {
  const [background,setBackGround]=useState("")
  const [query,setQuery]=useState("")
  const navigate=useNavigate()


const searchQueryHandle=(e)=>{
if(e.key=== "Enter" && query.length > 0){
navigate(`/search/${query}`)  // it will navigate to search page after successfull api call
}
}


  return (
   <div className="heroBanner">
    <div className="wrapper">
      <div className="heroBannerContent">
      <span className="title">Welcome.</span>
      <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
     <div className="searchInput">
      <input type="text" placeholder='Search for a movie or tv show....'
      onChange={(e)=> setQuery(e.target.value)}
      onKeyUp={searchQueryHandle}
      />
      <button>Search</button>
     </div>
      </div>
    </div>
   </div>
  )
}

export default HeroBanner