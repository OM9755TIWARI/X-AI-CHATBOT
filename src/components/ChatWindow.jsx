import MessageBubble from "./MessageBubble";
import "../index.css";

export default function ChatWindow({ messages }){
    return (
        <div className="chat-window">
            {messages.map((msg, index) => (
                <MessageBubble key={index} message={msg} />
            ))}
        </div>
    )
}