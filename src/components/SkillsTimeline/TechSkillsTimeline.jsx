const TechSkillsTimeline = ({ skills }) => {
  return (
    <ul className="timeline timeline-vertical md:max-w-[167px]">
      {skills.map((skill, index) => (
        <li key={skill.id}>
          {index !== 0 && <hr className="bg-[#64ffda] md:translate-x-12" />}

          <div className="timeline-start text-sm timeline-box bg-[linear-gradient(135deg,#0a192f,#0d1b2a)] transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-[0_0_25px_#fff,_0_0_40px_rgba(0,191,255,0.4)] md:translate-x-12">
            {skill.title}
          </div>

          <div className="timeline-middle text-[#64ffda] md:translate-x-12">
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

          {index !== skills.length - 1 && (
            <hr className="bg-[#64ffda] md:translate-x-12" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TechSkillsTimeline;
