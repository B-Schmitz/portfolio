import HomePage from 'components/Home/Home';
import Projects from 'components/Projects/Projects';
import About from 'components/About/About';
import Footer from 'components/Footer/Footer';
import HomeGradient from 'components/Gradients/HomeGradient';

export default function Home() {
  return (
    <>
      <HomePage />
      <HomeGradient />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
