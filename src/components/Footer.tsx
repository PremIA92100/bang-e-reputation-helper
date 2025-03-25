
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-bang-blue text-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              Bang<span className="text-bang-orange">.</span>
            </div>
            <p className="text-white/70 mb-6">
              Solution complète de gestion d'avis en ligne pour améliorer votre e-réputation et augmenter votre visibilité sur Google.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-bang-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-bang-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-bang-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-bang-orange transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-bang-orange transition-colors">Tarifs</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-bang-orange transition-colors">Témoignages</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-bang-orange transition-colors">FAQ</a></li>
            </ul>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-white font-medium mb-2">Garantie <span className="text-[#ea384c] font-bold">100% SATISFAIT OU REMBOURSÉ</span></p>
              <p className="text-white/70 text-sm">Testez notre solution sans risque. Si vous n'êtes pas satisfait, nous vous remboursons intégralement.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-bang-orange" />
                <span className="text-white/70">01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-bang-orange" />
                <span className="text-white/70">contact@bang-ereputation.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-bang-orange mt-1" />
                <span className="text-white/70">58 rue de la République<br />75011 Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 px-4 text-center text-white/50 text-sm">
          <div className="mb-2">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
          <div>
            © {new Date().getFullYear()} Bang. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
