import Button from "../components/Button.jsx";
import { useState } from "react";

export default () => {
  const [list, setList] = useState(["mere", "pere", "banane"]);
  const [newItem, setNewItem] = useState(" ");
  const handleDelete = (index) => {
    return () => {
      setList([
        ...list.filter((item, i) => {
          return index != i;
        }),
      ]);
    };
  };
  return (
    <div className="text-center text-2xl bg-gray-200">
      {" "}
      To Do List
      <div className="flex items-center justify-center ">
        <input
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          value={newItem}
          type="text"
          placeholder="new item here"
        />
        <Button
          onClick={() => {
            if (newItem) {
              setList([...list, newItem]);
              setNewItem("");
            }
          }}
        >
          Add
        </Button>
      </div>
      <div className="flex flex-col items-center gap-1">
        {list.map((item, index) => {
          return (
            <div className="flex gap-4">
              {item}
              <div
                onClick={handleDelete(index)}
                className="bg-green-600 cursor-pointer p-2 text-white"
              >
                X
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
