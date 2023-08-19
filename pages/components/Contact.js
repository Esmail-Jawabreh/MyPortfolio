import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsChevronDoubleLeft, BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Router from 'next/router'
import IMG from '../../public/assets/BusinessMeeting.jpg'


function Contact() {

  function sendEmail(e) {
    e.preventDefault();
    Router.push('/')
    alert("Your message was sent. Thank you for contacting me!")


    emailjs.sendForm(
      "service_19mckop",
      "template_2qf2ml4",
      e.target,
      "AL4X4TAccfBeR34fy"
    );
  }


  return (
    <div id="contact" className="w-full lg:h-screen">

      <div className="max-w-[750px] m-auto px-2 py-16 w-full">

        <h2 className="p-10 tracking-widest uppercase animate-pulse">
          Contact
        </h2>

        <hr />

        <div className="grid gap-8 lg:grid-cols-5">

          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 border mt-3">

            <div className="h-full lg:p-8">

              <div>
                <Image
                  width={877}
                  height={432}
                  className="rounded-sm"
                  src={IMG}
                />
              </div>

              <div>
                <p className="pt-3 pl-2 tracking-widest text-center">
                  Available for freelance or full-time positions.
                </p>
              </div>

              <div>

                <p className="pt-24 text-center uppercas">get in touch!</p>

                <div className="flex items-center justify-between py-4 ">
                  <div className="p-3 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                    <a href="https://www.linkedin.com/in/esmail-jawabreh-80624a250//">
                      <FaLinkedinIn />
                    </a>
                  </div>

                  <div className="p-3 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                    <a href="https://github.com/Esmail-Jawabreh">
                      <FaGithub />
                    </a>
                  </div>

                  <div className="p-3 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-white hover:scale-125">
                    <a href="mailto:esmailjawabreh@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>


          <div className="w-full h-full col-span-3 lg:p-4 border-l mt-3">
            <div className="p-4">
              <form onSubmit={sendEmail}>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-1 text-gray-800 text-[#b78e95] focus:outline-none "
                      type="text"
                      name="name"
                      required=""

                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone
                    </label>
                    <input
                      className="flex p-1 text-gray-800 text-[#b78e95] focus:outline-none "
                      type="text"
                      name="phone"
                      required=""
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-1 text-gray-800 text-[#b78e95] focus:outline-none "
                    type="email"
                    name="email"
                    required=""
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-1 text-gray-800 text-[#b78e95] focus:outline-none "
                    type="text"
                    name="subject"
                    required=""
                  />

                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">message</label>
                  <textarea
                    className="p-3  text-gray-800 text-[#b78e95] focus:outline-none "
                    rows="5"
                    name="message"
                    required=""
                  ></textarea>
                </div>

                <button type="submit" className="w-full p-3 mt-4 ease-in-out duration-150 bg-transparent border">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>


        <div className="flex justify-center mt-8">
          <Link href="/">
            <div className="p-3 duration-200 ease-in cursor-pointer  hover:scale-110 mt-10">
              <HiOutlineChevronDoubleUp
                className="m-auto text-gray-100"
                size={30}
              />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Contact;
