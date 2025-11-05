import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search, MapPin, Loader2, AlertCircle, Home, History } from 'lucide-react';
import HomePage from '.pages/HomePage';
import Navigation from '.pages/Navigation';
import BuscarPage from './pages/BuscarPage';
import HistoricoPage from './pages/HistoricoPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
    <Route path="./" element={<HomePage />} />
    <Route path="/buscarPage" element={<BuscarPage />} />
    <Route path="/historicoPage.jsxistoricoPage" element={<HistoricoPage />} />
    <Route path="./*" element={<NotFoundPage />} />
    </Routes>
      </BrowserRouter>
  );
}