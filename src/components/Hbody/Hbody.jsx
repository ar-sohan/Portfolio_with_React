import { FaReact,  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa6";

const Hbody = () => {
  return (
    <div className="bg-base-200 px-4 py-6">
      <h1 className="text-5xl font-bold text-center pb-6 lg:pb-10">What I Do?</h1>
      <div className="flex flex-col justify-around items-center lg:flex-row gap-4 lg:gap-10">
        <div className="lg:w-3/4">
        <img
              src="/images/fullstack.png"
              className="rounded-lg"
            />
        </div>
        {/* What i do section */}
        <div className="lg:w-3/4">
            <h1 className="text-3xl font-semibold pb-4">Full Stack Web Development</h1>
            <div className="lg:pr-6 py-4">
              <ul className="grid grid-cols-5 gap-3 text-6xl">
                <li><FaReact></FaReact></li>
                <li><DiMongodb></DiMongodb></li>
                <li><IoLogoFirebase></IoLogoFirebase></li>
                <li><FaHtml5></FaHtml5></li>
                <li><FaCss3Alt></FaCss3Alt></li>
                <li><FaJs></FaJs></li>
                <li><RiTailwindCssFill></RiTailwindCssFill></li>
                <li><FaNodeJs></FaNodeJs></li>
                <li><FaBootstrap></FaBootstrap></li>
                <li><FaAngular></FaAngular></li>
              </ul>
            </div>
            <div>
                <ul className="pl-4">
                    <li><span className="mr-2">⚡</span> Build responsive websites with modern frameworks.</li>
                    <li><span className="mr-2">⚡</span> Develop back-end logic, APIs, and databases.</li>
                    <li><span className="mr-2">⚡</span> Ensure performance, scalability, and security.</li>
                    <li><span className="mr-2">⚡</span> Collaborate to align tech with business goals.</li>
                    <li><span className="mr-2">⚡</span> Integrate third-party tools and cloud services.</li>
                    <li><span className="mr-2">⚡</span> Test, debug, and maintain code efficiently.</li>
                    <li><span className="mr-2">⚡</span> Stay updated to drive innovation.</li>
                </ul>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hbody;
