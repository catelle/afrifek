(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Import the functions you need from the SDKs you need
__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
;
;
;
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVC4CqHBMSr9quu2q9lJODSfQvITAM-SQ",
    authDomain: "afri-fek.firebaseapp.com",
    projectId: "afri-fek",
    storageBucket: "afri-fek.firebasestorage.app",
    messagingSenderId: "1032447928128",
    appId: "1:1032447928128:web:9fa19b789243f96f6d3ca5",
    measurementId: "G-3LPR4CK0SN"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])();
;
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/traduction.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>t
]);
const t = {
    fr: {
        tabs: {
            all: 'Tous',
            articles: 'Articles',
            journals: 'Journaux',
            academies: 'Ecoles',
            institutions: 'Institutions',
            blogs: 'Blogs'
        },
        search: 'Rechercher une organisation...',
        submit: 'Soumettre une ressource',
        hero: {
            title: 'Explorez la recherche en santé en afrique',
            subtitle: '  La plateforme de référence pour accéder aux journaux, académies et institutions de recherche en santé à travers l\'Afrique',
            about: 'À propos de cette ressource',
            website: 'Accès au site web',
            loadingdata: "Données encours de chargement...",
            statut: "Statut",
            explore: "Visiter",
            all: "Tous",
            resourcenotfound: "Ressource non trouvée",
            back: "Retour",
            close: "Fermer",
            name: "Nom/titre",
            description: "Description",
            selectedfile: "Fichier sélectionné: ",
            filedescription: "Sélectionnez une image (max 5MB) ou laissez vide pour l'image par défaut",
            uploading: "Upload en cours... ",
            cancel: "Annuler",
            sending: "Envoi...",
            submit: "Soumettre",
            uploadProgress: "Progression de l'upload: ",
            isbnnumber: "Numéro ISBN",
            statutdetails: "Description du statut",
            french: "Français",
            english: "Anglais",
            publishthe: "Publié le",
            language: "Langue",
            visionTitle: "Notre vision",
            visionTexts: [
                "Booster l'accès mondial aux recherches publiées dans les journaux africains. Des <strong class=\"text-amber-600\">millions</strong> d'articles de recherche africains sont téléchargés chaque mois, amplifiant la portée africaine et mondiale de la recherche du continent.",
                "Nous avons <strong class=\"text-amber-600\">répertorié des académies, des institutions et des organisations dans le domaine de la santé en Afrique</strong>, afin de faciliter l'accès aux savoirs, encourager les échanges scientifiques et valoriser les expertises locales sur la scène mondiale.",
                "<strong class=\"text-amber-600\">Afri-Fek</strong> soutient les <strong class=\"text-amber-600\"> modèles de publication Open Access et gratuits</strong>, et fournit l'accès à une gamme complète de ressources gratuites pour assister les chercheurs, auteurs, éditeurs et journaux africains."
            ]
        },
        filters: {
            type: 'Type de ressource',
            country: 'Pays',
            clear: 'Effacer les filtres',
            academy: 'Académie'
        },
        loading: 'Données encours de chargement...'
    },
    en: {
        tabs: {
            all: 'All',
            articles: 'Articles',
            journals: 'Journals',
            academies: 'Schools',
            institutions: 'Institutions',
            blogs: 'Blogs'
        },
        search: 'Search for an organization...',
        submit: 'Submit a resource',
        hero: {
            title: 'Explore the best African health resources',
            subtitle: 'Articles, journals, academies, institutions and blogs selected for you.',
            about: 'About this resource',
            website: 'Access the website',
            statut: "Status",
            explore: "Explore",
            close: "Close",
            name: "Name/Title",
            description: "Description",
            selectedfile: "Selected file: ",
            filedescription: "Select an image (max 5MB) or leave empty for default image",
            uploading: "Uploading... ",
            cancel: "Cancel",
            sending: "Sending...",
            submit: "Submit",
            uploadProgress: "Upload progress: ",
            isbnnumber: "ISBN number",
            statutdetails: "Status description",
            french: "French",
            english: "English",
            publishthe: "Published on",
            language: "Language",
            visionTitle: "Our Vision",
            visionTexts: [
                "Boost global access to research published in African journals. <strong class=\"text-amber-600\">Millions</strong> of African research articles are downloaded monthly, amplifying the African and global reach of the continent's research.",
                "We have <strong class=\"text-amber-600\">listed academies, institutions and organizations in the field of health in Africa</strong>, in order to facilitate access to knowledge, encourage scientific exchanges and enhance local expertise on the global stage.",
                "<strong class=\"text-amber-600\">Afri-Fek</strong> supports <strong class=\"text-amber-600\">Open Access and free publication models</strong>, and provides access to a full range of free resources to assist African researchers, authors, editors and journals."
            ],
            all: "All",
            resourcenotfound: "Resource not found",
            back: "Back"
        },
        filters: {
            type: 'Resource type',
            country: 'Country',
            clear: 'Clear filters',
            academy: 'Academy'
        },
        loading: 'Data loading...'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase,
    "uploadImage",
    ()=>uploadImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://oghwebdpiynscktcrhha.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9naHdlYmRwaXluc2NrdGNyaGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2Njk1MTgsImV4cCI6MjA3NDI0NTUxOH0.kPLlzJkhMkg7zBDg-jNOSUYOV8b2k7WIQQROk_5GJIU");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
const uploadImage = async (file)=>{
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `resources/${fileName}`;
    // Try upload with upsert option to bypass some RLS issues
    const { data, error } = await supabase.storage.from('afrifek').upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
    });
    if (error) {
        console.error('Supabase storage error:', error);
        throw new Error(`Upload failed: ${error.message}. Please check bucket permissions.`);
    }
    // Get public URL
    const { data: { publicUrl } } = supabase.storage.from('afrifek').getPublicUrl(filePath);
    return publicUrl;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/supabase-keepalive.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseKeepAlive",
    ()=>SupabaseKeepAlive,
    "supabaseKeepAlive",
    ()=>supabaseKeepAlive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/supabase.ts [app-client] (ecmascript)");
;
class SupabaseKeepAlive {
    intervalId = null;
    PING_INTERVAL = 5 * 24 * 60 * 60 * 1000;
    start() {
        // Ping immediately on start
        this.ping();
        // Set up recurring ping every 5 days
        this.intervalId = setInterval(()=>{
            this.ping();
        }, this.PING_INTERVAL);
        console.log('🔄 Supabase keep-alive started (pings every 5 days)');
    }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.log('⏹️ Supabase keep-alive stopped');
        }
    }
    async ping() {
        try {
            // Simple storage query to keep connection alive
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('afrifek').list('', {
                limit: 1
            });
            if (error) {
                // If storage fails, try a simple RPC call
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('ping', {});
                } catch (rpcError) {
                    // If RPC fails, just log - connection attempt was made
                    console.log('📡 Supabase ping attempted (connection made)');
                }
            }
            console.log('✅ Supabase keep-alive ping successful:', new Date().toISOString());
        } catch (error) {
            console.log('📡 Supabase ping attempted (connection made):', new Date().toISOString());
        // Even if query fails, the connection attempt keeps project alive
        }
    }
}
const supabaseKeepAlive = new SupabaseKeepAlive();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslation",
    ()=>getTranslation,
    "translations",
    ()=>translations
]);
const translations = {
    fr: {
        // Hero Section
        heroTitle: "Plateforme de Référencement des Ressources Scientifiques Africaines",
        heroSubtitle: "Découvrez et accédez aux journaux scientifiques, articles de recherche, institutions académiques et ressources éducatives à travers l'Afrique",
        searchPlaceholder: "Rechercher des journaux, articles, institutions...",
        exploreJournals: "Explorer les ressources du CSCCIU",
        // Blog Section
        ourMission: "Notre Mission",
        revolutionizeEcosystem: "Révolutionner l'Écosystème Scientifique Africain",
        revolutionizeDescription: "Découvrez comment nous déclenchons une révolution de l'innovation, propulsons avec force la visibilité de la recherche africaine et forgeons un accès démocratique au savoir scientifique.",
        // Values Section
        ourValues: "Nos Valeurs",
        // Partners
        ourPartners: "Nos partenaires",
        // Vision Section
        ourVision: "Notre Vision",
        visionTitle: "Se positionner comme la plateforme de référence",
        visionDescription: "Notre vision est de devenir la plateforme qui connecte les savoirs, dynamise les collaborations et fait briller l'expertise scientifique africaine à l'échelle mondiale.",
        connectKnowledge: "Connecter les Savoirs",
        connectKnowledgeDesc: "Créer des ponts entre les connaissances scientifiques africaines et le monde entier.",
        dynamizeCollaboration: "Dynamiser les Collaborations",
        dynamizeCollaborationDesc: "Faciliter les partenariats et les échanges entre chercheurs, institutions et organisations.",
        shineExpertise: "Faire Briller l'Expertise",
        shineExpertiseDesc: "Mettre en lumière l'excellence et l'innovation de la recherche scientifique africaine.",
        // Mission Section
        facilitateEvaluation: "Faciliter l'Évaluation et la Promotion des Enseignants-Chercheurs",
        missionDescription: "Afri-Fek centralise et recense de manière exhaustive les revues scientifiques africaines de qualité, évaluées par les pairs et en libre accès. Notre plateforme fournit des données fiables et structurées pour faciliter l'évaluation rigoureuse des publications scientifiques, indépendamment de la discipline, de la géographie ou de la langue.",
        reliableData: "Données Fiables",
        reliableDataDesc: "Informations vérifiées et structurées pour une évaluation rigoureuse des revues scientifiques.",
        universalAccess: "Accès Universel",
        universalAccessDesc: "Plateforme ouverte et accessible à tous les chercheurs et institutions africaines.",
        // Stats Section
        journals: "Journaux",
        scientificPublications: "Publications scientifiques",
        articles: "Articles",
        publishedResearch: "Recherches publiées",
        institutions: "Institutions",
        researchCenters: "Centres de recherche",
        totalResources: "Total Ressources",
        completeDatabase: "Base de données complète",
        // About Section
        aboutUs: "À Propos",
        // Features Section
        ourFeatures: "Nos Fonctionnalités",
        // Contact Section
        contactUs: "Contactez-nous",
        // Team Section
        ourTeam: "Notre Équipe",
        // Contact Section
        contactUsTitle: "Nous Contacter",
        needHelp: "Besoin d'aide ou des questions ?",
        contactDescription: "Notre équipe est là pour vous accompagner dans vos recherches et vous aider à tirer le meilleur parti d'Afri-Fek. Choisissez le meilleur moyen de nous contacter.",
        scientificCommunity: "Communauté Scientifique",
        scientificCommunityDesc: "Rejoignez notre communauté active de chercheurs pour des discussions et collaborations.",
        joinCommunity: "Rejoindre la Communauté",
        technicalSupport: "Support Technique",
        technicalSupportDesc: "Signalez des problèmes, demandez des fonctionnalités ou obtenez de l'aide technique.",
        contactSupport: "Contacter le Support",
        userGuideTitle: "Guide d'Utilisation",
        userGuideDesc: "Consultez nos guides complets, tutoriels et documentation de la plateforme.",
        viewDocumentation: "Voir la Documentation",
        sendMessage: "Envoyez-nous un message",
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        sendButton: "Envoyer le Message",
        // Common
        readMore: "Lire plus",
        readLess: "Lire moins",
        loading: "Chargement...",
        // Navbar
        home: "Accueil",
        resources: "Ressources",
        guide: "Guide",
        support: "Support",
        submitResource: "Soumettre une Ressource",
        contact: "Contact",
        // Resources Menu
        discoverResources: "Découvrir les Ressources",
        journalsMenu: "Journaux",
        journalsDesc: "Explorer les journaux académiques et publications scientifiques.",
        institutionsMenu: "Institutions",
        institutionsDesc: "Parcourir les universités et centres de recherche africains.",
        blogsMenu: "Blogs",
        blogsDesc: "Trouver des commentaires d'experts et contenu créatif.",
        universitiesMenu: "Universités",
        universitiesDesc: "Académies éducatives, centres de formation et plateformes e-learning.",
        articlesMenu: "Articles",
        articlesDesc: "Articles de recherche tendance et résumés scientifiques.",
        booksMenu: "Ouvrages",
        booksDesc: "Ouvrages de recherche tendance et résumés scientifiques.",
        publishersMenu: "Editeurs",
        publishersDesc: "Maisons d'édition académiques et éditeurs scientifiques.",
        // Guide Menu
        guidesTutorials: "Guides & Tutoriels",
        userGuide: "Guide d'utilisation",
        userGuideDesc: "Guide complet d'utilisation de notre plateforme.",
        videoTutorial: "Tutoriel Vidéo",
        videoTutorialDesc: "Regarder des vidéos étape par étape.",
        faq: "FAQ",
        faqDesc: "Questions Fréquemment Posées.",
        // Support Menu
        supportMenu: "Support",
        helpCenter: "Centre d'aide",
        helpCenterDesc: "Accéder au centre d'aide et FAQ.",
        platformDoc: "Guide d'utilisation",
        platformDocDesc: "Documentation complète de la plateforme.",
        reportIssue: "Signaler un Problème",
        reportIssueDesc: "Soumettre un bug ou un problème.",
        // Resource List
        allResources: "Toutes",
        sortBy: "Trier par",
        noSort: "Aucun tri",
        alphabetic: "Alphabétique",
        date: "Date",
        country: "Pays",
        order: "Ordre",
        ascending: "Croissant",
        descending: "Décroissant",
        selectCountry: "Sélectionner...",
        domain: "Domaine",
        status: "Statut",
        allStatuses: "Tous les Statuts",
        active: "Actif",
        inactive: "Inactif",
        paused: "En Pause",
        activeFilters: "Filtres actifs:",
        sort: "Tri",
        resourcesFound: "ressources trouvées",
        page: "Page",
        of: "sur",
        viewDetails: "Voir details",
        website: "Site Web",
        previous: "Précédent",
        next: "Suivant",
        noResourcesFound: "Aucune ressource trouvée",
        searchPlaceholderResources: "🔍 Rechercher par titre, description ou organisation...",
        filtersAndSort: "Filtres et Tri",
        statistics: "Statistiques",
        totalResourcesStat: "Total ressources",
        popularCountries: "Top 5 Pays populaires",
        quickActions: "Actions rapides",
        resetFilters: "Réinitialiser filtres"
    },
    en: {
        // Hero Section
        heroTitle: "African Scientific Resources Referencing Platform",
        heroSubtitle: "Discover and access scientific journals, research articles, academic institutions and educational resources across Africa",
        searchPlaceholder: "Search for journals, articles, institutions...",
        exploreJournals: "Explore CSCCIU Resources",
        // Blog Section
        ourMission: "Our Mission",
        revolutionizeEcosystem: "Revolutionize the African Scientific Ecosystem",
        revolutionizeDescription: "Discover how we trigger an innovation revolution, powerfully propel the visibility of African research and forge democratic access to scientific knowledge.",
        // Values Section
        ourValues: "Our Values",
        // Partners
        ourPartners: "Our partners",
        // Vision Section
        ourVision: "Our Vision",
        visionTitle: "Positioning as the reference platform",
        visionDescription: "Our vision is to become the platform that connects knowledge, energizes collaborations, and showcases African scientific expertise on a global scale.",
        connectKnowledge: "Connect Knowledge",
        connectKnowledgeDesc: "Build bridges between African scientific knowledge and the world.",
        dynamizeCollaboration: "Energize Collaborations",
        dynamizeCollaborationDesc: "Facilitate partnerships and exchanges between researchers, institutions, and organizations.",
        shineExpertise: "Showcase Expertise",
        shineExpertiseDesc: "Highlight the excellence and innovation of African scientific research.",
        // Mission Section
        facilitateEvaluation: "Facilitate the Evaluation and Promotion of Teacher-Researchers",
        missionDescription: "Afri-Fek comprehensively centralizes and catalogs quality African scientific journals that are peer-reviewed and open access. Our platform provides reliable and structured data to facilitate rigorous evaluation of scientific publications, regardless of discipline, geography or language.",
        reliableData: "Reliable Data",
        reliableDataDesc: "Verified and structured information for rigorous evaluation of scientific journals.",
        universalAccess: "Universal Access",
        universalAccessDesc: "Open platform accessible to all African researchers and institutions.",
        // Stats Section
        journals: "Journals",
        scientificPublications: "Scientific publications",
        articles: "Articles",
        publishedResearch: "Published research",
        institutions: "Institutions",
        researchCenters: "Research centers",
        totalResources: "Total Resources",
        completeDatabase: "Complete database",
        // About Section
        aboutUs: "About Us",
        // Features Section
        ourFeatures: "Our Features",
        // Contact Section
        contactUs: "Contact Us",
        // Team Section
        ourTeam: "Our Team",
        // Contact Section
        contactUsTitle: "Contact Us",
        needHelp: "Need help or have questions?",
        contactDescription: "Our team is here to support you in your research and help you get the most out of Afri-Fek. Choose the best way to contact us.",
        scientificCommunity: "Scientific Community",
        scientificCommunityDesc: "Join our active community of researchers for discussions and collaborations.",
        joinCommunity: "Join the Community",
        technicalSupport: "Technical Support",
        technicalSupportDesc: "Report issues, request features, or get technical assistance.",
        contactSupport: "Contact Support",
        userGuideTitle: "User Guide",
        userGuideDesc: "Browse our comprehensive guides, tutorials, and platform documentation.",
        viewDocumentation: "View Documentation",
        sendMessage: "Send us a message",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        sendButton: "Send Message",
        // Common
        readMore: "Read more",
        readLess: "Read less",
        loading: "Loading...",
        // Navbar
        home: "Home",
        resources: "Resources",
        guide: "Guide",
        support: "Assistance",
        submitResource: "Submit a Resource",
        contact: "Contact",
        // Resources Menu
        discoverResources: "Discover Resources",
        journalsMenu: "Journals",
        journalsDesc: "Explore academic journals and scientific publications.",
        institutionsMenu: "Institutions",
        institutionsDesc: "Browse African universities and research centers.",
        blogsMenu: "Blogs",
        blogsDesc: "Find expert commentary and creative content.",
        universitiesMenu: "Universities",
        universitiesDesc: "Educational academies, training centers and e-learning platforms.",
        articlesMenu: "Articles",
        articlesDesc: "Trending research articles and scientific summaries.",
        booksMenu: "Books",
        booksDesc: "Trending research books and scientific summaries.",
        publishersMenu: "Publishers",
        publishersDesc: "Academic publishing houses and scientific publishers.",
        // Guide Menu
        guidesTutorials: "Guides & Tutorials",
        userGuide: "User Guide",
        userGuideDesc: "Complete guide to using our platform.",
        videoTutorial: "Video Tutorial",
        videoTutorialDesc: "Watch step-by-step videos.",
        faq: "FAQ",
        faqDesc: "Frequently Asked Questions.",
        // Support Menu
        supportMenu: "Support",
        helpCenter: "Help Center",
        helpCenterDesc: "Access help center and FAQ.",
        platformDoc: "User Guide",
        platformDocDesc: "Complete platform documentation.",
        reportIssue: "Report an Issue",
        reportIssueDesc: "Submit a bug or problem.",
        // Resource List
        allResources: "All",
        sortBy: "Sort by",
        noSort: "No sorting",
        alphabetic: "Alphabetic",
        date: "Date",
        country: "Country",
        order: "Order",
        ascending: "Ascending",
        descending: "Descending",
        selectCountry: "Select...",
        domain: "Domain",
        status: "Status",
        allStatuses: "All Statuses",
        active: "Active",
        inactive: "Inactive",
        paused: "Paused",
        activeFilters: "Active filters:",
        sort: "Sort",
        resourcesFound: "resources found",
        page: "Page",
        of: "of",
        viewDetails: "View details",
        website: "Website",
        previous: "Previous",
        next: "Next",
        noResourcesFound: "No resources found",
        searchPlaceholderResources: "🔍 Search by title, description or organization...",
        filtersAndSort: "Filters and Sort",
        statistics: "Statistics",
        totalResourcesStat: "Total resources",
        popularCountries: "Top 5 Popular Countries",
        quickActions: "Quick Actions",
        resetFilters: "Reset filters"
    }
};
function getTranslation(key, lang) {
    return translations[lang][key] || translations.fr[key];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/cache.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simple IndexedDB cache utility
__turbopack_context__.s([
    "cache",
    ()=>cache
]);
class CacheManager {
    dbName = 'afri-fek-cache';
    version = 1;
    db = null;
    async init() {
        return new Promise((resolve, reject)=>{
            const request = indexedDB.open(this.dbName, this.version);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                this.db = request.result;
                resolve();
            };
            request.onupgradeneeded = ()=>{
                const db = request.result;
                if (!db.objectStoreNames.contains('resources')) {
                    db.createObjectStore('resources', {
                        keyPath: 'key'
                    });
                }
            };
        });
    }
    async set(key, data, ttl = 600000) {
        if (!this.db) await this.init();
        const transaction = this.db.transaction([
            'resources'
        ], 'readwrite');
        const store = transaction.objectStore('resources');
        await store.put({
            key,
            data,
            timestamp: Date.now(),
            ttl
        });
    }
    async get(key) {
        if (!this.db) await this.init();
        return new Promise((resolve)=>{
            const transaction = this.db.transaction([
                'resources'
            ], 'readonly');
            const store = transaction.objectStore('resources');
            const request = store.get(key);
            request.onsuccess = ()=>{
                const result = request.result;
                if (!result) {
                    resolve(null);
                    return;
                }
                // Check if expired
                if (Date.now() - result.timestamp > result.ttl) {
                    this.delete(key);
                    resolve(null);
                    return;
                }
                resolve(result.data);
            };
            request.onerror = ()=>resolve(null);
        });
    }
    async delete(key) {
        if (!this.db) await this.init();
        const transaction = this.db.transaction([
            'resources'
        ], 'readwrite');
        const store = transaction.objectStore('resources');
        await store.delete(key);
    }
    async needsRefresh(key, softTtl = 300000) {
        if (!this.db) await this.init();
        return new Promise((resolve)=>{
            const transaction = this.db.transaction([
                'resources'
            ], 'readonly');
            const store = transaction.objectStore('resources');
            const request = store.get(key);
            request.onsuccess = ()=>{
                const result = request.result;
                if (!result) {
                    resolve(true);
                    return;
                }
                // Check if needs soft refresh (background update)
                resolve(Date.now() - result.timestamp > softTtl);
            };
            request.onerror = ()=>resolve(true);
        });
    }
}
const cache = new CacheManager();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/email.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Email service - logs email data for now (replace with actual email service)
__turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail,
    "sendNotificationEmail",
    ()=>sendNotificationEmail
]);
const sendNotificationEmail = async (resourceData, clarification)=>{
    try {
        // Log email data (replace with actual email service like EmailJS, SendGrid, etc.)
        console.log('📧 Email Notification:');
        console.log('To: catelleningha@gmail.com');
        console.log('Subject: Nouvelle ressource soumise - Afri-Fek');
        console.log('Resource:', resourceData);
        console.log('Clarification:', clarification);
        console.log('Admin Link:', `${window.location.origin}/admin`);
        // Simulate successful email sending
        return {
            success: true
        };
    } catch (error) {
        console.error('Email sending failed:', error);
        return {
            success: false,
            error
        };
    }
};
const sendContactEmail = async (contactData)=>{
    try {
        // Log contact email data (replace with actual email service)
        console.log('📧 Contact Email:');
        console.log('To: catelleningha@gmail.com');
        console.log('Subject: Contact - Afri-Fek');
        console.log('Contact Data:', contactData);
        console.log('Admin Link:', `${window.location.origin}/admin`);
        // Simulate successful email sending
        return {
            success: true
        };
    } catch (error) {
        console.error('Contact email sending failed:', error);
        return {
            success: false,
            error
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/hooks/useAITranslation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAITranslation",
    ()=>useAITranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useAITranslation = ()=>{
    _s();
    const [userLanguage, setUserLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('fr');
    const [isTranslating, setIsTranslating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isProcessing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const translationCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAITranslation.useEffect": ()=>{
            // Load saved language
            const savedLang = localStorage.getItem('user-language');
            const hasSelected = localStorage.getItem('user-language-selected');
            if (savedLang && hasSelected) {
                setUserLanguage(savedLang);
                if (savedLang !== 'fr') {
                    // Hide page content during translation
                    document.body.style.visibility = 'hidden';
                    setTimeout({
                        "useAITranslation.useEffect": ()=>{
                            translatePageContent().then({
                                "useAITranslation.useEffect": ()=>{
                                    document.body.style.visibility = 'visible';
                                }
                            }["useAITranslation.useEffect"]);
                        }
                    }["useAITranslation.useEffect"], 500);
                }
            }
            // Load translation cache
            const cached = localStorage.getItem('ai-translation-cache');
            if (cached) {
                try {
                    translationCache.current = JSON.parse(cached);
                } catch  {}
            }
        }
    }["useAITranslation.useEffect"], []);
    const translateText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAITranslation.useCallback[translateText]": async (text, targetLang)=>{
            if (!text || text.trim() === '' || targetLang === 'fr') return text;
            // Never translate "Afri-Fek" or "Afri-" or "Fek"
            if (text.includes('Afri-Fek') || text.includes('Afri-') || text.includes('Fek')) return text;
            // Preserve scientific terminology - don't translate these terms
            const scientificTerms = [
                'Journal',
                'Journaux',
                'Ouvrage',
                'Ouvrages',
                'Article',
                'Articles',
                'Institution',
                'Institutions',
                'Blog',
                'Blogs'
            ];
            if (scientificTerms.some({
                "useAITranslation.useCallback[translateText]": (term)=>text.trim() === term
            }["useAITranslation.useCallback[translateText]"])) return text;
            const cacheKey = `${text.trim()}-${targetLang}`;
            if (translationCache.current[cacheKey]) {
                return translationCache.current[cacheKey];
            }
            // Map language codes correctly
            const langMap = {
                'en': 'en',
                'es': 'es',
                'de': 'de',
                'it': 'it',
                'pt': 'pt',
                'ar': 'ar',
                'zh': 'zh-cn',
                'ru': 'ru'
            };
            const correctLang = langMap[targetLang] || targetLang;
            try {
                let translated = text;
                // Add context for scientific terms to prevent mistranslation
                let textToTranslate = text;
                if (text.toLowerCase().includes('journal')) {
                    textToTranslate = text + ' (scientific journal, not newspaper)';
                } else if (text.toLowerCase().includes('ouvrage')) {
                    textToTranslate = text + ' (academic book, scholarly work)';
                }
                // Use Google Translate with correct language code
                // try {
                //   const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=${correctLang}&dt=t&q=${encodeURIComponent(textToTranslate.slice(0, 400))}`);
                //   const data = await response.json();
                //   translated = data[0]?.[0]?.[0] || text;
                //   // Remove the context hint from translation
                //   translated = translated.replace(/\s*\(scientific journal.*?\)/gi, '').replace(/\s*\(academic book.*?\)/gi, '');
                // } catch {
                //   // Fallback to MyMemory
                //   try {
                //     const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 400))}&langpair=fr|${correctLang}`);
                //     const data = await response.json();
                //     if (data.responseStatus === 200 && data.responseData?.translatedText) {
                //       translated = data.responseData.translatedText;
                //     }
                //   } catch {
                //     translated = text;
                //   }
                // }
                // Cache the translation
                translationCache.current[cacheKey] = translated;
                localStorage.setItem('ai-translation-cache', JSON.stringify(translationCache.current));
                return translated;
            } catch (error) {
                console.error('Translation error:', error);
                return text;
            }
        }
    }["useAITranslation.useCallback[translateText]"], []);
    const translatePageContent = async ()=>{
        if (userLanguage === 'fr' || isProcessing.current) {
            return Promise.resolve();
        }
        return new Promise(async (resolve)=>{
            setIsTranslating(true);
            isProcessing.current = true;
            // Mark the page as translated to this language
            document.body.setAttribute('data-translated-lang', userLanguage);
            try {
                // Find all text nodes
                const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
                    acceptNode: (node)=>{
                        const parent = node.parentElement;
                        if (!parent) return NodeFilter.FILTER_REJECT;
                        const tagName = parent.tagName.toLowerCase();
                        if ([
                            'script',
                            'style',
                            'noscript'
                        ].includes(tagName)) {
                            return NodeFilter.FILTER_REJECT;
                        }
                        const text = node.textContent?.trim();
                        if (!text || text.length < 3) {
                            return NodeFilter.FILTER_REJECT;
                        }
                        // Skip Afri-Fek brand elements
                        if (text.includes('Afri-') || text.includes('Fek') || text.includes('Afri-Fek')) {
                            return NodeFilter.FILTER_REJECT;
                        }
                        return NodeFilter.FILTER_ACCEPT;
                    }
                });
                const textNodes = [];
                let node;
                while(node = walker.nextNode()){
                    textNodes.push(node);
                }
                // Process in batches
                const batchSize = 10;
                for(let i = 0; i < textNodes.length; i += batchSize){
                    const batch = textNodes.slice(i, i + batchSize);
                    await Promise.all(batch.map(async (textNode)=>{
                        const originalText = textNode.textContent?.trim();
                        if (!originalText) return;
                        try {
                            const translatedText = await translateText(originalText, userLanguage);
                            if (translatedText !== originalText) {
                                textNode.textContent = translatedText;
                            }
                        } catch (error) {
                            console.error('Error translating text node:', error);
                        }
                    }));
                    // Small delay between batches
                    if (i + batchSize < textNodes.length) {
                        await new Promise((resolve)=>setTimeout(resolve, 200));
                    }
                }
            } catch (error) {
                console.error('Page translation error:', error);
            } finally{
                setIsTranslating(false);
                isProcessing.current = false;
                resolve();
            }
        });
    };
    const translateResources = async (resources)=>{
        if (userLanguage === 'fr' || !resources.length) return resources;
        try {
            const translatedResources = await Promise.all(resources.slice(0, 20).map(async (resource, index)=>{
                await new Promise((resolve)=>setTimeout(resolve, index * 100));
                try {
                    const [name, description] = await Promise.all([
                        translateText(resource.name || '', userLanguage),
                        resource.description ? translateText(resource.description.slice(0, 200), userLanguage) : ''
                    ]);
                    return {
                        ...resource,
                        name,
                        description: description || resource.description,
                        about: resource.about
                    };
                } catch  {
                    return resource;
                }
            }));
            return [
                ...translatedResources,
                ...resources.slice(20)
            ];
        } catch (error) {
            console.error('Resource translation error:', error);
            return resources;
        }
    };
    const showLanguageNotification = (lang)=>{
        const langNames = {
            'en': 'English',
            'es': 'Español',
            'de': 'Deutsch',
            'it': 'Italiano',
            'pt': 'Português',
            'ar': 'العربية',
            'zh': '中文',
            'ja': '日本語',
            'ko': '한국어',
            'ru': 'Русский'
        };
        const notification = document.createElement('div');
        notification.innerHTML = `
      <div style="position: fixed; top: 20px; right: 20px; z-index: 10000; background: #1f2937; color: white; padding: 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); max-width: 300px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span style="font-size: 20px;">🌍</span>
          <span style="font-weight: bold;">Translate to ${langNames[lang]}?</span>
        </div>
        <p style="margin: 0 0 12px 0; font-size: 14px; opacity: 0.9;">We detected your language. Click to translate this page.</p>
        <div style="display: flex; gap: 8px;">
          <button onclick="window.translateToLanguage('${lang}')" style="background: #d97706; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">Translate</button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: transparent; color: white; border: 1px solid #374151; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">Dismiss</button>
        </div>
      </div>
    `;
        document.body.appendChild(notification);
        // Auto-remove after 10 seconds
        setTimeout(()=>{
            if (notification.parentElement) {
                notification.remove();
            }
        }, 10000);
    };
    const changeLanguage = (newLang)=>{
        // Clear previous translation cache to avoid wrong language
        translationCache.current = {};
        localStorage.removeItem('ai-translation-cache');
        // Update state immediately for UI reflection
        setUserLanguage(newLang);
        localStorage.setItem('user-language', newLang);
        localStorage.setItem('user-language-selected', 'true');
        // Clear any previous translation markers
        document.body.removeAttribute('data-translated-lang');
        if (newLang !== 'fr') {
            // Start translation process
            setIsTranslating(true);
            setTimeout(()=>{
                translatePageContent().then(()=>{
                    setIsTranslating(false);
                });
            }, 100);
        } else {
            window.location.reload();
        }
    };
    // Make function globally available
    if ("TURBOPACK compile-time truthy", 1) {
        window.translateToLanguage = changeLanguage;
    }
    return {
        userLanguage,
        setUserLanguage: changeLanguage,
        translatePageContent,
        translateResources,
        translateText,
        isTranslating,
        translationCache
    };
};
_s(useAITranslation, "SlLsc4KAlD0+XnD9EWz9cz73gOM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/hooks/useResourceStats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResourceStats",
    ()=>useResourceStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useResourceStats = ()=>{
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        total: 0,
        countries: 0,
        journals: 0,
        articles: 0,
        institutions: 0,
        editeurs: 0,
        ouvrages: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResourceStats.useEffect": ()=>{
            const fetchStats = {
                "useResourceStats.useEffect.fetchStats": async ()=>{
                    try {
                        const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3001/api") || 'http://localhost:3001/api'}/resources/stats`);
                        if (response.ok) {
                            const data = await response.json();
                            setStats(data);
                        }
                    } catch (error) {
                        console.error('Error fetching stats:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useResourceStats.useEffect.fetchStats"];
            fetchStats();
        }
    }["useResourceStats.useEffect"], []);
    return {
        stats,
        loading
    };
};
_s(useResourceStats, "XxPqAqqttT4UB0AFAseWdla19KY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/hooks/useLandingData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLandingData",
    ()=>useLandingData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/cache.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useLandingData = ()=>{
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "/hero.jpg",
        "/hero2.jpg",
        "/minesup.jpeg"
    ]);
    const [landingContent, setLandingContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        heroSubtitle: "La plateforme de référence pour accéder aux journaux, blogs et institutions de recherche scientifique en Afrique et pour l'Afrique. Accréditée par le Conseil Scientifique du Comité Consultatif des Institutions Universitaires de la République du Cameroun.",
        heroTitle: "la base de données scientifiques dédiée au développement de l'Afrique.",
        visionTitle: "Our Vision",
        visionTexts: [
            "Connecting researchers across Africa",
            "Promoting health innovation",
            "Building knowledge networks"
        ],
        quotes: []
    });
    const loadHeroImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLandingData.useCallback[loadHeroImages]": async ()=>{
            try {
                const cachedImages = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cache"].get('hero-images');
                if (cachedImages) {
                    const imageUrls = cachedImages.map({
                        "useLandingData.useCallback[loadHeroImages].imageUrls": (img)=>img.url
                    }["useLandingData.useCallback[loadHeroImages].imageUrls"]);
                    setImages(imageUrls);
                }
            } catch (error) {
                console.log('Using default images');
            }
        }
    }["useLandingData.useCallback[loadHeroImages]"], []);
    const loadLandingContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLandingData.useCallback[loadLandingContent]": async ()=>{
            try {
                const cachedContent = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cache"].get('landing-content');
                if (cachedContent) {
                    setLandingContent(cachedContent);
                }
            } catch (error) {
                console.log('Using default content');
            }
        }
    }["useLandingData.useCallback[loadLandingContent]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLandingData.useEffect": ()=>{
            loadHeroImages();
        }
    }["useLandingData.useEffect"], [
        loadHeroImages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLandingData.useEffect": ()=>{
            loadLandingContent();
            const interval = setInterval(loadLandingContent, 30000);
            return ({
                "useLandingData.useEffect": ()=>clearInterval(interval)
            })["useLandingData.useEffect"];
        }
    }["useLandingData.useEffect"], [
        loadLandingContent
    ]);
    return {
        images,
        landingContent
    };
};
_s(useLandingData, "WRS/ZsXwghXGx39b8wU2sClxudA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/hooks/useResources.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCache",
    ()=>clearCache,
    "refreshResourcesCache",
    ()=>refreshResourcesCache,
    "useResources",
    ()=>useResources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
let cachedResources = [];
let totalCount = 0;
const fetchAllResourcesFromAPI = async (onProgress)=>{
    if (cachedResources.length > 0) return cachedResources;
    const apiUrl = ("TURBOPACK compile-time value", "http://localhost:3001/api") || 'http://localhost:3001/api';
    // First get total count
    const countResponse = await fetch(`${apiUrl}/resources/count`);
    if (countResponse.ok) {
        const countData = await countResponse.json();
        totalCount = countData.total || 0;
    }
    // Then fetch all resources in batches
    const batchSize = 500;
    let page = 1;
    let allResources = [];
    while(true){
        const response = await fetch(`${apiUrl}/resources?page=${page}&limit=${batchSize}`);
        if (!response.ok) break;
        const data = await response.json();
        const newResources = Array.isArray(data) ? data : data.resources || [];
        if (newResources.length === 0) break;
        allResources = [
            ...allResources,
            ...newResources
        ];
        if (onProgress) {
            onProgress(allResources.length, totalCount);
        }
        if (newResources.length < batchSize) break;
        page++;
    }
    cachedResources = allResources;
    return cachedResources;
};
function useResources() {
    _s();
    const [resources, setResources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cachedResources);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cachedResources.length === 0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        loaded: 0,
        total: 0
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResources.useEffect": ()=>{
            if (cachedResources.length === 0) {
                loadAllResources();
            }
        }
    }["useResources.useEffect"], []);
    const loadAllResources = async ()=>{
        try {
            setLoading(true);
            const data = await fetchAllResourcesFromAPI((loaded, total)=>{
                setProgress({
                    loaded,
                    total
                });
            });
            setResources(data);
        } catch (err) {
            setError(err);
            console.error('Error fetching resources:', err);
        } finally{
            setLoading(false);
        }
    };
    return {
        resources,
        loading,
        error,
        progress,
        totalCount,
        refresh: loadAllResources
    };
}
_s(useResources, "gg6WNLhAaQADzKatlMimDByeavs=");
const refreshResourcesCache = async ()=>{
    cachedResources = [];
    totalCount = 0;
    return fetchAllResourcesFromAPI();
};
const clearCache = ()=>{
    cachedResources = [];
    totalCount = 0;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/hooks/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultImage",
    ()=>getDefaultImage,
    "getDomainName",
    ()=>getDomainName,
    "getDomainNames",
    ()=>getDomainNames,
    "resourcesMenu",
    ()=>resourcesMenu
]);
const getDomainName = (domain)=>{
    const domains = {
        'domain1': 'Droit, économie, politique',
        'domain2': 'Lettres et sciences humaines',
        'domain3': 'Mathématiques',
        'domain4': 'Sciences physiques',
        'domain5': 'Sciences de la terre et de la vie',
        'domain6': 'Sciences de l\'ingénieur',
        'domain7': 'Sciences pharmaceutiques et médicales'
    };
    return domains[domain] || 'N/A';
};
const getDomainNames = ()=>{
    return [
        {
            key: 'domain1',
            label: 'Droit, économie, politique'
        },
        {
            key: 'domain2',
            label: 'Lettres et sciences humaines'
        },
        {
            key: 'domain3',
            label: 'Mathématiques'
        },
        {
            key: 'domain4',
            label: 'Sciences physiques'
        },
        {
            key: 'domain5',
            label: 'Sciences de la terre et de la vie'
        },
        {
            key: 'domain6',
            label: 'Sciences de l\'ingénieur'
        },
        {
            key: 'domain7',
            label: 'Sciences pharmaceutiques et médicales'
        }
    ];
};
const getDefaultImage = (type)=>{
    switch(type){
        case "journal":
            return "/search.png";
        case "article":
            return "/hero3.jpeg";
        case "institution":
            return "/academy.jpg";
        case "blog":
            return "/academy.jpg";
        default:
            return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop";
    }
};
const resourcesMenu = [
    {
        title: "Discover Resources",
        items: [
            {
                label: "Journals",
                description: "Explore peer-reviewed journals and academic publications.",
                filter: "journal"
            },
            {
                label: "Institutions",
                description: "Browse African universities, research centers, and foundations.",
                filter: "institution"
            },
            {
                label: "Blogs",
                description: "Find expert commentary, articles, and creator content.",
                filter: "blog"
            },
            {
                label: "Schools",
                description: "Educational academies, training centers, and e-learning platforms.",
                filter: "academy"
            },
            {
                label: "Articles",
                description: "Trending research articles and scientific summaries.",
                filter: "article"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$MainApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/MainApp.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$MainApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/frontend/src/app/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_7c3d796d._.js.map