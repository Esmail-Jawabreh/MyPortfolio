import React from "react";
import { useState } from "react";

const ExperiencModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div
          id="defaultModal"
          className="relative overflow-y-auto overflow-x-hidden z-50 w-full h-modal md:h-full justify-center items-center"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

            <div className="relative bg-white  shadow ">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-start p-2 border-b ">
                <h3 className="text-lg text-gray-500 ">Front-end Deveoper</h3>
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className=" bg-transparent text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    
                      fill="gray"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="px-2 pb-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Two months internship at Desaisiv startup company for
                  healthTech solutions (Aug.2022 - Oct.2022)
                </p>
              </div>
              <div className="flex justify-between items-start p-2 border-b ">
                <h3 className="text-lg text-gray-500 ">Junior Software Deveoper</h3>
              </div>
              <div className="px-2 pb-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 ">
                  At eSmart software company for ERP (Oct.2022)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperiencModal;
