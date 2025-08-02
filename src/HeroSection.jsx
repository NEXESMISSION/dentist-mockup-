import React, { useState } from 'react';

// --- SVG ICONS ---
const PlayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4" />
    <path d="M68 50L42 65V35L68 50Z" />
  </svg>
);

const FloatingElementG = ({ className }) => (
    <svg className={className} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M96.3335 116.9C83.8335 125.9 67.6668 124.7 56.5002 114.1C43.0002 101.6 42.4002 80.8 54.1002 67.9C65.8002 55 85.9002 52.6 99.7002 62.2C107.8 67.9 112.9 76.3 114.7 85.3" stroke="#D9C8E3" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M125 85.3H87.5" stroke="#D9C8E3" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
);

const FloatingElementX = ({ className }) => (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15L65 65" stroke="#A9D8E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M65 15L15 65" stroke="#A9D8E4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- VIDEO POPUP MODAL ---
const VideoModal = ({ videoId, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-4xl z-10"
                >
                    &times;
                </button>
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

// --- HERO SECTION COMPONENT ---
const HeroSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const youtubeVideoId = "rY4nJ9zB-2E"; // A placeholder dental video

    return (
        <div className="bg-[#F8F5F1] py-12 md:py-16 lg:py-24 relative overflow-hidden">
            
            {/* --- Layer 1: Background Floating Elements (Behind Everything) --- */}
            <FloatingElementG className="w-32 h-32 absolute top-10 left-5 opacity-20 md:w-48 md:h-48 md:top-1/4 md:-translate-x-1/3 animate-float pointer-events-none" />
            <FloatingElementX className="w-20 h-20 absolute bottom-10 right-5 opacity-30 md:w-24 md:h-24 md:bottom-0 md:right-0 md:translate-x-1/4 md:translate-y-1/4 animate-wiggle pointer-events-none" />
            <FloatingElementX className="w-16 h-16 absolute top-20 right-1/4 opacity-20 hidden xl:block animate-float-slow pointer-events-none" />
            <FloatingElementG className="w-20 h-20 absolute bottom-1/4 left-1/4 opacity-10 hidden xl:block animate-wiggle pointer-events-none" />

            {/* --- Layer 2: Main Content (Text and Video) --- */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* --- Main Heading --- */}
                <div className="text-center max-w-5xl mx-auto">
                    <h1 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3A3A3A]" 
                        style={{ fontFamily: "'Lora', serif" }}
                    >
                        Votre Sourire, Notre Priorité
                        <br />
                        Soins Dentaires en <i className="font-serif">Tunisie</i>
                    </h1>
                    <p 
                        className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Fournissant des services dentaires experts pour tous les âges dans un environnement confortable, moderne et accueillant.
                    </p>
                </div>

                {/* --- Video Section --- */}
                <div className="mt-12 md:mt-16 max-w-6xl mx-auto relative">
                     {/* --- Layer 3: Foreground Floating Elements (On Top of Video) --- */}
                    <FloatingElementX className="w-28 h-28 absolute -bottom-10 -left-10 opacity-50 z-20 hidden md:block animate-float-slow pointer-events-none" />
                    <FloatingElementG className="w-24 h-24 absolute -top-10 -right-10 opacity-40 z-20 hidden md:block animate-wiggle pointer-events-none" />

                    <div 
                        className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group z-10"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        {/* Video Thumbnail */}
                        <img 
                            src="https://riverrockdentalfamily.com/wp-content/uploads/2023/06/Oral-Surgery-in-Austin-TX-2.jpg" 
                            alt="Oral Surgery in Austin, TX - Professional dental care"
                            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-40">
                            <PlayIcon className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Video Modal (Highest Layer) --- */}
            {isVideoOpen && <VideoModal videoId={youtubeVideoId} onClose={() => setIsVideoOpen(false)} />}
        </div>
    );
};

export default HeroSection; 