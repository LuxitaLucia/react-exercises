import Button from "./Button.jsx";
import { useState } from "react";
import Title from "./Folder1/Folder2/Title.jsx";

export default () => {
  const [red, setRed] = useState(255);
  const [blu, setBlu] = useState(0);
  const [green, setGreen] = useState(0);
  const title = "Click the button to generate a color";
  return (
    <div className="flex items-center flex-col">
      <Title title={title}></Title>
      <div
        className="w-[150px] h-[150px]"
        style={{ backgroundColor: `rgb(${red},${blu},${green})` }}
      ></div>
      <Button
        onClick={() => {
          setRed(Math.round(Math.random() * 255));
          setBlu(Math.round(Math.random() * 255));
          setGreen(Math.round(Math.random() * 255));
        }}
      >
        Random Color
      </Button>
    </div>
  );
};
