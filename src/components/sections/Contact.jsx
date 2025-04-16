import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const contactMethods = [
    {
      name: "Email",
      value: "sarwar.nazrul242@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      href: "mailto:sarwar.nazrul242@gmail.com",
      color: "from-[#EA4335] to-[#DB4437]"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/sarwar-nazrul",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/sarwar-nazrul/",
      color: "from-[#0077B5] to-[#0A66C2]"
    },
    {
      name: "GitHub",
      value: "github.com/Sarwarnazrul242",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
        </svg>
      ),
      href: "https://github.com/Sarwarnazrul242",
      color: "from-[#333333] to-[#24292E]"
    },
    {
      name: "Twitter",
      value: "@sarwar_nazrul",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "https://x.com/sarwar_nazrul",
      color: "from-[#1DA1F2] to-[#14171A]"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat. 
              I'm always open to discussing new projects and ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.name !== "Phone" && method.name !== "Email" ? "_blank" : undefined}
                rel={method.name !== "Phone" && method.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="relative z-10">
                  <div className="mb-4 inline-block rounded-lg bg-gradient-to-r p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                       style={{ backgroundImage: `linear-gradient(135deg, ${method.color})` }}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.name}</h3>
                  <p className="text-gray-400 text-sm">{method.value}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                     style={{ backgroundImage: `linear-gradient(135deg, ${method.color})` }}></div>
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="mailto:sarwar.nazrul242@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.5)]"
            >
              Send me an email
              <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
