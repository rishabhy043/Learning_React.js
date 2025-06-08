import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { RegistrationForm } from './components/Hooks/RegistrationForm/form';


createRoot(document.getElementById('root')).render(
<StrictMode>
<RegistrationForm></RegistrationForm>
</StrictMode>
);
