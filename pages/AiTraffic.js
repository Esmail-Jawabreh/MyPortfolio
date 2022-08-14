import Image from "next/image"
import traffic from '../public/assets/projects/traffic.gif'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";

function AiTraffic() {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
            <Image className="absolute z-1" layout="fill" objectFit="cover" src={traffic} alt="/"/>
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                <h2 className="py-2 pl-2 bg-gray-800/70">AI TRAFFIC SYSTEM</h2>
                <h3>Python | Pygame</h3>
            </div>
        </div>
    </div>

    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
            <h2 className="">Overview</h2>
            <p className="pt-4 pb-4">
            According to a data sample we took from Greater Amman Municipality, the data clearly confirmed the huge problem of traffic we face everyday, especially in peak hours. This problem is partially related to the fact that each traffic light has a fixed green time, which wastes a lot of time and unnecessary traffic congestion. This can be solved by generating a dynamic green time tracking the traffic flow in each street for a specific period of time. So, the goal of our project
             was to build a prediction model for an intersection of 4 traffic lights, 
            to generate a custom green time for each traffic light depending on the traffic flow for each 
            hour of the day in order to help people save time, and avoid traffic congestions as possible.
            </p>
            <Link href="https://github.com/dialaabulkhail/AI_Traffic_system">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">Code</button>
            </Link>
            <Link href="https://dialabk.hashnode.dev/ai-traffic-system-with-python">
            <button className="px-8 py-2 mt-4 text-gray-500 duration-150 ease-in-out hover:scale-105">Demo</button>
            </Link>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 rounded-xl">
            <div className="p-2">
                <p className="pb-2 font-bold text-center">Technologies Used</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                    <p className="flex items-center py-2"><RiRadioButtonFill className="pr-1"/>Python</p>
                    <p className="flex items-center py-2"><RiRadioButtonFill className="pr-1"/>Kaggle</p>
                    <p className="flex items-center py-2"><RiRadioButtonFill className="pr-1"/>Pygame</p>
                    <p className="flex items-center py-2"><RiRadioButtonFill className="pr-1"/>Tensorflow</p>

                </div>
            </div>
        </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back To Projects</p>
        </Link>
    </div>

</div>
  )
}

export default AiTraffic