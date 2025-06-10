import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { CLeanUp } from './components/Hooks/UseEffect/CLeanUpFunction';


createRoot(document.getElementById('root')).render(
<StrictMode>
<CLeanUp></CLeanUp>
</StrictMode>
);
