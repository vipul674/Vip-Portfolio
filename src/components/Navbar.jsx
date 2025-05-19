import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg p-4 fixed w-full top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-extrabold text-white tracking-widest drop-shadow flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 rounded-full shadow bg-white p-1" />
          Vipul Ponugoti
        </div>
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li><a href="#hero" className="text-white hover:text-yellow-200 transition">Home</a></li>
          <li><a href="#about" className="text-white hover:text-yellow-200 transition">About</a></li>
          <li><a href="#skills" className="text-white hover:text-yellow-200 transition">Skills</a></li>
          <li><a href="#tracer" className="text-white hover:text-yellow-200 transition">Tracer</a></li>
          <li><a href="#projects" className="text-white hover:text-yellow-200 transition">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-yellow-200 transition">Contact</a></li>
        </ul>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none text-3xl" aria-label="Toggle menu">☰</button>
        </div>
      </div>
      {/* Mobile menu (hidden by default, shown on click) */}
      <ul className={`md:hidden flex-col space-y-4 mt-4 text-center bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-lg transition-all duration-300 ${menuOpen ? '' : 'hidden'}`}>
        <li><a href="#hero" className="text-white block py-2" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" className="text-white block py-2" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" className="text-white block py-2" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#tracer" className="text-white block py-2" onClick={() => setMenuOpen(false)}>Tracer</a></li>
        <li><a href="#projects" className="text-white block py-2" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" className="text-white block py-2" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;