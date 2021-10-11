import React from 'react'
import './HeaderCard.css'
function HeaderCard(props) {
  
   let max_item = 3;

   let cardItem = props.SpeacialMenu.map((item,index)=>{
        if(index < max_item){
            return(
                <div className="card-item">
                    <div className="card">
                        <img src={item.strMealThumb} alt="" />
                        <div className="item-details">
                            <h3 className="itemName">{item.strMeal}</h3>
                            <div className="prices-star">
                                <h2 className="star">{props.star[3]}</h2>
                                <h2 className = "price">${props.prices[0]}</h2>
                            </div>
                        </div>
                        <button className="order-now">Order Now</button>
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                </div>
            )
        }
   })

    return (
        <div className="headercard">
           {cardItem}
        </div>
    )
}

export default HeaderCard
