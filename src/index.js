import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = document.getElementById('root');

const div = document.creareElement('div');
div.textContant = 'What are you doing man?';
div.id = '4040';

root.append(div);
