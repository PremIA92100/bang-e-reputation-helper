
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const Problem = () => {
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
      id="problem" 
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
          9 clients sur 10 consultent vos avis<br />avant de franchir votre porte
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-8 rounded-2xl shadow-sm border border-bang-gray flex flex-col items-center text-center opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl font-bold text-bang-orange mb-4">{stat.value}</div>
              <div className="text-bang-blue">{stat.description}</div>
            </div>
          ))}
        </div>

        <div 
          className={cn(
            "mt-16 text-lg text-bang-lightblue text-center max-w-3xl mx-auto opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "600ms" }}
        >
          <p>Les avis en ligne sont devenus un facteur décisif pour les consommateurs. 
          Sans une gestion attentive de votre e-réputation, vous risquez de perdre des opportunités 
          précieuses d'attirer de nouveaux clients et de fidéliser les existants. 
          Les défis sont nombreux : manque de temps, difficulté à obtenir des avis positifs, 
          gestion complexe des critiques négatives, et incapacité à exploiter ces retours 
          pour améliorer votre offre.</p>
        </div>
      </div>
    </section>
  );
};

const statistics = [
  {
    value: "93%",
    description: "des consommateurs lisent les avis en ligne avant d'acheter"
  },
  {
    value: "87%",
    description: "des clients ne considèrent pas les entreprises avec moins de 3 étoiles"
  },
  {
    value: "4.2★",
    description: "est la note minimale pour être considéré comme fiable"
  }
];

export default Problem;
