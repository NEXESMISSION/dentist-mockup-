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

const FloatingElementX = ({ className }) => (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15L65 65" stroke="#A9D8E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M65 15L15 65" stroke="#A9D8E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- ABOUT US SECTION COMPONENT ---
const AboutUsSection = () => {
    return (
        <section id="about-us" className="bg-white py-12 md:py-16 lg:py-24 relative overflow-hidden">
            {/* Background decorative element */}
            <FloatingElementX className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 absolute top-0 -right-8 md:-right-10 lg:-right-12 opacity-20 z-0 hidden lg:block pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                    
                    {/* --- Left Column: Text Box (Now First) --- */}
                    <div className="flex flex-col space-y-6 md:space-y-8">
                        {/* Heading and Paragraph */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A3A3A] leading-tight" style={{fontFamily: "'Lora', serif"}}>
                                Dédié à Votre Santé Dentaire
                            </h2>
                            <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Chez The Smile Doctors, nous croyons qu'un sourire sain est la base de la confiance et du bien-être général. Situé au cœur de la Tunisie, notre clinique a fièrement fourni des soins dentaires exceptionnels aux familles depuis plus de 10 ans.
                                <br/><br/>
                                Notre équipe de professionnels dentaires qualifiés et compatissants se consacre à créer un environnement accueillant où les patients de tous âges se sentent à l'aise et valorisés. Des contrôles de routine aux procédures avancées, nous utilisons une technologie de pointe pour garantir que vos soins sont à la fois efficaces et indolores.
                            </p>
                        </div>

                        {/* Two smaller images */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                            <img 
                                src="https://www.jensondental.com/wp-content/uploads/2022/08/Dollarphotoclub_77825039-2-scaled.jpg"
                                alt="Modern dental equipment and technology"
                                className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover rounded-2xl md:rounded-3xl shadow-lg"
                                loading="lazy"
                            />
                            <img 
                                src="https://www.dentsblanches.ge/img/news/SomeThingstoConsiderWhenChoosingRestorativeDentistry_1706095347.jpeg"
                                alt="Dentist examining patient with modern equipment"
                                className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover rounded-2xl md:rounded-3xl shadow-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* --- Right Column: Image Box (Now Second) --- */}
                    <div className="flex flex-col space-y-6 md:space-y-8">
                        {/* Main Image with Responsive Name Tags */}
                        <div className="relative">
                            <img 
                                src="https://img.freepik.com/premium-photo/two-dentists-examine-patient-s-teeth-further-treatment_116317-3916.jpg" 
                                alt="Two dentists examining patient's teeth for further treatment"
                                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl md:rounded-3xl shadow-xl"
                                loading="lazy"
                            />
                            {/* Name Tags Container */}
                            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 w-full flex justify-center sm:justify-start px-3 sm:px-4 md:px-6 space-x-2 sm:space-x-3 md:space-x-4">
                                <div className="bg-[#EAE3D9]/90 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl text-center shadow-md">
                                    <p className="font-bold text-xs sm:text-sm md:text-lg text-[#3A3A3A]" style={{fontFamily: "'Lora', serif"}}>Dr. Emily Carter</p>
                                    <p className="text-xs text-gray-600" style={{fontFamily: "'Poppins', sans-serif"}}>Senior Dentist</p>
                                </div>
                                <div className="bg-[#D9E8EC]/90 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl text-center shadow-md">
                                    <p className="font-bold text-xs sm:text-sm md:text-lg text-[#3A3A3A]" style={{fontFamily: "'Lora', serif"}}>Dr. Jessica Hale</p>
                                    <p className="text-xs text-gray-600" style={{fontFamily: "'Poppins', sans-serif"}}>Orthodontist</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Text and Button below image */}
                        <div>
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Nous ne nous contentons pas de traiter les dents ; nous construisons des relations durables avec nos patients. Votre sourire est notre succès !
                            </p>
                            <a href="https://www.instagram.com/smiledoctors" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-6 inline-flex items-center space-x-2 md:space-x-3 bg-[#5D4037] text-white px-5 md:px-7 py-3 md:py-3.5 rounded-full font-bold text-sm md:text-md hover:bg-opacity-90 transition-transform duration-300 ease-in-out hover:scale-105">
                                <span>En savoir plus sur nous</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
