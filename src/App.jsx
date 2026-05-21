import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="text-white text-center mt-20">
      <motion.h1 className="text-5xl text-purple-500">
        SYRA CLAN
      </motion.h1>
      <p className="text-gray-400 mt-4">Ultra Pro eSport Team</p>
    </div>
  );
}

function Shop() {
  return <div className="text-white p-10">Shop coming soon</div>;
}

function Leaderboard() {
  return <div className="text-white p-10">Leaderboard coming soon</div>;
}

function Dashboard() {
  return <div className="text-white p-10">Dashboard</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex gap-4 p-4 text-white border-b border-gray-800">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
