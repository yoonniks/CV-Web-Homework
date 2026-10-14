export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 mb-14">
      <h2 className="inline-block relative text-[1.65rem] font-bold mb-6 z-10 after:content-[''] after:absolute after:bottom-[2px] after:-left-[6px] after:w-[calc(100%+12px)] after:h-[38%] after:-z-10 after:rounded after:-rotate-1 after:bg-[#bfdbfe] dark:after:bg-[#2875c7]">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
          <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-[#ffe8f6]/10 dark:bg-black/30 border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">
            2025 – 2029
          </span>
          <h3 className="text-lg font-bold mb-1">Lviv Polytechnic National University</h3>
          <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">Bachelor in Cybersecurity (In progress)</p>
        </article>

        <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
          <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-[#ffe8f6]/10 dark:bg-black/30 border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">
            2023 – 2025
          </span>
          <h3 className="text-lg font-bold mb-1">St. John Bosco Youth Training Center</h3>
          <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">Software Developer (Skilled Worker qualification)</p>
        </article>

        <article className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]">
          <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-[#ffe8f6]/10 dark:bg-black/30 border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">
            2022 – 2023
          </span>
          <h3 className="text-lg font-bold mb-1">Design Courses (GoIT)</h3>
          <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">Graphic & UI/UX Design</p>
        </article>
      </div>
    </section>
  );
}