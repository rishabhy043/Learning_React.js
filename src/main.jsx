import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { UseEffectPractice } from './components/Hooks/UseEffect';


createRoot(document.getElementById('root')).render(
<StrictMode>
<UseEffectPractice></UseEffectPractice>
</StrictMode>
);
