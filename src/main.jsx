import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { UseStateChallenge } from './components/Hooks/UseStateChallenge';


createRoot(document.getElementById('root')).render(
<StrictMode>
<UseStateChallenge></UseStateChallenge>
</StrictMode>
);
