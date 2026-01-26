import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ExperienceSection from '../components/ExperienceSection';
import FeatureCards from '../components/FeatureCards';
import LocationMap from '../components/LocationMap';
import Gallery from '../components/Gallery';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ExperienceSection />
      <FeatureCards />
      <LocationMap />
      <Gallery />
      <CTASection />
      <Footer />
    </main>
  );
}
