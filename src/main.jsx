import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { HowToFetchDataApi } from './components/ApiLearning/ApiNot';



createRoot(document.getElementById('root')).render(
<StrictMode>
<HowToFetchDataApi></HowToFetchDataApi>
</StrictMode>
);
