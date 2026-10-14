import avaImg from '../assets/ava.png'

export default function About() {
  return (
    <>
      <section id="hero" className="scroll-mt-20 flex flex-col md:flex-row items-center gap-10 pb-10 border-b border-[#ff66cc]/17 dark:border-white/10 mb-14">
        <div className="relative shrink-0 flex justify-center">
          <img 
            src={avaImg} 
            alt="Veronika Marushechko"
            className="w-[165px] md:w-[220px] aspect-[4/5] object-cover rounded-xl transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1"
          />
          <span className="absolute -bottom-2 -right-2 bg-[#ed82c7] dark:bg-[#d977b7] text-[#16000e] dark:text-[#fffeff] text-[0.7rem] font-extrabold px-2.5 py-1 rounded-full -rotate-6 shadow-md">
            Open to collaboration
          </span>
        </div>

        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
          <h1 className="text-3xl md:text-[2.2rem] font-bold leading-tight mb-1.5 tracking-tight">
            Veronika Marushechko
          </h1>
          <p className="text-[#eb96cd] font-semibold text-[1.05rem] mb-1.5">
            Cybersecurity Student | Developer & Designer
          </p>
          <p className="text-[#2d001c] dark:text-[#fbe5f3] text-[0.95rem] mb-3 flex flex-wrap gap-2 items-center justify-center md:justify-start">
            <span><i className="fa-solid fa-location-dot"></i> Ukraine | Lviv</span>
            <span className="opacity-50">•</span>
            <span><i className="fa-solid fa-language"></i> English: A2</span>
          </p>
          <p className="text-[0.95rem] text-[#2d001c] dark:text-[#fbe5f3] mb-5 max-w-2xl">
            Passionate about software architecture, secure development, UI/UX design, and continuous professional growth.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full md:w-auto">
            <a href="mailto:veronikamykb@gmail.com" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#eb96cd] hover:bg-[#ed82c7] text-white rounded-full text-[0.875rem] font-semibold transition hover:-translate-y-0.5">
              <i className="fa-regular fa-envelope"></i> Email Me
            </a>
            <a href="https://github.com/yoonniks" target="_blank" rel="noreferrer" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-[#ff66cc]/17 dark:border-white/10 hover:border-[#eb96cd] text-[#16000e] dark:text-[#fffeff] hover:text-[#eb96cd] rounded-full text-[0.875rem] font-semibold transition">
              <i className="devicon-github-original"></i> GitHub
            </a>
            <a href="https://www.behance.net/veronikaniksi-i" target="_blank" rel="noreferrer" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-[#ff66cc]/17 dark:border-white/10 hover:border-[#eb96cd] text-[#16000e] dark:text-[#fffeff] hover:text-[#eb96cd] rounded-full text-[0.875rem] font-semibold transition">
              <i className="fa-brands fa-behance"></i> Behance
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 mb-14">
        <h2 className="inline-block relative text-[1.65rem] font-bold mb-6 z-10 after:content-[''] after:absolute after:bottom-[2px] after:-left-[6px] after:w-[calc(100%+12px)] after:h-[38%] after:-z-10 after:rounded after:-rotate-1 after:bg-[#fa58a7] dark:after:bg-[#cf2477]">
          About me
        </h2>
        <p className="text-[1.05rem] text-[#2d001c] dark:text-[#fbe5f3]">
          Cybersecurity student passionate about software engineering, system architecture, and UI/UX design. I bridge technical security standards with creative, user-centered development. Beyond code, I'm a communicative team player with strong leadership and conflict-resolution skills — highly detail-oriented, adaptable, and always eager to learn and grow through constructive feedback.
        </p>
      </section>
    </>
  );
}