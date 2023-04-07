import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({children,hasFriend, ring}) => {
   
    return (
        <div>
            <h2>Cousin</h2>
            <p><span>{children}</span></p>
            { hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;