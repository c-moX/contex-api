import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './Header.css';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div className="header">
            <p>Header Value: {category}</p>
            <h2>This is Header</h2>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;