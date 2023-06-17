import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
// import logo from "../../public/assets/logo.png";

function About() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#565656");
  const router = useRouter();
  // bg: #565656
  // light: #b78e95
  useEffect(() => {
    if (router.asPath === "/Movies" || router.asPath === "/AiTraffic") {
      setNavBg("#565656");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#565656");
      setLinkColor("#565656");
    }
  }, [router]);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl shadow-white ease-in duration-300  z-[100] "
          : "fixed w-full h-20 shadow-xl "
      }
    >
      <div className="flex items-center justify-between w-full h-full px-10 2xl:px-16">
        <h3 className="text-xl animate-pulse">Ismail Aljawabrah</h3>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm text-white uppercase border-blue-100 hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm text-white uppercase border-blue-100 hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm text-white uppercase border-blue-100 hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm text-white uppercase border-blue-100 hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm text-white uppercase border-blue-100 hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-white p-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-5 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between w-full">
           
        <h3 className="text-xl text-[#565656]">Ismail Aljawabrah</h3>
           
            <div
              onClick={handleNav}
              className="p-2 duration-300 ease-in rounded-full shadow-sm cursor-pointer shadow-white hover:scale-110 text-[#565656]"
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="flex flex-col py-10">
            <hr></hr>
            <ul className="uppercase text-[#565656]">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm  hover:border-b text-[#565656]"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm  hover:border-b text-[#565656]"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm  hover:border-b text-[#565656]"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm  hover:border-b text-[#565656]"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm  hover:border-b text-[#565656]"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
