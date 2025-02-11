import React, { Component, ChangeEvent } from 'react';
import './InputArea.scss'; // Import for styling

interface InputAreaProps {
    type?: 'text' | 'number' | 'password' | 'email'; // Type of input (default: text)
    value?: string | number; // Current value of the input
    placeholder?: string; // Placeholder text
    className?: string; // Optional additional CSS classes
    onChange?: (value: string | number) => void; // Callback for input changes
    label?: string; // Optional label for the input
}

interface InputAreaState {
    value: string | number; // Current input value for controlled component
}

class InputArea extends Component<InputAreaProps, InputAreaState> {
    constructor(props: InputAreaProps) {
        super(props);

        this.state = {
            value: props.value || '', // Initialize value with props or empty
        };
    }

    // Handle input changes
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        this.setState({ value });

        // Call the parent's onChange callback if provided
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };

    render() {
        const { type = 'text', placeholder, className, label } = this.props;
        const { value } = this.state;

        // Combine the base class with any custom classes passed as props
        const inputClassName = `input-area ${className || ''}`;

        return (
            <div className={inputClassName}>
                {label && <label className="input-label">{label}</label>}
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={this.handleChange}
                    className="input-field"
                />
            </div>
        );
    }
}

export default InputArea;