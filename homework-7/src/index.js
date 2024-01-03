import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExampleComponent from './App';
import Example from './part-2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExampleComponent />
    <Example/>
  </React.StrictMode>
);


