import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import FilmsPage from './pages/FilmsPage';
import AboutPage from './pages/AboutPage';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-base text-gray-700 hover:text-black ${isActive ? 'border-b border-black pb-0.5 text-black' : ''}`;

function App() {
  return (
    <BrowserRouter>
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="flex items-center justify-between py-6">
            <NavLink to="/" className="text-3xl font-medium" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Undraw
            </NavLink>
            <nav className="flex gap-7 flex-wrap">
              <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
              <NavLink to="/films" className={navLinkClass}>Films</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1180px] px-6 pb-14">
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
