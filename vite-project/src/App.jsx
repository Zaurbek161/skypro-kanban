import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./App.css";
import { useEffect, useState } from "react";
import { PopNewCard } from "./components/PopNewCard";
import { PopBrowse } from "./components/PopBrowse";
import { PopUser } from "./components/PopUser";
import { tasks } from "./data";

function App() {
  const [cards, setCards] = useState(tasks);
  const [isLoading, setIsLoading] = useState(false);
  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: "30.10.2023",
      topic: "Web designe",
      title: "Новая задача",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header addCard={addCard} />
      {isLoading ? (
        <p className="loader">Данные загружаются</p>
      ) : (
        <Main cards={cards} />
      )}
    </div>
  );
}

export default App;
