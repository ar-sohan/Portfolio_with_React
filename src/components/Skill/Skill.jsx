const Skill = () => {
  return (
    <div className="bg-base-200">
      {/* proficiency container */}
      <div>
        <div className="hero bg-base-200 min-h-screen lg:py-8">
          <div className="hero-content flex-col lg:flex-row-reverse gap-4 lg:gap-28">
            <img
              src="/images/skill.png"
              className="rounded-lg w-1/2"
            />
            <div>
              <h1 className="text-5xl font-bold pb-5">Proficiency</h1>
              <p className="py-6">
                <div className="flex flex-col gap-5 text-xl">
                  <h3>Frontend</h3>
                  <progress
                    className="progress progress-accent w-80 h-3"
                    value={85}
                    max="100"
                  ></progress>
                  <h3>Backend</h3>
                  <progress
                    className="progress progress-accent w-80 h-3"
                    value="60"
                    max="100"
                  ></progress>
                  <h3>UI/UX Design</h3>
                  <progress
                    className="progress progress-accent w-80 h-3"
                    value="50"
                    max="100"
                  ></progress>
                  <h3>Content Writing</h3>
                  <progress
                    className="progress progress-accent w-80 h-3"
                    value="50"
                    max="100"
                  ></progress>
                  <h3>SEO</h3>
                  <progress
                    className="progress progress-accent w-80 h-3"
                    value="80"
                    max="100"
                  ></progress>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* language and frameworks container*/}
      <div className="lg:px-6 lg:py-8">
        <h1 className="text-center font-bold text-4xl lg:pb-12">Web Design & Development</h1>
        <div className="grid grid-cols-3 gap-6">
          {/* skill - 01 */}
          <div className="card bg-base-100 shadow-sm">
            <figure className="w-4/5 mx-auto my-4">
              <img
                src="/images/frontend.png"
                alt="Frontend Icon"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center font-medium text-xl">Frontend Development</h2>
              <ul className="flex flex-col gap-3">
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          {/* skill - 02 */}
          <div className="card bg-base-100 shadow-sm">
            <figure className="w-4/5 mx-auto border-none my-4">
              <img
                src="/images/backend.png"
                alt="Frontend Icon"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center font-medium text-xl">Backend Development</h2>
              <ul className="flex flex-col gap-3">
                <li>React</li>
                <li>Firebase</li>
                <li>Node JS</li>
                <li>MongoDB</li>
                <li>Next JS</li>
              </ul>
            </div>
          </div>
          {/* skill - 03 */}
          <div className="card bg-base-100 shadow-sm">
            <figure className="w-4/5 mx-auto my-4">
              <img
                src="/images/WebDesign.png"
                alt="Frontend Icon"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center font-medium text-xl">Frontend Development</h2>
              <ul className="flex flex-col gap-3">
                <li>Figma</li>
                <li>Canva</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* development & tools  container*/}
      <div className="lg:px-6 lg:py-8">
        <h1 className="text-center font-bold text-4xl lg:pb-12">Development Tools</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10">
          {/* tool - 01 */}
          <div className="card lg:w-80 bg-base-100 shadow-sm">
            <figure className="w-4/5 mx-auto my-4">
              <img
                src="/images/codeEditor.png"
                alt="Frontend Icon"
                className="lg:h-60"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center font-medium text-xl">Programming Tools</h2>
              <ul className="flex flex-col gap-3">
                <li>Visual Studio</li>
                <li>VS Code</li>
                <li>Git/Git Bash</li>
                <li>Zet Brain Apps</li>
                <li>Chrome Dev Tools</li>
              </ul>
            </div>
          </div>
          {/* tool - 02 */}
          <div className="card lg:w-80 bg-base-100 shadow-sm">
            <figure className="w-4/5 mx-auto my-4">
              <img
                src="/images/academicTools.png"
                alt="Frontend Icon"
                className="lg:h-60"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center font-medium text-xl">Academic Purpose Tools</h2>
              <ul className="flex flex-col gap-3">
                <li>Oracle SQL</li>
                <li>My SQL</li>
                <li>Code Blocks</li>
                <li>MatLab</li>
                <li>Multisim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
