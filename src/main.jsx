import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { UseEffectHook } from './components/Hooks/UseEffectHook';


createRoot(document.getElementById('root')).render(
<StrictMode>
<UseEffectHook></UseEffectHook>
</StrictMode>
);
