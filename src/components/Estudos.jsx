import { motion } from "framer-motion";

export default function Estudos() {
  const estudos = [
    { title: "Git Avançado", desc: "Rebase, contribuições open-source e fluxo de trabalho profissional." },
    { title: "Docker", desc: "Ambientes reproducíveis e deploy local com containers." },
    { title: "Algoritmos", desc: "Estruturas de dados e problemas clássicos aplicados em JS/Python." },
  ];

  return (
    <section id="estudos" className="mt-16 max-w-6xl mx-auto px-6">
      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">
        Em estudo
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {estudos.map(e => (
          <div key={e.title} className="p-4 rounded-2xl bg-[#0B0B0F] border border-[#1A1A20]">
            <h5 className="text-sm font-medium text-[#A6E3E9]">{e.title}</h5>
            <p className="text-xs text-[#C9D2DA] mt-2">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
