import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { ContactForm } from './components/Hooks/RegistrationForm/ContactForm';


createRoot(document.getElementById('root')).render(
<StrictMode>
<ContactForm></ContactForm>
</StrictMode>
);
