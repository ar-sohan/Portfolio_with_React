const Experience = () => {
  return (
    <div>
      {/* description container */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/experience.png"
            className="max-w-xl rounded-lg"
          />
          <div>
            <h1 className="text-5xl font-bold text-center">Experience</h1>
            <p className="py-6 text-center text-pretty">
              Fullstack Developer with over 4 years of hands-on experience in
              agile development, specializing in React, NextJs, and .Net.
              Successfully led and mentored teams through 4 projects, including
              a major North American initiative involving millions of driver
              records, all within tight deadlines while managing multiple
              concurrent projects. Actively engaged in open-source community,
              further honing my skills, ensuring I am a valuable asset to any
              development team. et a id nisi.
            </p>
          </div>
        </div>
      </div>
      {/* collapse container */}
      <div className="bg-base-200 lg:p-6">
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Frontend Web Development
          </div>
          <div className="collapse-content text-sm flex items-center lg:gap-4  border-2 m-2 rounded-lg bg-base-200">
            <div className="w-1/5 p-4">
              <img src="/images/jsFramework.png" alt="" />
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li><span className="mr-2">⚡</span>Developed responsive and user-centric web interfaces using HTML5, CSS3, JavaScript, and React.js, improving user engagement by 30%.</li>
                <li><span className="mr-2">⚡</span>Translated UI/UX design wireframes into high-quality code, ensuring visual consistency and seamless interactivity across platforms.</li>
                <li><span className="mr-2">⚡</span>Leveraged Tailwind CSS and DaisyUI to build modular, scalable components that significantly reduced development time.</li>
                <li><span className="mr-2">⚡</span>Integrated RESTful APIs and managed dynamic content rendering to enhance frontend-backend data interaction.</li>
                <li><span className="mr-2">⚡</span>Implemented client-side form validation and error handling, resulting in improved user experience and reduced support tickets.</li>
                <li><span className="mr-2">⚡</span>Collaborated in Agile sprints with cross-functional teams to deliver high-impact features, maintaining 100% on-time delivery.</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Web Design
          </div>
          <div className="collapse-content text-sm flex items-center lg:gap-4  border-2 m-2 rounded-lg bg-base-200">
            <div className="w-1/5 p-4">
              <img src="/images/exp-WD.png" alt="" />
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li><span className="mr-2">⚡</span>Designed intuitive, mobile-first user interfaces with a strong focus on usability, accessibility, and modern design principles.</li>
                <li><span className="mr-2">⚡</span>Created high-fidelity mockups and interactive prototypes using Figma and Adobe XD, streamlining stakeholder approvals.</li>
                <li><span className="mr-2">⚡</span>Established consistent design systems and style guides to ensure brand alignment across digital assets.</li>
                <li><span className="mr-2">⚡</span>Applied UX research insights to iterate on layouts and visual hierarchy, leading to a 25% improvement in user retention.</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Problem Solving
          </div>
          <div className="collapse-content text-sm flex items-center lg:gap-4  border-2 m-2 rounded-lg bg-base-200">
            <div className="w-1/5 p-4">
              <img src="/images/exp-PS.png" alt="" />
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li><span className="mr-2">⚡</span>Analyzed complex software issues and implemented optimized algorithmic solutions, reducing execution time by up to 40%.</li>
                <li><span className="mr-2">⚡</span>Debugged critical front-end and back-end bugs under tight deadlines, maintaining system stability and minimizing downtime.</li>
                <li><span className="mr-2">⚡</span>Employed data structures and logic-driven approaches to resolve performance bottlenecks in real-time applications.</li>
                <li><span className="mr-2">⚡</span>Facilitated root cause analysis sessions during post-mortem reviews to prevent recurrence of system failures.</li>
                <li><span className="mr-2">⚡</span>Regularly participated in coding challenges and hackathons to sharpen logical reasoning and stay adaptive to new problem domains.</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Tuition
          </div>
          <div className="collapse-content text-sm flex items-center lg:gap-4  border-2 m-2 rounded-lg bg-base-200">
            <div className="w-1/5 p-4">
              <img src="/images/exp-tuition.png" alt="" />
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li><span className="mr-2">⚡</span>Provided personalized tutoring in core Computer Science subjects, enhancing student comprehension and academic performance.</li>
                <li><span className="mr-2">⚡</span>Designed structured lesson plans and assessments tailored to individual learning styles, resulting in measurable grade improvements.</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Presentation and Research
          </div>
          <div className="collapse-content text-sm flex items-center lg:gap-4  border-2 m-2 rounded-lg bg-base-200">
            <div className="w-1/5 p-4">
              <img src="/images/exp-Research.png" alt="" />
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li><span className="mr-2">⚡</span>Conducted in-depth academic research on emerging technologies and presented findings through visually engaging and data-driven presentations.</li>
                <li><span className="mr-2">⚡</span>Synthesized complex technical concepts into clear, impactful narratives tailored to both technical and non-technical audiences.</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Digital Marketing 
          </div>
          <div className="collapse-content text-sm flex items-center lg:gap-4  border-2 m-2 rounded-lg bg-base-200">
            <div className="w-1/5 p-4">
              <img src="/images/exp-DM.png" alt="" />
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li><span className="mr-2">⚡</span>Executed targeted SEO, SMM, and content strategies across digital platforms, increasing organic traffic and lead conversion rates</li>
                <li><span className="mr-2">⚡</span>Managed data-driven ad campaigns using Google Ads and Meta Business Suite, optimizing ROI through continuous A/B testing and analytics.</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Content Creation - With Generative AI 
          </div>
          <div className="collapse-content text-sm flex items-center lg:gap-4  border-2 m-2 rounded-lg bg-base-200">
            <div className="w-1/5 p-4">
              <img src="/images/exp-AI.png" alt="" />
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li><span className="mr-2">⚡</span>Leveraged tools like ChatGPT, Jasper, and Canva AI to produce high-quality, on-brand content at scale, reducing production time.</li>
                <li><span className="mr-2">⚡</span>Developed AI-assisted blog posts, ad copies, and visual assets aligned with SEO best practices and audience engagement metrics.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
