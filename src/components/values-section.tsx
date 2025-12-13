"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Unlock, Users, Award, Zap, Layers, Globe } from 'lucide-react'

const values = [
  
 
  {
    icon: Award,
    title: 'LÉGITIMITÉ',
    description:
      "Afri-Fek fournit des informations vérifiées, conformes aux normes et reconnues par les instances académiques, renforçant la crédibilité et la fiabilité des évaluations scientifiques."
  },
  {
    icon: Layers,
    title: 'EXHAUSTIVITÉ',
    description:
      "Un recensement structuré, complet et continuellement mis à jour des revues scientifiques africaines, offrant une vision claire, centralisée et exploitable de l’ensemble de l’écosystème."
  },
  {
    icon: Unlock,
    title: 'ACCESSIBILITÉ',
    description:
      "Des données ouvertes, librement accessibles et facilement consultables, permettant à tous chercheurs, évaluateurs, institutions d’accéder sans barrières à l’information essentielle."
  },
  {
    icon: Globe,
    title: 'IMPACT',
    description:
      "En favorisant la transparence, la visibilité et la diffusion mondiale des resources, Afri-Fek contribue à renforcer l’impact global de la recherche produite sur le continent."
  }


]

import { type Language } from '@/lib/translations'

interface ValuesSectionProps {
  language: Language;
}

export function ValuesSection({ language }: ValuesSectionProps) {
  return (
    <section id="values" className="py-24 sm:py-18 bg-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-1/3 right-0 w-80 h-80  rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80  rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#4d7c0f] dark:text-amber-400 shadow-sm">Nos Valeurs</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 dark:text-slate-100">
            Les Piliers de Notre Engagement
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-300">
            Quatre valeurs fondamentales qui guident notre action quotidienne pour transformer l'écosystème scientifique africain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400  mb-4 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#4d7c0f] dark:text-amber-500 tracking-wider">
                  {value.title}
                </h3>
                <p className="text-muted-foreground dark:text-slate-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
