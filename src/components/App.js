import React from 'react'
import Card from './Card.js';

const App = () => {
  return (
    <main className="page">
      <div className="content">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <div className="cards">
          <Card>

          </Card>
        </div>
      </div>
    </main>
  );
};

export default App;