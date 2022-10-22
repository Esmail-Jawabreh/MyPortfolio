import React from "react";
import { useState } from "react";

const ExperiencModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      {showModal && (
        <div
          id="defaultModal"
          class="relative overflow-y-auto overflow-x-hidden z-50 w-full h-modal md:h-full justify-center items-center"
        >
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white  shadow ">
              {/* <!-- Modal header --> */}
              <div class="flex justify-between items-start p-2 border-b ">
                <h3 class="text-lg text-gray-500 ">Front-end Deveoper</h3>
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  class=" bg-transparent text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                      fill="gray"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="px-2 pb-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Two months internship at Desaisiv startup company for
                  healthTech solutions (Aug.2022 - Oct.2022)
                </p>
              </div>
              <div class="flex justify-between items-start p-2 border-b ">
                <h3 class="text-lg text-gray-500 ">Junior Software Deveoper</h3>
              </div>
              <div class="px-2 pb-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 ">
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
