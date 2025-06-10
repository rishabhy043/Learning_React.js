import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { HowNotToFetchDataApi } from './components/ApiLearning/ApiNot';



createRoot(document.getElementById('root')).render(
<StrictMode>
<HowNotToFetchDataApi></HowNotToFetchDataApi>
</StrictMode>
);
