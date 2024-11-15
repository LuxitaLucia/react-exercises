import Button from "../components/Button.jsx";
import { useState } from "react";

export default () => {
  const [info, setInfo] = useState("X");

  return (
    <div className="flex justify-center">
      <div className=" w-40 h-40 bg-white border-2">
        <div
          onClick={() => {
            setInfo("hey");
          }}
          className="w-10 h-10 border-4 mx-14 mt-4 text-green-600 text-center cursor-pointer"
        >
          {info}
        </div>

        <div className="w-10 h-10 border-4 ml-24 mt-10"></div>
        <div className="w-10 h-10 border-4 ml-5 mt-[-39px] "></div>
      </div>
    </div>
  );
};
