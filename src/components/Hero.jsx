import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <p className="uppercase text-xs text-[#A6E3E9] tracking-wide">Olá — eu sou</p>
        <h2 className="text-4xl font-bold leading-tight">
          Keilla Arruda
          <span className="block text-[#6E56CF] text-2xl mt-2">Transformo ideias em sistemas completos</span>
        </h2>
        <p className="text-[#C9D2DA] max-w-lg">
          Desenvolvedora fullstack com foco em código limpo, automações e entrega profissional. Gosto de
          simplificar processos complexos e documentar cada passo para replicabilidade.
        </p>

        <div className="flex gap-3">
          <a href="#projetos" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#6E56CF] text-sm font-medium shadow hover:opacity-95">
            Ver projetos
          </a>
          <a href="#contato" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#2A2A36] text-sm text-[#C9D2DA] hover:bg-[#111217]">
            Entrar em contato
          </a>
        </div>

        <div className="flex gap-4 mt-4 text-xs text-[#9AA3B2]">
          <div>
            <p className="text-sm text-white font-medium">5+</p>
            <p>Projetos</p>
          </div>
          <div>
            <p className="text-sm text-white font-medium">2 anos</p>
            <p>Especialização</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="bg-[#0B0B0F] p-6 rounded-2xl shadow-md"
      >
        <h3 className="text-sm text-[#A6E3E9] mb-3">Stack & Ferramentas</h3>
        <div className="grid grid-cols-2 gap-3">
          {["JavaScript", "Node.js", "React", "Postgres", "Docker", "Python", "Git", "Tailwind"].map(s => (
            <div key={s} className="px-3 py-2 bg-[#0E0E12] rounded-md border border-[#1A1A20] text-xs">{s}</div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-xs text-[#C9D2DA] mb-2">Disponibilidade</h4>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#6E56CF] rounded-full" />
            <p className="text-sm">Aberta a oportunidades e freelas</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
