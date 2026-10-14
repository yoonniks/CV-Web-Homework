export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 mb-14">
      <h2 className="inline-block relative text-[1.65rem] font-bold mb-6 z-10 after:content-[''] after:absolute after:bottom-[2px] after:-left-[6px] after:w-[calc(100%+12px)] after:h-[38%] after:-z-10 after:rounded after:-rotate-1 after:bg-[#ecb51e] dark:after:bg-[#d39e0c]">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-7">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <i className="fa-solid fa-mobile-screen-button"></i> Mobile & Backend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-react-original colored text-3xl"></i>
              <span className="text-xs font-semibold">React Native</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-django-plain text-[#2ba977] text-3xl"></i>
              <span className="text-xs font-semibold">Django</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <i className="fa-solid fa-pen-nib"></i> Design & Tools
          </h3>
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-figma-plain text-[#c583ff] text-3xl"></i>
              <span className="text-xs font-semibold">Figma</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-photoshop-plain text-[#31a8ff] text-3xl"></i>
              <span className="text-xs font-semibold">Photoshop</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-illustrator-plain text-[#ff9a00] text-3xl"></i>
              <span className="text-xs font-semibold">Illustrator</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-xs font-medium hover:border-[#eb96cd] transition">
              UI/UX Design
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-xs font-medium hover:border-[#eb96cd] transition">
              Graphic Design
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-xs font-medium hover:border-[#eb96cd] transition">
              Web Design
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-7">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <i className="fa-solid fa-terminal"></i> Programming Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-python-plain colored text-3xl"></i>
              <span className="text-xs font-semibold">Python</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-csharp-plain colored text-3xl"></i>
              <span className="text-xs font-semibold">C#</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <i className="fa-solid fa-code"></i> Web Development
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-html5-plain colored text-3xl"></i>
              <span className="text-xs font-semibold">HTML5</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-css3-plain colored text-3xl"></i>
              <span className="text-xs font-semibold">CSS3</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-javascript-plain colored text-3xl"></i>
              <span className="text-xs font-semibold">JavaScript</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-typescript-plain colored text-3xl"></i>
              <span className="text-xs font-semibold">TypeScript</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-center flex flex-col items-center gap-2 transition hover:-translate-y-1 hover:border-[#eb96cd]">
              <i className="devicon-php-plain colored text-3xl"></i>
              <span className="text-xs font-semibold">PHP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-sitemap"></i> Software Architecture & Engineering
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Software Architecture & Systems Design
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Database Architecture & Modeling
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Object-Oriented Programming (OOP)
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Software Lifecycle & Fundamentals
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-shield-halved"></i> Cybersecurity & Infrastructure
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Databases & Security
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Computer Networks & Network Protection
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Cyber Hygiene & Information Resilience
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Legal Regulations, Audits & Evidence Collection
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition">
            Fundamentals of Information & Cybersecurity
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-users"></i> Soft Skills & Languages
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition flex items-center gap-2">
            <i className="fa-solid fa-globe"></i> English: A2 (Pre-Intermediate)
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition flex items-center gap-2">
            <i className="fa-solid fa-check"></i> Teamwork & Collaboration
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition flex items-center gap-2">
            <i className="fa-solid fa-check"></i> Leadership Skills
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition flex items-center gap-2">
            <i className="fa-solid fa-check"></i> Conflict Resolution
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition flex items-center gap-2">
            <i className="fa-solid fa-check"></i> Attention to Detail
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition flex items-center gap-2">
            <i className="fa-solid fa-check"></i> Fast Learner
          </span>
          <span className="px-3.5 py-2 rounded-lg bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 text-sm font-medium hover:border-[#eb96cd] transition flex items-center gap-2">
            <i className="fa-solid fa-check"></i> Open to Constructive Feedback
          </span>
        </div>
      </div>
    </section>
  );
}