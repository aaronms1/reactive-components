import React from 'react';
import ExampleComponent from './components/ExampleComponent';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the React App</h1>
      </header>
      <main>
        <ExampleComponent />
      </main>
    </div>
  );
};

export default App;
