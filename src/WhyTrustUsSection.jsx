import React, { useState } from 'react';

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

const AccordionArrowIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

// --- TRUST ITEM (ACCORDION) COMPONENT ---
const TrustItem = ({ item, isOpen, onClick }) => (
    <div 
        className={`border-b-2 transition-colors duration-300 ease-in-out ${isOpen ? 'bg-[#5D4037] border-transparent' : 'bg-transparent border-gray-200/80'}`}
    >
        {/* Special background for Cutting-Edge Technology item */}
        {item.id === 1 && isOpen && (
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                    backgroundImage: `url('https://cdn.prod.website-files.com/5fee3fd14df42836719a4aa2/64b5cb78f54b87b6b7ffe156_63ed9c8939c05bd03c382874_types-of-dentists.jpeg')`,
                    backgroundPosition: 'center 30%' // Crop from top and bottom by positioning at 30% from top
                }}
            ></div>
        )}
        
        {/* Header for the accordion item */}
        <div 
            className={`flex items-start space-x-6 p-6 cursor-pointer relative z-10 ${!isOpen && 'hover:bg-white/50'}`}
            onClick={onClick}
        >
            <span className={`text-4xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#5D4037]'}`} style={{fontFamily: "'Lora', serif"}}>{item.id}</span>
            <div className="flex-grow">
                <h3 className={`text-2xl font-semibold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#3A3A3A]'}`} style={{fontFamily: "'Lora', serif"}}>{item.title}</h3>
                {/* No short description shown for any closed items */}
            </div>
            <div className="flex-shrink-0 pt-2">
                <AccordionArrowIcon className={`w-6 h-6 transition-all duration-500 ease-in-out ${isOpen ? 'text-white rotate-180' : 'text-gray-400'}`} />
            </div>
        </div>
        
        {/* Content for the open accordion item - using CSS Grid for smooth animation */}
        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0 ml-16 relative z-10"> {/* Indent content to align with title */}
                    {/* Special layout for the first item */}
                    {item.id === 1 ? (
                        <div className="relative rounded-2xl overflow-hidden mt-2 min-h-[200px] md:min-h-[250px]">
                            {/* Gradient overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            
                            {/* Content overlay */}
                            <div className="relative z-10 h-full flex items-end p-6 md:p-8">
                                <div className="text-white">
                                    <h4 className="text-xl md:text-2xl font-semibold mb-3" style={{fontFamily: "'Lora', serif"}}>
                                        Technologie Dentaire Avancée
                                    </h4>
                                    <p className="text-sm md:text-base leading-relaxed opacity-90" style={{fontFamily: "'Poppins', sans-serif"}}>
                                        Nous utilisons les dernières technologies dentaires pour assurer précision, confort et les meilleurs résultats possibles pour votre traitement. Notre équipement de pointe et nos techniques avancées fournissent des soins supérieurs avec un minimum d'inconfort.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-200 text-lg leading-relaxed" style={{fontFamily: "'Poppins', sans-serif"}}>{item.description}</p>
                    )}
                </div>
            </div>
        </div>
    </div>
);

// --- WHY TRUST US SECTION COMPONENT ---
const WhyTrustUsSection = () => {
    const [openItem, setOpenItem] = useState(1); // Default to the first item being open

    const trustItems = [
        { id: 1, title: "Technologie de Pointe", description: "Nous utilisons les dernières technologies dentaires pour assurer précision, confort et les meilleurs résultats possibles pour votre traitement." },
        { id: 2, title: "Soins Centrés sur le Patient", description: "Votre confort et votre satisfaction sont nos priorités absolues. Nous faisons tout notre possible pour vous faire sentir comme chez vous." },
        { id: 3, title: "Services Complets", description: "De la dentisterie générale à l'orthodontie, nous fournissons tous les soins dont vous avez besoin sous un même toit." },
        { id: 4, title: "Horaires Flexibles", description: "Nous comprenons votre mode de vie occupé et offrons des heures de rendez-vous pratiques, y compris les soirs et les weekends." },
        { id: 5, title: "Soins Abordables", description: "Avec des prix transparents et des options de paiement flexibles, nous rendons les soins dentaires de qualité accessibles à tous." },
    ];

    return (
        <section id="why-trust-us" className="bg-[#F8F5F1] py-12 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
                    
                    {/* --- Left Column: Text Content --- */}
                    <div className="max-w-lg">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A3A3A]" style={{fontFamily: "'Lora', serif"}}>
                            Pourquoi les Patients Font Confiance aux Smile Doctors
                        </h2>
                        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed" style={{fontFamily: "'Poppins', sans-serif"}}>
                            Nous sommes plus qu'une simple clinique dentaire – nous sommes vos partenaires pour atteindre une santé bucco-dentaire optimale. Les patients de toute la Tunisie nous choisissent pour leurs soins.
                        </p>
                        <a href="https://www.instagram.com/smiledoctors" target="_blank" rel="noopener noreferrer" className="mt-6 md:mt-8 inline-flex items-center space-x-2 md:space-x-3 bg-[#5D4037] text-white px-5 md:px-7 py-3 md:py-3.5 rounded-full font-bold text-sm md:text-md hover:bg-opacity-90 transition-transform duration-300 ease-in-out hover:scale-105">
                            <span>Consultation Gratuite</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </div>

                    {/* --- Right Column: Accordion List --- */}
                    <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-3xl shadow-lg overflow-hidden">
                        {trustItems.map(item => (
                            <TrustItem 
                                key={item.id}
                                item={item}
                                isOpen={openItem === item.id}
                                onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyTrustUsSection; 