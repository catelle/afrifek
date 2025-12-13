"use client"

import {
  BookOpen,
  FileText,
  Building2,
  GraduationCap
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { DotPattern } from '@/components/dot-pattern'
import { useResourceStats } from '@/hooks/useResourceStats'
import { getTranslation, type Language } from '@/lib/translations'

interface StatsSectionProps {
  language: Language;
}

export function StatsSection({ language }: StatsSectionProps) {
  const { stats, loading } = useResourceStats()
  
  const statItems = [
    {
      icon: BookOpen,
      value: loading ? getTranslation('loading', language) : stats.journals.toString(),
      label: getTranslation('journals', language),
      description: getTranslation('scientificPublications', language)
    },
    {
      icon: FileText,
      value: loading ? getTranslation('loading', language) : stats.articles.toString(),
      label: getTranslation('articles', language),
      description: getTranslation('publishedResearch', language)
    },
    {
      icon: Building2,
      value: loading ? getTranslation('loading', language) : stats.institutions.toString(),
      label: getTranslation('institutions', language),
      description: getTranslation('researchCenters', language)
    },
     {
      icon: Building2,
      value: loading ? getTranslation('loading', language) : stats.editeurs.toString(),
      label: getTranslation('editeurs',language),
      description: getTranslation('researchCenters', language)
    },
     {
      icon: Building2,
      value: loading ? getTranslation('loading', language) : stats.ouvrages.toString(),
      label: getTranslation('ouvrages',language),
      description: getTranslation('researchCenters', language)
    },
    {
      icon: GraduationCap,
      value: loading ? getTranslation('loading', language) : stats.total.toString(),
      label: getTranslation('totalResources', language),
      description: getTranslation('completeDatabase', language)
    }
  ]

  return (
    <section id="stats" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background with transparency */}
      <div className="absolute inset-0 dark:from-amber-500/5 dark:to-orange-500/5" />
      <DotPattern className="opacity-75" size="md" fadeStyle="circle" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statItems.map((stat, index) => (
            <Card
              key={index}
              className="text-center backdrop-blur-sm border-border/50 py-0 shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-slate-800/50"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <stat.icon className="h-6 w-6 text-[#eab308]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl text-[#eab308] sm:text-3xl font-bold ">
                    +{stat.value}
                  </h3>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm  text-muted-foreground">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
