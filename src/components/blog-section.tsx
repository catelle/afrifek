"use client"

import Image from 'next/image'
import { ArrowRight, Globe, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { getTranslation, type Language } from '@/lib/translations'

const blogs = [
  {
    id: 1,
    image: '/reunion.jpg',
    category: 'Open Science',
    title: "Révolutionner la Visibilité de la Recherche Africaine",
    description: "Propulser avec force l'impact mondial des travaux de recherche africains en santé et sciences. Des millions d'articles scientifiques africains déploient leur puissance à l'échelle mondiale, forgeant l'excellence académique du continent et déclenchant une révolution de l'innovation pour un développement durable et inclusif."
  },
  {
    id: 2,
    image: '/repertorier2.jpg',
    category: 'Infrastructure Scientifique',
    title: 'Bâtir la Puissance de l\'Écosystème Scientifique Africain',
    description:
      "Nous consolidons avec force les revues scientifiques, institutions académiques, centres de recherche d'excellence et organisations savantes à travers l'Afrique. Notre plateforme déploie la puissance des journaux référencés dans les bases internationales majeures (Scopus, Web of Science) et les revues accréditées CAMES, révolutionnant la découvrabilité, forgeant une collaboration transfrontalière robuste et imposant l'expertise africaine sur l'échiquier scientifique mondial. Afri-Fek est officiellement reconnu par le Conseil Scientifique du Comité Consultatif des Institutions Universitaires (CS-CCIU) du Ministère de l'Enseignement Supérieur du Cameroun.",
  },
  {
    id: 3,
    image: '/soutenir.jpg',
    category: 'Open Access',
    title: 'Propulser la Révolution par l\'Accès Libre au Savoir',
    description:
      "Afri-Fek mène avec force la révolution de l'Open Access et du libre accès à la connaissance scientifique. Nous déployons une infrastructure puissante et des ressources stratégiques pour renforcer les chercheurs, éditeurs et institutions académiques africaines. Rejoignez notre mouvement révolutionnaire et contribuez à forger un accès démocratique à la science pour propulser le progrès continental."
  },
]

interface BlogSectionProps {
  language: Language;
}

export function BlogSection({ language }: BlogSectionProps) {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

  const toggleExpanded = (id: number) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="mission" className="py-24 sm:py-18 bg-white  dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-9xl text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#4d7c0f] dark:text-amber-500">{getTranslation('ourMission', language)}</Badge>
        </div>

        {/* Mission Card */}
        <Card className="overflow-hidden py-0 mb-16">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/eval2.jpg"
                  alt="Mission Afri-Fek"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl text-left font-bold tracking-tight sm:text-4xl mb-6 dark:text-slate-100">
                  Faciliter l'évaluation et la promotion des enseignants chercheurs
                </h2>
                <p className="text-lg text-left text-muted-foreground dark:text-slate-300 leading-relaxed mb-6">
                  Nous assurons un <strong>recensement exhaustif</strong> et une <strong>centralisation des resources scientifiques</strong>  de qualité, en libre accès et évaluées par les pairs. Ce processus vise à garantir que les informations sont facilement accessibles, vérifiables et exploitables pour une évaluation rigoureuse.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Target className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-left dark:text-slate-100">Qualité</h3>
                      <p className="text-sm text-left text-muted-foreground dark:text-slate-300">
                        Des données structurées, fiables et vérifiables pour garantir l'évaluation
                        rigoureuse des revues scientifiques africaines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-left dark:text-slate-100">Validité</h3>
                      <p className="text-sm text-left text-muted-foreground dark:text-slate-300">
                        Une information fiable, conforme aux normes et réglementations, assurant
                        la crédibilité et la transparence des décisions d'évaluation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 dark:text-slate-100">
            {getTranslation('revolutionizeEcosystem', language)}
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-300">
            {getTranslation('revolutionizeDescription', language)}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden py-0">
              <CardContent className="px-0">
                <div className="aspect-video">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={225}
                    className="size-full object-cover dark:invert dark:brightness-[0.95]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-muted-foreground dark:text-slate-400 text-xs tracking-widest uppercase">
                    {blog.category}
                  </p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="cursor-pointer"
                  >
                    <h3 className="text-xl font-bold hover:text-primary transition-colors dark:text-slate-100">{blog.title}</h3>
                  </a>
                  <div className="text-muted-foreground dark:text-slate-300">
                    <p className={`${!expandedCards[blog.id] ? 'line-clamp-5' : ''}`}>
                      {blog.description}
                    </p>
                    {blog.description.length > 200 && (
                      <button
                        onClick={() => toggleExpanded(blog.id)}
                        className="text-[#eab308] hover:text-amber-500 hover:underline text-sm mt-2"
                      >
                        {expandedCards[blog.id] ? getTranslation('readLess', language) : getTranslation('readMore', language)}
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
