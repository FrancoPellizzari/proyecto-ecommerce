

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSection.css';

function ProductSection({ products, filterText }) {

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(filterText.toLowerCase())
      );

  return (
    <section>
      <h2>Productos</h2>
      <div className="product-section">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
