import { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    // Load portfolio data
    const loadPortfolioData = async () => {
      try {
        const response = await fetch('/data/portfolio.json');
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
        // Fallback data in case the JSON file is not found
        setPortfolioData({
          personal: {
            name: 'Ratan Singh',
            profession: 'Full Stack Developer',
            tagline: 'Building digital experiences that make a difference',
            bio: 'I\'m a passionate full-stack developer with experience creating web applications.',
            profileImage: '/images/ProfilePicture.jpg',
            resume: '/assets/files/resume.pdf',
            location: 'San Francisco, CA',
            email: 'john.doe@email.com',
            phone: '+1 (555) 123-4567'
          },
          skills: [],
          projects: [],
          experience: [],
          education: [],
          social: {
            github: 'https://github.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
            email: 'john.doe@email.com'
          }
        });
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">Error loading portfolio data</p>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>{portfolioData.personal.name} - {portfolioData.personal.profession}</title>
          <meta name="description" content={portfolioData.personal.tagline} />
          <meta name="keywords" content="portfolio, developer, react, web development" />
          <meta name="author" content={portfolioData.personal.name} />
          
          {/* Open Graph */}
          <meta property="og:title" content={`${portfolioData.personal.name} - ${portfolioData.personal.profession}`} />
          <meta property="og:description" content={portfolioData.personal.tagline} />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${portfolioData.personal.name} - ${portfolioData.personal.profession}`} />
          <meta name="twitter:description" content={portfolioData.personal.tagline} />
        </Helmet>

        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero data={portfolioData} />
          <About data={portfolioData} />
          <Projects data={portfolioData} />
          <Experience data={portfolioData} />
          <Contact data={portfolioData} />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;