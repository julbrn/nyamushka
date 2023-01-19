import React from 'react';
import Card from './Card.js';
import products from "../utils/database.json";

function App() {
  return (
    <main className="page">
      <section className="products">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <ul className="cards">
          {products.products.map(productInfo => {
            return <Card productInfo={productInfo} key={productInfo._id} />
          })}
        </ul>
      </section>
    </main>
  );
};

export default App;