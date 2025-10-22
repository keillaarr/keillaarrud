export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800 bg-opacity-90 shadow-md z-50">
      <ul className="flex justify-center space-x-8 py-4 text-white font-semibold">
        <li><a href="#sobre" className="hover:text-blue-400 transition">Sobre</a></li>
        <li><a href="#projetos" className="hover:text-blue-400 transition">Projetos</a></li>
        <li><a href="#contato" className="hover:text-blue-400 transition">Contato</a></li>
      </ul>
    </nav>
  );
}
