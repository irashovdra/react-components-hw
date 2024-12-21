import React from "react";
import "./App.css";
import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";
import { Button } from "./components/Button";

export function App() {
  const handleClick = () => {
    console.log("Кнопка була натиснута!");
  };

  return (
    <div className="App">
      <Greeting name="Іван" />
      <Message text="Ласкаво просимо на наш сайт!" />
      <Button onClick={handleClick} />
    </div>
  );
}
