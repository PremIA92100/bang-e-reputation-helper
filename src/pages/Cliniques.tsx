import React from 'react';
import { Building2, Star, TrendingUp, ShieldCheck, MessageSquare } from 'lucide-react';

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
            Dans un monde où la recherche d'informations médicales commence souvent en ligne, la réputation numérique des établissements de santé est devenue un atout stratégique incontournable.
          </p>
        </div>
      </section>

      {/* Statistiques clés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-bang-orange mb-2">95%</div>
              <p className="text-bang-blue">des patients consultent les avis en ligne avant de choisir un professionnel de santé</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-bang-orange mb-2">2.5×</div>
              <p className="text-bang-blue">plus de nouveaux patients pour les établissements notés +4.5 étoiles</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-bang-orange mb-2">70%</div>
              <p className="text-bang-blue">des patients prêts à se déplacer plus loin pour un praticien mieux noté</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-bang-blue mb-6">
              Pourquoi les avis Google sont essentiels pour les établissements de santé
            </h2>
            <p className="text-bang-lightblue mb-8">
              La santé est un domaine où la confiance règne en maître. Avant de choisir un professionnel de santé, 
              les patients effectuent des recherches approfondies, et les avis Google constituent souvent leur premier 
              point de contact avec votre établissement.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-bang-blue mb-4">
                Un facteur déterminant dans le choix des patients
              </h3>
              <ul className="list-none space-y-4">
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

            <h2 className="text-3xl font-bold text-bang-blue mb-6">
              Comment Bang Reputation révolutionne la gestion des avis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <ShieldCheck className="text-bang-orange mb-4 h-8 w-8" />
                <h4 className="text-xl font-bold text-bang-blue mb-2">Conformité et Sécurité</h4>
                <ul className="space-y-2 text-bang-lightblue">
                  <li>✓ Respect du secret médical</li>
                  <li>✓ Conformité RGPD</li>
                  <li>✓ Données sécurisées</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <MessageSquare className="text-bang-orange mb-4 h-8 w-8" />
                <h4 className="text-xl font-bold text-bang-blue mb-2">Gestion Simplifiée</h4>
                <ul className="space-y-2 text-bang-lightblue">
                  <li>✓ Réponses personnalisées</li>
                  <li>✓ Suivi en temps réel</li>
                  <li>✓ Analyses détaillées</li>
                </ul>
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
      </section>
    </div>
  );
};

export default Cliniques; 