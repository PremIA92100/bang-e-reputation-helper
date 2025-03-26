
import React, { useEffect, useState, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: "Essentiel",
    price: "19,99€",
    billing: "HT / mois",
    description: "Idéal pour les petits commerces qui débutent dans la gestion des avis.",
    features: [
      "Surveillance de vos avis Google",
      "Notifications par email",
      "30 réponses personnalisées / mois",
      "Rapport mensuel basique",
      "Support par email"
    ],
    notIncluded: [
      "Réponses optimisées pour le SEO",
      "Analyse sémantique des avis",
      "Intégration des avis sur votre site",
      "Support prioritaire",
      "Marketing multi-établissements"
    ],
    cta: "Commencer l'essai",
    popular: false
  },
  {
    name: "Premium",
    price: "29,99€",
    billing: "HT / mois",
    description: "Pour les commerces qui veulent optimiser leur e-réputation.",
    features: [
      "Surveillance de vos avis Google",
      "Notifications en temps réel",
      "100 réponses personnalisées / mois",
      "Réponses optimisées pour le SEO",
      "Rapport mensuel détaillé",
      "Analyse sémantique des avis",
      "Marketing multi-établissements",
      "Support par email et téléphone"
    ],
    notIncluded: [
      "Intégration des avis sur votre site",
      "Support prioritaire"
    ],
    cta: "Commencer l'essai",
    popular: true
  },
  {
    name: "Business",
    price: "49,99€",
    billing: "HT / mois",
    description: "Solution complète pour les entreprises qui exigent l'excellence.",
    features: [
      "Surveillance de vos avis Google",
      "Notifications en temps réel",
      "Réponses illimitées personnalisées",
      "Réponses optimisées pour le SEO",
      "Rapport mensuel avancé",
      "Analyse sémantique des avis",
      "Marketing multi-établissements",
      "Intégration des avis sur votre site",
      "Widget de collecte d'avis",
      "Support prioritaire 7j/7"
    ],
    notIncluded: [],
    cta: "Commencer l'essai",
    popular: false
  }
];

const Pricing = () => {
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
      id="pricing" 
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
          Des offres <span className="text-bang-orange">adaptées</span> à vos besoins
        </h2>
        
        <p 
          className={cn(
            "section-subtitle text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "200ms" }}
        >
          Choisissez la solution qui correspond le mieux à votre activité 
          et commencez à transformer votre e-réputation dès aujourd'hui.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative bg-white border rounded-2xl overflow-hidden transition-all opacity-0",
                plan.popular ? "border-bang-orange shadow-lg" : "border-bang-gray",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-bang-orange text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Populaire
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-bang-blue mb-2">{plan.name}</h3>
                <p className="text-bang-lightblue mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-bang-blue">{plan.price}</span>
                  <span className="text-bang-lightblue ml-1">{plan.billing}</span>
                </div>
                
                <a 
                  href="#contact" 
                  className={cn(
                    "w-full py-3 rounded-lg font-medium text-center inline-block mb-6",
                    plan.popular 
                      ? "bg-bang-orange text-white hover:bg-opacity-90" 
                      : "bg-bang-lightgray text-bang-blue hover:bg-bang-gray"
                  )}
                >
                  {plan.cta}
                </a>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-bang-blue text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-bang-lightblue text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-4 bg-bang-lightgray text-center">
                <p className="text-sm font-medium text-bang-blue">
                  <span className="text-[#ea384c]">SATISFAIT OU REMBOURSÉ</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
