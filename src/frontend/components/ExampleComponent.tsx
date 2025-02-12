import React, { useState } from 'react';
import './styles/ExampleComponent.scss';

const ExampleComponent: React.FC = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div className="example-component">
      <h2>Example Component</h2>
      <p>This is an example component.</p>

      <div className="vertical">
        <label htmlFor="text-field">Text Field:</label>
        <input
          type="text"
          id="text-field"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="horizontal">
        <label htmlFor="number-field">Number Field:</label>
        <input
          type="number"
          id="number-field"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>

      <div className="message-input">
        <label htmlFor="message-input">Message Input:</label>
        <textarea
          id="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ExampleComponent;
