import React from 'react';
import './App.css';
import { Alert } from './Alert';

function App() {
  return (
    <div className="App">
      Je suis le composant APP
      <Alert heading="Success" closable>
        Everything is really good!
      </Alert>
      <Alert heading="Success" closable>
        Du contenu pour children
      </Alert>
    </div>
  );
}

export default App;
