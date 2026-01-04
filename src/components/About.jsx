import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-gray-900 text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          About me
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            I’m a third-year Computer Science undergraduate at the{" "}
            <strong>University of Colombo School of Computing (UCSC)</strong>{" "}
            with a strong interest in building reliable and scalable software
            systems.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Currently, I’m working as a Trainee Software Quality Engineer, where
            I analyze User Requirement Specifications (URS) and create detailed
            test cases using TestLink to ensure complete functional test
            coverage. I also have hands-on experience with manual and API
            testing, giving me a strong foundation in software quality and
            system validation.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Alongside quality engineering, I build web and mobile applications
            using React, React Native, and Java, and I’m comfortable working in
            Linux/Ubuntu environments. This combination of development and
            testing experience allows me to understand systems end-to-end and
            focus on delivering high-quality solutions.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            I’m particularly interested in full stack development, cloud
            computing, system administration, DevOps practices, and generative
            AI, and I’m continuously learning to grow in these areas.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Outside of tech, I enjoy hiking, traveling, and exploring new
            technologies.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-300">
            Education
          </h3>
          <div className="space-y-4 sm:space-y-4">
            <div className="border-l-4 border-green-400/60 pl-3 sm:pl-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                University of Colombo School of Computing
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                June 2023 – Present
              </p>
            </div>
            <div className="border-l-4 border-gray-700 pl-3 sm:pl-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">
                G.C.E. Advanced Level (2021)
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                Mahinda Rajapaksa College, Homagama
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Subjects: Chemistry (A), Combined Mathematics (B), Physics (B)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-300">
            Experience
          </h3>
          <div className="space-y-4 sm:space-y-4">
            <div className="border-l-4 border-green-400/60 pl-3 sm:pl-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">
                Trainee Software Quality Engineer
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                Scicom Lanka (PVT) LTD
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                December 2025 – Present
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>
                  Analyze User Requirement Specifications (URS) and translate
                  them into detailed test cases using TestLink.
                </li>
                <li>
                  Design and execute manual test cases and perform API testing
                  to validate functionality and reliability.
                </li>
                <li>
                  Collaborate with developers and stakeholders to report issues
                  and verify fixes, ensuring high-quality releases.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
