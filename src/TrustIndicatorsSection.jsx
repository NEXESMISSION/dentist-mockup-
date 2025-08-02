import React, { useState, useEffect } from 'react';

const TrustIndicatorsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({ patients: 0, years: 0, satisfaction: 0 });

    // Intersection Observer for animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('trust-indicators');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    // Counter animation
    useEffect(() => {
        if (isVisible) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            const animateCount = (target, setter) => {
                let current = 0;
                const increment = target / steps;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    setter(Math.floor(current));
                }, stepDuration);
            };

            animateCount(500, (value) => setCounts(prev => ({ ...prev, patients: value })));
            animateCount(15, (value) => setCounts(prev => ({ ...prev, years: value })));
            animateCount(100, (value) => setCounts(prev => ({ ...prev, satisfaction: value })));
        }
    }, [isVisible]);

    return (
        <section id="trust-indicators" className="bg-[#F8F5F1] py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3A3A3A] mb-4" style={{fontFamily: "'Lora', serif"}}>
                        Fait Confiance aux Familles de Tunisie
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto" style={{fontFamily: "'Poppins', sans-serif"}}>
                        Rejoignez des centaines de patients satisfaits qui ont connu des soins dentaires exceptionnels
                    </p>
                </div>

                {/* Trust Indicators Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {/* Happy Patients */}
                    <div className={`group relative transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-[#5D4037] to-[#8D6E63] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            
                            {/* Number */}
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D4037] mb-3 text-center flex-shrink-0" style={{fontFamily: "'Lora', serif"}}>
                                {counts.patients}+
                            </div>
                            
                            {/* Title */}
                            <div className="text-xl font-semibold text-gray-800 mb-3 text-center flex-shrink-0" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Patients Heureux
                            </div>
                            
                            {/* Description */}
                            <p className="text-gray-600 text-center leading-relaxed flex-grow" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Fait confiance par les familles de toute la Tunisie pour des soins dentaires exceptionnels et des plans de traitement personnalisés
                            </p>
                        </div>
                    </div>
                    
                    {/* Years Experience */}
                    <div className={`group relative transform transition-all duration-700 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-[#5D4037] to-[#8D6E63] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            
                            {/* Number */}
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D4037] mb-3 text-center flex-shrink-0" style={{fontFamily: "'Lora', serif"}}>
                                {counts.years}+
                            </div>
                            
                            {/* Title */}
                            <div className="text-xl font-semibold text-gray-800 mb-3 text-center flex-shrink-0" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Années d'Expérience
                            </div>
                            
                            {/* Description */}
                            <p className="text-gray-600 text-center leading-relaxed flex-grow" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Des décennies d'expertise professionnelle et d'éducation continue pour vous fournir les meilleures solutions dentaires
                            </p>
                        </div>
                    </div>
                    
                    {/* Satisfaction Rate */}
                    <div className={`group relative transform transition-all duration-700 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-[#5D4037] to-[#8D6E63] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            
                            {/* Number */}
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D4037] mb-3 text-center flex-shrink-0" style={{fontFamily: "'Lora', serif"}}>
                                {counts.satisfaction}%
                            </div>
                            
                            {/* Title */}
                            <div className="text-xl font-semibold text-gray-800 mb-3 text-center flex-shrink-0" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Taux de Satisfaction
                            </div>
                            
                            {/* Description */}
                            <p className="text-gray-600 text-center leading-relaxed flex-grow" style={{fontFamily: "'Poppins', sans-serif"}}>
                                Engagé pour votre satisfaction complète à chaque visite et chaque traitement que nous fournissons
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustIndicatorsSection; 