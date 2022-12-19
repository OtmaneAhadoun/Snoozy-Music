import React, { memo } from 'react'

function SearchComp(props) {
  return (
    <div className='search-comp'>
        <div className="into-search">
            <input type="text" placeholder='Search for music' onChange={(e)=>props.seartchfor(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="togeld" onClick={()=>props.makebool(v=>!v)}></div>
    </div>
  )
}

export default memo(SearchComp)