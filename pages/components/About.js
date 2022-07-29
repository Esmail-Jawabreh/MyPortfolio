import Link from "next/link";
import Image from "next/image";
import me from "../../public/assets/me.png"

function About() {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[750px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-10 tracking-widest uppercase animate-pulse">
            About Me
          </h2>
          <hr/>
          <h4 className="py-2 text-xl">Education</h4>
          <p className="max-w-[400px]">
            I have completed my Bachelor degree in Civil Engineering in 2021 at
            Al-Hussein bin Talal University, Ma'an Jordan.
            It was then when I decided to sign up for something I always wanted
            to learn.. Programming!
            Recently, I have successfully completed the (Code fellows) intensive Software Development
            course in Python at Abdul-Aziz Ghurair School Of Advanced
            Computing (ASAC) that started in Jan,2022 and lasted until July,2022..
          </p>
          <h4 className="py-3 text-xl">Experience</h4>
            <p className="max-w-[400px]">My study of software development has hugely improved my problem solving and analytical thinking 
              skills, as well as my enthusiasm and willigness towards accepting any challenge that can 
              enhance my knowledge in this field.
               </p>
<br/>
        </div>
        <div className="lg:pt-[200px] ">
          <Image
            className="rounded-full "
            src={me}
            alt="me"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
