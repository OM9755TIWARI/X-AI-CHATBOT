import { useState } from "react";
import "../index.css";

export default function FeedbackModal({ close }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submit = () => {
    alert("Thank you for feedback!");
    close();
  };

  return (
    <div className="modal">

      <div className="modal-content">

        <h3>Rate Experience</h3>

        <div className="stars">
          {[1,2,3,4,5].map((n) => (
            <span
              key={n}
              onClick={() => setRating(n)}
              className={rating >= n ? "active" : ""}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Your feedback..."
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />

        <button onClick={submit}>
          Submit
        </button>

      </div>
    </div>
  );
}