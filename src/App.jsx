import Navbar from "./components/Navbar";
import PortfolioKeilla from "./components/PortfolioKeilla";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start">
      <Navbar />
      <div className="pt-20 w-full"> {/* pt-20 para compensar a altura da navbar */}
        <PortfolioKeilla />
      </div>
    </div>
  );
}