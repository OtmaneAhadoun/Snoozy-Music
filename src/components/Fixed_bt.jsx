import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
function Fixed_bt(props) {
  const[test,setTEST]=useState({})
  const[loop,setLoop]=useState(false)
  const progress=useRef()
  const progress_place=useRef()
  const auddio=useRef()
  const range=useRef()
  const stratch=useRef()
  const togginput=useRef()
  const heart=useRef()
  if(loop==true){
    if(auddio.current.currentTime==auddio.current.duration){
      auddio.current.currentTime=0
    }else{
      auddio.current.play()
      stratch.current.classList.remove('fa-play')
      stratch.current.classList.add('fa-pause')
    }
  }
  useEffect(()=>{
    auddio.current.play()
    auddio.current.volume=0.5
    stratch.current.classList.add('fa-pause')
    stratch.current.classList.remove('fa-play')
    range.current.value=50
    togginput.current.classList.add('fa-volume-low')
    togginput.current.classList.remove('fa-volume-xmark')
    if(props.librarytb.includes(props.audio)){
      heart.current.classList.add('added')
    }else{
      heart.current.classList.remove('added')
    }
  },[props.audio])
  function catch_progress(e){
    progress.current.style.width=((e.target.currentTime*100)/e.target.duration)+'%'
    const end=formatdate(e.target.duration)
    const start=formatdate(parseFloat(e.target.currentTime))
    if(e.target.currentTime==e.target.duration){
      auddio.current.currentTime=0
      stratch.current.classList.remove('fa-pause')
      stratch.current.classList.add('fa-play')
    }
    setTEST({start,end})
  }
  function catch_place(e){
    auddio.current.currentTime=((e.nativeEvent.offsetX/e.target.offsetWidth)*auddio.current.duration)
  }
  function play(e){
    if(auddio.current.paused){
      auddio.current.play()
      e.target.classList.remove('fa-play')
      e.target.classList.add('fa-pause')
    }else{
      auddio.current.pause()
      e.target.classList.add('fa-play')
    }
  }
  function looping(){
    setLoop(v=>!v)
  }
  function formatdate(count){
    let munites=Math.floor(count / 60)
    let seconde=Math.floor(count % 60)
    if (seconde<10){
      seconde='0'+seconde
    }
    if(munites+1&&seconde+1){
      return `${munites}:${seconde}`
    }
  }
  function ranger(e){
    auddio.current.volume='0.'+e.target.value
  }
  function togginp(e){
    if(range.current.value!=0){
      range.current.value=0
      range.current.disabled=true
      auddio.current.volume=0
      e.target.classList.remove('fa-volume-low')
      e.target.classList.add('fa-volume-xmark')
    }
    else{
      range.current.value=50
      range.current.disabled=false
      auddio.current.volume=0.5
      e.target.classList.add('fa-volume-low')
      e.target.classList.remove('fa-volume-xmark')
    }
  }
  function addtolibrary(){
    if(heart.current.classList.contains('added')){
      props.library(ee=>ee.filter(e=>e!=props.audio))
      heart.current.classList.remove('added')
    }else{
        if(!props.librarytb.includes(props.audio)){
          props.library(ee=>[...ee,props.audio])
          heart.current.classList.add('added')
        }  
      }
  }
  return (
    <div className={props.togg?'Fixed_bt to_hide':'Fixed_bt'}>
        <div className="play-left">
          <img src={props.audio.img} alt="" />
          <div className="info">
            <small>{props.audio.track}</small>
            <a href="#">{props.audio.artiste}</a>
          </div>
          <i onClick={addtolibrary} ref={heart} className="fa-regular fa-heart"></i>
        </div>
        <div className="play-middle">
          <div className="audio_place">
            <i className="fa-solid fa-shuffle"></i>
            <i className="fa-solid fa-backward"></i>
            <i className="fa-solid fa-play" ref={stratch} onClick={(e)=>play(e)}></i>
            <i className="fa-solid fa-forward"></i>
            <i className={loop?'fa-solid fa-repeat active':'fa-solid fa-repeat'} onClick={()=>looping()}></i>
          <audio ref={auddio} src={props.audio.src} onTimeUpdate={(e)=>catch_progress(e)}></audio>
          </div>
          <div className="progress_area">
            <span className='start'>{test.start?test.start:'0:00'}</span>
              <div className="progress_place" ref={progress_place} onClick={(e)=>catch_place(e)}>
                <div ref={progress} className="progress"></div>
              </div>
            <span className='end'>{test.end?test.end:'0:00'}</span>
          </div>
          </div>
          <div className="play-right">
            <i className="fa-solid fa-volume-low" ref={togginput} onClick={e=>togginp(e)}></i>
            <input ref={range} type="range" max='99'  min='0' onChange={(e)=>ranger(e)} />
          </div>
    </div>
  )
}

export default Fixed_bt