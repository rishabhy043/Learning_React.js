import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { Netflix } from './Loop';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Netflix></Netflix>
  </StrictMode>
);
