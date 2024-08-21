import React from 'react';
import Product from './screens/Product/Product';

const App = () => {
  const PRODUCTS = [
    {category: "Frutas", price: "2 Bs.", stocked: true, name: "Manzana"},
    {category: "Frutas", price: "5 Bs.", stocked: true, name: "Fruta del dragón"},
    {category: "Frutas", price: "3 Bs.", stocked: false, name: "Maracuyá"},
    {category: "Vegetales", price: "3 Bs.", stocked: true, name: "Espinaca"},
    {category: "Vegetales", price: "4 Bs.", stocked: false, name: "Calabaza"},
    {category: "Vegetales", price: "10 Bs.", stocked: true, name: "Guisantes"}
  ];

  return (
    <div>
      <h1>Mi Tienda</h1>
      <Product products={PRODUCTS} />
    </div>
  );
};

export default App;