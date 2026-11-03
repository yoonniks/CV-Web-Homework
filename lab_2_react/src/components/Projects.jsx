import Reviews from './Reviews';

export default function Projects({ onOpenContact }) {
  return (
    <>
      <section id="projects" className="scroll-mt-20 mb-14">
        <h2 className="inline-block relative text-[1.65rem] font-bold mb-6 z-10 after:content-[''] after:absolute after:bottom-[2px] after:-left-[6px] after:w-[calc(100%+12px)] after:h-[38%] after:-z-10 after:rounded after:-rotate-1 after:bg-[#fbcfe8] dark:after:bg-[#cf2477]">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
            <h3 className="text-lg font-bold mb-2">Mental Health Support Mobile App</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3] mb-4">
              Designed and developed a mobile application focused on supporting users' emotional well-being and mental health.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-xs font-semibold bg-transparent text-[#eb96cd] px-2 py-0.5 rounded border border-[#ff66cc]/17 dark:border-white/10">React Native</span>
              <span className="text-xs font-semibold bg-transparent text-[#eb96cd] px-2 py-0.5 rounded border border-[#ff66cc]/17 dark:border-white/10">JavaScript</span>
              <span className="text-xs font-semibold bg-transparent text-[#eb96cd] px-2 py-0.5 rounded border border-[#ff66cc]/17 dark:border-white/10">TypeScript</span>
            </div>
          </article>

          <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
            <h3 className="text-lg font-bold mb-2">Logo & Brand Identity for nextVibe Startup</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3] mb-4">
              Created the complete brand visual identity, including concept development, logo design, typography selection, and branding assets.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-xs font-semibold bg-transparent text-[#eb96cd] px-2 py-0.5 rounded border border-[#ff66cc]/17 dark:border-white/10">Figma</span>
              <span className="text-xs font-semibold bg-transparent text-[#eb96cd] px-2 py-0.5 rounded border border-[#ff66cc]/17 dark:border-white/10">Illustrator</span>
              <span className="text-xs font-semibold bg-transparent text-[#eb96cd] px-2 py-0.5 rounded border border-[#ff66cc]/17 dark:border-white/10">Branding</span>
            </div>
          </article>
        </div>
      </section>

      <section id="activities" className="scroll-mt-20 mb-14">
        <h2 className="inline-block relative text-[1.65rem] font-bold mb-6 z-10 after:content-[''] after:absolute after:bottom-[2px] after:-left-[6px] after:w-[calc(100%+12px)] after:h-[38%] after:-z-10 after:rounded after:-rotate-1 after:bg-[#fed7aa] dark:after:bg-[#2875c7]">
          Courses & Extracurriculars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
            <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-transparent border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">2026</span>
            <h3 className="text-lg font-bold mb-1">PolyTECH EDU</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">Selected among the <strong>Top 100 participants</strong> for the final program in Kyiv.</p>
          </article>

          <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
            <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-transparent border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">04.2025</span>
            <h3 className="text-lg font-bold mb-1">Student Experience Exchange (Poland)</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">International exchange program focused on sharing academic and practical experience among students.</p>
          </article>

          <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
            <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-transparent border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">2025</span>
            <h3 className="text-lg font-bold mb-1">Youth Resilience in Wartime</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">Program on entrepreneurship and startups for Ukraine's recovery and development.</p>
          </article>

          <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
            <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-transparent border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">07.2024 (1 week)</span>
            <h3 className="text-lg font-bold mb-1">Educational Exchange (Germany)</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">One-week educational exchange trip through St. John Bosco Youth Training Center.</p>
          </article>

          <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
            <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-transparent border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">Volunteering</span>
            <h3 className="text-lg font-bold mb-1">Dog Shelter Volunteering</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">Active support, assistance, and care for animals at the local shelter.</p>
          </article>
        </div>
      </section>

      <Reviews />

      <section id="contact" className="scroll-mt-20 mb-14">
        <h2 className="inline-block relative text-[1.65rem] font-bold mb-6 z-10 after:content-[''] after:absolute after:bottom-[2px] after:-left-[6px] after:w-[calc(100%+12px)] after:h-[38%] after:-z-10 after:rounded after:-rotate-1 after:bg-[#fca5a5] dark:after:bg-[#d977b7]">
          Contact Me
        </h2>
        <div className="relative mt-8">
          <div className="absolute -top-4 right-6 z-10 bg-[#ed82c7] dark:bg-[#d977b7] text-white text-[0.85rem] font-bold px-3.5 py-1.5 rounded-md rotate-3 shadow-md flex items-center gap-2">
            <i className="fa-solid fa-paperclip"></i> Let's connect!
          </div>

          <div className="p-8 text-center rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 shadow-lg">
            <h3 className="text-lg font-bold mb-2">Get in touch with me</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3] mb-6">
              Click the button below or select "Contact" in the navigation menu to open the feedback form.
            </p>
            <button
              type="button"
              onClick={onOpenContact}
              className="py-3 px-6 bg-[#eb96cd] hover:bg-[#ed82c7] text-white font-bold rounded-lg transition inline-flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}