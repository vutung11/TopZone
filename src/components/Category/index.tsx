import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import categoriesApi from '../../api/Categories';
import { Categories } from '../../models';


import './index.css';
const Category = () => {
  const [category, setCategory] = React.useState<Categories>()

  useEffect(() => {
    categoriesApi.getAll().then((response) => setCategory(response));
  }, [])
  if (category)
    console.log(category);

  return (
    <div className='container_category'>
      {category && category.data && category.data.map((item, idx) => (
        <NavLink to={`/${item.attributes.category}`} key={idx}>
          <div className="container_category--box">
            <img className='iphone' src={item.attributes.image_category} alt="" />
            <p>{item.attributes.name_category}</p>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Category