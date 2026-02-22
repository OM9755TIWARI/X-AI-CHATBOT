import {useState, useEffect } from "react";
import "../index.css";
export default function History(){
    const [chat, setChat] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("chat");
        if(saved){
            setChat(JSON.parse(saved));
        }
    },[]);

    return (
        <div className="history-page">
            <h2>Past Conversation</h2>

            {chat.length === 0 &&
                <p>No past conversation found.</p>}

            {chat.map((msg, i) => (
                <div key={i} className="history-item">
                    <b>{msg.sender}:</b> {msg.text}
                </div>
            ))}    

        </div>
    )
}