"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Database, Globe, BookOpen, Users } from 'lucide-react'
import { CardDecorator } from './card-decoretor'
import NewsletterModal from './NewsletterModal'
import PartnersModal from './PartnersModal'

const values = [
  {
    icon: Database,
    title: 'Infrastructure de Données Puissante',
    description: 'Déploiement d\'une base massive de publications scientifiques africaines indexées et validées avec force par nos experts.'
  },
  {
    icon: Search,
    title: 'Moteur de Recherche Révolutionnaire',
    description: 'Outils de recherche ultra-performants pour propulser votre découverte des publications pertinentes dans votre domaine.'
  },
  {
    icon: Globe,
    title: 'Impact International Massif',
    description: 'Plateforme puissante reconnue par les institutions africaines et internationales pour révolutionner la diffusion de la recherche.'
  },
  {
    icon: BookOpen,
    title: 'Révolution Open Access',
    description: 'Mouvement puissant de l\'Open Access pour forger un accès démocratique aux connaissances scientifiques africaines.'
  }
]

import { type Language } from '@/lib/translations'

interface AboutSectionProps {
  language: Language;
}

export function AboutSection({ language }: AboutSectionProps) {
  const [showNewsletter, setShowNewsletter] = useState(false)
  const [showPartners, setShowPartners] = useState(false)

  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#4d7c0f] dark:text-amber-500">
            Notre Organisation
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 dark:text-slate-100">
            Index Unique et Extensif de la Recherche Africaine
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-300 mb-8">
            Afri-Fek est un index unique et extensif de revues scientifiques africaines diversifiées en accès libre, porté par une communauté en pleine croissance.
            Nous sommes engagés à garantir que le contenu de qualité soit librement accessible en ligne pour tous. Afri-Fek est géré par une organisation à but non lucratif,
            gouvernée par la communauté, avec le soutien de plus de 100 réviseurs volontaires qui nous aident à évaluer les candidatures.
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group shadow-lg hover:shadow-2xl transition-all duration-300 py-2 border-slate-200 dark:border-slate-700'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='text-[#eab308] h-6 w-6' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{value.title}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-muted-foreground">🌍 Construite avec passion pour la communauté scientifique africaine</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="cursor-pointer bg-[#4d7c0f] hover:bg-[#3f6212]"
              onClick={() => setShowNewsletter(true)}
            >
              <Users className="mr-2 h-4 w-4" />
              Rejoindre la Communauté
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => setShowPartners(true)}
            >
              Découvrir nos Partenaires
            </Button>
          </div>
        </div>
      </div>
      
      <NewsletterModal 
        isOpen={showNewsletter} 
        onClose={() => setShowNewsletter(false)} 
      />
      <PartnersModal 
        isOpen={showPartners} 
        onClose={() => setShowPartners(false)} 
      />
    </section>
  )
}
