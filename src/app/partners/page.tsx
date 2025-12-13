'use client';

import { Handshake, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { name: 'MINESUP', logo: '/logo-minesup.png', description: 'Ministère de l\'Enseignement Supérieur du Cameroun', url: 'https://www.minesup.gov.cm' },
  { name: 'AFRIMVOE', logo: '/logo-afrim.png', description: 'African Medical and Veterinary Open Education', url: 'https://afrimvoe.org' },
  { name: 'CAMES', logo: '/logo-cames.png', description: 'Conseil Africain et Malgache pour l\'Enseignement Supérieur', url: 'https://www.lecames.org' },
  { name: 'MINSANTE', logo: '/logo-minsante.png', description: 'Ministère de la Santé Publique du Cameroun', url: 'https://www.minsante.cm' },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen relative">
      {/* Floating Home Button */}
      <Link href="/" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-white hover:bg-gray-50 text-amber-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-amber-400">
        <Home className="w-6 h-6" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Accueil</span>
      </Link>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/90 via-orange-900/85 to-amber-800/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <Handshake className="w-8 h-8 text-white" />
            <h1 className="text-4xl font-bold text-white">Nos Partenaires</h1>
          </div>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Afri-Fek collabore avec des organisations de renommée pour renforcer l'écosystème scientifique africain et faciliter l'accès à la recherche de qualité.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50 hover:border-amber-300"
            >
              <div className="h-32 flex items-center justify-center mb-6">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center border-2 border-white/50">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Devenir Partenaire</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et contribuez à transformer l'écosystème scientifique africain. Ensemble, nous pouvons faire briller l'excellence de la recherche africaine.
          </p>
          <div className="flex justify-center">
            <a href="/#contact" className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
