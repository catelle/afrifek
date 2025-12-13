"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, SortAsc, SortDesc, ArrowUpDown, ExternalLink, X, ChevronDown } from "lucide-react"
import { ResizedImage } from "../ResizeImage"
import { getDomainName } from "@/hooks/constants"
import PrintButton from "../PrintButton"
import React from "react"
import { useResourceStats } from "@/hooks/useResourceStats"
import { useResources, Resource } from "@/hooks/useResources"
import { getTranslation } from "@/lib/translations"


interface ResourceListProps {
  tab: string;
  searchTerm?: string;
  language: 'fr' | 'en';
  t: any;
}

export function ResourceList({
  tab,
  searchTerm = '',
  language,
  t
}: ResourceListProps) {
  console.log('ResourceList language:', language)
  const { resources, loading } = useResources()
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState(tab)
  const [sortBy, setSortBy] = useState<string>('none')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedDomain, setSelectedDomain] = useState<string>('')
  const [statusFilter, setStatusFilter] = useState('all')

  const allCountries = ['Afrique du Sud', 'Algérie', 'Angola', 'Bénin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroun', 'Cap-Vert', 'Centrafrique', 'Comores', 'Congo', "Côte d'Ivoire", 'Djibouti', 'Égypte', 'Érythrée', 'Éthiopie', 'Gabon', 'Gambie', 'Ghana', 'Guinée', 'Guinée-Bissau', 'Guinée équatoriale', 'Kenya', 'Lesotho', 'Liberia', 'Libye', 'Madagascar', 'Malawi', 'Mali', 'Maroc', 'Maurice', 'Mauritanie', 'Mozambique', 'Namibie', 'Niger', 'Nigeria', 'Ouganda', 'RDC', 'Rwanda', 'São Tomé-et-Príncipe', 'Sénégal', 'Seychelles', 'Sierra Leone', 'Somalie', 'Soudan', 'Soudan du Sud', 'Tanzanie', 'Tchad', 'Togo', 'Tunisie', 'Zambie', 'Zimbabwe', 'États-Unis', 'Canada', 'France', 'Allemagne', 'Royaume-Uni', 'Italie', 'Espagne', 'Portugal', 'Belgique', 'Suisse', 'Pays-Bas', 'Chine', 'Japon', 'Inde', 'Brésil', 'Argentine', 'Mexique', 'Australie']
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const { stats, loading: loadingstats } = useResourceStats()


  const [countries, setCountries] = useState<string[]>([])
  const [domains, setDomains] = useState<string[]>([])

  useEffect(() => {
    setActiveTab(tab)
  }, [tab])

  useEffect(() => {
    if (searchTerm) {
      setSearch(searchTerm)
    }
  }, [searchTerm])



  // const countries = useMemo(() => {
  //   return [...new Set(resources.map(r => r.country).filter(Boolean))].sort()
  // }, [resources])

  const getDomainNames = () => [
    { key: 'domain1', label: 'Droit, économie, politique' },
    { key: 'domain2', label: 'Lettres et sciences humaines' },
    { key: 'domain3', label: 'Mathématiques' },
    { key: 'domain4', label: 'Sciences physiques' },
    { key: 'domain5', label: 'Sciences de la terre et de la vie' },
    { key: 'domain6', label: 'Sciences de l\'ingénieur' },
    { key: 'domain7', label: 'Sciences pharmaceutiques et médicales' }
  ]

  // const filteredResources = useMemo(() => {
  //   let filtered = resources.filter(resource => {
  //     const matchesTab = activeTab === 'all' || resource.type === activeTab
  //     const matchesSearch = !search || 
  //       resource.name?.toLowerCase().includes(search.toLowerCase()) ||
  //       resource.resourceTitle?.toLowerCase().includes(search.toLowerCase()) ||
  //       resource.description?.toLowerCase().includes(search.toLowerCase())
  //     const matchesCountry = countryFilter === 'all' || resource.country === countryFilter
  //     const matchesDomain = domainFilter === 'all' || getDomainName(resource.domainJournal || '') === domainFilter
  //     const matchesStatus = statusFilter === 'all' || 
  //       (statusFilter === 'active' && resource.statut === 'ACTIVE') ||
  //       (statusFilter === 'inactive' && resource.statut !== 'ACTIVE')

  //     return matchesTab && matchesSearch && matchesCountry && matchesDomain && matchesStatus
  //   })

  const filteredResources = React.useMemo(() => {
    const searchLower = search.toLowerCase()

    const filtered = resources
      .filter(resource => {
        const toLower = (v: any) => typeof v === "string" ? v.toLowerCase() : "";

        if (activeTab !== "all" && toLower(resource.type) !== toLower(activeTab)) return false;
        if (selectedCountries.length > 0 && !selectedCountries.includes(resource.country)) return false;
        if (selectedDomain && getDomainName(resource.domainJournal || '') !== selectedDomain) return false;
        if (statusFilter !== "all" && toLower(resource.statut) !== toLower(statusFilter)) return false;

        if (search) {
          const title = toLower(resource.resourceTitle || resource.name);
          const desc = toLower(resource.description);
          const org = toLower(resource.organisationName);

          return (
            title.includes(searchLower) ||
            desc.includes(searchLower) ||
            org.includes(searchLower)
          );
        }

        return true;
      })
      .sort((a, b) => {
        // Handle sorting by name (alphabetically)
        if (sortBy === 'name') {
          const nameA = (a.resourceTitle || a.name || '').toLowerCase();
          const nameB = (b.resourceTitle || b.name || '').toLowerCase();

          // Sort in ascending/descending order based on sortOrder
          if (sortOrder === 'asc') {
            return nameA.localeCompare(nameB);
          } else {
            return nameB.localeCompare(nameA);
          }
        }

        // If there's a search term and no explicit sorting, prioritize relevance
        if (search && (!sortBy || sortBy === 'none')) {
          const searchLower = search.toLowerCase();
          const getRelevanceScore = (resource: Resource) => {
            const title = (resource.resourceTitle || resource.name || '').toLowerCase();
            const desc = (resource.description || '').toLowerCase();
            const org = (resource.organisationName || '').toLowerCase();

            let score = 0;
            if (title.includes(searchLower)) {
              score += title.startsWith(searchLower) ? 20 : title.indexOf(searchLower) === 0 ? 15 : 10;
            }
            if (desc.includes(searchLower)) score += 5;
            if (org.includes(searchLower)) score += 8;

            return score;
          };

          const scoreA = getRelevanceScore(a);
          const scoreB = getRelevanceScore(b);
          if (scoreA !== scoreB) return scoreB - scoreA;
        }

        // Priority for specific ISSN combinations (only when no search and no sorting)
        if (!sortBy || sortBy === 'none') {
          const aPriority = (
            (String(a.issnOnline || '').trim() === '2309-6535' && String(a.issnPrint || '').trim() === '1684-2782') ||
            (String(a.issnOnline || '').trim() === '3006-4090' && String(a.issnPrint || '').trim() === '3006-4104')
          );
          const bPriority = (
            (String(b.issnOnline || '').trim() === '2309-6535' && String(b.issnPrint || '').trim() === '1684-2782') ||
            (String(b.issnOnline || '').trim() === '3006-4090' && String(b.issnPrint || '').trim() === '3006-4104')
          );

          if (aPriority && !bPriority) return -1;
          if (!aPriority && bPriority) return 1;
        }

        return 0;
      });

    return filtered;
  }, [resources, search, selectedCountries, selectedDomain, statusFilter, activeTab, sortBy, sortOrder]);


  const paginatedResources = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const pageItems = filteredResources.slice(startIndex, endIndex)

    // Apply sorting ONLY to current page items
    if (sortBy && sortBy !== 'none') {
      return pageItems.sort((a, b) => {
        let comparison = 0;
        switch (sortBy) {
          case 'name':
            const nameA = String(a.resourceTitle ?? a.name ?? '').toLowerCase().trim();
            const nameB = String(b.resourceTitle ?? b.name ?? '').toLowerCase().trim();
            comparison = nameA.localeCompare(nameB, 'fr', { sensitivity: 'base' });
            break;

          case 'country':
            comparison = String(a.country ?? '').localeCompare(String(b.country ?? ''), 'fr', { sensitivity: 'base' });
            break;

          case 'date':
            comparison = (a.coverageStartYear ?? 0) - (b.coverageStartYear ?? 0);
            break;

          default:
            comparison = 0;
        }

        return sortOrder === 'asc' ? comparison : -comparison;
      })
    }

    return pageItems
  }, [filteredResources, currentPage, itemsPerPage, sortBy, sortOrder])


  const totalPages = Math.ceil(filteredResources.length / itemsPerPage)

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Skeleton className="w-16 h-16 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
  console.log(paginatedResources)
  return (
    <div className="max-w-9xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-16">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1 bg-[#ecfccb] dark:bg-slate-800 p-1 rounded-xl border border-amber-200 dark:border-slate-700">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#fbbf24] data-[state=active]:text-white text-xs sm:text-sm dark:text-gray-200 rounded-lg transition-all px-2 py-1.5">{getTranslation('allResources', language)}</TabsTrigger>
                <TabsTrigger value="Journal" className="data-[state=active]:bg-[#fbbf24] data-[state=active]:text-white text-xs sm:text-sm dark:text-gray-200 rounded-lg transition-all px-2 py-1.5">{getTranslation('journalsMenu', language)}</TabsTrigger>
                <TabsTrigger value="ouvrage" className="data-[state=active]:bg-[#fbbf24] data-[state=active]:text-white text-xs sm:text-sm dark:text-gray-200 rounded-lg transition-all px-2 py-1.5">{getTranslation('booksMenu', language)}</TabsTrigger>
                <TabsTrigger value="article" className="data-[state=active]:bg-[#fbbf24] data-[state=active]:text-white text-xs sm:text-sm dark:text-gray-200 rounded-lg transition-all px-2 py-1.5">{getTranslation('articlesMenu', language)}</TabsTrigger>
                <TabsTrigger value="blog" className="data-[state=active]:bg-[#fbbf24] data-[state=active]:text-white text-xs sm:text-sm dark:text-gray-200 rounded-lg transition-all px-2 py-1.5">{getTranslation('blogsMenu', language)}</TabsTrigger>
                <TabsTrigger value="institution" className="data-[state=active]:bg-[#fbbf24] data-[state=active]:text-white text-xs sm:text-sm dark:text-gray-200 rounded-lg transition-all px-2 py-1.5">{getTranslation('institutionsMenu', language)}</TabsTrigger>
                <TabsTrigger value="universite" className="data-[state=active]:bg-[#fbbf24] data-[state=active]:text-white text-xs sm:text-sm dark:text-gray-200 rounded-lg transition-all px-2 py-1.5">{getTranslation('universitiesMenu', language)}</TabsTrigger>
                <TabsTrigger value="editeur" className="data-[state=active]:bg-[#fbbf24] data-[state=active]:text-white rounded-lg transition-all">{getTranslation('publishersMenu', language)}</TabsTrigger>
              </TabsList>
            </div>

            <div className="mt-6 space-y-6">
              {/* Enhanced Search & Filter Bar */}
              <div className="bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 border-2 border-amber-200/60 rounded-2xl p-6 shadow-lg">
                {/* Search Bar */}
                <div className="mb-5">
                  <div className="relative max-w-2xl">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                    <input
                      type="search"
                      placeholder={getTranslation('searchPlaceholderResources', language)}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border-2 border-amber-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none text-gray-800 placeholder-gray-500 shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Filters Section - Hidden on mobile */}
                <div className="hidden md:block space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Filter className="w-4 h-4 text-amber-600" />
                    <span>{getTranslation('filtersAndSort', language)}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

                    {/* Sort By */}
                   <div className="flex flex-col md:flex-row md:items-center md:gap-3">

                      <label className="text-xs font-medium text-gray-600 ml-1">{getTranslation('sortBy', language)}</label>
                      <Select value={sortBy || 'none'} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full bg-white border-2 border-gray-300 hover:border-amber-400 rounded-lg shadow-sm transition-all">
                          <ArrowUpDown className="h-4 w-4 mr-2 text-gray-600" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">{getTranslation('noSort', language)}</SelectItem>
                          <SelectItem value="name">{getTranslation('alphabetic', language)}</SelectItem>
                          <SelectItem value="date">{getTranslation('date', language)}</SelectItem>
                          <SelectItem value="country">{getTranslation('country', language)}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sort Order */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-600 ml-1">{getTranslation('order', language)}</label>
                      <button
                        onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                        disabled={!sortBy || sortBy === 'none'}
                        className={`w-full px-4 py-2.5 rounded-lg border-2 font-medium transition-all shadow-sm flex items-center justify-center gap-2 ${!sortBy || sortBy === 'none'
                            ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                            : sortOrder === 'asc'
                              ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-400 text-green-700 hover:from-green-100 hover:to-emerald-100'
                              : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-400 text-blue-700 hover:from-blue-100 hover:to-indigo-100'
                          }`}
                      >
                        {sortOrder === 'asc' ? (
                          <><SortAsc className="w-4 h-4" /> {getTranslation('ascending', language)}</>
                        ) : (
                          <><SortDesc className="w-4 h-4" /> {getTranslation('descending', language)}</>
                        )}
                      </button>
                    </div>

                    {/* Country Filter */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-600 ml-1">{getTranslation('country', language)}</label>
                      <Select value={undefined} onValueChange={(country) => {
                        if (country && !selectedCountries.includes(country)) {
                          setSelectedCountries([...selectedCountries, country]);
                        }
                      }}>
                        <SelectTrigger className="w-full bg-white border-2 border-gray-300 hover:border-amber-400 rounded-lg shadow-sm transition-all">
                          <span className="mr-2"></span>
                          <SelectValue placeholder={getTranslation('selectCountry', language)} />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {allCountries.map((country) => (
                            <SelectItem key={country} value={country}>{country}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Domain Filter */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-600 ml-1">
                        {getTranslation('domain', language)}
                      </label>

                      <Select
                        value={selectedDomain || undefined}
                        onValueChange={(domain) => {
                          setSelectedDomain(domain); // <-- Only one domain
                        }}
                      >
                        <SelectTrigger className="w-full bg-white border-2 border-gray-300 hover:border-amber-400 rounded-lg shadow-sm transition-all">
                          <span className="mr-2"></span>
                          <SelectValue placeholder={getTranslation('selectCountry', language)} />
                        </SelectTrigger>

                        <SelectContent className="max-h-[300px]">
                          {getDomainNames().map((domain) => (
                            <SelectItem key={domain.key} value={domain.label}>
                              {domain.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Status Filter - Full Width */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-600 ml-1">{getTranslation('status', language)}</label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-full bg-white border-2 border-gray-300 hover:border-amber-400 rounded-lg shadow-sm transition-all">
                          <span className="mr-2"></span>
                          <SelectValue placeholder={getTranslation('allStatuses', language)} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{getTranslation('allStatuses', language)}</SelectItem>
                          <SelectItem value="active">{getTranslation('active', language)}</SelectItem>
                          <SelectItem value="inactive">{getTranslation('inactive', language)}</SelectItem>
                          <SelectItem value="pause">{getTranslation('paused', language)}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                </div>

                {/* Active Filters Tags */}
                {/* {(selectedCountries.length > 0 || selectedDomain || (sortBy && sortBy !== 'none') || statusFilter !== 'all') && (
                  <div className="mt-5 pt-4 border-t border-amber-200">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-semibold text-gray-600 mt-1.5">{getTranslation('activeFilters', language)}</span>
                      <div className="flex flex-wrap gap-2 flex-1">
                        {sortBy && sortBy !== 'none' && (
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full text-sm font-medium shadow-sm">
                            <ArrowUpDown className="w-3 h-3" />
                            {getTranslation('sort', language)}: {sortBy === 'name' ? getTranslation('alphabetic', language) : sortBy === 'date' ? getTranslation('date', language) : getTranslation('country', language)} ({sortOrder === 'asc' ? '↑' : '↓'})
                            <button
                              onClick={() => setSortBy('none')}
                              className="hover:bg-purple-300 rounded-full p-0.5 transition"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        )}
                        {statusFilter !== 'all' && (
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 rounded-full text-sm font-medium shadow-sm">
                            ⚡ {statusFilter === 'active' ? getTranslation('active', language) : statusFilter === 'inactive' ? getTranslation('inactive', language) : getTranslation('paused', language)}
                            <button
                              onClick={() => setStatusFilter('all')}
                              className="hover:bg-green-300 rounded-full p-0.5 transition"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        )}
                        {selectedCountries.map((country) => (
                          <span key={country} className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-100 to-orange-200 text-amber-800 rounded-full text-sm font-medium shadow-sm">
                            🌍 {country}
                            <button
                              onClick={() => setSelectedCountries(selectedCountries.filter(c => c !== country))}
                              className="hover:bg-amber-300 rounded-full p-0.5 transition"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                        {selectedDomain && (
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-800 rounded-full text-sm font-medium shadow-sm">
                            📚 {selectedDomain.length > 30 ? selectedDomain.substring(0, 30) + '...' : selectedDomain}
                            <button
                              onClick={() => setSelectedDomain('')}
                              className="hover:bg-blue-300 rounded-full p-0.5 transition"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )} */}
              </div>

              {['all', 'Journal', 'article', 'blog', 'institution', 'universite', 'editeur', 'ouvrage'].map((tabValue) => (
                <TabsContent key={tabValue} value={tabValue} className="mt-6">
                  {/* Enhanced Results Summary */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-[amber-50] border-amber-200 text-amber-800 px-3 py-1">
                          {filteredResources.length} {getTranslation('resourcesFound', language)}
                        </Badge>
                        {activeTab !== 'all' && (
                          <Badge className="bg-[#fbbf24] text-white px-3 py-1">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        {getTranslation('page', language)} {currentPage} {getTranslation('of', language)} {totalPages}
                      </div>
                    </div>
                  </div>

                  <ul className="flex flex-col space-y-4">

                    {paginatedResources.map((item) => (
                      <li
                        key={item.id}
                        tabIndex={0}
                        className="flex flex-col sm:flex-row items-start bg-gray-100 gap-2 sm:gap-4 p-4 hover:bg-gray-150 cursor-pointer group transition" onClick={() => {
                          window.location.href = `/resource/${item.id}`;
                        }}
                      >

                        {/* Left: Image */}
                        <div className="w-full sm:w-48 h-auto sm:h-32 flex-shrink-0 overflow-hidden rounded-md bg-white flex items-center justify-center">
                          <ResizedImage
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain object-center group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>


                        {/* Right: Details */}
                        <div className="flex-1 min-w-0 flex flex-col gap-2 mt-2 sm:mt-0">
                          {/* Title */}
                          <h3 className="text-lg sm:text-[18px] font-semibold text-blue-900 underline group-hover:text-blue-800 break-words">
                            {item.resourceTitle || item.name || item.organisationName || item.Revues||item.Names || item['NOM DE LA REVUE']}
                          </h3>

                          {/* ISSN + Status */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                            {item.isbn && !item.issnOnline && (
                              <span>
                                <span className="text-gray-500 font-medium">ISSN:</span> {item.isbn}
                              </span>
                            )}
                            {item.issnOnline && item.issnPrint && (
                              <span>
                                <span className="text-gray-700 font-medium">ISSN en ligne:</span> {item.issnOnline}{item.issnPrint && (<span>- ISSN imprimé: {String(item.issnPrint)}</span>)}
                              </span>
                            )}
                            {item.issnOnline && !item.issnPrint && (
                              <span>
                                <span className="text-gray-700 font-medium">ISSN en ligne:</span> {String(item.issnOnline)}
                              </span>
                            )}
                            {item.issnPrint && item.issnOnline == "" && (
                              <span>
                                <span className="text-gray-700 font-medium">ISSN imprimé: </span>{String(item.issnPrint)}
                              </span>
                            )}
                            {item.isbn_issn && !item.issnOnline && !item.issnPrint && (
                              <span>
                                <span className="text-gray-500 font-medium">ISSN:</span> {item.isbn_issn || item['ISBN - ISSN']}
                              </span>
                            )}



                            {item.statut && item.type !== "blog" && (
                              <span
                                className={`font-semibold ${item.statut.toLowerCase() === "active"
                                  ? "text-green-600 group-hover:text-green-800"
                                  : "text-red-600 group-hover:text-red-800"
                                  }`}
                              >
                                Statut: {item.statut.toLowerCase()}{" "}
                                {item.detailsStatut ? `(${item.detailsStatut})` : ""}
                              </span>
                            )}
                          </div>

                          {/* Links side by side */}
                          <div className="flex flex-wrap items-center gap-4 mt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation(); // stop parent click
                                e.preventDefault(); // ensure no weird link default
                                window.location.href = `/resource/${item.id}`;
                              }}
                              className="text-sm text-orange-600 hover:text-orange-800 underline"
                            >
                              {getTranslation('viewDetails', language)}
                            </button>

                            <a
                              href={item.link ?? item.resourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()} // prevent triggering the button
                              className="text-sm text-blue-500 hover:text-blue-700 underline flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              {getTranslation('website', language)}
                            </a>
                          </div>


                          {/* Domain journal below */}
                          {item.domainJournal && (
                            <p className="text-sm text-gray-600 mt-2">
                              <span className="font-semibold text-gray-700">Domaine :</span>{" "}
                              {getDomainName(item.domainJournal)}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        {getTranslation('previous', language)}
                      </Button>
                      <span className="flex items-center px-4">
                        {getTranslation('page', language)} {currentPage} {getTranslation('of', language)} {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      >
                        {getTranslation('next', language)}
                      </Button>
                    </div>
                  )}

                  {filteredResources.length === 0 && (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground">{getTranslation('noResourcesFound', language)}</p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Quick Stats */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{getTranslation('statistics', language)}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{getTranslation('totalResourcesStat', language)}</span>
                  <span className="text-lg font-bold text-amber-600">{loadingstats ? getTranslation('loading', language) : stats.total.toString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{getTranslation('journalsMenu', language)}</span>
                  <span className="text-sm font-medium text-gray-900">{loadingstats ? getTranslation('loading', language) : stats.journals.toString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{getTranslation('articlesMenu', language)}</span>
                  <span className="text-sm font-medium text-gray-900">{loadingstats ? getTranslation('loading', language) : stats.articles.toString()}</span>

                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{getTranslation('institutionsMenu', language)}</span>
                  <span className="text-sm font-medium text-gray-900">{loadingstats ? getTranslation('loading', language) : stats.institutions.toString()}</span>

                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{getTranslation('booksMenu', language)}</span>
                  <span className="text-sm font-medium text-gray-900">{loadingstats ? getTranslation('loading', language) : stats.ouvrages.toString()}</span>

                </div>
                 <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{getTranslation('editor', language)}</span>
                  <span className="text-sm font-medium text-gray-900">{loadingstats ? getTranslation('loading', language) : stats.editeurs.toString()}</span>

                </div>
              </div>
            </div>
          </div>

          {/* Popular Countries */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{getTranslation('popularCountries', language)}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{getTranslation('countries', language)}</span>
                  <span className="text-lg font-bold text-amber-600">{loadingstats ? getTranslation('loading', language) : stats.countries.toString()}</span>
                </div>

              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl shadow-sm">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{getTranslation('quickActions', language)}</h3>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setSearch('');
                    setSelectedCountries([]);
                    setSelectedDomain('');
                    setStatusFilter('all');
                    setSortBy('none');
                    setActiveTab('all');
                  }}
                  className="w-full px-4 py-2 bg-white border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition text-sm font-medium"
                >
                  {getTranslation('resetFilters', language)}
                </button>
                <PrintButton
                  resources={filteredResources}
                  language={language}
                  t={t}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}