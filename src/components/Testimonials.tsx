
import React, { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Avant Bang nous étions à 3,8/5. En 3 mois, nous sommes passés à 4,6/5, et notre fréquentation a augmenté de 22%.",
    author: "Marie Dubois",
    business: "Restaurant Le Petit Marché",
    improvement: "De 3.8 à 4.6 étoiles",
    image: "https://placehold.co/200/F8FAFC/1E293B/png?text=MD"
  },
  {
    quote: "La simplicité de Bang est ce qui m'a séduit. En quelques clics, j'ai pu mettre en place une stratégie complète de gestion des avis qui a transformé notre visibilité.",
    author: "Thomas Bernard",
    business: "Salon de coiffure Metamorphose",
    improvement: "De 4.0 à 4.8 étoiles",
    image: "https://placehold.co/200/F8FAFC/1E293B/png?text=TB"
  },
  {
    quote: "L'équipe de Bang a su m'accompagner pour transformer mes avis négatifs en opportunités d'amélioration. Résultat : nos nouveaux clients mentionnent souvent avoir choisi notre établissement grâce aux avis.",
    author: "Sarah Moreau",
    business: "Hôtel Les Jardins",
    improvement: "De 3.5 à 4.7 étoiles",
    image: "https://placehold.co/200/F8FAFC/1E293B/png?text=SM"
  }
];

const Testimonials = () => {
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
      id="testimonials" 
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
          Ils ont <span className="text-bang-orange">transformé</span> leur e-réputation
        </h2>
        
        <p 
          className={cn(
            "section-subtitle text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "200ms" }}
        >
          Découvrez comment Bang a aidé des centaines de commerçants à améliorer 
          leur visibilité et à attirer plus de clients grâce à une meilleure e-réputation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-bang-orange text-bang-orange" />
                ))}
              </div>
              
              <blockquote className="text-bang-lightblue mb-6 flex-grow italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-2">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-bang-blue">{testimonial.author}</div>
                  <div className="text-sm text-bang-lightblue">{testimonial.business}</div>
                  <div className="text-xs font-medium text-green-600 mt-1">{testimonial.improvement}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={cn(
            "mt-16 text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "900ms" }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-bang-blue/5 rounded-full">
            <span className="text-bang-blue font-medium">Partenaire Google certifié</span>
            <span className="mx-3 text-bang-lightblue">•</span>
            <span className="text-bang-blue font-medium">50+ commerces accompagnés</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
