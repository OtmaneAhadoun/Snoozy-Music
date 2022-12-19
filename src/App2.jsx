import React from 'react'
import { useState } from 'react'
import Content from './components/Content'
import Fixed_bt from './components/Fixed_bt'
import R_side from './components/R_side'
import Library from './components/library'

function Container() {
  
  const[toggle,setToggle]=useState(false)
  const [libtoggeld,setLibtoggeld]=useState(false)
  const[newtoggle,setNewToggle]=useState(false)
  const [item,setItem]=useState(null)
  const [library,setLibrary]=useState([])
  return (
    <>
      {!libtoggeld&&<div className="toggled" onClick={()=>setNewToggle(p=>!p)}>
      <i className={newtoggle?'fa-solid fa-chevron-left':'fa-solid fa-chevron-right'}></i>
      </div>}
      {newtoggle&&<R_side valuelib={libtoggeld} toglib={setLibtoggeld} value={setToggle} bool={toggle} newbool={setNewToggle}/>}
      {!libtoggeld?<Content audio={setItem} value={toggle} makebool={setToggle}/>:<Library bool={setLibtoggeld} value={library}/>}
      {item&&<Fixed_bt library={setLibrary} librarytb={library} togg={newtoggle} audio={item}/>}
    </>
  )
}
export {Container}






