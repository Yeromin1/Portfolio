import { useState } from "react";
import myPhoto from "../../assets/images/MyFotoAbout.jpg";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="about" className="bg-section">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center gap-8 mb-9">
          <div className=" rounded-[20px] border-4 border-[#64ffda] shadow-[0_0_30px_#64ffda,0_0_60px_#00bfff_inset] transition-transform transition-shadow duration-500 ease-in-out w-full max-w-[250px] aspect-square overflow-hidden">
            <img
              src={myPhoto}
              alt="My photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid gap-1 justify-items-center">
            <h1 className="text-4xl font-semibold title-shadow mb-3 ">
              About Me
            </h1>
            <p className="text-lg leading-relaxed">
              I create modern web interfaces that look stylish, perform fast,
              and deliver real value to users.
            </p>

            {isOpen && (
              <>
                <p className="text-lg leading-relaxed">
                  I work with HTML, CSS, Tailwind, JavaScript, and React,
                  focusing on details, UX, and performance. I enjoy building
                  interfaces that don`t just work, but feel intuitive,
                  comfortable, and well thought out.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  My goal is to help companies present themselves as modern and
                  confident in the digital space.
                </p>
              </>
            )}

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-fit  px-[25px] py-[10px] bg-[#03101A] border-2 border-[#64ffda] rounded-full"
            >
              {isOpen ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* ✨ accordion*/}
        <details
          className="collapse  border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            How do you approach UI development?
          </summary>
          <div className="collapse-content text-sm">
            I start by analyzing the design and requirements, then structure the
            components and plan responsiveness. After that, I implement the UI
            step by step, focusing on clean, scalable code and good user
            experience.
          </div>
        </details>

        <details
          className="collapse border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            What technologies do you work with?
          </summary>
          <div className="collapse-content text-sm">
            I work with HTML, CSS, JavaScript, and React. I also use Tailwind
            CSS, Redux, React Hook Form, Yup, and integrate REST APIs when
            needed.
          </div>
        </details>

        <details
          className="collapse border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            How do you solve complex technical problems?
          </summary>
          <div className="collapse-content text-sm">
            I first isolate the issue and reproduce it, then analyze errors
            using DevTools or logs. I break the problem into smaller parts and
            test solutions step by step. If needed, I consult documentation or
            trusted resources.
          </div>
        </details>

        <details
          className="collapse border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            Why are you a good fit for this role?
          </summary>
          <div className="collapse-content text-sm">
            I adapt quickly to new technologies, write clean and maintainable
            code, and focus on delivering results. I also have experience
            working on team projects in a structured workflow.
          </div>
        </details>

        <details
          className="collapse border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            How do you work in a team?
          </summary>
          <div className="collapse-content text-sm">
            I communicate clearly, stay open to feedback, and follow agreed
            deadlines. I believe good communication and responsibility are key
            to successful teamwork.
          </div>
        </details>
      </div>
    </section>
  );
};

export default AboutPage;
