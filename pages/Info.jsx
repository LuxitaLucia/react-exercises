import Button from "../components/Button.jsx";
import { useState } from "react";

export default () => {
  const [infoOpen, setInfoOpen] = useState(true);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setInfoOpen(true);
          }}
        >
          Informations
        </Button>
      </div>

      
    </div>
  );
};
