import React from 'react'

function Cart_music(props) {
  return (
    <>
        <div className="cart-music">
            <div className="head">
                <img src={props.src} alt=""  />
                <div className="play-changer" onClick={()=>props.add(props.item)}>
                  <i className="fa-solid fa-play"></i>
                </div>
            </div>
            <div className="info-cart">
                <h3>{props.track}</h3>
                <a href="#">{props.artiste}</a>
            </div>
        </div>
    </>
  )
}

export default Cart_music