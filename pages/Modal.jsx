import Button from "../components/Button.jsx";
import { useState } from "react";

export default () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open Modal
        </Button>
      </div>

      {modalOpen && (
        <div className="  fixed bg-[rgba(0,0,0,0.7)] inset-0">
          <div className="max-w-[700px] bg-gray-600 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white p-4  ">
            <div
              className="absolute top-2 right-2 bg-green-700 cursor-pointer p-2"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </div>
            <div className="mt-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur vero non recusandae dolorum deleniti neque cupiditate
              distinctio dignissimos obcaecati. Totam, quos ratione. Repudiandae
              quibusdam, nulla praesentium distinctio non excepturi dolorem.
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};
