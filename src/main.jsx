import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { EventProps} from './Revise';



createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <HandleEvent></HandleEvent> */}
<EventProps></EventProps>
  </StrictMode>
);
