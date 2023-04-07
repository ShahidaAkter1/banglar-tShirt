import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>Tua</Cousin>
                <Cousin hasFriend={true}>Suad</Cousin>
            </section>
        </div>
    );
};

export default Aunty;