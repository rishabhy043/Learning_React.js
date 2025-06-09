import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { RegistrationFormAgain } from './components/Hooks/RegistrationForm/formAgain';


createRoot(document.getElementById('root')).render(
<StrictMode>
<RegistrationFormAgain></RegistrationFormAgain>
</StrictMode>
);
