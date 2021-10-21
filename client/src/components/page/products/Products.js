import React from 'react';
import Maincontent from '../../common/Maincontent';
import 'antd/dist/antd.css';
import './index.css';

const renderContent = () =>{
  return(
    <h1>Products</h1>
  )
}

const Products = () => {
    return (
        <Maincontent title="Products" content="hello" />
    );
};

export default Products;
