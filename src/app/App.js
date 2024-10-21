import './App.css';
import { useEffect, useState } from 'react';
import { Card } from 'entity';
import { Counter } from 'features';
import { API_BASE_URL } from 'shared';

export const App = (props) => {
  const startCount = 2;
  const [count, setCount] = useState(startCount);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      const photos = await response.json();
      setCards(photos);
    })();
  }, [count]);

  return (
    <div className="app">
      <h1>{props.name}</h1>
      <Counter count={count} setCount={setCount}/>
      {cards.map((card) => (
        <Card cardData={card} />
      ))}
    </div>
  );
};
