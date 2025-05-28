import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { ToggleSwitch } from './Projects/ToggleSwitch/ToggleSwitch.jsx'



createRoot(document.getElementById('root')).render(
<StrictMode>
<ToggleSwitch></ToggleSwitch>
</StrictMode>
);
