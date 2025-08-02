import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import TrustIndicatorsSection from './TrustIndicatorsSection.jsx'
import AboutUsSection from './AboutUsSection.jsx'
import ServicesSection from './ServicesSection.jsx'
import WhyTrustUsSection from './WhyTrustUsSection.jsx'
import ImmediateCareSection from './ImmediateCareSection.jsx'
import CallToActionSection from './CallToActionSection.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Floating "Made by" tag */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://www.instagram.com/digiplus_xtfp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#5D4037] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium tracking-wide hover:bg-[#8D6E63] transition-colors duration-300 cursor-pointer opacity-75"
        >
          Made by digiplus-xtfp
        </a>
      </div>
      
      <Header />
      <HeroSection />
      <TrustIndicatorsSection />
      <AboutUsSection />
      <ServicesSection />
      <WhyTrustUsSection />
      <ImmediateCareSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}

export default App 