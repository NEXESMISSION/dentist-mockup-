import React from 'react';

// --- SVG ICONS ---
const CheckmarkIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1.41 14.59L6.5 13.5l1.41-1.41L10.59 13.5 16.08 8l1.41 1.41-7.08 7.18z" fill="currentColor"/>
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

// --- LIST ITEM COMPONENT ---
const TreatmentListItem = ({ text }) => (
    <li className="flex items-start space-x-3">
        <CheckmarkIcon className="w-6 h-6 text-[#5D4037] flex-shrink-0 mt-1" />
        <span className="text-lg text-gray-700" style={{fontFamily: "'Poppins', sans-serif"}}>{text}</span>
    </li>
);

// --- IMMEDIATE CARE SECTION COMPONENT ---
const ImmediateCareSection = () => {
    const treatments = [
        "Severe toothaches or infections",
        "Broken, chipped, or cracked teeth",
        "Lost or damaged fillings and crowns",
        "Knocked-out teeth",
        "Gum or soft tissue injuries",
    ];

    const half = Math.ceil(treatments.length / 2);
    const leftColumnTreatments = treatments.slice(0, half);
    const rightColumnTreatments = treatments.slice(half);

    return (
        <div className="bg-[#F4F0EB] py-12 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Changed to items-stretch to make columns equal height */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-stretch">
                    
                    {/* --- Left Column: Image --- */}
                    <div className="h-full">
                        <img 
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                            alt="Woman holding her jaw in pain from a toothache"
                            className="w-full h-full object-cover rounded-3xl shadow-xl"
                        />
                    </div>

                    {/* --- Right Column: Text Content --- */}
                    <div className="flex flex-col">
                        {/* Heading and Paragraph */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A3A3A]" style={{fontFamily: "'Lora', serif"}}>
                                Immediate Care When You Need It Most
                            </h2>
                            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Dental emergencies can happen when you least expect them, and we're here to help. At The Smile Doctors, we offer fast, reliable emergency dental care to address your urgent needs. Whether it's severe tooth pain, a cracked tooth, or a dental injury, our experienced team is ready to provide prompt relief and expert treatment.
                            </p>
                        </div>

                        {/* What We Treat Section */}
                        <div className="mt-8 md:mt-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#3A3A3A]" style={{fontFamily: "'Lora', serif"}}>
                                What We Treat:
                            </h3>
                            <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-3 md:gap-y-4">
                                <ul className="space-y-3 md:space-y-4">
                                    {leftColumnTreatments.map((text, index) => (
                                        <TreatmentListItem key={index} text={text} />
                                    ))}
                                </ul>
                                <ul className="space-y-3 md:space-y-4">
                                    {rightColumnTreatments.map((text, index) => (
                                        <TreatmentListItem key={index} text={text} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className="mt-8 md:mt-10">
                             <button className="flex items-center space-x-2 md:space-x-3 bg-[#5D4037] text-white px-5 md:px-7 py-3 md:py-3.5 rounded-full font-bold text-sm md:text-md hover:bg-opacity-90 transition-transform duration-300 ease-in-out hover:scale-105">
                                <span>Learn more</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImmediateCareSection; 