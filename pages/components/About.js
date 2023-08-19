import Image from "next/image";
import me from "../../public/assets/Esmail.jpg";


function About() {

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
            I earned my Bachelor's degree in Software Engineering from Philadelphia University in Amman, Jordan in 2022. During my time at university, I discovered my passion for programming and decided to delve deeper into the field. More recently, I completed the intensive Software Development course in Python at Abdul-Aziz Ghurair School Of Advanced Computing (ASAC), known as Code Fellows. This program spanned from January 2023 to August 2023, and I am proud to have successfully completed it.          </p>
          <br></br>
          <p className="max-w-[400px]">
            My journey through Software Engineering studies has honed my problem-solving and analytical thinking skills. I am driven by a fervent enthusiasm for overcoming challenges and a keen desire to continually expand my knowledge in this dynamic field. Beyond my technical abilities, I bring [mention specific skills or attributes here] to my work, ensuring I contribute effectively to any team or project.
          </p>
        </div>
        <div className="pt-[50px] md:pt-[150px]">
          <Image src={me} alt="me" />
        </div>
      </div>
    </div>
  );
}

export default About;
