import cat from "../images/cat.png";

function Card({ link }) {
  return (
    <div className="card" >
      <div className="card__border">
        <div className="card_content">
          <div className='availability'>
            <div className='product_title' >Сказочное заморское яство</div>
            <div className='product_name'>Нямушка</div>
            <div className='product_taste'></div>
            <div className='product_number_of_servings'><strong></strong> порций</div>
            <div className='product_gifts'></div>
            <img className='cat' src={cat} alt="cat" />
          </div>
          <div className='product_weight'>
            <div className='circle'>
              <div className='text_weight'>
              </div>
              <span>кг </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_text">
      </div>
    </div>
  )
}



export default Card;