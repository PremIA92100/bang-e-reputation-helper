
import React, { useEffect, useState, useRef } from 'react';
import { MessageSquare, TrendingUp, Search, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-bang-orange" />,
    title: "Gestion automatisée des avis Google",
    description: "Notre plateforme surveille et collecte automatiquement tous vos avis clients pour vous faire gagner du temps précieux."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-bang-orange" />,
    title: "Réponses ultra personnalisées à chaque client",
    description: "Des réponses sur mesure qui valorisent votre image de marque et renforcent la satisfaction client."
  },
  {
    icon: <Search className="h-10 w-10 text-bang-orange" />,
    title: "Utilisation des meilleurs mots clés pour votre SEO",
    description: "Améliorez votre référencement local grâce à des réponses optimisées pour les moteurs de recherche."
  },
  {
    icon: <BarChart className="h-10 w-10 text-bang-orange" />,
    title: "Rapports mensuels de performance",
    description: "Suivez l'évolution de votre e-réputation avec des analyses détaillées et des recommandations concrètes."
  }
];

const Solution = () => {
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
      id="services" 
      className="py-20 px-4 bg-bang-lightgray"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <h2 
          className={cn(
            "section-title text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
        >
          Notre solution tout-en-un pour votre <span className="text-bang-orange">e-réputation</span>
        </h2>
        
        <p 
          className={cn(
            "section-subtitle text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "200ms" }}
        >
          Bang simplifie la gestion de vos avis en ligne et transforme chaque commentaire 
          en opportunité de croissance pour votre entreprise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-8 rounded-2xl shadow-sm flex gap-6 opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <div className="flex-shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-bang-blue mb-2">{feature.title}</h3>
                <p className="text-bang-lightblue">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
