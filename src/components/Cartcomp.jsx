import React, { memo } from 'react'
import Cart_music from './Cart_music'
function Cartcomp(props) {
  return (
    <>
        <div className="header-cart">
            {props.data.map((e,i)=><Cart_music item={e} add={props.add} key={i} id={e.id} src={e.img} artiste={e.artiste} track={e.track} />)}
        </div>
    </>
  )
}

export default memo(Cartcomp) 