import { FaCode } from "react-icons/fa6";
const Work = () => {
  return (
    <div>
      {/* work description  */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-center lg:gap-5">
          <img
            src="/images/projects_image.png"
            className="rounded-lg lg:w-3/5"
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="py-6 text-pretty">
              My projects makes use of vast variety of latest technology tools.
              My best experience is to create Full Stack projects and deploy
              them to web applications using cloud infrastructure. Still trying
              to gain experience by trying my hands on different projects.
            </p>
          </div>
        </div>
      </div>
      {/* work details container  */}
      <div className="grid grid-cols-3 gap-4 lg:px-4 lg:py-6 bg-base-200">
        {/* work - 04  */}
        <div className="card card-border bg-slate-300 w-96">
          <div className="card-body">
            <h2 className="card-title"><FaCode></FaCode>Book Worm</h2>
            <p>
              A place where buyers can order books. Learn about the authors. And can track 
              their reading journey.  
            </p>
            <p className="py-4">
              Techs: Web, React, JS, CSS, Rest API, JSX
            </p>
            <div className="flex justify-between items-center">
              <p>Published: 11 March, 2024</p>
              <button className="btn bg-blue-300" onClick={() => window.location.href = 'https://bookwormsohan.netlify.app/'}>Visit Website</button>
            </div>
          </div>
        </div>
        {/* work - 05  */}
        <div className="card card-border bg-slate-300 w-96">
          <div className="card-body">
            <h2 className="card-title"><FaCode></FaCode>Retro Post</h2>
            <p>
              This is a simple blogging site where users can read, edit and save the the 
              blogs as they expect. 
            </p>
            <p className="py-4">
              Techs: React, React Router, Tailwind CSS
            </p>
            <div className="flex justify-between items-center">
              <p>Published: 17 May, 2024</p>
              <button className="btn bg-blue-300" onClick={() => window.location.href = 'https://retro-post.netlify.app/'}>Visit Website</button>
            </div>
          </div>
        </div>
        {/* work - 06  */}
        <div className="card card-border bg-slate-300 w-96">
          <div className="card-body">
            <h2 className="card-title"><FaCode></FaCode>Chefs Corner</h2>
            <p>
              This is a kitchen which offer people to order different dishes. 
            </p>
            <p className="py-4">
              Techs: JS, JS DOM, CSS, HTML
            </p>
            <div className="flex justify-between items-center">
              <p>Published: 12 june, 2023</p>
              <button className="btn bg-blue-300" onClick={() => window.location.href = 'https://arif-chefs-corner.netlify.app/'}>Visit Website</button>
            </div>
          </div>
        </div>
        {/* work - 01  */}
        <div className="card card-border bg-slate-300 w-96">
          <div className="card-body">
            <h2 className="card-title"><FaCode></FaCode>Co-operative Farming</h2>
            <p>
              In this project there are investors, farmers, exporters and scientists 
              collaborate together and make product supply dynamic. 
            </p>
            <p className="py-4">
              Techs: Figma, SDLC & Draw.io
            </p>
            <div className="flex justify-between items-center">
              <p>Published: 21 March, 2025</p>
              <button className="btn bg-blue-300" onClick={() => window.location.href = 'https://github.com/ar-sohan/AP02-Real-Estate'}>View Details</button>
            </div>
          </div>
        </div>
        {/* work - 02  */}
        <div className="card card-border bg-slate-300 w-96">
          <div className="card-body">
            <h2 className="card-title"><FaCode></FaCode>Welfare Society</h2>
            <p>
              This is a all in one solution for farmers and investors to ensure product 
              variation and profitable farming. 
            </p>
            <p className="py-4">
              Techs: .NET, Windows Form, My SQL
            </p>
            <div className="flex justify-between items-center">
              <p>Published: 21 jan, 2025</p>
              <button className="btn bg-blue-300" onClick={() => window.location.href = 'https://github.com/ar-sohan/AP04-Welfare-Society'}>View Details</button>
            </div>
          </div>
        </div>
        {/* work - 03  */}
        <div className="card card-border bg-slate-300 w-96">
          <div className="card-body">
            <h2 className="card-title"><FaCode></FaCode>E-sports Hub</h2>
            <p>
              This project facilitates the organizers by organizing and broadcasting tournaments.
              Players also can find and participate easily. 
            </p>
            <p className="py-4">
              Techs: Software Design, Development Process Designs
            </p>
            <div className="flex justify-between items-center">
              <p>Published: 21 September, 2024</p>
              <button className="btn bg-blue-300" onClick={() => window.location.href = 'https://github.com/ar-sohan/AP03-eSports-Hub'}>View Details</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-base-200 py-4">
        <button className="btn bg-blue-300 lg:w-64 onClick={() => window.location.href = 'https://github.com/ar-sohan'}">More Projects</button>
      </div>
    </div>
  );
};

export default Work;
