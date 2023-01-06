import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import hills from "../public/assets/projects/Hills.png";

const Hills = () => {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={hills}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 pl-2 bg-[#565656]/70">7Hills.JO Magazine</h2>
        </div>
      </div>
    </div>

    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
        <h2 className="">Overview</h2>
        <p className="pt-4 pb-4">
        7hillsjo is a progressive digital magazine, the first of its kind in Jordan. We are here to support the local community including restaurants, shops, the arts, the music scene, cultural sites and tourism.

        This application was built upon Next.js for the frontend, Strapi CMS for the backend and it is a PWA.
        
        </p>
      
       
        <Link href="https://github.com/dialaabulkhail/7Hillsjo">
          <button className="px-8 py-2 mt-4 mr-8  duration-150 ease-in-out ">
            Code
          </button>
        </Link>
        <Link href="https://7-hillsjo.vercel.app/">
          <button className="px-8 py-2 mt-4  duration-150 ease-in-out ">
            Demo
          </button>
        </Link>

        <Link href="/#projects">
        <p className="mt-10 underline cursor-pointer">Back To Projects</p>
      </Link>
      </div>
      <div className="col-span-4 p-4 shadow-md md:col-span-1  border bg-white/10">
        <div className="p-2">
          <p className="pb-2 font-bold text-center">Technologies Used</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              Javascript
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              Next.JS
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              Tailwind CSS
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              Strapi CMS
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              PWA
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              Odoo
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Hills