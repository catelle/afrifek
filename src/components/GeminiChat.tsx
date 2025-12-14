'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { resourcesApi } from '@/lib/api-client';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ALLOWED_WEBSITES = [
  'pubmed.ncbi.nlm.nih.gov',
  'scholar.google.com',
  'researchgate.net',
  'bmj.com',
  'thelancet.com',
  'nejm.org',
  'nature.com',
  'sciencedirect.com'
];



export default function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour! Je suis votre assistant IA pour Afri-Fek. Posez-moi vos questions sur les ressources scientifiques africaines : articles, journaux, institutions, blogs, universités et plus encore. Demandez-moi par exemple "Ressources du Cameroun" ou "Que puis-je trouver ici?"',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [allResources, setAllResources] = useState<any[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        // Fetch resources
        const response = await resourcesApi.getAll();
        const resourcesData = response.data.map((data: any) => ({
          id: data.id,
          name: data.name,
          type: data.type,
          description: data.description || '',
          about: data.about || '',
          country: data.country || '',
          date: data.date || new Date().toISOString().split('T')[0],
          status: data.status,
          source: 'resources'
        }));
        
        setAllResources(resourcesData);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setAllResources([]);
      }
    };

    fetchResources();
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Simulate AI response (replace with actual Gemini API call)
      const response = await simulateGeminiResponse(inputText);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Désolé, je rencontre des difficultés techniques. Veuillez réessayer.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateGeminiResponse = async (question: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const lowerQuestion = question.toLowerCase();
    
    // Handle people/author searches
    if (lowerQuestion.includes('professeur') || lowerQuestion.includes('docteur') || lowerQuestion.includes('dr.') || lowerQuestion.includes('prof.') || lowerQuestion.includes('mentionne')) {
      // Extract person name from question
      const personPatterns = [
        /professeur ([\w\s'-]+)/i,
        /docteur ([\w\s'-]+)/i,
        /dr\.?\s+([\w\s'-]+)/i,
        /prof\.?\s+([\w\s'-]+)/i,
        /mentionne ([\w\s'-]+)/i
      ];
      
      let personName = '';
      for (const pattern of personPatterns) {
        const match = lowerQuestion.match(pattern);
        if (match) {
          personName = match[1].trim();
          break;
        }
      }
      
      if (personName) {
        console.log('Searching for person:', personName);
        console.log('Available resources:', allResources.length);
        
        const relatedResources = allResources.filter(r => {
          const nameMatch = r.name.toLowerCase().includes(personName.toLowerCase());
          const descMatch = r.description.toLowerCase().includes(personName.toLowerCase());
          const aboutMatch = r.about && r.about.toLowerCase().includes(personName.toLowerCase());
          
          // More flexible name matching
          const nameParts = personName.toLowerCase().split(' ');
          const flexibleMatch = nameParts.some(part => 
            part.length > 2 && (
              r.name.toLowerCase().includes(part) ||
              r.description.toLowerCase().includes(part) ||
              (r.about && r.about.toLowerCase().includes(part))
            )
          );
          
          const match = nameMatch || descMatch || aboutMatch || flexibleMatch;
          if (match) {
            console.log('Found matching resource:', r.name, 'Type:', r.type);
          }
          return match;
        });
        
        if (relatedResources.length > 0) {
          const resourceList = relatedResources.map(r => 
            `• ${r.name} [${r.type.toUpperCase()}] (${r.country}, ${new Date(r.date).getFullYear()})`
          ).join('\n');
          
          return `J'ai trouvé ${relatedResources.length} ressource(s) mentionnant "${personName}" :\n\n${resourceList}\n\nCes ressources font référence à cette personne dans leur contenu.\n\nDemandez-moi "le lien vers [nom de la ressource]" pour plus de détails.`;
        } else {
          return `Je n'ai pas trouvé de ressources mentionnant "${personName}" dans la base de données actuelle d'Afri-fek.\n\nCela peut signifier :\n• Cette personne n'est pas encore référencée dans nos ressources\n• Le nom pourrait être orthographié différemment\n• Les ressources la mentionnant ne sont pas encore approuvées\n\nVous pouvez soumettre une ressource qui mentionne cette personne si vous en connaissez une.`;
        }
      }
    }
    
    // Handle content-based searches (malaria, diseases, etc.)
    const searchTerms = ['paludisme', 'malaria', 'tuberculose', 'vih', 'sida', 'diabète', 'hypertension', 'cancer'];
    const mentionedTerm = searchTerms.find(term => lowerQuestion.includes(term));
    
    if (mentionedTerm || lowerQuestion.includes('sur le') || lowerQuestion.includes('concernant')) {
      const searchTerm = mentionedTerm || lowerQuestion.split('sur le ')[1]?.split(' ')[0] || lowerQuestion.split('concernant ')[1]?.split(' ')[0];
      
      if (searchTerm) {
        const relatedResources = allResources.filter(r => 
          r.name.toLowerCase().includes(searchTerm) || 
          r.description.toLowerCase().includes(searchTerm) ||
          (r.about && r.about.toLowerCase().includes(searchTerm))
        );
        
        if (relatedResources.length > 0) {
          const resourceList = relatedResources.map(r => 
            `• ${r.name} [${r.type.toUpperCase()}] (${r.country}, ${new Date(r.date).getFullYear()})`
          ).join('\n');
          
          return `J'ai trouvé ${relatedResources.length} ressource(s) sur "${searchTerm}" :\n\n${resourceList}\n\nCes ressources contiennent des informations pertinentes sur ce sujet.\n\nDemandez-moi "le lien vers [nom de la ressource]" pour accéder directement à une ressource spécifique.`;
        } else {
          return `Je n'ai pas trouvé de ressources spécifiquement sur "${searchTerm}" dans la base de données actuelle d'Afri-fek. \n\nVous pouvez :\n• Consulter les articles généraux de médecine tropicale\n• Vérifier les publications des institutions partenaires\n• Soumettre une nouvelle ressource sur ce sujet`;
        }
      }
    }
    
    // Handle requests for specific titles
    if (lowerQuestion.includes('titre') || lowerQuestion.includes('nom')) {
      const articles = allResources.filter(r => r.type === 'article');
      const journals = allResources.filter(r => r.type === 'journal');
      
      if (lowerQuestion.includes('article')) {
        if (articles.length === 0) return "Aucun article n'est actuellement disponible sur la plateforme.";
        const titles = articles.map(a => `• ${a.name} (${a.country}, ${new Date(a.date).getFullYear()})`).join('\n');
        return `Voici les titres complets des articles disponibles sur Afri-fek :\n\n${titles}\n\nChaque article couvre des spécialités médicales africaines spécifiques.`;
      }
      
      if (lowerQuestion.includes('journal')) {
        if (journals.length === 0) return "Aucun journal n'est actuellement disponible sur la plateforme.";
        const titles = journals.map(j => `• ${j.name} (${j.country}, ${new Date(j.date).getFullYear()})`).join('\n');
        return `Voici les titres complets des journaux disponibles sur Afri-fek :\n\n${titles}\n\nCes journaux sont des publications scientifiques de référence.`;
      }
      
      // All titles
      if (allResources.length === 0) return "Aucune ressource n'est actuellement disponible.";
      const allTitles = allResources.map(r => `• ${r.name} [${r.type.toUpperCase()}] (${r.country}, ${new Date(r.date).getFullYear()})`).join('\n');
      return `Voici tous les titres disponibles sur Afri-fek :\n\n${allTitles}`;
    }
    
    // Handle link requests
    if (lowerQuestion.includes('lien') || lowerQuestion.includes('url') || lowerQuestion.includes('accès')) {
      // Extract resource name from question
      const linkPatterns = [
        /lien vers (.+)/,
        /lien de (.+)/,
        /url de (.+)/,
        /accès à (.+)/,
        /voir (.+)/
      ];
      
      let resourceName = '';
      for (const pattern of linkPatterns) {
        const match = lowerQuestion.match(pattern);
        if (match) {
          resourceName = match[1].trim();
          break;
        }
      }
      
      if (resourceName) {
        const foundResource = allResources.find(r => 
          r.name.toLowerCase().includes(resourceName) ||
          resourceName.includes(r.name.toLowerCase().substring(0, 10))
        );
        
        if (foundResource) {
          const detailsUrl = `${window.location.origin}/resource/${foundResource.id}`;
          const externalUrl = foundResource.link || '#';
          
          return `Voici les liens pour "${foundResource.name}" :\n\n🔗 **Page détails sur Afri-fek :**\n${detailsUrl}\n\n🌐 **Site web externe :**\n${externalUrl}\n\n📍 **Informations :**\n• Type : ${foundResource.type.toUpperCase()}\n• Pays : ${foundResource.country}\n• Date : ${new Date(foundResource.date).getFullYear()}`;
        } else {
          return `Je n'ai pas trouvé de ressource correspondant à "${resourceName}". \n\nVeuillez vérifier le nom exact ou demandez-moi la liste des ressources disponibles.`;
        }
      } else {
        return "Pour obtenir un lien, précisez le nom de la ressource. Par exemple :\n\n• 'le lien vers Prévention du Paludisme'\n• 'accès à Revue Médicale Africaine'\n• 'url de Institut Pasteur'";
      }
    }
    
    // Handle specific questions about the platform
    if (lowerQuestion.includes('afrimvoe') || lowerQuestion.includes('afri-fek')) {
      return "Afrimvoe Medical Services est une organisation partenaire d'Afri-fek qui se spécialise dans les services médicaux en Afrique. Cette plateforme référence leurs publications et ressources dans le domaine de la santé communautaire.";
    }
    
    if (lowerQuestion.includes('journaux') || lowerQuestion.includes('journal')) {
      const journals = allResources.filter(r => r.type === 'journal');
      if (journals.length === 0) return "Aucun journal n'est actuellement référencé sur la plateforme.";
      
      const journalList = journals.map(j => `• ${j.name} (${j.country})`).join('\n');
      return `Sur Afri-fek, vous trouverez ${journals.length} journal(aux) médical(aux) africain(s) :\n\n${journalList}\n\nChaque journal est classé par pays et domaine de spécialisation.`;
    }
    
    // Handle country-specific questions
    const countries = ['sénégal', 'ghana', 'mali', 'burkina faso', 'côte d\'ivoire', 'ivoire', 'cameroun', 'cameroon', 'nigeria', 'kenya', 'afrique du sud', 'south africa', 'éthiopie', 'ethiopia', 'tanzanie', 'ouganda', 'rwanda', 'bénin', 'togo', 'gabon', 'congo', 'rdc'];
    const mentionedCountry = countries.find(country => lowerQuestion.includes(country));
    if (mentionedCountry) {
      const countryResources = allResources.filter(r => 
        r.country.toLowerCase().includes(mentionedCountry) || 
        (mentionedCountry === 'ivoire' && r.country.toLowerCase().includes('côte'))
      );
      
      if (countryResources.length === 0) {
        return `Aucune ressource du ${mentionedCountry.charAt(0).toUpperCase() + mentionedCountry.slice(1)} n'est actuellement référencée.`;
      }
      
      const resourceList = countryResources.map(r => `• ${r.name} [${r.type.toUpperCase()}]`).join('\n');
      return `Ressources du ${mentionedCountry.charAt(0).toUpperCase() + mentionedCountry.slice(1)} sur Afri-fek :\n\n${resourceList}`;
    }
    
    // Handle platform usage questions (how to submit, contact, etc.)
    if (lowerQuestion.includes('soumettre') || lowerQuestion.includes('submit') || lowerQuestion.includes('ajouter') || lowerQuestion.includes('add resource')) {
      return "Pour soumettre une ressource sur Afri-Fek :\n\n1️⃣ Cliquez sur le bouton 'Soumettre une Ressource' dans le menu de navigation\n2️⃣ Sélectionnez le type de ressource (Journal, Article, Institution, etc.)\n3️⃣ Remplissez le formulaire avec les informations requises (titre, URL, description, pays, etc.)\n4️⃣ Ajoutez une image de couverture (optionnel)\n5️⃣ Cliquez sur 'Soumettre'\n\nVotre ressource sera examinée par notre équipe dans les 5-7 jours ouvrables. Vous recevrez une notification par email à chaque étape du processus de validation.\n\nPour plus de détails, consultez notre guide d'utilisation : /guide";
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('contacter') || lowerQuestion.includes('écrire') || lowerQuestion.includes('email')) {
      return "Pour nous contacter :\n\n📧 **Email** : support@afri-fek.org (Réponse sous 2-4h)\n\n💬 **Chat IA Gemini** : Disponible 24h/24 (c'est moi!)\n\n📝 **Formulaire de contact** : Cliquez sur le bouton 'Contact' dans le menu de navigation\n\n📄 **Centre d'aide** : Visitez /support pour la FAQ et plus d'informations\n\nNotre équipe est disponible du lundi au vendredi, de 8h00 à 18h00 (GMT+1).";
    }
    
    if (lowerQuestion.includes('guide') || lowerQuestion.includes('aide') || lowerQuestion.includes('help') || lowerQuestion.includes('utiliser') || lowerQuestion.includes('use')) {
      return "Pour apprendre à utiliser Afri-Fek :\n\n📖 **Guide d'utilisation** : Visitez /guide pour un guide complet\n\n❓ **FAQ** : Consultez /support pour les questions fréquemment posées\n\n🎬 **Tutoriels vidéo** : Disponibles dans la section Guide\n\nJe peux aussi vous aider directement ! Posez-moi des questions sur :\n• Comment rechercher des ressources\n• Comment filtrer les résultats\n• Comment soumettre une ressource\n• Les critères de validation\n• Et bien plus encore!";
    }
    
    if (lowerQuestion.includes('validation') || lowerQuestion.includes('approuv') || lowerQuestion.includes('vérifi') || lowerQuestion.includes('critère')) {
      return "Le processus de validation d'Afri-Fek :\n\n⏱️ **Délai total** : 5-7 jours ouvrables\n\n**Étapes** :\n1️⃣ Vérification technique (1-2 jours) - Format, liens, informations complètes\n2️⃣ Évaluation scientifique (3-5 jours) - Qualité, pertinence, évaluation par les pairs\n3️⃣ Approbation finale - Publication sur la plateforme\n\n**Critères de qualité** :\n• Publications évaluées par des pairs\n• Institutions accréditées\n• Standards internationaux respectés\n• Pertinence pour la recherche africaine\n\nVous recevrez des notifications par email à chaque étape.";
    }
    
    // Check if question is related to medical/academic content or general platform questions
    const medicalKeywords = ['article', 'journal', 'recherche', 'médical', 'santé', 'académie', 'institution', 'publication', 'étude', 'plateforme', 'ressource', 'resource', 'professeur', 'docteur', 'blog', 'mentionne', 'trouve', 'trouver', 'cherche', 'chercher', 'database', 'db', 'base', 'données', 'contenu', 'content', 'what', 'quoi', 'comment', 'how', 'aide', 'help', 'info', 'information'];
    const isRelevant = medicalKeywords.some(keyword => 
      lowerQuestion.includes(keyword)
    );

    if (!isRelevant) {
      return "Je suis spécialisé dans les ressources scientifiques africaines et l'utilisation d'Afri-Fek. Posez-moi des questions comme :\n\n🔍 **Recherche** :\n• 'Ressources du Cameroun'\n• 'Articles sur le paludisme'\n• 'Journaux de médecine'\n\n❓ **Aide** :\n• 'Comment soumettre une ressource?'\n• 'Comment vous contacter?'\n• 'Processus de validation'";
    }

    // Generate contextual responses based on question content
    if (lowerQuestion.includes('article')) {
      const articles = allResources.filter(r => r.type === 'article');
      return `Il y a actuellement ${articles.length} article(s) sur Afri-fek couvrant la médecine tropicale, la santé communautaire, et les innovations médicales africaines. Demandez-moi les titres complets pour plus de détails.`;
    }
    
    if (lowerQuestion.includes('académie') || lowerQuestion.includes('université')) {
      const academies = allResources.filter(r => r.type === 'academy');
      if (academies.length > 0) {
        const academyList = academies.map(a => `• ${a.name} (${a.country})`).join('\n');
        return `Académies partenaires d'Afri-fek :\n\n${academyList}`;
      }
      return "Les académies partenaires incluent des institutions prestigieuses de formation en sciences de la santé.";
    }
    
    if (lowerQuestion.includes('institution')) {
      const institutions = allResources.filter(r => r.type === 'institution');
      if (institutions.length > 0) {
        const institutionList = institutions.map(i => `• ${i.name} (${i.country})`).join('\n');
        return `Institutions référencées sur Afri-fek :\n\n${institutionList}`;
      }
      return "Les institutions incluent des centres de recherche en santé publique et organisations médicales africaines.";
    }

    // Default relevant response with statistics
    const stats = {
      total: allResources.length,
      articles: allResources.filter(r => r.type === 'article').length,
      journals: allResources.filter(r => r.type === 'journal').length,
      academies: allResources.filter(r => r.type === 'academy').length,
      institutions: allResources.filter(r => r.type === 'institution').length,
      blogs: allResources.filter(r => r.type === 'blog').length
    };
    
    return `Afri-fek référence actuellement ${stats.total} ressources :\n\n• ${stats.articles} article(s)\n• ${stats.journals} journal(aux)\n• ${stats.academies} académie(s)\n• ${stats.institutions} institution(s)\n• ${stats.blogs} blog(s)\n\nDemandez-moi des détails spécifiques sur n'importe quelle catégorie!`;
  };

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        title="Assistant IA"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center md:justify-end p-4 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-t-2xl md:rounded-2xl w-full md:w-96 h-[80vh] md:h-[600px] flex flex-col shadow-2xl md:mr-4 md:mb-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gray-700 text-white p-4 rounded-t-2xl md:rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Assistant IA Afri-fek</h3>
                  <p className="text-xs opacity-90">Facilite votre navigation sur Afri-Fek</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>

                  {message.isUser && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Posez votre question sur les ressources médicales..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="bg-amber-600 hover:bg-amber-600 text-white p-2 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Sources: Partenaires et resources Afri-fek
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}