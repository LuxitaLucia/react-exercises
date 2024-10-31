import Button from "../components/Button.jsx";
import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="text-center text-2xl">Counter App</div>
      <div className="text-center text-2xl">{count}</div>
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};
