import { RevealOnScroll } from "../RevealOnScroll";
import { TextHoverEffect } from "../ui/TextHoverEffect";
import Loader from "../ui/Loader";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[300px] h-[300px] mt-16 -mb-32">
              <Loader />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right font-['Zilla_Slab']">
              Hi, I'm Sarwar Nazrul
            </h1>
          </div>

          <div className="flex flex-col items-center mb-8 text-xl">
            <div className="flex items-center space-x-2 text-gray-400 mb-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Full Stack Web Developer</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 mb-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>AI Researcher</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>UX/UI Designer</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>

            {/* Text Hover Effect */}
            <div className="w-full max-w-2xl h-32">
              <TextHoverEffect text="SARWAR.DEV" duration={0.3} />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
