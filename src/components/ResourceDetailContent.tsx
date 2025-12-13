"use client";

import { ExternalLink, BookOpen, Share2, Heart, Download, Eye, Calendar, MapPin, Tag, Star, Printer } from "lucide-react";
import { ResizedImage } from "./ResizeImage";
import { useEffect, useState } from "react";
// Firebase imports removed - using API backend
import { getDomainName } from "@/hooks/constants";

interface Resource {
  id: string;
  name: string;
  type: string;
  description: string;
  about?: string;
  link: string;
  country: string;
  image: string;
  date: string;
  isbn?: string;
  statut?: string;
  detailsStatut?: string;
  resourceUrl?: string;
  coverageStartYear?: string;
  coverageEndYear?: string;
  coverageStatus?: string;
  publisher?: string;
  domainJournal?: string;
  issnOnline?: string;
  issnPrint?: string;
  Revues?:string;
  isbn_issn?:string;
   'NOM DE LA REVUE'?: string;
  'ISBN - ISSN'?:string;
  Names?:string;
  resourceTitle?:string;
  organisationName?:string;
}

interface ResourceDetailContentProps {
  resourceId: string;
  language?: "fr" | "en";
  t?: any;
  onBack?: () => void;
}

export default function ResourceDetailContent({
  resourceId,
  language,
  t,
  onBack,
}: ResourceDetailContentProps) {

  const [resource, setResource] = useState<Resource | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ views: 0, downloads: 0, citations: 0, rating: 0 });
  const [isRead, setIsRead] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const printResourcePDF = () => {
    if (!resource) return;

    const printContent = `
      <html>
        <head>
          <title>${resource.name} - Afri-Fek</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              font-size: 11px; 
              margin: 20px; 
              color: black;
              position: relative;
            }
            .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(-45deg);
              width: 600px;
              height: 600px;
              opacity: 0.15;
              z-index: 0;
              pointer-events: none;
            }
            .content {
              position: relative;
              z-index: 1;
              background: transparent;
              padding: 20px;
            }
            .header {
              display: flex;
              align-items: center;
              gap: 15px;
              margin-bottom: 20px;
              border-bottom: 3px solid #d97706;
              padding-bottom: 15px;
            }
            .logo {
              width: 80px;
              height: 80px;
            }
            h1 { 
              font-size: 24px; 
              margin: 0; 
              color: #d97706; 
              font-weight: bold; 
            }
            .subtitle {
              font-size: 12px;
              color: #666;
              margin-top: 5px;
            }
            .section {
              margin: 20px 0;
              padding: 15px;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              background: #f9fafb;
            }
            .section-title {
              font-size: 16px;
              font-weight: bold;
              color: #1f2937;
              margin-bottom: 10px;
              border-bottom: 2px solid #d97706;
              padding-bottom: 5px;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
              margin-top: 10px;
            }
            .info-item {
              display: flex;
              justify-content: space-between;
              padding: 8px;
              background: white;
              border-radius: 4px;
            }
            .info-label {
              font-weight: 600;
              color: #6b7280;
            }
            .info-value {
              color: #111827;
              font-weight: 500;
            }
            .badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 10px;
              font-weight: 600;
              margin-right: 8px;
            }
            .badge-type {
              background: #fef3c7;
              color: #92400e;
            }
            .badge-status {
              background: #d1fae5;
              color: #065f46;
            }
            .footer {
              margin-top: 30px;
              padding-top: 15px;
              border-top: 2px solid #d97706;
              text-align: center;
              font-size: 9px;
              color: #666;
            }
            @media print { 
              body { margin: 0; }
              .content { background: white; }
            }
          </style>
        </head>
        <body>
          <img src="/logo-afri-removebg-preview.png" class="watermark" alt="" />
          <div class="content">
            <div class="header">
              <img src="/logo-afri-removebg-preview.png" alt="Afri-Fek Logo" class="logo" />
              <div>
                <h1>${resource.name || resource.Revues || 'Ressource'}</h1>
                <div class="subtitle">
                  <span class="badge badge-type">${resource.type?.toUpperCase() || 'N/A'}</span>
                  ${resource.statut ? `<span class="badge badge-status">${resource.statut}</span>` : ''}
                </div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Informations générales</div>
              <div class="info-grid">
                ${resource.country ? `
                  <div class="info-item">
                    <span class="info-label">Pays:</span>
                    <span class="info-value">${resource.country}</span>
                  </div>
                ` : ''}
                ${resource.domainJournal ? `
                  <div class="info-item">
                    <span class="info-label">Domaine:</span>
                    <span class="info-value">${getDomainName(resource.domainJournal)}</span>
                  </div>
                ` : ''}
                ${resource.publisher ? `
                  <div class="info-item">
                    <span class="info-label">Éditeur:</span>
                    <span class="info-value">${resource.publisher}</span>
                  </div>
                ` : ''}
                ${resource.coverageStartYear ? `
                  <div class="info-item">
                    <span class="info-label">Couverture:</span>
                    <span class="info-value">${resource.coverageStartYear} - ${resource.coverageEndYear || resource.coverageStatus || 'En cours'}</span>
                  </div>
                ` : ''}
              </div>
            </div>

            ${resource.issnPrint || resource.issnOnline || resource.isbn ? `
              <div class="section">
                <div class="section-title">Identifiants</div>
                <div class="info-grid">
                  ${resource.issnPrint ? `
                    <div class="info-item">
                      <span class="info-label">ISSN imprimé:</span>
                      <span class="info-value" style="font-family: monospace;">${resource.issnPrint}</span>
                    </div>
                  ` : ''}
                  ${resource.issnOnline ? `
                    <div class="info-item">
                      <span class="info-label">ISSN en ligne:</span>
                      <span class="info-value" style="font-family: monospace;">${resource.issnOnline}</span>
                    </div>
                  ` : ''}
                  ${resource.isbn ? `
                    <div class="info-item">
                      <span class="info-label">ISBN:</span>
                      <span class="info-value" style="font-family: monospace;">${resource.isbn}</span>
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            ${resource.description ? `
              <div class="section">
                <div class="section-title">Description</div>
                <p style="line-height: 1.6; color: #374151;">${resource.description}</p>
              </div>
            ` : ''}

            ${resource.about ? `
              <div class="section">
                <div class="section-title">Informations supplémentaires</div>
                <p style="line-height: 1.6; color: #374151;">${resource.about}</p>
              </div>
            ` : ''}

            ${resource.link || resource.resourceUrl ? `
              <div class="section">
                <div class="section-title">Accès à la ressource</div>
                <p style="word-break: break-all; color: #2563eb;">${resource.link || resource.resourceUrl}</p>
              </div>
            ` : ''}

            <div class="footer">
              <p><strong>Document officiel généré par AFRI-FEK</strong> - Plateforme de référence pour la recherche en santé africaine</p>
              <p>Généré le ${new Date().toLocaleDateString('fr-FR')} depuis <strong>afrifek.org</strong> | Ce document est protégé et authentifié</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
      }, 250);
    }
  };

  useEffect(() => {
    const fetchResource = async () => {
      try {
        console.log('Fetching resource with ID:', resourceId);
        
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
        const response = await fetch(`${apiUrl}/resources/${resourceId}`);
        
        if (response.ok) {
          const resourceData = await response.json();
          console.log('Found resource:', resourceData);
          setResource(resourceData);
          
          // Set default stats
          setStats({
            views: 0,
            downloads: 0,
            citations: 0,
            rating: 0
          });
          
          const readKey = `read_${resourceId}`;
          setIsRead(localStorage.getItem(readKey) === 'true');
          
          const savedResources = JSON.parse(localStorage.getItem('savedResources') || '[]');
          setIsSaved(savedResources.some((r: any) => r.id === resourceId));
          
          // Fetch related resources
          try {
            const relatedResponse = await fetch(`${apiUrl}/resources?type=${resourceData.type}&limit=4`);
            if (relatedResponse.ok) {
              const relatedData = await relatedResponse.json();
              const related = Array.isArray(relatedData) ? relatedData : relatedData.resources || [];
              setRelatedResources(related.filter((r: any) => r.id !== resourceId));
            }
          } catch (relatedError) {
            console.log('Error fetching related resources:', relatedError);
          }
        } else {
          console.log('Resource not found:', resourceId);
        }
      } catch (error) {
        console.error('Error fetching resource:', error);
      } finally {
        setLoading(false);
      }
    };

    if (resourceId) {
      fetchResource();
    }
  }, [resourceId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 mt-[112px]">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 mt-[22px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ressource non trouvée</h1>
          <p className="text-gray-600 mb-4">La ressource avec l'ID "{resourceId}" n'existe pas ou a été supprimée.</p>
          <p className="text-sm text-gray-500 mb-4">Vérifiez la console pour plus de détails de débogage.</p>
          <button onClick={onBack} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 mt-[22px]">
      {/* Breadcrumb & Back Button */}
      <div className="flex items-center justify-between mb-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <button onClick={() => window.history.back()} className="hover:text-amber-600 transition">Accueil</button>
          <span>/</span>
          <span className="text-gray-900 font-medium">{resource.resourceTitle || resource.name || resource.organisationName || resource.Revues||resource.Names || resource['NOM DE LA REVUE']}</span>
        </nav>
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition text-sm font-medium"
        >
          ← Retour
        </button>
      </div>

      {/* Domain Articles Section */}
      {resource.domainJournal && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Domaine: {getDomainName(resource.domainJournal)}</h2>
              <p className="text-gray-600">Découvrez d'autres ressources dans le même domaine</p>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-bold text-amber-600">{relatedResources.length}+</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Header Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
            <div className="p-6">
              <div className="flex items-start gap-6">
                {/* Image */}
                <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <ResizedImage
                    src={resource.image || "/search.png"}
                    alt={resource.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Resource details */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                            {resource.resourceTitle || resource.name || resource.organisationName || resource.Revues||resource.Names || resource['NOM DE LA REVUE']}
                  </h1>

                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      resource.type === "article" ? "bg-blue-100 text-blue-700" :
                      resource.type === "journal" ? "bg-amber-100 text-amber-700" :
                      resource.type === "ouvrage" ? "bg-purple-100 text-purple-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      <Tag className="w-4 h-4 inline mr-1" />
                      {resource.type.toUpperCase()}
                    </span>

                    {resource.statut && (
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        resource.statut === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {resource.statut}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    {resource.country && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {resource.country}
                      </div>
                    )}
                    {resource.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(resource.date).getFullYear()}
                      </div>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center gap-3">
                    <a
                      href={resource.link || resource.resourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Accéder à la ressource
                    </a>
                    <button 
                      onClick={async () => {
                        const newSavedState = !isSaved;
                        setIsSaved(newSavedState);
                        
                        const savedResources = JSON.parse(localStorage.getItem('savedResources') || '[]');
                        if (newSavedState) {
                          if (!savedResources.some((r: any) => r.id === resourceId)) {
                            savedResources.push({ 
                              id: resourceId, 
                              name: resource.name,
                              type: resource.type,
                              country: resource.country,
                              image: resource.image,
                              savedAt: new Date().toISOString() 
                            });
                            localStorage.setItem('savedResources', JSON.stringify(savedResources));
                          }
                        } else {
                          const filtered = savedResources.filter((r: any) => r.id !== resourceId);
                          localStorage.setItem('savedResources', JSON.stringify(filtered));
                        }
                        
                        alert(newSavedState ? 'Ressource ajoutée dans vos favoris!' : 'Ressource retirée des favoris');
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 border rounded-lg transition ${isSaved ? 'bg-red-50 border-red-300 text-red-700' : 'border-gray-300 hover:bg-gray-50'}`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      {isSaved ? 'Sauvegardé' : 'Sauvegarder'}
                    </button>
                    <button 
                      onClick={async () => {
                        if (navigator.share) {
                          try {
                            await navigator.share({
                              title: resource.name || 'Ressource Afri-Fek',
                              text: resource.description || 'Découvrez cette ressource sur Afri-Fek',
                              url: window.location.href
                            });
                          } catch (error) {
                            console.log('Share cancelled');
                          }
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Lien copié dans le presse-papiers!');
                        }
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Share2 className="w-4 h-4" />
                      Partager
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Informations détaillées</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide border-b pb-2">
                    Détails de publication
                  </h3>
                  {resource.country && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pays:</span>
                      <span className="text-sm font-medium text-gray-900">{resource.country}</span>
                    </div>
                  )}
                  {(resource.coverageStartYear || resource.date) && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Couverture:</span>
                      <span className="text-sm font-medium text-gray-900">
                        {resource.coverageStartYear || new Date(resource.date).getFullYear()} - {resource.coverageEndYear || resource.coverageStatus || "En cours"}
                      </span>
                    </div>
                  )}
                  {resource.publisher && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Éditeur:</span>
                      <span className="text-sm font-medium text-gray-900">{resource.publisher}</span>
                    </div>
                  )}
                  {resource.domainJournal && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Domaine:</span>
                      <span className="text-sm font-medium text-gray-900">{resource.domainJournal}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide border-b pb-2">
                    Identifiants
                  </h3>
                  {resource.issnPrint && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ISSN imprimé:</span>
                      <span className="text-sm font-medium text-gray-900 font-mono">{resource.issnPrint}</span>
                    </div>
                  )}
                   {!resource.issnPrint && resource['NOM DE LA REVUE'] && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ISSN imprimé:</span>
                      <span className="text-sm font-medium text-gray-900 font-mono">{resource['NOM DE LA REVUE']}</span>
                    </div>
                  )}
                  {resource.isbn_issn && !resource.issnPrint && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ISSN imprimé:</span>
                      <span className="text-sm font-medium text-gray-900 font-mono">{resource.issnPrint}</span>
                    </div>
                  )}
                  {resource.issnOnline && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ISSN en ligne:</span>
                      <span className="text-sm font-medium text-gray-900 font-mono">{resource.issnOnline}</span>
                    </div>
                  )}
                  {resource.isbn && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ISBN:</span>
                      <span className="text-sm font-medium text-gray-900 font-mono">{resource.isbn}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
              <div className="text-gray-700 leading-relaxed">
                {resource.description ? (
                  <p>{resource.description}</p>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">Aucune description disponible pour cette ressource.</p>
                    <p className="text-sm text-gray-400 mt-2">Les informations détaillées peuvent être disponibles via le lien de la ressource.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* About Section */}
          {resource.about && (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Informations supplémentaires</h2>
                <p className="text-gray-700 leading-relaxed">{resource.about}</p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Resource Overview */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg shadow-sm mb-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Aperçu de la ressource</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium">{resource.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span className="text-sm">{resource.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span className="text-sm">{resource.date ? new Date(resource.date).getFullYear() : 'Date non spécifiée'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => window.history.back()}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  ← Retour à la liste
                </button>
                <button 
                  onClick={() => {
                    printResourcePDF();
                    setStats(prev => ({ ...prev, downloads: prev.downloads + 1 }));
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                >
                  <Printer className="w-4 h-4" />
                  Télécharger PDF
                </button>
                <button 
                  onClick={() => {
                    const newReadState = !isRead;
                    setIsRead(newReadState);
                    localStorage.setItem(`read_${resourceId}`, String(newReadState));
                    alert(newReadState ? 'Ressource marquée comme lue!' : 'Marque de lecture retirée');
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm border rounded-lg transition ${isRead ? 'bg-green-50 border-green-300 text-green-700' : 'border-gray-300 hover:bg-gray-50'}`}
                >
                  <Eye className={`w-4 h-4 ${isRead ? 'fill-current' : ''}`} />
                  {isRead ? 'Marqué comme lu' : 'Marquer comme lu'}
                </button>
              </div>
            </div>
          </div>

          {/* Resource Stats */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistiques</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Vues</span>
                  <span className="text-sm font-medium text-gray-900">{stats.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Téléchargements</span>
                  <span className="text-sm font-medium text-gray-900">{stats.downloads.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Citations</span>
                  <span className="text-sm font-medium text-gray-900">{stats.citations.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Note</span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className={`w-3 h-3 ${i <= Math.round(stats.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{stats.rating > 0 ? stats.rating.toFixed(1) : 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ressources similaires</h3>
              <div className="space-y-3">
                {relatedResources.length > 0 ? (
                  relatedResources.slice(0, 3).map((related) => (
                    <div 
                      key={related.id} 
                      onClick={() => window.location.href = `/resource/${related.id}`}
                      className="flex gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition cursor-pointer"
                    >
                      <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded border bg-gray-100">
                        <ResizedImage
                          src={related.image || "/search.png"}
                          alt={related.name || 'Resource'}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{related.name}</h4>
                        <p className="text-xs text-gray-600 capitalize">{related.type}</p>
                        <p className="text-xs text-gray-500">{related.country}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <BookOpen className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Aucune ressource similaire trouvée</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Popular Domains */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Domaines populaires</h3>
              <div className="space-y-2">
                {[
                  { key: 'domain1', name: getDomainName('domain1') },
                  { key: 'domain2', name: getDomainName('domain2') },
                  { key: 'domain3', name: getDomainName('domain3') },
                  { key: 'domain4', name: getDomainName('domain4') },
                  { key: 'domain5', name: getDomainName('domain5') }
                ].map((domain) => {
                  const count = relatedResources.filter(r => r.domainJournal === domain.key).length;
                  return (
                    <div 
                      key={domain.key} 
                      onClick={() => window.location.href = `/resources?domain=${domain.key}`}
                      className="flex justify-between items-center p-2 rounded hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="text-sm text-gray-700">{domain.name.substring(0, 30)}...</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{count || 0}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}