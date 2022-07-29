import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import blog from "../public/assets/projects/blog.png";

function Blogit() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={blog}
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
            Blogit is a web page that displays a collection of personal blogs, each blog card leads to a detailed page in which users can read the blog and share their reviews in the comments section.
          </p>
        
         
          <a href="https://github.com/dialaabulkhail/Blogit">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Code
            </button>
          </a>
          <a href="https://blogit-kd51ev6w5-dialaabulkhail.vercel.app/">
            <button className="px-8 py-2 mt-4 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Demo
            </button>
          </a>

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
                TypeScript
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Sanity CMS
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                ISR
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Blogit;
