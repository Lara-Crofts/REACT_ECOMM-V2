// Product.jsx

// import React from 'react';
// import ProductList from '../components/ProductList'; // Adjust the path based on your project structure

// const ProductPage = () => {
//   return (
//     <div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//       <h1>Product Page</h1>
//       <ProductList />
//       <br></br>

//       <h1>Product Page</h1>
//     </div>
//   );
// };

// export default ProductPage;


// ProductPage.jsx

import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import PriceFilter from '../components/PriceFilter';

const ProductPage = () => {
  const [filterOption, setFilterOption] = useState('all');

  const handleFilterChange = (selectedOption) => {
    setFilterOption(selectedOption);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Product Page</h1>

      {/* Render the PriceFilter component and pass the handleFilterChange function */}
      <PriceFilter onFilterChange={handleFilterChange} />

      {/* Pass the filterOption to the ProductList component */}
      <ProductList filterOption={filterOption} />

      <br></br>
    </div>
  );
};

export default ProductPage;
