
import React from 'react';
import { cn } from '@/lib/utils';
import { Utensils, Scissors, Tooth, XRay, Hospital, Car, Store, HeartPulse } from 'lucide-react';

const businesses = [
  { icon: <Utensils className="h-6 w-6" />, name: "Restaurants" },
  { icon: <Scissors className="h-6 w-6" />, name: "Coiffeurs" },
  { icon: <Tooth className="h-6 w-6" />, name: "Dentistes" },
  { icon: <XRay className="h-6 w-6" />, name: "Radiologie" },
  { icon: <Hospital className="h-6 w-6" />, name: "Cliniques" },
  { icon: <Car className="h-6 w-6" />, name: "Garages Auto" },
  { icon: <Store className="h-6 w-6" />, name: "Commerces" },
  { icon: <HeartPulse className="h-6 w-6" />, name: "Bien-être" }
];

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: '100ms' }}
            >
              Dominez votre <span className="text-bang-orange">e-réputation</span> et augmentez votre visibilité sur Google à partir de <span className="text-bang-orange">19,99€ HT/mois</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-bang-lightblue opacity-0 animate-fade-in" 
              style={{ animationDelay: '300ms' }}
            >
              Solution complète de gestion d'avis en ligne, 2x plus performante et 4x moins chère que la concurrence
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '500ms' }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-bang-orange hover:bg-opacity-90 text-white font-medium rounded-full transition-all text-center flex items-center justify-center"
              >
                Nous contacter
              </a>
              <a 
                href="#pricing" 
                className="px-8 py-3.5 bg-white border border-bang-gray hover:border-bang-orange text-bang-blue font-medium rounded-full transition-all text-center flex items-center justify-center"
              >
                Découvrir nos offres
              </a>
            </div>
            
            <div 
              className="flex items-center gap-4 pt-2 opacity-0 animate-fade-in"
              style={{ animationDelay: '600ms' }}
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-bang-lightgray flex items-center justify-center text-xs font-bold">AP</div>
                <div className="w-10 h-10 rounded-full bg-bang-lightgray flex items-center justify-center text-xs font-bold">MR</div>
                <div className="w-10 h-10 rounded-full bg-bang-lightgray flex items-center justify-center text-xs font-bold">TL</div>
              </div>
              <p className="text-sm text-bang-lightblue">
                <span className="font-semibold">500+</span> commerçants satisfaits
              </p>
            </div>
          </div>
          
          <div 
            className="relative opacity-0 animate-fade-in-up animation-delay-300"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {businesses.map((business, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-bang-gray hover:border-bang-orange transition-all flex flex-col items-center text-center gap-2"
                >
                  <div className="bg-bang-lightgray rounded-full p-3 text-bang-orange">
                    {business.icon}
                  </div>
                  <p className="font-medium text-bang-blue text-sm">{business.name}</p>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 10L21 3M21 3H15M21 3V9M10 14L3 21M3 21H9M3 21L3 15" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-bang-blue">+34%</div>
                  <div className="text-xs text-bang-lightblue">de visibilité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
