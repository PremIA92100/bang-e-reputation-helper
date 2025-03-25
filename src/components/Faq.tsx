
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "Comment fonctionne le service Bang ?",
    answer: "Bang surveille en permanence vos avis Google et vous notifie dès qu'un nouveau commentaire est publié. Notre système analyse le contenu et vous propose des réponses personnalisées optimisées pour le SEO. Vous pouvez soit les utiliser telles quelles, soit les ajuster avant publication. Nous vous fournissons également des rapports mensuels détaillés pour suivre l'évolution de votre e-réputation."
  },
  {
    question: "Combien de temps pour voir des résultats ?",
    answer: "La plupart de nos clients constatent une amélioration significative de leur note moyenne sur Google après 2 à 3 mois d'utilisation. Cette période peut varier en fonction de votre situation initiale et du nombre d'avis reçus mensuellement. Dès les premières semaines, vous remarquerez une amélioration dans la qualité de vos réponses et une meilleure gestion de votre temps."
  },
  {
    question: "Comment gérez-vous les avis négatifs ?",
    answer: "Les avis négatifs sont une opportunité d'amélioration ! Notre plateforme les détecte immédiatement et vous propose des réponses stratégiques pour montrer votre professionnalisme et votre souci de satisfaction client. Nous vous conseillons sur la meilleure façon de transformer une critique en opportunité, tout en vous donnant des recommandations concrètes pour résoudre les problèmes soulevés."
  },
  {
    question: "Est-ce que vous répondez à tous les avis ?",
    answer: "Absolument ! Chaque avis mérite une réponse, qu'il soit positif ou négatif. Les réponses aux avis positifs renforcent votre relation client et améliorent votre image. Les réponses aux avis négatifs montrent votre professionnalisme et votre engagement envers la satisfaction client. Notre plateforme vous permet de gérer efficacement l'ensemble de vos avis avec des réponses personnalisées et optimisées."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-20 px-4"
      ref={sectionRef}
    >
      <div className="container max-w-3xl mx-auto">
        <h2 
          className={cn(
            "section-title text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
        >
          Foire aux <span className="text-bang-orange">questions</span>
        </h2>
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border border-bang-gray rounded-xl overflow-hidden opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-left bg-white hover:bg-bang-lightgray transition-colors"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-bang-blue">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-bang-lightblue transition-transform",
                    openIndex === index && "transform rotate-180"
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "max-h-0 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index && "max-h-96"
                )}
              >
                <p className="px-6 pb-5 text-bang-lightblue">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
