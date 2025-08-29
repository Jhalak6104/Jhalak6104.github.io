import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen.tsx';
import { Layout } from './components/Layout.tsx';
import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { HackerEffects } from './components/HackerEffects.tsx';
import { BackToTopButton } from './components/BackToTopButton.tsx';
import { ParticleBackground } from './components/ParticleBackground.tsx';

// Lazy load non-critical components
const AboutSection = lazy(() => import('./components/AboutSection.tsx').then(module => ({ default: module.AboutSection })));
const ExperienceSection = lazy(() => import('./components/ExperienceSection.tsx').then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import('./components/ProjectsSection.tsx').then(module => ({ default: module.ProjectsSection })));
const PortfoliosSection = lazy(() => import('./components/PortfoliosSection.tsx').then(module => ({ default: module.PortfoliosSection })));
const NotFound = lazy(() => import('./components/NotFound.tsx').then(module => ({ default: module.NotFound })));
const Footer = lazy(() => import('./components/Footer.tsx').then(module => ({ default: module.Footer })));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-blue-500">Loading...</div>
  </div>
);

function AppContent() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] relative">
      <ParticleBackground />
      <LoadingScreen />
      <Navigation />
      
      <main id="main-content" role="main" className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <PortfoliosSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <BackToTopButton />
      <div className="matrix-bg pointer-events-none" aria-hidden="true" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <HackerEffects />
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route 
            path="*" 
            element={
              <Suspense fallback={<SectionLoader />}>
                <NotFound />
              </Suspense>
            } 
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
