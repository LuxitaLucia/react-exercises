import { useState } from "react";

import Button from "./components/Button.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      <div className="flex ">
      <Button className={
            currentPage == "home" ? "bg-red-500 hover:bg-red-500" : ""
          }
          onClick={() => {
            setCurrentPage("home");
          }}
        >
          Home
        </Button>
        <Button
          className={
            currentPage == "about" ? "bg-red-500 hover:bg-red-500" : ""
          }
          onClick={() => {
            setCurrentPage("about");
          }}
        >
          About
        </Button>
        
        <Button className={
            currentPage == "contact" ? "bg-red-500 hover:bg-red-500" : ""
          }
          onClick={() => {
            setCurrentPage("contact");
          }}
        >
          Contact
        </Button>
      </div>
      {currentPage == "home" ? (
        <Home></Home>
      ) : currentPage == "about" ? (
        <About></About>
      ) : currentPage == "contact" ? (
        <Contact></Contact>
      ) : (
        <div></div>
      )}
    </div>
  );
};
