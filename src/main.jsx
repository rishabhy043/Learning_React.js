import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { LoginForm } from './components/Hooks/RegistrationForm/LoginForm';


createRoot(document.getElementById('root')).render(
<StrictMode>
<LoginForm></LoginForm>
</StrictMode>
);
