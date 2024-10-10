import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Кирилл' },
  { id: 2, name: 'Абраам' },
  { id: 3, name: 'Артём' },
  { id: 4, name: 'Семён' },
  { id: 5, name: 'Сергей' }
];

let messagesData = [
  { id: 1, message: 'Как твоё ничего?' },
  { id: 2, message: 'Ты видел мои огромные реакты?' },
  { id: 3, message: 'Йоу' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
