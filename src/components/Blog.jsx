import { motion } from "framer-motion";

const posts = [
  { title: "Entendendo de vez o Git Rebase (sem dor)", date: "2025-10-01", link: "#" },
  { title: "Como visualizei a recursão", date: "2025-09-20", link: "#" },
];

export default function Blog() {
  return (
    <section id="blog" className="mt-16 max-w-6xl mx-auto px-6">
      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">
        Aprendizados
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(post => (
          <article key={post.title} className="p-4 rounded-xl bg-[#0B0B0F] border border-[#1A1A20]">
            <h4 className="font-medium">{post.title}</h4>
            <p className="text-xs text-[#9AA3B2] mt-2">{post.date}</p>
            <a href={post.link} className="text-sm mt-3 inline-block text-[#A6E3E9] hover:underline">
              Ler mais →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
