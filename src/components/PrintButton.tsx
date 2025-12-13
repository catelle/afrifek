'use client';

import { Printer, Settings, X, Download } from 'lucide-react';
import { useState, useMemo } from 'react';
import jsPDF from 'jspdf';
import { getDomainName } from '@/hooks/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Resource {
  id: string;
  name: string;
  type: string;
  description?: string;
  country: string;
  link: string;
  isbn?: string;
  domainJournal?: string;
}

interface PrintButtonProps {
  resources: Resource[];
  language: 'fr' | 'en';
  t: any;
}

export default function PrintButton({ resources, language, t }: PrintButtonProps) {
  const [showFieldSelector, setShowFieldSelector] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'fr' | 'en'>(language);
  
  // Available fields configuration with translations
  const getFieldLabels = (lang: 'fr' | 'en') => [
    { key: 'name', label: lang === 'fr' ? 'Nom' : 'Name', width: 40, filterable: false },
    { key: 'type', label: lang === 'fr' ? 'Type' : 'Type', width: 18, filterable: true },
    { key: 'description', label: lang === 'fr' ? 'Description' : 'Description', width: 45, filterable: false },
    { key: 'country', label: lang === 'fr' ? 'Pays' : 'Country', width: 20, filterable: true },
    { key: 'year', label: lang === 'fr' ? 'Année' : 'Year', width: 12, filterable: false },
    { key: 'isbn', label: 'ISBN/ISSN', width: 15, filterable: false },
    { key: 'link', label: lang === 'fr' ? 'Lien' : 'Link', width: 25, filterable: false }
  ];
  
  const availableFields = getFieldLabels(selectedLanguage);
  
  const [selectedFields, setSelectedFields] = useState(
    availableFields.filter(f => f.key !== 'link').map(f => f.key)
  );
  
  // Filter states
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  
  // All available countries, types, and domains
  const allCountries = ['Afrique du Sud', 'Algérie', 'Angola', 'Bénin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroun', 'Cap-Vert', 'Centrafrique', 'Comores', 'Congo', "Côte d'Ivoire", 'Djibouti', 'Égypte', 'Érythrée', 'Éthiopie', 'Gabon', 'Gambie', 'Ghana', 'Guinée', 'Guinée-Bissau', 'Guinée équatoriale', 'Kenya', 'Lesotho', 'Liberia', 'Libye', 'Madagascar', 'Malawi', 'Mali', 'Maroc', 'Maurice', 'Mauritanie', 'Mozambique', 'Namibie', 'Niger', 'Nigeria', 'Ouganda', 'RDC', 'Rwanda', 'São Tomé-et-Príncipe', 'Sénégal', 'Seychelles', 'Sierra Leone', 'Somalie', 'Soudan', 'Soudan du Sud', 'Tanzanie', 'Tchad', 'Togo', 'Tunisie', 'Zambie', 'Zimbabwe', 'États-Unis', 'Canada', 'France', 'Germany', 'UK', 'Italy', 'Spain', 'Portugal', 'Belgium', 'Switzerland', 'Netherlands', 'China', 'Japan', 'India', 'Brazil', 'Argentina', 'Mexico', 'Australia'];
  const allTypes = ['Journal', 'article', 'blog', 'institution', 'universite', 'ouvrage'];
  const allDomains = ['domain1', 'domain2', 'domain3', 'domain4', 'domain5', 'domain6', 'domain7'];
  
  const toggleField = (fieldKey: string) => {
    setSelectedFields(prev => 
      prev.includes(fieldKey) 
        ? prev.filter(k => k !== fieldKey)
        : [...prev, fieldKey]
    );
  };
  
  const toggleCountry = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };
  
  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  const toggleDomain = (domain: string) => {
    setSelectedDomains(prev => 
      prev.includes(domain) 
        ? prev.filter(d => d !== domain)
        : [...prev, domain]
    );
  };
  
  // Memoize filtered resources for performance
  const filteredResources = useMemo(() => {
    if (selectedCountries.length === 0 && selectedTypes.length === 0 && selectedDomains.length === 0) {
      return resources;
    }
    
    const filtered = resources.filter(resource => {
      const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(resource.country);
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(resource.type);
      const domainMatch = selectedDomains.length === 0 || selectedDomains.includes(resource.domainJournal || '');
      return countryMatch && typeMatch && domainMatch;
    });
    
    console.log('PrintButton Filter Debug:', {
      totalResources: resources.length,
      selectedCountries,
      selectedTypes,
      selectedDomains,
      filteredCount: filtered.length,
      sampleResource: resources[0]
    });
    
    return filtered;
  }, [resources, selectedCountries, selectedTypes, selectedDomains]);

  const generatePDF = () => {
    // Domain translation function
    const getDomainNameForPDF = (domain: string) => {
      const domains = selectedLanguage === 'en' ? {
        'domain1': 'Law, Economics, Politics',
        'domain2': 'Letters and Human Sciences', 
        'domain3': 'Mathematics',
        'domain4': 'Physical Sciences',
        'domain5': 'Earth and Life Sciences',
        'domain6': 'Engineering Sciences',
        'domain7': 'Pharmaceutical and Medical Sciences'
      } : {
        'domain1': 'Droit, économie, politique',
        'domain2': 'Lettres et sciences humaines', 
        'domain3': 'Mathématiques',
        'domain4': 'Sciences physiques',
        'domain5': 'Sciences de la terre et de la vie',
        'domain6': 'Sciences de l\'ingénieur',
        'domain7': 'Sciences pharmaceutiques et médicales'
      };
      return domains[domain as keyof typeof domains] || 'N/A';
    };
    
    const printContent = `
      <html>
        <head>
          <title>Afri-Fek Resources List</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              font-size: 10px; 
              margin: 10px; 
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
              padding: 10px;
            }
            .title-container {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 15px;
            }
            .title-logo {
              width: 60px;
              height: 60px;
            }
            h1 { font-size: 16px; margin: 10px 0; text-align: center; color: #d97706; font-weight: bold; }
            .header-info { text-align: center; margin: 10px 0; font-size: 11px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { border: 1px solid #333; padding: 4px; text-align: left; font-size: 9px; }
            th { background-color: #f8f9fa; font-weight: bold; color: #333; }
            .status-approved { background-color: #e8f5e8; }
            .type { font-weight: bold; }
            .number { font-weight: bold; color: #d97706; }
            .footer { margin-top: 15px; font-size: 8px; text-align: center; color: #666; }
            @media print { 
              body { margin: 0; }
              .content { background: white; }
            }
          </style>
        </head>
        <body>
          <img src="/logo-afri-removebg-preview.png" class="watermark" alt="" />
          <div class="content">
            <div class="title-container">
              <img src="/logo-afri-removebg-preview.png" alt="Afri-Fek Logo" class="title-logo" />
              <h1>${selectedLanguage === 'fr' ? 'Liste des ressources Afri-Fek' : 'Afri-Fek Resources List'}</h1>
            </div>
            <div class="header-info">
              ${selectedLanguage === 'fr' ? 'Généré depuis' : 'Generated from'}: <strong style="color: #d97706;">afrifek.org</strong> | ${new Date().toLocaleDateString()}
            </div>
            <table>
              <thead>
                <tr>
                  <th style="width: 5%;">#</th>
                  ${selectedFields.includes('name') ? `<th style="width: ${selectedFields.includes('description') ? '20%' : '30%'};">${selectedLanguage === 'en' ? 'Resource Name' : 'Nom de la Ressource'}</th>` : ''}
                  ${selectedFields.includes('description') ? `<th style="width: 25%;">${selectedLanguage === 'en' ? 'Description' : 'Description'}</th>` : ''}
                  ${selectedFields.includes('type') ? `<th style="width: 10%;">${selectedLanguage === 'en' ? 'Type' : 'Type'}</th>` : ''}
                  ${selectedFields.includes('country') ? `<th style="width: 12%;">${selectedLanguage === 'en' ? 'Country' : 'Pays'}</th>` : ''}
                  <th style="width: 15%;">${selectedLanguage === 'en' ? 'Domain' : 'Domaine'}</th>
                  <th style="width: 8%;">${selectedLanguage === 'en' ? 'Status' : 'Statut'}</th>
                  ${selectedFields.includes('link') ? `<th style="width: 15%;">${selectedLanguage === 'en' ? 'URL/Contact' : 'URL/Contact'}</th>` : ''}
                </tr>
              </thead>
              <tbody>
                ${filteredResources.map((resource, index) => `
                  <tr class="status-approved">
                    <td class="number">${index + 1}</td>
                    ${selectedFields.includes('name') ? `<td><strong>${resource.name || 'N/A'}</strong></td>` : ''}
                    ${selectedFields.includes('description') ? `<td style="font-size: 8px;">${(resource.description || '').substring(0, 100)}${(resource.description || '').length > 100 ? '...' : ''}</td>` : ''}
                    ${selectedFields.includes('type') ? `<td class="type">${resource.type || 'N/A'}</td>` : ''}
                    ${selectedFields.includes('country') ? `<td>${resource.country || 'N/A'}</td>` : ''}
                    <td style="font-size: 8px;">${getDomainNameForPDF(resource.domainJournal || '')}</td>
                    <td>${selectedLanguage === 'en' ? 'Active' : 'Actif'}</td>
                    ${selectedFields.includes('link') ? `<td style="font-size: 7px;">${resource.link || 'N/A'}</td>` : ''}
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div class="footer">
              <p><strong>${selectedLanguage === 'en' ? 'Official document generated by AFRI-FEK' : 'Document officiel généré par AFRI-FEK'}</strong> - ${selectedLanguage === 'en' ? 'Reference platform for African health research' : 'Plateforme de référence pour la recherche en santé africaine'}</p>
              <p>${selectedLanguage === 'en' ? 'For more information' : 'Pour plus d\'informations'}: www.afri-fek.org | ${selectedLanguage === 'en' ? 'This document is protected and authenticated' : 'Ce document est protégé et authentifié'}</p>
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



  return (
    <>
      <button
        onClick={() => setShowFieldSelector(true)}
        className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 shadow-sm hover:shadow-md"
        title="Print resources to PDF"
      >
        <Download className="w-4 h-4" />
        Telecharger Liste
      </button>

      {/* Field Selector Modal */}
      {showFieldSelector && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-9xl max-h-[100vh] overflow-y-auto border border-gray-200">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedLanguage === 'fr' ? 'Personnaliser l\'export PDF' : 'Customize PDF Export'}
              </h2>
              <button
                onClick={() => setShowFieldSelector(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Language Selection */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {selectedLanguage === 'fr' ? 'Langue du PDF' : 'PDF Language'}
                </h3>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="language"
                      value="fr"
                      checked={selectedLanguage === 'fr'}
                      onChange={(e) => setSelectedLanguage(e.target.value as 'fr' | 'en')}
                      className="w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-500"
                    />
                    <span className="text-gray-700">Français</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="language"
                      value="en"
                      checked={selectedLanguage === 'en'}
                      onChange={(e) => setSelectedLanguage(e.target.value as 'fr' | 'en')}
                      className="w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-500"
                    />
                    <span className="text-gray-700">English</span>
                  </label>
                </div>
              </div>

              {/* Column Selection */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {selectedLanguage === 'fr' ? 'Sélectionner les colonnes' : 'Select Columns'}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {selectedLanguage === 'fr' ? 'Choisissez les champs à inclure dans le PDF :' : 'Choose which fields to include in the PDF:'}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {availableFields.map((field) => (
                    <label key={field.key} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFields.includes(field.key)}
                        onChange={() => toggleField(field.key)}
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <span className="text-gray-700">{field.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {selectedLanguage === 'fr' ? 'Filtrer les ressources' : 'Filter Resources'}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {selectedLanguage === 'fr' ? 'Filtrez les ressources à inclure (laissez vide pour tout inclure) :' : 'Filter which resources to include (leave empty to include all):'}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Country Filter */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      {selectedLanguage === 'fr' ? 'Pays' : 'Countries'}
                    </h4>
                    <Select value={undefined} onValueChange={(country) => {
                      if (country && !selectedCountries.includes(country)) {
                        setSelectedCountries([...selectedCountries, country]);
                      }
                    }}>
                      <SelectTrigger className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 rounded-xl">
                        <SelectValue placeholder={selectedLanguage === 'fr' ? 'Sélectionner pays' : 'Select countries'} />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {allCountries.map((country) => (
                          <SelectItem key={country} value={country}>{country}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Type Filter */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      {selectedLanguage === 'fr' ? 'Types de ressources' : 'Resource Types'}
                    </h4>
                    <Select value={undefined} onValueChange={(type) => {
                      if (type && !selectedTypes.includes(type)) {
                        setSelectedTypes([...selectedTypes, type]);
                      }
                    }}>
                      <SelectTrigger className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 rounded-xl">
                        <SelectValue placeholder={selectedLanguage === 'fr' ? 'Sélectionner types' : 'Select types'} />
                      </SelectTrigger>
                      <SelectContent>
                        {allTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Domain Filter */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      {selectedLanguage === 'fr' ? 'Domaines' : 'Domains'}
                    </h4>
                    <Select value={undefined} onValueChange={(domain) => {
                      if (domain && !selectedDomains.includes(domain)) {
                        setSelectedDomains([...selectedDomains, domain]);
                      }
                    }}>
                      <SelectTrigger className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 rounded-xl">
                        <SelectValue placeholder={selectedLanguage === 'fr' ? 'Sélectionner domaines' : 'Select domains'} />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {allDomains.map((domain) => (
                          <SelectItem key={domain} value={domain}>{getDomainName(domain)}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Selected Filters Tags */}
                {(selectedCountries.length > 0 || selectedTypes.length > 0 || selectedDomains.length > 0) && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedCountries.map((country) => (
                      <span key={country} className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        {country}
                        <button
                          onClick={() => setSelectedCountries(selectedCountries.filter(c => c !== country))}
                          className="hover:bg-amber-200 rounded-full p-0.5 transition"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    {selectedTypes.map((type) => (
                      <span key={type} className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {type}
                        <button
                          onClick={() => setSelectedTypes(selectedTypes.filter(t => t !== type))}
                          className="hover:bg-green-200 rounded-full p-0.5 transition"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    {selectedDomains.map((domain) => (
                      <span key={domain} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {getDomainName(domain)}
                        <button
                          onClick={() => setSelectedDomains(selectedDomains.filter(d => d !== domain))}
                          className="hover:bg-blue-200 rounded-full p-0.5 transition"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Filter Summary */}
                <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-amber-800">
                      {selectedLanguage === 'fr' ? 'Ressources à exporter' : 'Resources to export'}
                    </p>
                    <div className="bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                      {filteredResources.length}
                    </div>
                  </div>
                  <p className="text-sm text-amber-700 mt-2">
                    {selectedLanguage === 'fr' ? 'sur un total de' : 'out of'} {resources.length} {selectedLanguage === 'fr' ? 'ressources disponibles' : 'available resources'}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowFieldSelector(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all font-medium"
                >
                  {selectedLanguage === 'fr' ? 'Annuler' : 'Cancel'}
                </button>
                <button
                  onClick={() => {
                    setShowFieldSelector(false);
                    generatePDF();
                  }}
                  className="flex-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl transition-all flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={filteredResources.length === 0}
                >
                  <Printer className="w-5 h-5" />
                  {selectedLanguage === 'fr' ? 'Générer PDF' : 'Generate PDF'}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                    {filteredResources.length}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}