"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Lightbulb, Users, Sparkles } from 'lucide-react'
import { getTranslation, type Language } from '@/lib/translations'

interface VisionSectionProps {
  language: Language
}

export function VisionSection({ language }: VisionSectionProps) {
  return (
    <section id="vision" className="py-24 sm:py-18 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#4d7c0f] dark:text-amber-500">
            {getTranslation('ourVision', language)}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 dark:text-slate-100">
            {getTranslation('visionTitle', language)}
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-300 leading-relaxed">
            {getTranslation('visionDescription', language)}
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-amber-400 transition-all duration-300 dark:bg-slate-800/50">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                  <Lightbulb className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 dark:text-slate-100">
                {getTranslation('connectKnowledge', language)}
              </h3>
              <p className="text-center text-muted-foreground dark:text-slate-300">
                {getTranslation('connectKnowledgeDesc', language)}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-amber-400 transition-all duration-300 dark:bg-slate-800/50">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                  <Users className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 dark:text-slate-100">
                {getTranslation('dynamizeCollaboration', language)}
              </h3>
              <p className="text-center text-muted-foreground dark:text-slate-300">
                {getTranslation('dynamizeCollaborationDesc', language)}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-amber-400 transition-all duration-300 dark:bg-slate-800/50">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                  <Sparkles className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 dark:text-slate-100">
                {getTranslation('shineExpertise', language)}
              </h3>
              <p className="text-center text-muted-foreground dark:text-slate-300">
                {getTranslation('shineExpertiseDesc', language)}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
