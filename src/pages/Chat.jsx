import { useState, useEffect } from "react";
import ChatWindow from "../components/ChatWindow";
import FeedbackModal from "../components/FeedbackModal";
import InputBox from "../components/InputBox";
import botData from "../data/botData";
import "../index.css";


export default function Chat(){
    const [messages, setMessages] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("chat");
        if(saved){
            setMessages(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("chat", JSON.stringify(messages));
    }, [messages]);

    const getBotReply = (text) => {
        const found = botData.find(
            (q) => q.question.toLocaleLowerCase() === text.toLocaleLowerCase()
        );
        return found ? found.answer : "Sorry, Did not understand your query!";
    };
    
    const sendMessage = (text) => {
        const userMsg = { sender: "user", text };
        const botMsg =  { sender: "bot", text: getBotReply(text) };

        setMessages([...messages, userMsg, botMsg]);
    };

    const resetChat = () => {
        setMessages([]);
        localStorage.removeItem("chat");
    }

    return (
        <div className="chat-page">
            <ChatWindow messages={messages} />
            <InputBox onSend={sendMessage} />

            {messages.length > 0 && (
                <div className="chat-actions">
                <button onClick={() => setShowFeedback(true)}>
                    Give Feedback
                </button>
                <button onClick={() => setMessages([])}>
                    New Query
                </button>
                </div>
            )}
            {showFeedback && (
                <FeedbackModal onClose={() => setShowFeedback(false)} />
            )

            }
        </div>
    )
} 