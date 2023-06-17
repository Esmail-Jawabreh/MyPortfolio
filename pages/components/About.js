import Link from "next/link";
import Image from "next/image";
import me from "../../public/assets/me.png";
import ExperiencModal from "../ExperiencModal";
import { useState } from "react";

function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[750px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-10 tracking-widest uppercase animate-pulse">
            About Me
          </h2>
          <hr />
          <h4 className="py-2 text-xl">Education</h4>
          <p className="max-w-[400px]">
          I completed my Bachelor's degree in Software Engineering in 2022 at Philadelphia University in Amman, Jordan. It was during this time that I decided to pursue my passion for programming. Recently, I successfully completed the (Code Fellows) intensive Software Development course in Python at Abdul-Aziz Ghurair School Of Advanced Computing (ASAC), known as Code Fellows, which began in January 2023 and ended in August 2023.
          </p>
          <br></br>
          <p className="max-w-[400px]">
          Studying Software Engineering has significantly improved my problem-solving and analytical thinking skills. I have also developed a strong enthusiasm and willingness to accept any challenges that can further enhance my knowledge in this field.
          </p>
          <button
            className="p-3 border bg-transparent mt-3 text-center"
            onClick={() => setShowModal(true)
            }
            data-modal-toggle="defaultModal"
          >
            Experience
          </button>
          {showModal && <ExperiencModal setShowModal={setShowModal} showModal={showModal}/>}
        </div>
        <div className="pt-[50px] md:pt-[150px]">
          <Image src={me} alt="me" width={420} height={650} />
        </div>
      </div>
    </div>
  );
}

export default About;
