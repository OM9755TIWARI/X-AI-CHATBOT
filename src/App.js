import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Chat from "./pages/Chat";
import History from "./pages/History";

function App() {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;