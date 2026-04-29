import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import PageTransition from './components/common/PageTransition';
import ScrollToTop from './components/common/ScrollToTop';
import StructuredData from './components/common/StructuredData';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const PropertyDetailsPage = lazy(() => import('./pages/PropertyDetailsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

function NotFoundPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F4]">
      <h1 className="font-fraunces text-6xl font-bold text-[#2E3192] mb-4">404</h1>
      <p className="font-manrope text-xl text-[#374151] mb-8">Page not found</p>
      <a href="/" className="bg-[#2E3192] text-white font-manrope font-bold px-8 py-3 rounded-lg hover:bg-[#B86851] transition-all">
        Go Home
      </a>
    </PageTransition>
  );
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4]">
      <div className="w-12 h-12 border-4 border-[#2E3192] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <StructuredData type="website" />
      <StructuredData type="organization" />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public routes */}
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/property/:id" element={<PageTransition><PropertyDetailsPage /></PageTransition>} />
          <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutUsPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          
          {/* Admin auth route - public */}
          <Route path="/admin/login" element={<PageTransition><LoginPage /></PageTransition>} />
          
          {/* Admin protected routes */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <PageTransition><DashboardPage /></PageTransition>
            </ProtectedRoute>
          } />
          <Route path="/admin/team" element={
            <ProtectedRoute>
              <PageTransition><TeamPage /></PageTransition>
            </ProtectedRoute>
          } />
          <Route path="/admin/blogs" element={
            <ProtectedRoute>
              <PageTransition><BlogPage /></PageTransition>
            </ProtectedRoute>
          } />
          
          {/* Redirect root to admin login for admin area */}
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </AuthProvider>
  );
}
