import './App.css';
import { useEffect, useState } from 'react';
import { Card } from '../entity';
import { Counter } from 'features';

export const App = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=2');
      const photos = await response.json();
      setCards(photos);
    })();
  }, []);

  return (
    <div className="app">
      <h1>{props.name}</h1>
      <Counter minCount={0} startCount={5} maxCount={10}  />
      {cards.map((card) => (
        <Card cardData={card} />
      ))}
    </div>
  );
};
