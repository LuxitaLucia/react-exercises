import { useState } from "react";

export default () => {
  const [red, setRed] = useState(255);
  const [blu, setBlu] = useState(0);
  const [green, setGreen] = useState(0);

  return (
    <div className="flex items-center flex-col mt-6">
      <div
        className="w-[150px] h-[150px]"
        style={{ backgroundColor: `rgb(${red},${blu},${green})` }}
      ></div>

      <div className="flex flex-col gap-6 mt-6">
        <div>
          <div>Red</div>
          <input
            onChange={(e) => {
              setRed(parseInt(e.target.value));
            }}
            type="range"
            value={red}
            min="0"
            max="255"
          />
        </div>
        <div>
          <div>Blu</div>
          <input
            onChange={(e) => {
              setBlu(parseInt(e.target.value));
            }}
            type="range"
            value={blu}
            min="0"
            max="255"
          />
        </div>
        <div>
          <div>Green</div>
          <input
            onChange={(e) => {
              setGreen(parseInt(e.target.value));
            }}
            type="range"
            value={green}
            min="0"
            max="255"
          />
        </div>
      </div>

      <div>
        rgb({red},{green},{blu})
      </div>
    </div>
  );
};
