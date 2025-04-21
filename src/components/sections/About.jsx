import { RevealOnScroll } from "../RevealOnScroll";
import { GlowingEffect } from "../ui/glowing-effect";
import sarwarImage from "../../assets/images/sarwar.png";  

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "React.js",
    "Angular",
    "Tailwind"
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "C++",
    "Kotlin",
    "MongoDB",
    "Firebase",
    "MySQL"
  ];

  const mlSkills = [
    "Python",
    "Jupyter Notebook",
    "TensorFlow",
    "Keras",
    "PyTorch"
  ];

  const otherTools = [
    "Git",
    "Flutter",
    "Vercel",
    "Docker",
    "AWS"
  ];

  const experiences = [
    {
      title: "Deep Learning Research Assistant",
      company: "University of Detroit Mercy",
      period: "Apr 2024 - Mar 2025",
      location: "Detroit, Michigan",
      description: "Focused on neural network implementation and heart disease classification research.",
      achievements: [
        "Designed and implemented neural networks using CNN and LSTM models to classify heart disease",
        "Developed a fusion model combining multi-modal data inputs to enhance classification accuracy",
        "Reviewed and synthesized insights from over 30 research papers to integrate cutting-edge methodologies"
      ]
    },
    {
      title: "Research Intern",
      company: "Naval Surface Warfare Center Philadelphia Division",
      period: "Oct 2024 - Dec 2024",
      location: "Philadelphia, Pennsylvania",
      description: "Research focused on Unmanned Underwater Vehicles (UUVs) technology advancement.",
      achievements: [
        "Conducted research on UUVs to identify technological gaps and potential vulnerabilities within the U.S. Navy's fleet",
        "Analyzed existing studies and technical reports for comprehensive literature review",
        "Compiled key insights to support future advancements in UUV technology"
      ]
    },
    {
      title: "Frontend Developer / Cyber Security Intern",
      company: "Griffiss Institute (DoD/Air Force/HNCO)",
      period: "Jun 2024 - Aug 2024",
      location: "San Antonio, Texas",
      description: "Combined frontend development with cybersecurity implementation.",
      achievements: [
        "Developed an Angular web application, improving user engagement and performance",
        "Improved network security through vulnerability assessments and Nessus scans",
        "Configured and optimized IP settings, ensuring seamless network communication"
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "Griffiss Institute (AFRL/DoD)",
      period: "Jun 2023 - Aug 2023",
      location: "Rome, New York",
      description: "Focused on IoT security and network analysis.",
      achievements: [
        "Enhanced IoT device security by 20% through cryptographic analysis and reverse engineering",
        "Reduced potential security breaches by 25% through network traffic analysis",
        "Achieved 30% improvement in offensive and defensive cybersecurity techniques through Core Cyber and EMSO operations"
      ]
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Skills Section */}
          <div className="relative rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mb-8">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Computer Science graduate with expertise in Full Stack Development and AI/ML. 
                  Passionate about creating innovative web applications and exploring cutting-edge technologies 
                  in machine learning and deep learning.
                </p>
              </div>
              <div className="flex-1 flex justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img 
                  src={sarwarImage} 
                  alt="Sarwar" 
                  className="rounded-full w-56 h-56 object-contain bg-gray-900/50 p-1 border-4 border-blue-500/20 shadow-lg hover:border-blue-500/40 transition-all duration-300 relative z-10 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <h3 className="text-xl font-bold mb-4 text-blue-400">Front End</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <h3 className="text-xl font-bold mb-4 text-blue-400">Back End</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <h3 className="text-xl font-bold mb-4 text-blue-400">Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {mlSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <h3 className="text-xl font-bold mb-4 text-blue-400">Other Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {otherTools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="relative rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mb-8">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h4 className="text-xl font-semibold">University of Detroit Mercy</h4>
                  <p className="text-gray-400">B.S. in Computer Science</p>
                  <p className="text-blue-500">GPA: 3.62/4.00</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-400">Detroit, Michigan</p>
                  <p className="text-gray-400">Aug 2022 - Dec 2024</p>
                </div>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Concentrations</p>
                <p className="text-gray-400">Software Engineering and Artificial Intelligence</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Key Coursework</p>
                <p className="text-gray-400">
                  Data Structures & Algorithms, Objects & Design, Web Technology, Computer Security,
                  Database, Machine Learning, Software Engineering, Object-Oriented Programming, Statistics & Applications
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="relative rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-b border-white/10 last:border-0 pb-8 last:pb-0">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <p className="text-blue-500 font-medium">{exp.company}</p>
                      <p className="text-gray-400 mt-1 italic">{exp.description}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-400">{exp.location}</p>
                      <p className="text-gray-400">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="hover:text-gray-100 transition-colors">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
