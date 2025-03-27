import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Cliniques = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Gestion des avis Google pour Cliniques | Bang Reputation</title>
        <meta name="description" content="Optimisez la réputation en ligne de votre clinique avec Bang Reputation. Solution complète de gestion d'avis Google, 2x plus performante et 4x moins chère." />
        <meta name="keywords" content="avis google clinique, e-réputation médicale, gestion avis clinique, réputation en ligne santé" />
      </Helmet>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-[#FF5733]">
                  Bang
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className="border-transparent text-gray-500 hover:text-[#FF5733] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Accueil
                </Link>
                <Link to="/cliniques" className="border-[#FF5733] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Cliniques
                </Link>
                <Link to="/restaurants" className="border-transparent text-gray-500 hover:text-[#FF5733] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Restaurants
                </Link>
                <Link to="/hotels" className="border-transparent text-gray-500 hover:text-[#FF5733] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Hôtels
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Dominez votre </span>
              <span className="block text-[#FF5733]">e-réputation médicale</span>
              <span className="block mt-3">à partir de <span className="text-[#FF5733]">9,99€ HT/mois</span></span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Solution complète de gestion d'avis en ligne, 2x plus performante et 4x moins chère que la concurrence
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF5733] hover:bg-[#ff4520] md:py-4 md:text-lg md:px-10">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Faites confiance à l'expertise médicale
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Des résultats prouvés pour les établissements de santé
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Augmentation des avis
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-[#FF5733]">+147%</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Note moyenne
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-[#FF5733]">4.8/5</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Visibilité Google
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-[#FF5733]">+89%</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h2>
              <span className="block text-base text-center text-[#FF5733] font-semibold tracking-wide uppercase">
                Guide complet
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                L'impact des avis Google sur votre établissement de santé
              </span>
            </h2>
            <div className="mt-8 prose prose-lg text-gray-500 mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mt-8">Le rôle crucial des avis dans le secteur médical</h3>
              <p>
                La transformation numérique du secteur médical a profondément modifié la manière dont les patients choisissent leurs établissements de santé. Les avis en ligne, particulièrement sur Google, sont devenus un facteur déterminant dans le processus de sélection d'une clinique.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Impact sur votre visibilité locale</h3>
              <p>
                Le référencement local des établissements de santé est directement influencé par la qualité et la quantité des avis Google. Les algorithmes de recherche privilégient systématiquement les établissements bénéficiant d'une forte présence en ligne.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Une stratégie sur mesure pour votre établissement</h3>
              <p>
                La mise en place d'un processus structuré de collecte d'avis est essentielle. Les établissements de santé performants intègrent cette démarche dans leur protocole post-consultation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#FF5733] font-semibold tracking-wide uppercase">Fonctionnalités</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Une solution complète pour votre centre médical
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Réponse automatisée",
                  description: "Système intelligent de réponse d'avis post-consultation"
                },
                {
                  title: "Réponse SEO",
                  description: "Réponse SEO optimale pour améliorer votre positionnement"
                },
                {
                  title: "Analyse détaillée",
                  description: "Tableaux de bord et statistiques en temps réel"
                },
                {
                  title: "Conformité RGPD",
                  description: "Protection des données et respect du secret médical"
                }
              ].map((feature) => (
                <div key={feature.title} className="relative">
                  <div className="absolute h-12 w-12 flex items-center justify-center rounded-md bg-[#FF5733] text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#FF5733]">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Prêt à améliorer votre réputation en ligne ?</span>
            <span className="block">Commencez dès aujourd'hui.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white opacity-90">
            Rejoignez les établissements de santé qui font confiance à Bang Reputation.
          </p>
          <a
            href="#contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#FF5733] bg-white hover:bg-gray-50 sm:w-auto"
          >
            Demander une démo
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} Bang Reputation. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cliniques; 