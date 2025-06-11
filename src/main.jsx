import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { PokemonApi } from './components/ApiLearning/PokeMonApi';

createRoot(document.getElementById('root')).render(
<StrictMode>
<PokemonApi></PokemonApi>
</StrictMode>
);
