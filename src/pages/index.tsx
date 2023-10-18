import HomePage from 'templates/Home/Home';
import Projects from 'templates/Projects/Projects';
import About from 'templates/About/About';
import Timeline from 'templates/Timeline/Timeline';
import Footer from 'components/Footer/Footer';
import HomeGradient from 'components/Gradients/HomeGradient';

export default function Home(): JSX.Element {
  return (
    <>
      <HomePage />
      <HomeGradient />
      <About />
      <Timeline />
      <Projects />
      <Footer />
    </>
  );
}
