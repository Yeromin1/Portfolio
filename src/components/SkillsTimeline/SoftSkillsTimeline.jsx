const SoftSkillsTimeline = ({ skills }) => {
  return (
    <ul className="timeline timeline-vertical md:max-w-[215px]">
      {skills.map((skill, index) => (
        <li key={skill.id}>
          {index !== 0 && (
            <hr className="bg-[var(--timeline-color-skills)] md:-translate-x-22" />
          )}

          <div className="timeline-middle text-[var(--timeline-color-skills)] md:-translate-x-22">
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

          <div className="timeline-end timeline-box md:-translate-x-22 bg-[var(--bg-card-skills)] transition-all duration-300 hover:-translate-y-2 shadow-skills">
            <p className="text-sm md:whitespace-nowrap">{skill.title}</p>
          </div>

          {index !== skills.length - 1 && (
            <hr className="bg-[var(--timeline-color-skills)] md:-translate-x-22" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default SoftSkillsTimeline;
