import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt , handleAddCart}) => {
    const {picture , name , price} =tshirt;
    return (
        <div className='t-shirt'>
           <img src={picture} alt="" /> 
           <h4>{name}</h4>
           <p>Price: ${price}</p>
           <button onClick={()=> handleAddCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;
