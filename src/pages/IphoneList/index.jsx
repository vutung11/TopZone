import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';

import './index.css';

const IphoneList = () => {
  const [data, setData] = useState(null);
  if (data && data.data) {
    data.data.forEach(item => item.attributes.product_category_id === 6)
  }

  // element.inclues(data.data.product_category_id === 5)


  // useEffect(() => {
  //   const fetchData = async () => {

  //     const response = await fetch('http://localhost:1337/api/products');
  //     const responseJson = await response.json();

  //     setData(responseJson)
  //   }
  //   fetchData()
  // }, [])
  return (
    <div className="container_productcard-title">
      <h2>iPhone</h2>
      {/* <ProductCard data={data} /> */}
    </div>
  )
}

export default IphoneList