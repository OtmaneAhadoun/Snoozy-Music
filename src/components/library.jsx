import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Cartcomp from './Cartcomp'
function library(props) {
  return (
    <motion.div className='library'>
        <BrowserRouter>
        <div className="fixed">
            <NavLink to='Snoozy-Music/'><i class="fa-solid fa-arrow-left" onClick={()=>{props.bool(false)}}></i></NavLink>
            <div className="links">
                <div className="one">
                    <NavLink to='Snoozy-Music/'>Liked music</NavLink>
                </div>
                <div className="one">
                    <NavLink to='Snoozy-Music/artiste'>artiste</NavLink>
                </div>
                <div className="one">
                    <NavLink to='Snoozy-Music/albums'>albums</NavLink>
                </div>
                <div className="one">
                    <NavLink to='Snoozy-Music/playlist'>playlist</NavLink>
                </div>
            </div>
        </div>
        
        <div className="notfixed">
          <Routes>
            <Route path='Snoozy-Music/' element={<Cartcomp data={props.value}/> }></Route>
            <Route path='Snoozy-Music/artiste' element={<Cartcomp data={props.value}/> }></Route>
            <Route path='Snoozy-Music/albums' element={<Cartcomp data={props.value}/> }></Route>
            <Route path='Snoozy-Music/playlist' element={<Cartcomp data={props.value}/> }></Route>
          </Routes>
        </div>
        </BrowserRouter>
        
    </motion.div>
  )
}

export default memo(library) 