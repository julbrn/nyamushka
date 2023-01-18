import cat from "../images/cat.png";

function Card(props) {
  const { productInfo } = props;
  return (
    <li key={props.id} className="card__wrapper">
      <div className="card" >
        <div className="card__info">
          <span className="card__dynamic-title">{productInfo.top_text}</span>
          <h2 className="card__title">{productInfo.title}</h2>
          <h3 className="card__taste">{productInfo.taste}</h3>
          <ul className="card__specs">
            {productInfo.specs.map((spec, index) => <li key={index}>{spec}</li>)}
          </ul>
        </div>
        <img className='card__cat' src={cat} alt="cat" />
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