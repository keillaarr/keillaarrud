import { motion } from "framer-motion";

const projects = [
  { title: "Sistema de Carga de Dados", desc: "Migração e automação de carga Oracle → PostgreSQL com logs e tratamento de erros.", stack: ["Python", "SQL", "Shell"], repo: "https://github.com/KAYOKG/carga-exemplo" },
  { title: "API de Catálogo", desc: "API RESTful em Node.js + Express com autenticação JWT e integração PostgreSQL.", stack: ["Node.js", "Postgres", "JWT"], repo: "https://github.com/KAYOKG/api-catalogo" },
  { title: "Mini Tools (scripts)", desc: "Coleção de scripts utilitários para automações internas e deploys.", stack: ["Bash", "Python", "Node"], repo: "https://github.com/KAYOKG/mini-tools" },
];

export default function Projetos() {
  return (
    <section id="projetos" className="mt-16 max-w-6xl mx-auto px-6">
      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">
        Projetos em destaque
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <motion.article key={p.title} whileHover={{ y: -6 }} className="p-5 rounded-2xl bg-[#0B0B0F] border border-[#1A1A20] shadow-sm">
            <h4 className="font-medium text-lg">{p.title}</h4>
            <p className="text-sm text-[#C9D2DA] my-3">{p.desc}</p>
            <div className="flex gap-2 flex-wrap text-xs mb-4">
              {p.stack.map(s => (
                <span key={s} className="px-2 py-1 bg-[#111217] rounded text-[#9AA3B2]">{s}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm text-[#A6E3E9] hover:underline">Ver repositório</a>
              <a href="#" className="text-xs px-2 py-1 bg-[#6E56CF] rounded">Case</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
