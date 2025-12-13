"use client"

import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Target, Globe, Shield } from 'lucide-react'

export function MissionSection() {
  return (
    <section id="mission" className="py-24 sm:py-18  dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      <div className="text-center mb-8">
        <Badge variant="outline" className="text-[#4d7c0f] dark:text-amber-500 shadow-sm">Notre Vision</Badge>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/booster.jpg"
              alt="Mission Afri-Fek"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 dark:text-slate-100">
              Faciliter l'Évaluation et la Promotion des Enseignants-Chercheurs
            </h2>
            <p className="text-lg text-muted-foreground dark:text-slate-300 leading-relaxed mb-6">
              Afri-Fek centralise et recense de manière exhaustive les <strong>revues scientifiques africaines de qualité, évaluées par les pairs et en libre accès</strong>. Notre plateforme fournit des données fiables et structurées pour faciliter l'évaluation rigoureuse des publications scientifiques, <strong>indépendamment de la discipline, de la géographie ou de la langue</strong>.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 dark:text-slate-100">Données Fiables</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-300">Informations vérifiées et structurées pour une évaluation rigoureuse des revues scientifiques.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 dark:text-slate-100">Accès Universel</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-300">Plateforme ouverte et accessible à tous les chercheurs et institutions africaines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organisation - Text Left, Image Right */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge variant="outline" className="mb-4 text-[#4d7c0f] dark:text-amber-500 shadow-sm">Notre Organisation</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 dark:text-slate-100">
              Communauté Gouvernée et Indépendante
            </h2>
            <p className="text-lg text-muted-foreground dark:text-slate-300 leading-relaxed mb-6">
              Afri-Fek est géré par une organisation à but non lucratif, gouvernée par la communauté. Le travail accompli par l'équipe Afri-Fek est soutenu par <strong>plus de 100 réviseurs volontaires</strong> qui nous aident à évaluer les candidatures. Tous les volontaires sont liés par un accord et doivent déclarer tout conflit d'intérêts.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 dark:text-slate-100">Qualité Garantie</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-300">Contenu évalué par les pairs, garantissant l'excellence de la recherche africaine.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="/soutenir.jpg"
              alt="Organisation Afri-Fek"
              fill
              className="object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}
