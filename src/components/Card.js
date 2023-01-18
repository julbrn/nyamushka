import cat from "../images/cat.png";

function Card() {
  return (
    <li className="card__wrapper">
      <div className="card" >
        <div className="card__info">
          <span className="card__dynamic-title">Сказочное заморское яство</span>
          <h2 className="card__title">Нямушка</h2>
          <h3 className="card__subtitle">с фуа-гра</h3>
          <div className="card__specs">
            <p className="card__portions"><span className="card__specs_bold">10</span> порций</p>
            <p className="card__bonus">мышь в подарок</p>
          </div>
        </div>
        <img className='card__cat' src={cat} alt="cat" />
        <div className='card__circle'>
          <span className='card__circle-weight'>5</span>
          <span className='card__circle-uom'>кг</span>
        </div>
      </div>
      <p className="card__buy">Чего сидишь? Порадуй котэ, <a className="card__buy_link" href="./">купи</a></p>
    </li>
  )
}



export default Card;