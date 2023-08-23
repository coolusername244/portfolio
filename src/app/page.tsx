import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
