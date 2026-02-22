import { useState } from "react";
import "../index.css";

export default function MessageBubble({ message }){
    const [liked, setLiked] = useState(false);

    return (
        <div className={`message-bubble ${message.sender}`}>
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
    )
}