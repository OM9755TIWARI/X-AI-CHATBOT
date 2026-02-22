import {useState} from 'react';
import "../index.css";
export default function InputBox({ onSend }) {
    const [text, setText] = useState("");

    return (
        <form className='input-box'>
            <input 
                placeholder='Please tell me about your query!'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type='submit'>Ask</button>
        </form>
    );
}