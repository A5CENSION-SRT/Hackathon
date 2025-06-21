// src/App.jsx
import { useState, useRef, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { FaCalendarAlt, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';
import SparkleButton from './components/SparkleButton';

// Public Components
import Login from './components/Login/Login'

// Protected Components  
import Dashboard from './components/Dashboard/Dashboard'
import Questions from './components/Questions/Questions'
import TeamInfo from './components/TeamInfo/TeamInfo'
import Schedule from './components/Schedule/Schedule'

// Original Landing Page Components
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import lightBackground from './assets/backg.jpg'
import documentation1 from './assets/documentation1.pdf'
import documentation2 from './assets/documentation2.pdf'
import './App.css'

// FadeInSection component for scroll-triggered fade-in
function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`fade-in-section${isVisible ? ' is-visible' : ''}`}>
      {children}
    </div>
  );
}

// Landing Page Component
const LandingPage = () => {
  const downloadPDF = (pdfUrl, filename) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openRegistrationForm = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdummy-form-id/viewform";
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url(${lightBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom', // push background image higher
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Hero Section with enhanced contrast */}
      <FadeInSection>
        <section className="relative flex items-center justify-center h-[60vh] sm:h-screen">
          <div className="absolute inset-0 "></div>
          <div className="text-center z-10 px-2 sm:px-4">
            <h1 className="poke-title text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl animate-pulse">
              PokéHack 2025
            </h1>
            <p className="mt-2 sm:mt-4 text-lg xs:text-xl sm:text-2xl md:text-3xl text-white font-semibold drop-shadow-lg">
              Gotta Code 'Em All!
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <SparkleButton
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg sm:text-xl rounded-full shadow-2xl transition duration-300 transform hover:scale-105"
                onClick={openRegistrationForm}
              >
                Register Now
              </SparkleButton>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Download Section */}
        <section className='flex flex-col items-center justify-center p-4 sm:p-8'>
          <div className="text-center w-full max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-8">
              Download
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <SparkleButton
                onClick={() => downloadPDF(documentation1, 'documentation1.pdf')}
                className="w-full sm:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-yellow-100 font-bold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Documentation 1
              </SparkleButton>
              <SparkleButton
                onClick={() => downloadPDF(documentation2, 'documentation2.pdf')}
                className="w-full sm:w-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-yellow-100 font-bold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Documentation 2
              </SparkleButton>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Team Section */}
        <section className='flex flex-col items-center justify-center min-h-screen p-4 sm:p-8'>
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-12 text-center">
            Our Team
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-7xl px-4'>
            {/* Team Member 1 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition duration-300 border-2 border-dashed border-white/20" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <div className='w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h3 className='team-card-title text-white text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
                Sumukha Upadhaya
              </h3>
              <p className='team-card-role text-gray-200 text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                Lead Developer
              </p>
              <p className='team-card-desc text-xs text-gray-300 text-center' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Full-stack development and project coordination
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition duration-300 border-2 border-dashed border-white/20" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <div className='w-20 h-20 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>🔥</span>
              </div>
              <h3 className='team-card-title text-white text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
                GDL Pranav
              </h3>
              <p className='team-card-role text-gray-200 text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                Frontend Developer
              </p>
              <p className='team-card-desc text-xs text-gray-300 text-center' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                UI/UX design and React development
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition duration-300 border-2 border-dashed border-white/20" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <div className='w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>💧</span>
              </div>
              <h3 className='team-card-title text-white text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
                Snehal Reddy
              </h3>
              <p className='team-card-role text-gray-200 text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                Backend Developer
              </p>
              <p className='team-card-desc text-xs text-gray-300 text-center' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                API development and database management
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition duration-300 border-2 border-dashed border-white/20" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <div className='w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>🌿</span>
              </div>
              <h3 className='team-card-title text-white text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
                Sukruth Kuber
              </h3>
              <p className='team-card-role text-gray-200 text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                DevOps Engineer
              </p>
              <p className='team-card-desc text-xs text-gray-300 text-center' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Deployment and infrastructure management
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition duration-300 border-2 border-dashed border-white/20" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <div className='w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-2xl'>🔮</span>
              </div>
              <h3 className='team-card-title text-white text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
                Raghottam N
              </h3>
              <p className='team-card-role text-gray-200 text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                QA Engineer
              </p>
              <p className='team-card-desc text-xs text-gray-300 text-center' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Testing and quality assurance
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Event Details Section */}
        <section className="mx-auto px-6 py-16 max-w-6xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 border-dashed border-white/20">
            <h2 className="card-title text-5xl font-bold mb-12 text-center text-white drop-shadow-lg">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/20 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition duration-300 border-2 border-dashed border-white/20 card-body">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="card-title text-2xl font-bold mb-3 text-white">Date</h3>
                <p className="card-body text-lg text-gray-200">August 15-17, 2025</p>
              </div>
              <div className="bg-white/20 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition duration-300 border-2 border-dashed border-white/20 card-body">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="card-title text-2xl font-bold mb-3 text-white">Venue</h3>
                <p className="card-body text-lg text-gray-200">College Auditorium</p>
              </div>
              <div className="bg-white/20 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition duration-300 border-2 border-dashed border-white/20 card-body">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="card-title text-2xl font-bold mb-3 text-white">Prizes</h3>
                <p className="card-body text-lg text-gray-200">₹50,000 + Gadgets</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Modern Schedule Card Section - Remade */}
        <section className="mx-auto px-2 sm:px-6 py-10 sm:py-16 max-w-2xl">
          <div className="rounded-3xl shadow-2xl p-4 sm:p-8 border-2 border-dashed border-white/20 bg-gradient-to-br from-white/10 via-white/20 to-white/5 backdrop-blur-2xl">
            <h2 className="card-title text-4xl sm:text-5xl font-bold mb-10 text-center text-white drop-shadow-lg tracking-tight">Schedule</h2>
            <div className="flex flex-col gap-6">
              {/* Schedule Item 1 */}
              <div className="flex items-center gap-4 bg-white/20 rounded-2xl shadow-xl p-6 border border-dashed border-white/30 backdrop-blur-2xl bg-opacity-70 transition hover:scale-[1.03]">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 text-2xl shadow-lg">
                  <FaCalendarAlt />
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-white leading-tight mb-1">Registration Opens</h3>
                  <p className="card-body text-base sm:text-lg text-gray-200">June 1, 2025</p>
                </div>
              </div>
              {/* Schedule Item 2 */}
              <div className="flex items-center gap-4 bg-white/20 rounded-2xl shadow-xl p-6 border border-dashed border-white/30 backdrop-blur-2xl bg-opacity-70 transition hover:scale-[1.03]">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-pink-500 text-white text-2xl shadow-lg">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-white leading-tight mb-1">Hackathon Days</h3>
                  <p className="card-body text-base sm:text-lg text-gray-200">August 15-17, 2025</p>
                </div>
              </div>
              {/* Schedule Item 3 */}
              <div className="flex items-center gap-4 bg-white/20 rounded-2xl shadow-xl p-6 border border-dashed border-white/30 backdrop-blur-2xl bg-opacity-70 transition hover:scale-[1.03]">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl shadow-lg">
                  <FaTrophy />
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-white leading-tight mb-1">Awards Ceremony</h3>
                  <p className="card-body text-base sm:text-lg text-gray-200">August 17, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Footer */}
        <footer className=" backdrop-blur-sm text-white py-12 mt-16 relative z-10">
          <div className="mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to catch 'em all?</h3>
            <p className="text-xl mb-8">Join PokéHack 2025 and code your way to victory!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <SparkleButton
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                onClick={openRegistrationForm}
              >
                Register Now
              </SparkleButton>
            </div>
          </div>
        </footer>
      </FadeInSection>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/questions" element={
          <ProtectedRoute>
            <Questions />
          </ProtectedRoute>
        } />
        <Route path="/team-info" element={
          <ProtectedRoute>
            <TeamInfo />
          </ProtectedRoute>
        } />
        <Route path="/schedule" element={
          <ProtectedRoute>
            <Schedule />
          </ProtectedRoute>
        } />
        
        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
