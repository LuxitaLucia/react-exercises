import { useState } from "react";

import Button from "./components/Button.jsx";
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import DiceRoll from "./pages/DiceRoll.jsx";
import Modal from "./pages/Modal.jsx";
import Info from "./pages/Info.jsx";
import Colors from "./pages/Colors.jsx";
import ToDoList from "./pages/ToDoList.jsx";

export default () => {
  const [currentPage, setCurrentPage] = useState("toDoList");

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

        <Button
          className={currentPage == "info" ? "bg-red-500 hover:bg-red-500" : ""}
          onClick={() => {
            setCurrentPage("info");
          }}
        >
          Info
        </Button>

        <Button
          className={
            currentPage == "colors" ? "bg-red-500 hover:bg-red-500" : ""
          }
          onClick={() => {
            setCurrentPage("colors");
          }}
        >
          Colors
        </Button>

        <Button
          className={
            currentPage == "toDoList" ? "bg-red-500 hover:bg-red-500" : ""
          }
          onClick={() => {
            setCurrentPage("toDoList");
          }}
        >
          ToDoList
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
      ) : currentPage == "info" ? (
        <Info></Info>
      ) : currentPage == "colors" ? (
        <Colors></Colors>
      ) : currentPage == "toDoList" ? (
        <ToDoList></ToDoList>
      ) : (
        <div></div>
      )}
    </div>
  );
};
