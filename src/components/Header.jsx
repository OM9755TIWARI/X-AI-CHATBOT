import { Link } from "react-router-dom"; 
import { useState } from "react";
import "../index.css";

export default function Header() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <header className="header">
      <h1>Customer Support AI</h1>

      <nav>
        <Link to="/">Chat</Link>
        <Link to="/history">Past Conversations</Link>

        <button onClick={toggleTheme}>
          {dark ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}