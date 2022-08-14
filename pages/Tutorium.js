import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import tutorium from "../public/assets/projects/tutor.png";

function Tutorium() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={tutorium}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 pl-2 bg-gray-800/70">TUTORium Web App</h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p className="pt-4 pb-4">
            TUTORium is a web application that allows anyone to either offer
            teaching classes or to request them in any field!
          </p>
          <li>Students can also be teachers!</li>
          <li>Teachers can choose to enroll in any course! Teachers/students can choose to have private classes.</li>
          <li>Teachers can easily add courses and
            students can easily enroll!</li>
          <li>Students can search for the courses they
            want in each category.</li>
         
          <Link href="https://github.com/dialaabulkhail/TUTORium">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Code
            </button>
          </Link>
          <Link href="http://localhost:3001/Home">
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
                Python
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Django
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Bootstrap
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                JWT authentication
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                PostgreSQL
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Heroku
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Tutorium;
