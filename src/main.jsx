import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import {Todo} from './Projects/TODO/Todo.jsx'


createRoot(document.getElementById('root')).render(
<StrictMode>
   <Todo></Todo>
</StrictMode>
);
