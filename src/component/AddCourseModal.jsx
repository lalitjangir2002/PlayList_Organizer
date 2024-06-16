import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddCourseModal = ({ isOpen, onClose, handleClick }) => {
  const inputRef = useRef(null);
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex justify-center mt-40 lg:items-center lg:mt-60 h-min">
        <div
          className="fixed inset-0 bg-[#000000] bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>
        <div className="bg-[#ffffff] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-8">
          <div className="flex flex-row justify-between pb-4">
            <h1 className="text-2xl font-bold text-primary">Add New Course</h1>
            <button
              className="text-2xl font-bold"
              onClick={() => {
                onClose();
              }}
            >
              <AiOutlineClose />
            </button>
          </div>
          <hr className="pb-8" />
          <input
            ref={inputRef}
            className="border-2 border-primary bg-light rounded-sm w-full pl-2"
            type="text"
            name="course-name"
            placeholder="Paste youtube playlist link here..."
          />
          <button
            className="border whitespace-nowrap rounded-full font-semibold w-min px-4 text-[#fff] bg-[#3da9a3] hover:bg-[#38938e] text-base mt-4 py-2"
            onClick={() => {
              handleClick(inputRef);
              onClose();
            }}
          >
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourseModal;