import { motion } from "framer-motion";

export default function Contato() {
  return (
    <section id="contato" className="mt-16 mb-24 max-w-6xl mx-auto px-6">
      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">
        Vamos conversar
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#0B0B0F] border border-[#1A1A20]">
          <h4 className="text-lg font-medium">Conecte-se comigo</h4>
          <p className="text-sm text-[#C9D2DA] mt-2">GitHub • LinkedIn • E-mail</p>

          <div className="flex gap-3 mt-4">
            <a href="https://github.com/KAYOKG" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-[#111217] rounded">GitHub</a>
            <a href="https://www.linkedin.com/in/keillaarruda/" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-[#111217] rounded">LinkedIn</a>
            <a href="mailto:seuemail@exemplo.com" className="text-sm px-3 py-2 bg-[#111217] rounded">E-mail</a>
          </div>
        </div>

        <form className="p-6 rounded-2xl bg-[#0B0B0F] border border-[#1A1A20]">
          <label className="text-xs text-[#9AA3B2]">Nome</label>
          <input className="w-full mt-2 p-2 rounded bg-[#0E0E12] border border-[#1A1A20]" />

          <label className="text-xs text-[#9AA3B2] mt-4 block">Mensagem</label>
          <textarea className="w-full mt-2 p-2 rounded bg-[#0E0E12] border border-[#1A1A20]" rows={5} />

          <button type="button" className="mt-4 px-4 py-2 bg-[#6E56CF] rounded">Enviar</button>
        </form>
      </div>
    </section>
  );
}
