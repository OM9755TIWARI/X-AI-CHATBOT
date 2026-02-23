import { useState } from "react";
import "../index.css";

export default function InputBox({ onSend }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault(); 
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <form className="input-box" onSubmit={submit}>

      <input
        placeholder="Please tell me about your query!"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Ask</button>
    </form>
  );
}