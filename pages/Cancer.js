import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import weather from "../public/assets/projects/canser.png";

function Cancer() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={weather}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 pl-2 bg-gray-800/70">AI Cancer Tumor</h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p className="pt-4 pb-4">
          AI indicator prediction model to accurately Diagnose Cancer Tumor based on a sample of data.
      
          </p>
        
         
          <Link href="https://github.com/dialaabulkhail/AI-Cancer-prediction/blob/main/AI_Cancer.ipynb">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Code
            </button>
          </Link>
          <Link href="https://github.com/dialaabulkhail/AI-Cancer-prediction/blob/main/AI_Cancer.ipynb">
            <button className="px-8 py-2 mt-4 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Demo
            </button>
          </Link>

          <Link href="/#projects">
          <p className="mt-10 underline cursor-pointer">Back To Projects</p>
        </Link>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Google Colaboratory
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                CSV data
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Pandas
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Tensorflow's keras
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Cancer;
