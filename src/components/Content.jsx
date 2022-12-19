import React, { memo } from 'react'
import { useState } from 'react'
import Cartcomp from './Cartcomp'
import SearchComp from './SearchComp'
import musicdata from './MusicData'
import { motion } from 'framer-motion'
import slideData from './slideData'
import { useRef } from 'react'
import { useEffect } from 'react'
function Content(props) {
    const [inputsearch,setInputsearch]=useState('')
    const [width,setWidth]=useState(0)
    const dragage=useRef()
    const filtres=musicdata.filter(e=>e.track.toLocaleLowerCase().includes(inputsearch.toLocaleLowerCase()))
    function Addtolisten(e){
      props.audio(e)
    }
    useEffect(()=>{
      setWidth((dragage.current.scrollWidth-dragage.current.offsetWidth))
    },[])
  return (
    
    <div className='Content'>
      <div className="header" ref={dragage}>
        <motion.div drag='x'  dragConstraints={{right:0,left:-width}} whileTap={{cursor:'grabbing'}} className="slide">
        {slideData.map(e=>(
          <motion.div className='item'><img draggable={false}  src={e} /></motion.div>
        ))}
        </motion.div>
        {props.value&&<SearchComp seartchfor={setInputsearch} makebool={props.makebool} />}
        </div>
        <Cartcomp data={filtres} add={Addtolisten}/>
    </div>
  )
}

export default memo(Content)