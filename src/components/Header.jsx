
export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6E56CF] to-[#A6E3E9] flex items-center justify-center shadow-lg">
          <span className="font-bold text-sm">KA</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Keilla Arruda</h1>
          <p className="text-xs text-[#9AA3B2]">Desenvolvedora Fullstack • Código limpo • Automação</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-sm text-[#C9D2DA]">
        <a href="#projetos" className="hover:text-white">Projetos</a>
        <a href="#estudos" className="hover:text-white">Em estudo</a>
        <a href="#blog" className="hover:text-white">Aprendizados</a>
        <a href="#contato" className="px-3 py-2 bg-[#6E56CF] rounded-md shadow-sm hover:opacity-90">Contato</a>
      </nav>
    </header>
  );
}
