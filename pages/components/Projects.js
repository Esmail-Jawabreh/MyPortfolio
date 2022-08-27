import Image from "next/image";
import Link from "next/link";
import traffic from "../../public/assets/projects/traffic.gif";
import movie from "../../public/assets/projects/movie.png";
import products from "../../public/assets/projects/products.png";
import canser from "../../public/assets/projects/canser.png";
import tutorium from "../../public/assets/projects/tutorium.png";
import blogit from "../../public/assets/projects/blogit.png";
import todo from "../../public/assets/projects/todo.png";
import weather from "../../public/assets/projects/weather.png";
import dashboard from "../../public/assets/projects/dashboard.png";



function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[750px] mx-auto px-2 py-16">
        <h2 className="p-10 tracking-widest uppercase animate-pulse">
          Projects
        </h2>
        <hr />
        <div className="grid gap-8 md:grid-cols-2">



{/* project */}
<div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={dashboard}
              width="400"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Dashboard
              </h3>
              <p className="pt-2 pb-4 text-center">React.JS</p>
              <Link href="/Dashboard">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>

          
{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={traffic}
              width="400"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                AI Traffic System
              </h3>
              <p className="pt-2 pb-4 text-center">Python</p>
              <Link href="/AiTraffic">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>

{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={tutorium}
              width="400"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                TUTORium Webapp
              </h3>
              <p className="pt-2 pb-4 text-center">Django-Next.js</p>
              <Link href="/Tutorium">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>



{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={blogit}
              width="400"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Diala's Blog Webpage
              </h3>
              <p className="pt-2 pb-4 text-center">Sanity-Next.JS</p>
              <Link href="/Blogit">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>



{/* project */}
<div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={weather}
              width="400"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Weather App
              </h3>
              <p className="pt-2 pb-4 text-center">Next.js-WeatherAPI</p>
              <Link href="/Weather">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>
          

          
{/* project */}
<div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={movie}
              width="400"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Movies Library
              </h3>
              <p className="pt-2 pb-4 text-center">React-Node.JS</p>
              <Link href="/Movies">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>
          
{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={todo}
              width="400"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                To Do App
              </h3>
              <p className="pt-2 pb-4 text-center">Django</p>
              <Link href="/Todo">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>

{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={canser}
              width="400"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                AI Cancer Prediction
              </h3>
              <p className="pt-2 pb-4 text-center">Python</p>
              <Link href="/Cancer">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Projects;
