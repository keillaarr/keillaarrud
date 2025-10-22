// src/components/PortfolioKeilla.jsx
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function PortfolioKeilla() {
  const depoimentos = [
    {
      texto: "Trabalhar com a Keilla foi uma experiência incrível. Ela entrega resultados rápidos e de qualidade!",
      autor: "João Silva, Cliente",
    },
    {
      texto: "Profissional dedicada e extremamente competente. Recomendo sem hesitar!",
      autor: "Maria Oliveira, Cliente",
    },
    {
      texto: "Sempre entrega soluções que simplificam o nosso trabalho. Excelente desenvolvedora!",
      autor: "Carlos Pereira, Cliente",
    },
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % depoimentos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center px-4 md:px-0 max-w-4xl mx-auto space-y-16">
      {/* Boas-vindas */}
      <section className="mt-20">
        <h1 className="text-5xl font-bold mb-4">Meu Portfólio</h1>
        <p className="text-lg text-gray-300">Bem-vindo ao meu site!</p>
      </section>

      {/* Sobre mim */}
      <section id="sobre" className="bg-gray-800 rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Sobre mim</h2>
        <p className="text-gray-300">
          Olá! Sou Keilla, desenvolvedora fullstack apaixonada por tecnologia e soluções que simplificam a vida das pessoas. 
          Tenho experiência com React, Node.js, PHP e banco de dados PostgreSQL, Oracle e SQL Server.
        </p>
      </section>

      {/* Projetos */}
      <section id="projetos" className="bg-gray-800 rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg shadow hover:scale-105 transform transition">
            <h3 className="text-xl font-bold mb-2">Projeto 1</h3>
            <p className="text-gray-300">Descrição curta do projeto 1.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow hover:scale-105 transform transition">
            <h3 className="text-xl font-bold mb-2">Projeto 2</h3>
            <p className="text-gray-300">Descrição curta do projeto 2.</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-gray-800 rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Depoimentos</h2>
        <div className="bg-gray-700 p-6 rounded-xl shadow transition-transform duration-500">
          <p className="text-gray-300 italic">{depoimentos[indice].texto}</p>
          <p className="text-gray-400 mt-2 font-semibold">{depoimentos[indice].autor}</p>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {depoimentos.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === indice ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={() => setIndice(i)}
            ></span>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-gray-800 rounded-xl p-8 shadow-md mb-20">
        <h2 className="text-3xl font-semibold mb-4">Contato</h2>
        <p className="text-gray-300 mb-4">Entre em contato comigo via email ou conecte-se nas minhas redes:</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/keillaarr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/keillaarruda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
        <a
          href="mailto:seuemail@exemplo.com"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar Email
        </a>
      </section>
    </div>
  );
}
