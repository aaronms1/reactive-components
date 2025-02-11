import React, { useState } from 'react';
import './MessageInputBar.scss';
import InputArea from './InputArea';
import Button from './Button';

interface MessageInputBarProps {
    onSend?: (message: string) => void; // Callback when the send button is clicked
    placeholder?: string; // Placeholder text
    className?: string; // Optional additional CSS classes
}

const MessageInputBar: React.FC<MessageInputBarProps> = ({ onSend, placeholder = 'Enter your message...', className }) => {
    const [message, setMessage] = useState<string>(''); // State to manage the current message

    const handleInputChange = (newValue: string | number) => {
        setMessage(String(newValue)); // Convert numbers to string
    };

    const handleSend = () => {
        if (message.trim()) {
            if (onSend) {
                onSend(message); // Trigger `onSend` callback
            }
            setMessage(''); // Clear the input
        }
    };

    const barClassName = `message-input-bar ${className || ''}`;

    return (
        <div className={barClassName}>
            <InputArea
                type="text"
                value={message}
                placeholder={placeholder}
                onChange={handleInputChange}
                className="message-input"
            />
            <Button className="send-button" onClick={handleSend}>
                Send
            </Button>
        </div>
    );
};

export default MessageInputBar;