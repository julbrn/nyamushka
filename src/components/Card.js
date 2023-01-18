import cat from "../images/cat.png";
import cat2 from "../images/cat-opacity.png";
import React, { useState } from "react";


function Card({ productInfo }) {
  const [status, setStatus] = useState("isDefault");
  const [hover, setHover] = useState("hoverDefault");

  //Функции
  const handleStatus = () => {
    if (status === "isDefault" && !productInfo.disabled) {
      setStatus("isActive");
    } else if (status === "isActive" && !productInfo.disabled) {
      setStatus("isDefault");
    }
    setHover(false);
  };

  const handleHoverOn = () => {
    if (status === "isDefault" && !productInfo.disabled) {
      setHover("hoverDefault");
    } else if (status === "isActive" && !productInfo.disabled) {
      setHover("hoverActive");
    }
  };

  const handleHoverOff = () => {
    setHover(false);
  };


  return (
    <li className="card__wrapper">
      <div className={`card ${(status === "isActive") ? "card_selected" : ""} ${productInfo.disabled ? "card_disabled" : ""}`} onClick={handleStatus} onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}>
        <div className="card__info">
          <span className="card__dynamic-title">   {hover === "hoverActive"
            ? productInfo.top_text.deleted
            : productInfo.top_text.default}</span>
          <h2 className="card__title">{productInfo.title}</h2>
          <h3 className="card__taste">{productInfo.taste}</h3>
          <ul className="card__specs">
            {productInfo.specs.map((spec, index) => <li key={index}>{spec}</li>)}
          </ul>
        </div>
        <img className='card__cat' src={productInfo.disabled ? cat2 : cat} alt="cat" />
        <div className='card__circle'>
          <span className='card__circle-weight'>{productInfo.weight}</span>
          <span className='card__circle-uom'>{productInfo.uom}</span>
        </div>
      </div>
      <p className="card__buy">Чего сидишь? Порадуй котэ, <a className="card__buy_link" href="./">купи</a></p>
    </li>
  )
}



export default Card;