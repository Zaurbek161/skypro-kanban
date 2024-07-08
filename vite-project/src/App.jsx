import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./App.css";
import { useEffect, useState } from "react";
import { tasks } from "./data";
import { PopNewCard } from "./components/PopNewCard";
import { PopBrowse } from "./components/PopBrowse";
import { PopUser } from "./components/PopUser";
import { GlobalStyle, Wrapper } from "./globalStyle.styled";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";

function App() {
  const [cards, setCards] = useState(tasks);
  const [isLoading, setIsLoading] = useState(false);
  const [changeTheme, setChangeTheme] = useState("light");

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: "30.10.2023",
      topic: "Web Designe",
      title: "Новая задача",
      status: "Без статуса",
    };

    setCards(...cards, newCard);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={changeTheme === "light" ? light : dark}>
      <GlobalStyle />
      <Wrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header
          addCard={addCard}
          setChangeTheme={setChangeTheme}
          changeTheme={changeTheme}
        />
        {isLoading ? (
          <p className="loader">Данные загружаются</p>
        ) : (
          <Main cards={cards} />
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
