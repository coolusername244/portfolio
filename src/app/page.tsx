import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-cyan-950">
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
