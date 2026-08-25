const Qualification = () => {
  return (
    <div>
      {/* description */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/education.png"
            className="max-w-lg rounded-lg"
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold">Qualification</h1>
            <p className="py-6">
              Third-year Computer Science and Engineering student with a strong
              academic track record, hands-on project
              experience, and a focus on full-stack web development,
              problem-solving, and emerging tech integration.
            </p>
          </div>
        </div>
      </div>
      {/* institutions and degrees container*/}
      <div className="">
        {/* institutions - 01 */}
        <div className="hero bg-base-200 lg:p-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/images/aiub.jpg"
              className="max-w-lg rounded-lg shadow-xl"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">University</h1>
              <h1 className="text-xl font-semibold">American International University Bangladesh</h1>
              <div className="flex flex-col gap-2">
                <p>Bachelor of Science In Computer Science & Engineering</p>
                <p>Academic Year : 2023 - Present</p>
                <p>Result: CGPA 3.82/4.00 (current)</p>
              </div>
            </div>
          </div>
        </div>
        {/* institutions - 02 */}
        <div className="hero bg-base-200 lg:p-10">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/cpscr.jpg"
              className="max-w-lg rounded-lg shadow-2xl"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">College</h1>
              <h1 className="text-xl font-semibold">Cantonment Public School & College, Rangpur</h1>
              <div className="flex flex-col gap-2">
                <p>Science Group</p>
                <p>Academic Year : 2019 - 2021</p>
                <p>Result: GPA 5.00/5.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* institutions - 03 */}
        <div className="hero bg-base-200 lg:p-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/images/Pilot.png"
              className="max-w-lg rounded-lg shadow-2xl"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">High School</h1>
              <h1 className="text-xl font-semibold">Ranisankail Pilot Boys High School</h1>
              <div className="flex flex-col gap-2">
                <p>Science Group</p>
                <p>Academic Year : 2017 - 2019</p>
                <p>Result: GPA 5.00/5.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* institutions - 04 */}
        <div className="hero bg-base-200 lg:p-10">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/Phitron.jpg"
              className="max-w-lg rounded-lg shadow-2xl"
            />
           <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">EdTech</h1>
              <h1 className="text-xl font-semibold">Phitron</h1>
              <div className="flex flex-col gap-2">
                <p>Computer Science Fundamentals</p>
                <p>Year : 2025 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
