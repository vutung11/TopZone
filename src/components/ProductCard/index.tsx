import React from 'react'
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import './index.css';

const ProductCard = () => {
    // const { data } = props;
    // return (
    //     <div className='container_productcard'>
    //         <div className="container_productcard--wrap">
    //             {data && data.data && data.data.map((item, idx) => (
    //                 <NavLink to={`${item.attributes.category}/${item.id}`}>
    //                     <div className="container_productcard--box" key={idx}>
    //                         <label className='label'>Mới</label>
    //                         <img src={item.attributes.image} alt="" />
    //                         <div className="container_product--box-content">
    //                             <h3>{item.attributes.name}</h3>
    //                             <span>{item.attributes.price_sale}đ<strike>{item.attributes.price}₫ </strike><small>{item.attributes.price_sale_of}%</small></span>
    //                         </div>
    //                     </div>
    //                 </NavLink>
    //             ))}


    //         </div>
    //     </div>
    // )
}

export default ProductCard
