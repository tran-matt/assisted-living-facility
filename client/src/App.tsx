import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './config/i18n'; 

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Facility = React.lazy(() => import('./pages/Facility'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Wrapping with Suspense ensures translations are ready */}
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1, position: 'relative', zIndex: 0 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/facility" element={<Facility />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
          </main>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
