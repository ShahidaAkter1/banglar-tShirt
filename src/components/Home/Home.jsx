import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts=useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddCart = tshirt =>{
        // console.log(tshirt);
        const exists = cart.find(ts => ts._id ===tshirt._id);
        if(exists){
            toast ('Tou have already added this t-shirt');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        
    }

    const handleRemoveFromCart= id =>{
        // console.log(id);

        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }


    return (
        <div className='home-container'>
           <div className="t-shirts-container">
           {
            tshirts.map(tshirt => <TShirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddCart = {handleAddCart}
            ></TShirt>)
           }
           </div>
           <div className="cart-container">
            <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
           </div>
        </div>
    );
};

export default Home;