import React from 'react';
import { Star, TrendingUp, Building2, ShieldCheck, MessageSquare, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const Cliniques = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-bang-blue mb-6">
            L'impact des avis Google sur la croissance des <span className="text-bang-orange">établissements de santé</span>
          </h1>
          <p className="text-xl text-bang-lightblue text-center max-w-3xl mx-auto">
            Dans un monde où la recherche d'informations médicales commence souvent en ligne, la réputation numérique des établissements de santé est devenue un atout stratégique incontournable. Les avis Google représentent aujourd'hui une vitrine digitale essentielle pour les cliniques, centres de radiologie, cabinets dentaires et autres structures médicales.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Citation mise en avant */}
            <blockquote className="bg-blue-50 p-6 rounded-xl border-l-4 border-bang-orange my-8">
              <p className="text-xl font-semibold text-bang-blue">
                "95% des patients consultent les avis en ligne avant de choisir un professionnel de santé"
              </p>
              <footer className="text-bang-lightblue">
                - Étude Reputation Management, 2023
              </footer>
            </blockquote>

            <h2 className="text-3xl font-bold text-bang-blue mt-12 mb-6">
              Pourquoi les avis Google sont essentiels pour les établissements de santé
            </h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-bang-blue mb-4">
                Un facteur déterminant dans le choix des patients
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Star className="text-bang-orange flex-shrink-0 mt-1" />
                  <span>84% des patients font confiance aux avis en ligne autant qu'aux recommandations personnelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-bang-orange flex-shrink-0 mt-1" />
                  <span>Les établissements avec une note moyenne supérieure à 4,5 étoiles attirent 2,5 fois plus de nouveaux patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="text-bang-orange flex-shrink-0 mt-1" />
                  <span>70% des patients sont prêts à se déplacer plus loin pour consulter un praticien mieux noté</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-bang-blue mt-8 mb-4">
              Un levier puissant pour le référencement local
            </h3>
            <p className="text-bang-lightblue mb-8">
              Google privilégie les établissements bien notés dans ses résultats de recherche locaux. Une clinique dentaire, un centre d'imagerie médicale ou un cabinet de radiologie bénéficiant d'avis positifs et nombreux apparaîtra plus haut dans les résultats pour des requêtes comme "centre dentaire près de chez moi" ou "radiologie urgente Paris".
            </p>

            {/* Témoignage Client */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-bang-orange">★★★★★</div>
                <span className="font-semibold">Témoignage Client</span>
              </div>
              <p className="italic text-bang-lightblue">
                "L'équipe du Centre d'Imagerie Médicale Saint-Michel a été d'un professionnalisme remarquable. Prise en charge rapide, explications claires de mon IRM et personnel attentionné. Je recommande vivement !"
              </p>
              <p className="text-right text-sm text-bang-lightblue mt-2">- Marie D.</p>
            </div>

            <h2 className="text-3xl font-bold text-bang-blue mt-12 mb-6">
              Les meilleures pratiques pour gérer vos avis Google
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <Clock className="text-bang-orange mb-4 h-8 w-8" />
                <h4 className="text-xl font-bold text-bang-blue mb-2">Réactivité</h4>
                <ul className="space-y-2 text-bang-lightblue">
                  <li>✓ Réponse sous 24h</li>
                  <li>✓ Suivi personnalisé</li>
                  <li>✓ Solutions concrètes</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle2 className="text-bang-orange mb-4 h-8 w-8" />
                <h4 className="text-xl font-bold text-bang-blue mb-2">Professionnalisme</h4>
                <ul className="space-y-2 text-bang-lightblue">
                  <li>✓ Courtoisie</li>
                  <li>✓ Secret médical</li>
                  <li>✓ Gestion des conflits</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-bang-blue mt-12 mb-6">
              Résultats concrets avec Bang Reputation
            </h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-bang-blue mb-4">
                Cas pratique : Centre d'imagerie médicale
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-bang-orange">+37%</div>
                  <p className="text-sm text-bang-lightblue">Taux de conversion</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-bang-orange">4.7★</div>
                  <p className="text-sm text-bang-lightblue">Note moyenne</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-bang-orange text-white p-8 rounded-xl text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Prêt à transformer votre réputation en ligne ?
              </h3>
              <p className="mb-6">
                Découvrez comment Bang Reputation peut vous aider à gérer efficacement vos avis Google
                et à attirer plus de patients.
              </p>
              <a 
                href="#contact"
                className="inline-block bg-white text-bang-orange px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                Demander une démo
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Cliniques; 