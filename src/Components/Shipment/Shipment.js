import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const category = useContext(CategoryContext);

    return (
        <div className="shipment">
            <h2>This is Shipment</h2>
            <p>Shipment Value: {category}</p>
        </div>
    );
};

export default Shipment;