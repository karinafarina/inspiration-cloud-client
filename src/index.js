import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const MESSAGES = [
  {
    "id": "1",
    "message": "You can do it!"
  },
  {
    "id": "2",
    "message": "When you change the way you look at things, the things you look at change."
  },
  {
    "id": "3",
    "message": "You never have to do anything alone."
  },
];

ReactDOM.render(
<BrowserRouter>
<App messages={MESSAGES}/>
</BrowserRouter>,
document.getElementById('root'));