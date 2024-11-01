import Button from "../components/Button.jsx";
import { useState } from "react";

export default () => {
  const [countEl, setCountEl] = useState(0);

  return (
    <div>
      
      <div className="text-center text-2xl">
        <div>Roll the Dice</div>
        <div className="text-center text-2xl">{countEl}</div>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => {
              setCountEl(Math.round(Math.random() * 5) + 1);
            }}
          >
            Roll the Dice
          </Button>
        </div>
      </div>
    </div>
  );
};
