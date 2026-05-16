const SkillsPage = () => {
  return (
    <section id="skills" className="bg-section overflow-hidden">
      <div className="container py-20">
        <h2 className="text-4xl font-semibold title-shadow text-center mb-8">
          My Skills
        </h2>

        <h4>Tech skills</h4>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-middle text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 "
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-[linear-gradient(135deg,#0a192f,#0d1b2a)]  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
              <p className="text-lg">HTML</p>
            </div>
            <hr className="bg-[#64ffda]" />
          </li>
          <li>
            <hr className="bg-[#64ffda]" />
            <div className="timeline-middle text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-[linear-gradient(135deg,#0a192f,#0d1b2a)]  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
              <p className="text-lg">CSS</p>
            </div>
            <hr className="bg-[#64ffda]" />
          </li>
          <li>
            <hr className="bg-[#64ffda]" />
            <div className="timeline-middle text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-[linear-gradient(135deg,#0a192f,#0d1b2a)]  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
              <p className="text-lg">JavaScript</p>
            </div>
            <hr className="bg-[#64ffda]" />
          </li>
          <li>
            <hr className="bg-[#64ffda]" />
            <div className="timeline-middle text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-[linear-gradient(135deg,#0a192f,#0d1b2a)]  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
              <p className="text-lg">React.js</p>
            </div>
            <hr className="bg-[#64ffda]" />
          </li>
          <li>
            <hr className="bg-[#64ffda]" />
            <div className="timeline-middle text-[#64ffda]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-[linear-gradient(135deg,#0a192f,#0d1b2a)]  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)]">
              <p className="text-lg">Node.js</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsPage;
