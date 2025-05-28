import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { LiftingStates } from './components/Hooks/LiftingStatesUp.jsx';



createRoot(document.getElementById('root')).render(
<StrictMode>
<LiftingStates></LiftingStates>
</StrictMode>
);
