import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PageHistory from './pages/PageHistory';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/searchPage" element={<SearchPage />} />
    <Route path="/pageHistory" element={<PageHistory />} />
    <Route path="*" element={<NotFoundPage />} />
    </Routes>
      </BrowserRouter>
  );
}