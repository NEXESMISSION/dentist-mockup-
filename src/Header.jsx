import React from 'react';

// --- SVG ICONS ---
const PhoneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const ArrowRight = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

// --- MAIN HEADER COMPONENT ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'À Propos', href: '#about-us' },
    { name: 'Services', href: '#services' },
    { name: 'Pourquoi Nous Faire Confiance', href: '#why-trust-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#F8F5F1]" style={{ fontFamily: "'Lora', serif" }}>
      {/* Top decorative border line */}
      <div className="h-1.5 bg-[#EAE3D9]"></div>
      
      <header className="relative shadow-sm">
        {/* Container with better responsive padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Adjusted height for a sleeker look */}
          <div className="flex items-center justify-between h-24">
            
            {/* Logo with responsive font size */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
                    <span style={{color: '#65C9D2'}}>S</span>
                    <span style={{color: '#F0B93C'}}>m</span>
                    <span style={{color: '#E67E9A'}}>i</span>
                    <span style={{color: '#8DC63F'}}>l</span>
                    <span style={{color: '#F59A62'}}>e</span>
                    <span className="text-[#5D5D5D]"> Doctors</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation with adjusted spacing */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="text-base xl:text-lg font-semibold text-[#5D5D5D] hover:text-[#4a4a4a] transition-colors duration-200 whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Action Buttons with adjusted spacing */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <a href="tel:+21611111111" className="p-2.5 xl:p-3 bg-[#EAE3D9] rounded-full text-[#5D5D5D] hover:bg-opacity-80 transition-all duration-300 ease-in-out hover:scale-110">
                <PhoneIcon className="w-5 h-5 xl:w-6 xl:h-6" />
              </a>
              <a href="https://www.instagram.com/smiledoctors" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 xl:space-x-3 bg-[#5D4037] text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-full font-bold text-sm xl:text-base hover:bg-opacity-90 transition-transform duration-300 ease-in-out hover:scale-105">
                <span>Consultation Gratuite</span>
                <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#5D5D5D] hover:text-black focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with improved layout */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#F8F5F1] shadow-lg z-20 border-t border-gray-200">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="w-full text-left text-[#5D5D5D] hover:bg-[#EAE3D9] hover:text-black block px-4 py-3 rounded-lg text-lg font-semibold"
                >
                  {link.name}
                </button>
              ))}
               <div className="border-t border-gray-300 mt-5 pt-5 flex flex-col items-center space-y-4">
                 <a href="https://www.instagram.com/smiledoctors" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center space-x-3 bg-[#5D4037] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-opacity-90 transition-opacity">
                    <span>Consultation Gratuite</span>
                    <ArrowRight className="w-4 h-4" />
                 </a>
                  <a href="tel:+21611111111" className="w-full flex items-center justify-center p-3 bg-[#EAE3D9] rounded-full text-[#5D5D5D] hover:bg-opacity-80 transition-opacity font-semibold text-base">
                    <PhoneIcon className="w-5 h-5" />
                    <span className="ml-3">Appelez-nous</span>
                  </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header; 