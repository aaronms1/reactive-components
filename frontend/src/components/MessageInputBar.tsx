import React, { Component } from 'react';
import './MessageInputBar.scss';
import InputArea from './InputArea';
import Button from './Button';

interface MessageInputBarProps {
    onSend?: (message: string) => void; // Callback when the send button is clicked
    placeholder?: string; // Placeholder text
    className?: string; // Optional additional CSS classes
}

interface MessageInputBarState {
    message: string; // Current message text
}

class MessageInputBar extends Component<MessageInputBarProps, MessageInputBarState> {
    constructor(props: MessageInputBarProps) {
        super(props);

        this.state = {
            message: '', // Initialize empty message
        };
    }

    // Handle input changes
    handleInputChange = (value: string | number) => {
        // Convert to a string if the value is a number
        this.setState({ message: String(value) });
    };

    // Handle the "send" button click
    handleSend = () => {
        const { message } = this.state;
        const { onSend } = this.props;

        if (message.trim()) {
            // Trigger send callback if provided
            if (onSend) {
                onSend(message);
            }

            // Clear the input
            this.setState({ message: '' });
        }
    };

    render() {
        const { placeholder = 'Enter your message...', className } = this.props;
        const { message } = this.state;

        // Combine the base class with any custom classes passed as props
        const barClassName = `message-input-bar ${className || ''}`;

        return (
            <div className={barClassName}>
                <InputArea
                    type="text"
                    value={message}
                    placeholder={placeholder}
                    onChange={this.handleInputChange} // Corrected type
                    className="message-input"
                />
                <Button className="send-button" onClick={this.handleSend}>
                    Send
                </Button>
            </div>
        );
    }
}

export default MessageInputBar;