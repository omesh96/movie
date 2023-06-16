import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../Pages/Home/Home'
import Details from '../Pages/Details/Details'
import Explore from '../Pages/Explore/Explore'
import Search from '../Pages/Search/Search'
import PageNotFound from '../Pages/404/PageNotFound'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/:mediaType/:id' element={<Details />}></Route>
            <Route path='/explore/:mediaType' element={<Explore />}></Route>
            <Route path='/search/:query' element={<Search />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes