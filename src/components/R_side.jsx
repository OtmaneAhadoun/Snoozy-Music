import React, { memo,useState } from 'react'
import {dataa} from './Data.js'
function R_side(props) {
  const [music_type,setMusic_type]=useState(dataa)
  return (
    <div className='R_side'>
        <div className="logo">
          <h1>Snoozy</h1>
            <img src="./assetce/forsite/doclogo.png" alt="" />
        </div>
        <div className="things">
          <div className={props.valuelib?'onething':'onething active'} onClick={()=>{
            props.newbool(v=>!v)
            props.toglib(false)
          }
            }>
            <i className="fa-solid fa-house"></i>
            <h2>Home</h2>
          </div>
          <div className={props.bool ? 'active onething' : 'onething'} onClick={()=>props.value(v=>{
            props.newbool(v=>!v)
            if((v==true || v==false) && document.documentElement.scrollTop!=0){
              document.documentElement.scrollTop=0
              return true
            }
            return !v
          })
            }>
            <i  className="fa-solid fa-magnifying-glass"></i>
            <h2 >Search</h2>
          </div>
          <div className={props.valuelib?'onething active':'onething'} onClick={()=>{
            props.toglib(true)
            props.newbool(false)
            }}>
            <i className="fa-solid fa-bookmark"></i>
            <h2>Library</h2>
          </div>

          <div className="typed-music">
            {music_type.map((e,i)=><span key={i}>{e}</span>)}
          </div>
        </div>
    </div>
  )
}

export default memo(R_side) 