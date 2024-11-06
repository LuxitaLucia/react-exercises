import Button from "../components/Button.jsx";
import { useState } from "react";

export default () => {
  const [info, setInfo] = useState(true);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setInfo(true);
          }}
        >
          Informations
        </Button>
      </div>


    </div>
  );
};
