import React, { useContext } from 'react';
// import { CategoryContext } from '../../App';
import './CategoryDetail.css';

const CategoryDetail = (props) => {
    const { name, category } = props.product;
    // const category = useContext(CategoryContext); // Context Api

    return (
        <div className="categoryDetail">
            <p>Category Detail Value: {category}</p>
        </div>
    );
};

export default CategoryDetail;