import { useState } from "react";

import Button from "./components/Button.jsx";
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import DiceRoll from "./pages/DiceRoll.jsx";
import Modal from "./pages/Modal.jsx";

export default () => {
  const [currentPage, setCurrentPage] = useState("modal");

  return (
    <div>
      <div className="flex ">
        <Button
          className={currentPage == "home" ? "bg-red-500 hover:bg-red-500" : ""}
          onClick={() => {
            setCurrentPage("home");
          }}
        >
          Home
        </Button>
        <Button
          className={
            currentPage == "counter" ? "bg-red-500 hover:bg-red-500" : ""
          }
          onClick={() => {
            setCurrentPage("counter");
          }}
        >
          Counter
        </Button>

        <Button
          className={
            currentPage == "diceRoll" ? "bg-red-500 hover:bg-red-500" : ""
          }
          onClick={() => {
            setCurrentPage("diceRoll");
          }}
        >
          DiceRoll
        </Button>
        <Button
          className={
            currentPage == "modal" ? "bg-red-500 hover:bg-red-500" : ""
          }
          onClick={() => {
            setCurrentPage("modal");
          }}
        >
          Modal
        </Button>
      </div>
      {currentPage == "home" ? (
        <Home></Home>
      ) : currentPage == "counter" ? (
        <Counter></Counter>
      ) : currentPage == "diceRoll" ? (
        <DiceRoll></DiceRoll>
      ) : currentPage == "modal" ? (
        <Modal></Modal>
      ) : (
        <div></div>
      )}
    </div>
  );
};
