import Logo from "../../assets/logo-text.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img src={Logo} alt="DevStack" className="h-auto w-20 sm:w-24" />

        <ul className="hidden items-center gap-5 text-[10px] text-slate-600 lg:flex">
          <li className="text-pink-500 btn">Home</li>
          <li className="btn">Technologies</li>
          <li className="btn">Projects</li>
          <li className="btn">About</li>
          <li className="btn">Contact</li>
          <li className="ml-8 btn">Sign In</li>
          <button className="rounded-full bg-pink-600 px-3 py-1.5 text-[10px] font-semibold text-white">Sign Up</button>
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md p-2 text-lg text-black hover:bg-gray-100 lg:hidden"
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-gray-100 px-4 py-3 text-sm text-black lg:hidden">
          {['Home', 'Technologies', 'Projects', 'About', 'Contact', 'Sign In'].map((item) => (
            <li key={item} className="rounded-md px-3 py-2 hover:bg-gray-100">{item}</li>
          ))}
          <li className="px-3 pt-2"><button className="w-full rounded-md bg-pink-600 px-3 py-2 font-semibold text-white">Sign Up</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
