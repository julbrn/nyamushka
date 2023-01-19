import cat from "../images/cat.png";
import cat2 from "../images/cat-opacity.png";
import React, { useState } from "react";
import DOMPurify from 'dompurify';


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

  function makeDigitsBold(str) {
    return str.replace(/\d+/g, function (match) {
      return `<b>${match}</b>`;
    });

  }

  const sanitizedData = (data) => ({
    __html: DOMPurify.sanitize(data)
  })

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
            {productInfo.specs.map((spec, index) => <li className="card__spec" key={index} dangerouslySetInnerHTML={sanitizedData(makeDigitsBold(spec))} />)}
          </ul>
        </div>
        <img className='card__cat' src={productInfo.disabled ? cat2 : cat} alt="cute fluffy cat" />
        <div className='card__circle'>
          <span className='card__circle-weight'>{productInfo.weight}</span>
          <span className='card__circle-uom'>{productInfo.uom}</span>
        </div>
      </div>
      {productInfo.disabled ? (
        <p className="card__buy card__buy_out-of-stock">
          {`Печалька, ${productInfo.taste} закончился`}
        </p>
      ) : status === "isActive" ? (
        <p className="card__buy"> {productInfo.bottom_text}</p>
      ) : (
        <p className="card__buy">
          {`Чего сидишь? Порадуй котэ, `}
          <button
            className="card__buy_link"
            onClick={handleStatus}
          >
            купи
          </button>
        </p>
      )}
    </li>
  )
}



export default Card;