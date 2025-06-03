import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchoolRegistration from './pages/SchoolRegistration';
import StudentRegistration from './pages/StudentRegistration';
import AdminDashboard from './pages/AdminDashboard';
import ProgramDetails from './pages/ProgramDetails';
import FAQ from './pages/FAQ';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/school-registration" element={<SchoolRegistration />} />
            <Route path="/student-registration" element={<StudentRegistration />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/programs/:id" element={<ProgramDetails />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Navigate to="/\" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
        
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/2348116600091"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden md:inline">Chat with us</span>
        </a>
      </div>
    </Router>
  );
}

export default App;