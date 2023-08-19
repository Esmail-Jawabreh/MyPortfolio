import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[750px] w-full h-full m-auto p-2 flex justify-center items-center ">
        <div>
          <h1 className="text-5xl text-white/70">
            Hi, I'm <span className="text-white/90">Ismail Aljawabrah</span>
          </h1>
          <div >
            <h2 className="py-3 text-white/70 uppercase mb-1">
              <span className="text-3xl text-white/70">Software Engineer & Full-Stack developer</span>

              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-14 animate-cursor will-change-transform"></span>

            </h2>
            <hr className="py-1" />

            <div className="flex items-center justify-between max-w-[330px] m-auto p-2">
              <hr />

              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">

                <a href="https://www.linkedin.com/in/esmail-jawabreh-80624a250/">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                <a href="https://github.com/Esmail-Jawabreh">
                  <FaGithub />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                <a href="esmailjawabreh@gmail.com">
                  <AiOutlineMail />
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
