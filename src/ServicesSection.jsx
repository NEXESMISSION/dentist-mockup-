import React, { useRef } from 'react';

// --- SVG ICONS ---
const LeftArrowIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const RightArrowIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const ExpandArrowIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M17 7h-7M17 7v7" />
    </svg>
);

// Service-specific Icons
const GeneralDentistryIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 00-9.98 10.53c.12 5.43 4.56 9.87 9.98 9.98 5.53.11 10.05-4.32 10.02-9.85A10 10 0 0012 2z" />
        <path d="M16 12a4 4 0 11-8 0 4 4 0 018 0zM12 12h.01" />
    </svg>
);

const CosmeticDentistryIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const OrthodonticsIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 8h14M5 12h14M5 16h14" />
        <path d="M8 5v14" />
        <path d="M16 5v14" />
    </svg>
);

const DentalImplantIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v8m-4-4h8" />
        <path d="M12 20a4 4 0 004-4H8a4 4 0 004 4z" />
        <path d="M12 4a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
);

// --- SERVICE CARD COMPONENT ---
const ServiceCard = ({ icon, title, description }) => (
    <div className="service-card flex-shrink-0 w-80 sm:w-96 h-80 sm:h-96 bg-white/60 backdrop-blur-sm border border-white/30 rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 ease-in-out hover:bg-white hover:shadow-2xl hover:-translate-y-2 snap-start">
        <div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 text-[#6D5B55]">{icon}</div>
            <h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl font-bold text-[#3A3A3A]" style={{ fontFamily: "'Lora', serif" }}>{title}</h3>
            <p className="mt-3 text-gray-600 text-base sm:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>{description}</p>
        </div>
        <div className="self-end">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#5D4037] group-hover:border-[#5D4037] transition-all duration-300">
                <ExpandArrowIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-white" />
            </div>
        </div>
    </div>
);

// --- SERVICES SECTION COMPONENT ---
const ServicesSection = () => {
    const scrollContainerRef = useRef(null);

    const services = [
        { icon: <GeneralDentistryIcon />, title: "Dentisterie Générale", description: "Services dentaires complets pour tous les âges dans un environnement confortable, moderne et accueillant." },
        { icon: <CosmeticDentistryIcon />, title: "Dentisterie Esthétique", description: "Transformez votre sourire avec le blanchiment des dents, les facettes et autres traitements esthétiques." },
        { icon: <OrthodonticsIcon />, title: "Orthodontie", description: "Redressez vos dents et améliorez votre occlusion avec des appareils orthodontiques ou des aligneurs transparents." },
        { icon: <DentalImplantIcon />, title: "Implants Dentaires", description: "Restaurez les dents manquantes avec des solutions durables et naturelles." },
        { icon: <GeneralDentistryIcon />, title: "Dentisterie Pédiatrique", description: "Soins spécialisés et doux pour la santé dentaire de vos enfants de la petite enfance à l'adolescence." },
        { icon: <CosmeticDentistryIcon />, title: "Parodontologie", description: "Traitement des maladies des gencives et autres conditions soutenant les dents." },
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const card = scrollContainerRef.current.querySelector('.service-card');
            if (!card) return;
            
            const cardWidth = card.offsetWidth;
            const gap = 24; // Corresponds to space-x-6
            const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="bg-[#F8F5F1] py-12 md:py-16 lg:py-24 overflow-hidden">
            {/* Centered container for the heading */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A3A3A] tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
                        Services Dentaires Complets pour
                        <br />
                        Toute la <i className="font-serif italic">Famille</i>
                    </h2>
                </div>
            </div>
            
            {/* Scrolling cards container */}
            <div className="mt-12 md:mt-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        ref={scrollContainerRef}
                        className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation arrows */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex justify-center space-x-4">
                <button onClick={() => scroll('left')} className="p-3 sm:p-4 bg-white/70 backdrop-blur-sm border border-white/50 text-[#5D4037] rounded-full shadow-md hover:bg-white transition-all duration-300 ease-in-out hover:scale-110">
                    <LeftArrowIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
                <button onClick={() => scroll('right')} className="p-3 sm:p-4 bg-white/70 backdrop-blur-sm border border-white/50 text-[#5D4037] rounded-full shadow-md hover:bg-white transition-all duration-300 ease-in-out hover:scale-110">
                    <RightArrowIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
            </div>
        </section>
    );
};

export default ServicesSection; 