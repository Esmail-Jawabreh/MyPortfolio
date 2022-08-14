import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import todo from "../public/assets/projects/todos.png";

function Todo() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={todo}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 pl-2 bg-gray-800/70">To do Web App</h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p className="pt-4 pb-4">
           Todo web app is an CRUD application that allows you to have your private profile of which you can create new tasks at, check those tasks and delete or edit them.
           </p>
        
         
          <Link href="https://github.com/dialaabulkhail/Todo">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Code
            </button>
          </Link>
          <Link href="https://todolistbydiala.herokuapp.com/login/">
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
                CSS
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Django templating language
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Heroku
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Todo;
