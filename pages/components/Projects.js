import Image from "next/image";
import Link from "next/link";
import LtucArena from '../../public/assets/projects/LtucArena.png'
import NetflixClone from '../../public/assets/projects/NetflixClone.png'
import RockPaperScissors from '../../public/assets/projects/RockPaperScissors.png'



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
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl  group  hover:bg-white/40 text-white ease-in-out duration-300">
            <Image
              className="group-hover:opacity-10 "
              src={LtucArena}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300">
              <h3 className="text-2xl tracking-wider text-center">
                LTUC Arena
              </h3>
              <p className="pt-2 pb-4 text-center">React.JS & Node.JS</p>
              <Link href="https://ltuc-arena.netlify.app/">
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
              src={NetflixClone}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300">
              <h3 className="text-2xl tracking-wider text-center">
                Netflix Clone
              </h3>
              <p className="pt-2 pb-4 text-center">React.JS & Node.JS</p>
              <Link href="https://main--tranquil-nougat-ed4e30.netlify.app/">
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
              src={RockPaperScissors}
              width="400"
              height="250"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300">
              <h3 className="text-2xl tracking-wider text-center">
              Rock Paper Scissors
              </h3>
              <p className="pt-2 pb-4 text-center">Python(Eel) & HTML,CSS,JS</p>
              <Link href="https://github.com/Group-05-rockPaperScissors/RPS-eel">
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
