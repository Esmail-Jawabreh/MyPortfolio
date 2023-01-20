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
import hills from '../../public/assets/projects/Hills.png'



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
{/* <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={hills}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300">
              <h3 className="text-2xl tracking-wider text-center">
                7Hills Magazine
              </h3>
              <p className="pt-2 pb-4 text-center">Next.js-Strapi-PWA</p>
              <Link href="/Hills">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
                  More
                </p>
              </Link>
            </div>
          </div> */}





{/* project */}
<div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={dashboard}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300">
              <h3 className="text-2xl tracking-wider text-center">
                Dashboard
              </h3>
              <p className="pt-2 pb-4 text-center">React.JS</p>
              <Link href="/Dashboard">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
                  More
                </p>
              </Link>
            </div>
          </div>

          
{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={traffic}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300 ">
              <h3 className="text-2xl tracking-wider text-center">
                AI Traffic System
              </h3>
              <p className="pt-2 pb-4 text-center">Python</p>
              <Link href="/AiTraffic">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
                  More
                </p>
              </Link>
            </div>
          </div>

{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={tutorium}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300 ">
              <h3 className="text-2xl tracking-wider text-center">
                TUTORium Webapp
              </h3>
              <p className="pt-2 pb-4 text-center">Django-Next.js</p>
              <Link href="/Tutorium">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
                  More
                </p>
              </Link>
            </div>
          </div>



{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={blogit}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300 ">
              <h3 className="text-2xl tracking-wider text-center">
                Diala's Blog Webpage
              </h3>
              <p className="pt-2 pb-4 text-center">Sanity-Next.JS</p>
              <Link href="/Blogit">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
                  More
                </p>
              </Link>
            </div>
          </div>



{/* project */}
<div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={weather}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300 ">
              <h3 className="text-2xl tracking-wider text-center">
                Weather App
              </h3>
              <p className="pt-2 pb-4 text-center">Next.js-WeatherAPI</p>
              <Link href="/Weather">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
                  More
                </p>
              </Link>
            </div>
          </div>
          

          
{/* project */}
<div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={movie}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300 ">
              <h3 className="text-2xl tracking-wider text-center">
                Movies Library
              </h3>
              <p className="pt-2 pb-4 text-center">React-Node.JS</p>
              <Link href="/Movies">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
                  More
                </p>
              </Link>
            </div>
          </div>
          
{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={todo}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300 ">
              <h3 className="text-2xl tracking-wider text-center">
                To Do App
              </h3>
              <p className="pt-2 pb-4 text-center">Django</p>
              <Link href="/Todo">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
                  More
                </p>
              </Link>
            </div>
          </div>

{/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={canser}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300 ">
              <h3 className="text-2xl tracking-wider text-center">
                AI Cancer Prediction
              </h3>
              <p className="pt-2 pb-4 text-center">Python</p>
              <Link href="/Cancer">
                <p className="py-2 text-lg  text-center bg-transparent border cursor-pointer hover:bg-white hover:text-[#565656] ease-in-out duration-150">
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
