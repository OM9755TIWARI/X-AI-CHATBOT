import { useState } from "react";
import "../index.css";

export default function MessageBubble({ message }) {
  const [liked, setLiked] = useState(null);

  return (
    <div className={`message ${message.sender}`}>

      <p>{message.text}</p>

      {message.sender === "bot" && (
        <div className="feedback-icons">

          <span
            onClick={() => setLiked(true)}
            className={liked === true ? "active" : ""}
          >
            👍
          </span>

          <span
            onClick={() => setLiked(false)}
            className={liked === false ? "active" : ""}
          >
            👎
          </span>

        </div>
      )}
    </div>
  );
}