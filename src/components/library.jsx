import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Cartcomp from './Cartcomp'
function library(props) {
  return (
    <motion.div className='library'>
        <BrowserRouter>
        <div className="fixed">
            <NavLink to='https://otmaneahadoun.github.io/Snoozy-Music/'><i class="fa-solid fa-arrow-left" onClick={()=>{props.bool(false)}}></i></NavLink>
            <div className="links">
                <div className="one">
                    <NavLink to='/'>Liked music</NavLink>
                </div>
                <div className="one">
                    <NavLink to='artiste'>artiste</NavLink>
                </div>
                <div className="one">
                    <NavLink to='albums'>albums</NavLink>
                </div>
                <div className="one">
                    <NavLink to='playlist'>playlist</NavLink>
                </div>
            </div>
        </div>
        
        <div className="notfixed">
          <Routes>
            <Route path='/' element={<Cartcomp data={props.value}/> }></Route>
            <Route path='artiste' element={<Cartcomp data={props.value}/> }></Route>
            <Route path='albums' element={<Cartcomp data={props.value}/> }></Route>
            <Route path='playlist' element={<Cartcomp data={props.value}/> }></Route>
          </Routes>
        </div>
        </BrowserRouter>
        
    </motion.div>
  )
}

export default memo(library) 