import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const agti=useContext(RingContext);
    return (
        <div>
            <h2>Brother</h2>
            <p><small>Agti: {agti}</small></p>
        </div>
    );
};

export default Brother;