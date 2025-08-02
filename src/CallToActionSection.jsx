import React from 'react';

// --- SVG ICONS ---
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

const PhoneIcon = ({ className }) => (
    <svg 
        className={className} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
    </svg>
);

const CallToActionSection = () => {
    return (
        <section id="contact" className="bg-gradient-to-br from-[#5D4037] to-[#8D6E63] py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{fontFamily: "'Lora', serif"}}>
                        Prêt à Transformer Votre Sourire ?
                    </h2>
                    
                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed" style={{fontFamily: "'Poppins', sans-serif"}}>
                        Rejoignez des centaines de patients satisfaits qui ont déjà connu la différence. 
                        Réservez votre consultation aujourd'hui et faites le premier pas vers un sourire plus sain et plus confiant.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
                        {/* Primary CTA Button */}
                        <a href="https://www.instagram.com/smiledoctors" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-[#5D4037] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg">
                            <span className="flex items-center justify-center space-x-2">
                                <span>Consultation Gratuite</span>
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </a>
                        
                        {/* Secondary CTA Button */}
                        <a href="tel:+21611111111" className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#5D4037] transition-all duration-300 ease-in-out hover:scale-105">
                            <span className="flex items-center justify-center space-x-2">
                                <PhoneIcon className="w-5 h-5" />
                                <span>Appelez Maintenant: +216 11111111</span>
                            </span>
                        </a>
                    </div>
                    
                    {/* Urgency Message */}
                    <p className="text-white/70 text-sm mt-8 italic" style={{fontFamily: "'Poppins', sans-serif"}}>
                        Offre limitée: Consultation gratuite et aperçu numérique du sourire inclus
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection; 