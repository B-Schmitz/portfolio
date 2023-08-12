import HomePage from 'components/Home/Home';
import Projects from 'components/Projects/Projects';
import About from 'components/About/About';
import Footer from 'components/Footer/Footer';
import HomeGradient from 'components/Gradients/HomeGradient';

/**
 * Renders the homepage of a portfolio website.
 * @returns {JSX.Element} The homepage JSX elements.
 */
export default function Home(): JSX.Element {
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
