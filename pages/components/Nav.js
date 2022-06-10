import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {useRouter} from 'next/router'

function About() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(()=>{
    if (
      router.asPath === '/Movies' ||
      router.asPath === '/AiTraffic'
    ){
      setNavBg('#1f2937')
      setLinkColor('#ecf0f3')
    } else{
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router])

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
    style={{backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl shadow-teal-500 z-[100]"
          : "fixed w-full h-20 shadow-xl  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <Image
          src="/../public/assets/logo.png"
          alt="logo"
          width="135"
          height="100"
        />

        <div>
          <ul style={{color: `${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-teal-200">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-teal-200">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-teal-200">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-teal-200">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-teal-200">
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-50 p-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-5 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/logo.png"
              width="135"
              height="100"
              alt="logo"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-md shadow-teal-200 p-2 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="py-10 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=> setNav(false)} className="py-5 text-sm hover:border-b border-teal-200">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={()=> setNav(false)} className="py-5 text-sm hover:border-b border-teal-200">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=> setNav(false)} className="py-5 text-sm hover:border-b border-teal-200">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=> setNav(false)} className="py-5 text-sm hover:border-b border-teal-200">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=> setNav(false)} className="py-5 text-sm hover:border-b border-teal-200">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="py-10">
              <p className="uppercase tracking-widest text-teal-600 py-3">
                Let's Connect!
              </p>
              <div className="flex items-center justify-between my-full w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-teal-200 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                <a href="https://www.linkedin.com/in/dialaabulkhail/">
                  <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-teal-200 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                <a href="https://github.com/dialaabulkhail">
                  <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-teal-200 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                <a href="mailto:diala.sh.98@gmail.com">
                  <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-teal-200 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                <a href="https://hashnode.com/@DialaBK">
                  <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
