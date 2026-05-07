// const ProjectsPage = () => {
//   return (
//     <section id="projects" className="bg-section">
//       <div className="container py-20">
//         <h2 className="text-4xl font-semibold title-shadow text-center mb-8">
//           My Projects
//         </h2>

//         <div className="bg-[#112240] p-5 rounded-[15px] shadow-[0_0_20px_rgba(35,75,134,0.4)]">
//           <figure>
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//               alt="Shoes"
//               className="rounded-xl"
//             />
//           </figure>
//           <div className="card-body items-center text-center">
//             <h2 className="card-title">Card Title</h2>
//             <p>
//               A card component has a figure, a body part, and inside body there
//               are title and actions parts
//             </p>
//             <div className="card-actions">
//               <button className="btn">Buy Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsPage;

import projects from "../../data/projects";

const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-section">
      <div className="container py-20">
        <h2 className="text-4xl font-semibold title-shadow text-center mb-8">
          My Projects
        </h2>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#112240] p-5 rounded-[15px] shadow-[0_0_20px_rgba(35,75,134,0.4)]"
            >
              <figure>
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-xl"
                />
              </figure>

              <div className="card-body items-center text-center">
                <h4 className="card-title">{project.title}</h4>

                <p>{project.description}</p>

                <div className="card-actions">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="btn">View on GitHub</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
