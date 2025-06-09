import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { UseEffectChallenge } from './components/Hooks/UseEffect/EffectChallenge';


createRoot(document.getElementById('root')).render(
<StrictMode>
< UseEffectChallenge></UseEffectChallenge>
</StrictMode>
);
