
import React, { useEffect, useState, useRef } from 'react';
import { Utensils, Scissors, Building, Car, HeartPulse, Home, Stethoscope, Store } from 'lucide-react';
import { cn } from '@/lib/utils';

const industries = [
  {
    icon: <Utensils className="h-8 w-8" />,
    name: "Restaurants"
  },
  {
    icon: <Scissors className="h-8 w-8" />,
    name: "Salons de coiffure"
  },
  {
    icon: <Building className="h-8 w-8" />,
    name: "Hôtels"
  },
  {
    icon: <Car className="h-8 w-8" />,
    name: "Concessions automobiles"
  },
  {
    icon: <HeartPulse className="h-8 w-8" />,
    name: "Commerces de beauté"
  },
  {
    icon: <Home className="h-8 w-8" />,
    name: "Agences immobilières"
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    name: "Cabinets médicaux"
  },
  {
    icon: <Store className="h-8 w-8" />,
    name: "Commerces de proximité"
  }
];

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="industries" 
      className="py-20 px-4"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <h2 
          className={cn(
            "section-title text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
        >
          Des solutions adaptées à votre <span className="text-bang-orange">secteur d'activité</span>
        </h2>
        
        <p 
          className={cn(
            "section-subtitle text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "200ms" }}
        >
          Quelle que soit votre activité, Bang vous accompagne dans l'amélioration 
          de votre présence en ligne et de votre réputation sur Google.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white border border-bang-gray hover:border-bang-orange p-6 rounded-2xl flex flex-col items-center text-center transition-all opacity-0 hover:shadow-md",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="bg-bang-lightgray rounded-full p-4 mb-4 text-bang-blue">{industry.icon}</div>
              <h3 className="font-medium text-bang-blue">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
