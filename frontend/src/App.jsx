import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Curriculum from './components/Curriculum/Curriculum';
import Curriculum2 from './components/Curriculum/Curriculum2';
import Mentor from './components/Mentor/Mentor';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Curriculum />
        <Curriculum2 />
        <Mentor />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
