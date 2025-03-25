
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const importancePoints = [
  {
    stat: "84%",
    description: "des consommateurs font confiance aux avis en ligne autant qu'aux recommandations personnelles"
  },
  {
    stat: "5-9%",
    description: "d'augmentation du chiffre d'affaires possible avec une étoile supplémentaire sur Google"
  },
  {
    stat: "25%",
    description: "de clics en plus pour les entreprises avec une note de 4.5+ étoiles par rapport aux notes inférieures"
  }
];

const Importance = () => {
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
      id="importance" 
      className="py-20 px-4 bg-bang-blue text-white"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 
            className={cn(
              "section-title text-center opacity-0",
              isVisible && "animate-fade-in"
            )}
          >
            Pourquoi la gestion de vos avis est <span className="text-bang-orange">cruciale</span> pour votre business?
          </h2>
          
          <div className="space-y-8 mt-12">
            {importancePoints.map((point, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-6 opacity-0",
                  isVisible && "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-bang-orange">{point.stat}</div>
                <div className="text-white/90">{point.description}</div>
              </div>
            ))}
          </div>
          
          <div 
            className={cn(
              "mt-12 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "600ms" }}
          >
            <p className="text-lg text-center">
              Une gestion active de vos avis vous permet non seulement d'améliorer votre visibilité 
              en ligne, mais aussi de gagner la confiance des clients potentiels, 
              de fidéliser votre clientèle existante et d'obtenir des insights 
              précieux pour perfectionner votre offre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;
