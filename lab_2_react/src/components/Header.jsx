export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-center items-center py-4 px-8 bg-[#fdd8f4]/15 dark:bg-[#1b0014]/40 backdrop-blur-xl border-b border-[#ff66cc]/17 dark:border-white/10">
      <nav className="w-full max-w-[1250px] flex justify-between md:justify-center items-center relative">
        <span className="md:hidden font-bold text-lg text-[#eb96cd]">
          Veronika M.
        </span>

        <input type="checkbox" id="burger-toggle" className="peer hidden" />

        <label
          htmlFor="burger-toggle"
          className="md:hidden text-xl text-[#16000e] dark:text-[#fffeff] cursor-pointer z-50 peer-checked:hidden"
          aria-label="Open Navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </label>

        <label
          htmlFor="burger-toggle"
          className="md:hidden text-xl text-[#16000e] dark:text-[#fffeff] cursor-pointer z-50 hidden peer-checked:block"
          aria-label="Close Navigation"
        >
          <i className="fa-solid fa-xmark"></i>
        </label>

        <ul className="
          hidden peer-checked:flex md:flex 
          flex-col md:flex-row absolute md:relative 
          top-full mt-4 md:mt-0 
          -left-8 -right-8 md:left-auto md:right-auto 
          bg-[#fff3fa]/90 dark:bg-[#090007]/90 md:bg-transparent md:dark:bg-transparent 
          backdrop-blur-2xl md:backdrop-blur-none 
          p-8 md:p-0 gap-6 md:gap-14 
          border-b md:border-b-0 border-[#ff66cc]/17 dark:border-white/10 
          shadow-xl md:shadow-none text-center z-50 list-none
        ">
          <li>
            <a href="#about" className="font-semibold text-[0.95rem] hover:text-[#eb96cd] transition">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="font-semibold text-[0.95rem] hover:text-[#eb96cd] transition">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="font-semibold text-[0.95rem] hover:text-[#eb96cd] transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="font-semibold text-[0.95rem] hover:text-[#eb96cd] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#activities" className="font-semibold text-[0.95rem] hover:text-[#eb96cd] transition">
              Activities
            </a>
          </li>
          <li>
            <a href="#contact" className="font-semibold text-[0.95rem] hover:text-[#eb96cd] transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}