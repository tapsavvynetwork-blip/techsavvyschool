import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Curriculum from './components/Curriculum/Curriculum';
import Curriculum2 from './components/Curriculum/Curriculum2';
import Mentor from './components/Mentor/Mentor';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Curriculum />
                <Curriculum2 />
                <Mentor />
                <Testimonials />
                <Pricing />
                <FAQ />
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
