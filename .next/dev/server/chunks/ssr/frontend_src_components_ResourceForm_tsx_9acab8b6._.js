module.exports = [
"[project]/frontend/src/components/ResourceForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourceForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-dropzone/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/select.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const translations = {
    fr: {
        resourceTitle: "Titre de la ressource *",
        abbreviation: "Abbréviation",
        resourceUrl: "URL de la ressource *",
        organisationName: "Propriétaire*",
        chiefEditor: "Rédacteur en chef",
        email: "Email",
        issnOnline: "ISSN en ligne",
        issnPrint: "ISSN imprimé",
        discipline: "Discipline",
        publisher: "Éditeur / Maison d'édition",
        frequency: "Fréquence *",
        licenseType: "Type de licence *",
        status: "Statut *",
        domainJournal: "Domaine de la resource",
        indexingDatabases: "Bases de données d'indexation",
        impactFactor: "Facteur d'impact",
        peerReviewType: "Type d'évaluation par les pairs",
        subjects: "Sujets",
        keywords: "Mots-clés",
        articleType: "Type d'article *",
        doiPrefix: "DOI",
        citationCount: "Nombre de citations",
        references: "Références",
        contactNumber: "Numéro de contact",
        submitResource: "Soumettre une ressource",
        resourceType: "Type de ressource *",
        country: "Pays *",
        language: "Langue *",
        description: "Description (250 mots max)",
        about: "À propos (250 mots max)",
        coverImage: "Image de couverture",
        uploading: "Téléversement...",
        cancel: "Annuler",
        submit: "Soumettre",
        submitting: "Soumission...",
        selectOption: "Sélectionnez une option",
        dragOrClick: "Glissez-déposez ou cliquez pour sélectionner",
        imageSpec: "PNG, JPG, GIF jusqu'à 10MB",
        yearly: "Annuelle",
        monthly: "Mensuelle",
        weekly: "Hebdomadaire",
        daily: "Quotidienne",
        quarterly: "Trimestrielle",
        biannual: "Semestrielle",
        openAccess: "Accès libre",
        subscription: "Abonnement",
        free: "Gratuit",
        paid: "Payant",
        ccBy: "CC BY",
        ccBySa: "CC BY-SA",
        ccByNc: "CC BY-NC",
        active: "Actif",
        inactive: "Inactif",
        pause: "En pause",
        domain1: "Commission scientifique spécialisée de droit, science économique et science politique",
        domain2: "Commission scientifique spécialisée des lettres et sciences humaines",
        domain3: "Commission scientifique spécialisée des mathématiques",
        domain4: "Commission scientifique spécialisée des sciences physiques",
        domain5: "Commission scientifique spécialisée des sciences de la terre et de la vie",
        domain6: "Commission scientifique spécialisée des sciences de l'ingénieur",
        domain7: "Commission scientifique spécialisée des sciences pharmaceutiques et médicales",
        domain8: "Autre",
        singleBlind: "Simple aveugle",
        doubleBlind: "Double aveugle",
        open: "Ouvert",
        pdf: "PDF",
        word: "Word",
        html: "HTML",
        epub: "EPUB",
        journal: "Journal",
        article: "Article",
        blog: "Blog",
        institution: "Institution",
        ouvrage: "Ouvrage",
        general: "Général",
        publication: "Publication",
        editorial: "Éditorial",
        timeCoverage: "Couverture temporelle",
        startYear: "Année de début",
        ongoing: "En cours",
        stopped: "Arrêté",
        endYear: "Année d'arrêt",
        briefDescription: "Brève description...",
        aboutOrganization: "À propos de l'organisation...",
        articleTitle: "Titre de l'article *",
        articleUrl: "URL de l'article *",
        blogTitle: "Titre du blog *",
        blogUrl: "URL du blog *",
        institutionName: "Nom de l'institution *",
        website: "Site web *",
        activityDomain: "Domaine d'activité",
        contactInstitution: "Contact institution",
        emailInstitution: "Email institution",
        contactJournal: "Contact journal",
        emailJournal: "Email journal",
        contactBlog: "Contact blog",
        emailBlog: "Email blog",
        address: "Adresse",
        school: "Universite",
        schoolName: "Nom de l'etablissement *",
        schoolContact: "Contact de l'etablissement",
        schoolEmail: "Email de l'etablissement",
        filiere: "Filière",
        publisherName: "Nom de l'éditeur *",
        publisherContact: "Contact de l'éditeur",
        publisherEmail: "Email de l'éditeur",
        authors: "Auteurs",
        isbn: "ISBN",
        publishedYear: "Année de publication",
        pages: "Nombre de pages",
        edition: "Numero d'édition",
        bookTitle: "Titre de l'ouvrage *",
        bookUrl: "URL de l'ouvrage *",
        contactBook: "Contact ouvrage",
        emailBook: "Email ouvrage",
        mathematics: "Mathématiques",
        physics: "Physique",
        chemistry: "Chimie",
        biology: "Biologie",
        computerScience: "Informatique",
        engineering: "Ingénierie",
        geology: "Géologie",
        environmentalScience: "Sciences de l'environnement",
        statistics: "Statistiques",
        dataScience: "Science des données",
        biotechnology: "Biotechnologie",
        astronomy: "Astronomie",
        neuroscience: "Neurosciences",
        materialsScience: "Science des matériaux",
        robotics: "Robotique",
        agree: "Agrément"
    },
    en: {
        agree: "Accreditation",
        resourceTitle: "Resource Title *",
        abbreviation: "Abbreviation",
        resourceUrl: "Resource URL *",
        organisationName: "Owner publisher *",
        chiefEditor: "Editor and Chief",
        email: "Email",
        issnOnline: "Online ISSN",
        issnPrint: "Print ISSN",
        discipline: "Discipline",
        publisher: "Publisher / Publishing House",
        frequency: "Frequency *",
        licenseType: "License Type *",
        status: "Status *",
        domainJournal: "Resource Domain",
        indexingDatabases: "Indexing Databases",
        impactFactor: "Impact Factor",
        peerReviewType: "Peer Review Type",
        subjects: "Subjects",
        keywords: "Keywords",
        articleType: "Article Type *",
        doiPrefix: "DOI",
        citationCount: "Citation Count",
        references: "References",
        contactNumber: "Contact Number",
        submitResource: "Submit a Resource",
        resourceType: "Resource Type *",
        country: "Country *",
        language: "Language *",
        description: "Description (250 words max)",
        about: "About (250 words max)",
        coverImage: "Cover Image",
        uploading: "Uploading...",
        cancel: "Cancel",
        submit: "Submit",
        submitting: "Submitting...",
        selectOption: "Select an option",
        dragOrClick: "Drag & drop or click to select",
        imageSpec: "PNG, JPG, GIF up to 10MB",
        yearly: "Yearly",
        monthly: "Monthly",
        weekly: "Weekly",
        daily: "Daily",
        quarterly: "Quarterly",
        biannual: "Biannual",
        openAccess: "Open Access",
        subscription: "Subscription",
        school: "University",
        schoolName: "University Name",
        schoolContact: "University Contact ",
        schoolEmail: "University Email",
        publisherName: "Publisher Name *",
        publisherContact: "Publisher Contact",
        publisherEmail: "Publisher Email",
        free: "Free",
        paid: "Paid",
        ccBy: "CC BY",
        ccBySa: "CC BY-SA",
        ccByNc: "CC BY-NC",
        active: "Active",
        inactive: "Inactive",
        pause: "On hold",
        domain1: "Specialized scientific commission for law, economics and political science",
        domain2: "Specialized scientific commission for letters and human sciences",
        domain3: "Specialized scientific commission for mathematics",
        domain4: "Specialized scientific commission for physical sciences",
        domain5: "Specialized scientific commission for earth and life sciences",
        domain6: "Specialized scientific commission for engineering sciences",
        domain7: "Specialized scientific commission for pharmaceutical and medical sciences",
        domain8: "Other",
        singleBlind: "Single-blind",
        doubleBlind: "Double-blind",
        open: "Open",
        pdf: "PDF",
        word: "Word",
        html: "HTML",
        epub: "EPUB",
        journal: "Journal",
        article: "Article",
        blog: "Blog",
        institution: "Institution",
        ouvrage: "Book",
        general: "General",
        publication: "Publication",
        editorial: "Editorial",
        timeCoverage: "Time coverage",
        startYear: "Start year",
        ongoing: "Ongoing",
        stopped: "Stopped",
        endYear: "End year",
        briefDescription: "Brief description...",
        aboutOrganization: "About the organization...",
        articleTitle: "Article Title *",
        articleUrl: "Article URL *",
        blogTitle: "Blog Title *",
        blogUrl: "Blog URL *",
        institutionName: "Institution Name *",
        website: "Website *",
        activityDomain: "Activity Domain",
        contactInstitution: "Institution contact",
        emailInstitution: "Institution email",
        contactJournal: "Journal contact",
        emailJournal: "Journal email",
        contactBlog: "Blog contact",
        emailBlog: "Blog email",
        address: "Address",
        authors: "Authors",
        isbn: "ISBN",
        publishedYear: "Published Year",
        pages: "Number of Pages",
        edition: "Edition number",
        bookTitle: "Book Title *",
        bookUrl: "Book URL *",
        contactBook: "Book Contact",
        emailBook: "Book Email"
    }
};
const filiereOptions = [
    {
        value: "mathematics",
        labelKey: "mathematics"
    },
    {
        value: "physics",
        labelKey: "physics"
    },
    {
        value: "chemistry",
        labelKey: "chemistry"
    },
    {
        value: "biology",
        labelKey: "biology"
    },
    {
        value: "computer_science",
        labelKey: "computerScience"
    },
    {
        value: "engineering",
        labelKey: "engineering"
    },
    {
        value: "geology",
        labelKey: "geology"
    },
    {
        value: "environmental_science",
        labelKey: "environmentalScience"
    },
    {
        value: "statistics",
        labelKey: "statistics"
    },
    {
        value: "data_science",
        labelKey: "dataScience"
    },
    {
        value: "biotechnology",
        labelKey: "biotechnology"
    },
    {
        value: "astronomy",
        labelKey: "astronomy"
    },
    {
        value: "neuroscience",
        labelKey: "neuroscience"
    },
    {
        value: "materials_science",
        labelKey: "materialsScience"
    },
    {
        value: "robotics",
        labelKey: "robotics"
    }
];
const FIELD_GROUPS = {
    journal: [
        {
            name: "resourceTitle",
            labelKey: "resourceTitle",
            type: "text",
            required: true
        },
        {
            name: "resourceUrl",
            labelKey: "resourceUrl",
            type: "url",
            required: true
        },
        {
            name: "organisationName",
            labelKey: "organisationName",
            type: "text",
            required: true
        },
        {
            name: "chiefEditor",
            labelKey: "chiefEditor",
            type: "text"
        },
        {
            name: "contact",
            labelKey: "contactJournal",
            type: "number"
        },
        {
            name: "email",
            labelKey: "emailJournal",
            type: "email"
        },
        {
            name: "issnOnline",
            labelKey: "issnOnline",
            type: "text"
        },
        {
            name: "issnPrint",
            labelKey: "issnPrint",
            type: "text"
        },
        {
            name: "discipline",
            labelKey: "discipline",
            type: "text"
        },
        {
            name: "publisher",
            labelKey: "publisher",
            type: "text"
        },
        {
            name: "abbreviation",
            labelKey: "abbreviation",
            type: "text"
        },
        {
            name: "frequency",
            labelKey: "frequency",
            type: "select",
            required: true,
            options: [
                {
                    value: "yearly",
                    labelKey: "yearly"
                },
                {
                    value: "monthly",
                    labelKey: "monthly"
                },
                {
                    value: "weekly",
                    labelKey: "weekly"
                },
                {
                    value: "daily",
                    labelKey: "daily"
                },
                {
                    value: "quarterly",
                    labelKey: "quarterly"
                },
                {
                    value: "biannual",
                    labelKey: "biannual"
                }
            ]
        },
        {
            name: "licenseType",
            labelKey: "licenseType",
            type: "select",
            required: true,
            options: [
                {
                    value: "open-access",
                    labelKey: "openAccess"
                },
                {
                    value: "subscription",
                    labelKey: "subscription"
                },
                {
                    value: "free",
                    labelKey: "free"
                },
                {
                    value: "paid",
                    labelKey: "paid"
                },
                {
                    value: "cc-by",
                    labelKey: "ccBy"
                },
                {
                    value: "cc-by-sa",
                    labelKey: "ccBySa"
                },
                {
                    value: "cc-by-nc",
                    labelKey: "ccByNc"
                }
            ]
        },
        {
            name: "statut",
            labelKey: "status",
            type: "select",
            required: true,
            options: [
                {
                    value: "active",
                    labelKey: "active"
                },
                {
                    value: "inactive",
                    labelKey: "inactive"
                },
                {
                    value: "pause",
                    labelKey: "pause"
                }
            ]
        },
        {
            name: "domainJournal",
            labelKey: "domainJournal",
            type: "select",
            options: [
                {
                    value: "domain1",
                    labelKey: "domain1"
                },
                {
                    value: "domain2",
                    labelKey: "domain2"
                },
                {
                    value: "domain3",
                    labelKey: "domain3"
                },
                {
                    value: "domain4",
                    labelKey: "domain4"
                },
                {
                    value: "domain5",
                    labelKey: "domain5"
                },
                {
                    value: "domain6",
                    labelKey: "domain6"
                },
                {
                    value: "domain7",
                    labelKey: "domain7"
                },
                {
                    value: "domain8",
                    labelKey: "domain8"
                }
            ]
        },
        {
            name: "indexingDatabases",
            labelKey: "indexingDatabases",
            type: "text",
            isPremium: true
        },
        {
            name: "impactFactor",
            labelKey: "impactFactor",
            type: "number",
            isPremium: true
        },
        {
            name: "peerReviewType",
            labelKey: "peerReviewType",
            type: "select",
            options: [
                {
                    value: "single-blind",
                    labelKey: "singleBlind"
                },
                {
                    value: "double-blind",
                    labelKey: "doubleBlind"
                },
                {
                    value: "open",
                    labelKey: "open"
                }
            ]
        },
        {
            name: "subjects",
            labelKey: "subjects",
            type: "text"
        },
        {
            name: "keywords",
            labelKey: "keywords",
            type: "text"
        }
    ],
    article: [
        {
            name: "resourceTitle",
            labelKey: "articleTitle",
            type: "text",
            required: true
        },
        {
            name: "resourceUrl",
            labelKey: "articleUrl",
            type: "url",
            required: true
        },
        {
            name: "organisationName",
            labelKey: "organisationName",
            type: "text",
            required: true
        },
        {
            name: "email",
            labelKey: "email",
            type: "email"
        },
        {
            name: "contact",
            labelKey: "contact",
            type: "number"
        },
        // { name: "abbreviation", labelKey: "abbreviation", type: "text" },
        {
            name: "articleType",
            labelKey: "articleType",
            type: "select",
            required: true,
            options: [
                {
                    value: "pdf",
                    labelKey: "pdf"
                },
                {
                    value: "word",
                    labelKey: "word"
                },
                {
                    value: "html",
                    labelKey: "html"
                },
                {
                    value: "epub",
                    labelKey: "epub"
                }
            ]
        },
        {
            name: "licenseType",
            labelKey: "licenseType",
            type: "select",
            required: true,
            options: [
                {
                    value: "open-access",
                    labelKey: "openAccess"
                },
                {
                    value: "subscription",
                    labelKey: "subscription"
                },
                {
                    value: "free",
                    labelKey: "free"
                },
                {
                    value: "paid",
                    labelKey: "paid"
                },
                {
                    value: "cc-by",
                    labelKey: "ccBy"
                },
                {
                    value: "cc-by-sa",
                    labelKey: "ccBySa"
                },
                {
                    value: "cc-by-nc",
                    labelKey: "ccByNc"
                }
            ]
        },
        {
            name: "discipline",
            labelKey: "discipline",
            type: "text"
        },
        {
            name: "publisher",
            labelKey: "publisher",
            type: "text"
        },
        {
            name: "doiPrefix",
            labelKey: "doiPrefix",
            type: "text"
        },
        {
            name: "citationCount",
            labelKey: "citationCount",
            type: "number"
        },
        {
            name: "references",
            labelKey: "references",
            type: "textarea"
        },
        {
            name: "keywords",
            labelKey: "keywords",
            type: "text"
        }
    ],
    blog: [
        {
            name: "resourceTitle",
            labelKey: "blogTitle",
            type: "text",
            required: true
        },
        {
            name: "resourceUrl",
            labelKey: "blogUrl",
            type: "url",
            required: true
        },
        {
            name: "organisationName",
            labelKey: "organisationName",
            type: "text",
            required: true
        },
        {
            name: "email",
            labelKey: "emailBlog",
            type: "email"
        },
        {
            name: "contact",
            labelKey: "contactBlog",
            type: "number"
        },
        {
            name: "discipline",
            labelKey: "discipline",
            type: "text"
        },
        {
            name: "publisher",
            labelKey: "publisher",
            type: "text"
        },
        {
            name: "abbreviation",
            labelKey: "abbreviation",
            type: "text"
        },
        {
            name: "domainJournal",
            labelKey: "activityDomain",
            type: "select",
            options: [
                {
                    value: "domain1",
                    labelKey: "domain1"
                },
                {
                    value: "domain2",
                    labelKey: "domain2"
                },
                {
                    value: "domain3",
                    labelKey: "domain3"
                },
                {
                    value: "domain4",
                    labelKey: "domain4"
                },
                {
                    value: "domain5",
                    labelKey: "domain5"
                },
                {
                    value: "domain6",
                    labelKey: "domain6"
                },
                {
                    value: "domain7",
                    labelKey: "domain7"
                }
            ]
        },
        {
            name: "statut",
            labelKey: "status",
            type: "select",
            required: true,
            options: [
                {
                    value: "active",
                    labelKey: "active"
                },
                {
                    value: "inactive",
                    labelKey: "inactive"
                },
                {
                    value: "pause",
                    labelKey: "pause"
                }
            ]
        },
        {
            name: "subjects",
            labelKey: "subjects",
            type: "text"
        },
        {
            name: "keywords",
            labelKey: "keywords",
            type: "text"
        }
    ],
    institution: [
        {
            name: "organisationName",
            labelKey: "institutionName",
            type: "text",
            required: true
        },
        {
            name: "resourceUrl",
            labelKey: "website",
            type: "url",
            required: true
        },
        {
            name: "email",
            labelKey: "emailInstitution",
            type: "email"
        },
        {
            name: "address",
            labelKey: "address",
            type: "text"
        },
        {
            name: "contact",
            labelKey: "contactInstitution",
            type: "number"
        },
        {
            name: "abbreviation",
            labelKey: "abbreviation",
            type: "text"
        },
        {
            name: "domainJournal",
            labelKey: "activityDomain",
            type: "select",
            options: [
                {
                    value: "domain1",
                    labelKey: "domain1"
                },
                {
                    value: "domain2",
                    labelKey: "domain2"
                },
                {
                    value: "domain3",
                    labelKey: "domain3"
                },
                {
                    value: "domain4",
                    labelKey: "domain4"
                },
                {
                    value: "domain5",
                    labelKey: "domain5"
                },
                {
                    value: "domain6",
                    labelKey: "domain6"
                },
                {
                    value: "domain7",
                    labelKey: "domain7"
                }
            ]
        },
        {
            name: "discipline",
            labelKey: "discipline",
            type: "text"
        },
        {
            name: "statut",
            labelKey: "status",
            type: "select",
            required: true,
            options: [
                {
                    value: "active",
                    labelKey: "active"
                },
                {
                    value: "inactive",
                    labelKey: "inactive"
                },
                {
                    value: "pause",
                    labelKey: "pause"
                }
            ]
        }
    ],
    school: [
        {
            name: "organisationName",
            labelKey: "schoolName",
            type: "text",
            required: true
        },
        {
            name: "resourceUrl",
            labelKey: "website",
            type: "url",
            required: true
        },
        {
            name: "email",
            labelKey: "schoolEmail",
            type: "email"
        },
        {
            name: "address",
            labelKey: "address",
            type: "text"
        },
        {
            name: "contact",
            labelKey: "schoolContact",
            type: "number"
        },
        {
            name: "discipline",
            labelKey: "discipline",
            type: "text"
        },
        {
            name: "abbreviation",
            labelKey: "abbreviation",
            type: "text"
        },
        {
            name: "domainJournal",
            labelKey: "activityDomain",
            type: "select",
            options: [
                {
                    value: "domain1",
                    labelKey: "domain1"
                },
                {
                    value: "domain2",
                    labelKey: "domain2"
                },
                {
                    value: "domain3",
                    labelKey: "domain3"
                },
                {
                    value: "domain4",
                    labelKey: "domain4"
                },
                {
                    value: "domain5",
                    labelKey: "domain5"
                },
                {
                    value: "domain6",
                    labelKey: "domain6"
                },
                {
                    value: "domain7",
                    labelKey: "domain7"
                }
            ]
        },
        {
            name: "statut",
            labelKey: "status",
            type: "select",
            required: true,
            options: [
                {
                    value: "active",
                    labelKey: "active"
                },
                {
                    value: "inactive",
                    labelKey: "inactive"
                },
                {
                    value: "pause",
                    labelKey: "pause"
                }
            ]
        }
    ],
    editeur: [
        {
            name: "organisationName",
            labelKey: "publisherName",
            type: "text",
            required: true
        },
        {
            name: "resourceUrl",
            labelKey: "website",
            type: "url",
            required: true
        },
        {
            name: "email",
            labelKey: "publisherEmail",
            type: "email"
        },
        {
            name: "address",
            labelKey: "address",
            type: "text"
        },
        {
            name: "contact",
            labelKey: "publisherContact",
            type: "number"
        },
        {
            name: "discipline",
            labelKey: "discipline",
            type: "text"
        },
        {
            name: "abbreviation",
            labelKey: "abbreviation",
            type: "text"
        },
        {
            name: "issnOnline",
            labelKey: "issnOnline",
            type: "text"
        },
        {
            name: "issnPrint",
            labelKey: "issnPrint",
            type: "text"
        },
        {
            name: "agree",
            labelKey: "agree",
            type: "text"
        },
        {
            name: "domainJournal",
            labelKey: "activityDomain",
            type: "select",
            options: [
                {
                    value: "domain1",
                    labelKey: "domain1"
                },
                {
                    value: "domain2",
                    labelKey: "domain2"
                },
                {
                    value: "domain3",
                    labelKey: "domain3"
                },
                {
                    value: "domain4",
                    labelKey: "domain4"
                },
                {
                    value: "domain5",
                    labelKey: "domain5"
                },
                {
                    value: "domain6",
                    labelKey: "domain6"
                },
                {
                    value: "domain7",
                    labelKey: "domain7"
                }
            ]
        },
        {
            name: "statut",
            labelKey: "status",
            type: "select",
            required: true,
            options: [
                {
                    value: "active",
                    labelKey: "active"
                },
                {
                    value: "inactive",
                    labelKey: "inactive"
                },
                {
                    value: "pause",
                    labelKey: "pause"
                }
            ]
        }
    ],
    ouvrage: [
        {
            name: "resourceTitle",
            labelKey: "bookTitle",
            type: "text",
            required: true
        },
        {
            name: "resourceUrl",
            labelKey: "bookUrl",
            type: "url",
            required: true
        },
        {
            name: "organisationName",
            labelKey: "organisationName",
            type: "text",
            required: true
        },
        {
            name: "authors",
            labelKey: "authors",
            type: "text"
        },
        {
            name: "isbn",
            labelKey: "isbn",
            type: "text"
        },
        {
            name: "publisher",
            labelKey: "publisher",
            type: "text",
            required: true
        },
        {
            name: "publishedYear",
            labelKey: "publishedYear",
            type: "number"
        },
        {
            name: "pages",
            labelKey: "pages",
            type: "number"
        },
        {
            name: "edition",
            labelKey: "edition",
            type: "text"
        },
        {
            name: "contact",
            labelKey: "contactBook",
            type: "tel"
        },
        {
            name: "email",
            labelKey: "emailBook",
            type: "email"
        },
        {
            name: "abbreviation",
            labelKey: "abbreviation",
            type: "text"
        },
        {
            name: "domainJournal",
            labelKey: "activityDomain",
            type: "select",
            options: [
                {
                    value: "domain1",
                    labelKey: "domain1"
                },
                {
                    value: "domain2",
                    labelKey: "domain2"
                },
                {
                    value: "domain3",
                    labelKey: "domain3"
                },
                {
                    value: "domain4",
                    labelKey: "domain4"
                },
                {
                    value: "domain5",
                    labelKey: "domain5"
                },
                {
                    value: "domain6",
                    labelKey: "domain6"
                },
                {
                    value: "domain7",
                    labelKey: "domain7"
                }
            ]
        },
        {
            name: "statut",
            labelKey: "status",
            type: "select",
            required: true,
            options: [
                {
                    value: "active",
                    labelKey: "active"
                },
                {
                    value: "inactive",
                    labelKey: "inactive"
                },
                {
                    value: "pause",
                    labelKey: "pause"
                }
            ]
        }
    ]
};
function ResourceForm({ isOpen, onClose, formData, onInputChange, onFileChange, onSubmit, selectedFile, isSubmitting, submitMessage, uploadProgress, isEditing = false }) {
    const [formLanguage, setFormLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("fr");
    const { getRootProps, getInputProps, isDragActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        accept: {
            "image/*": []
        },
        onDrop: (acceptedFiles)=>{
            const file = acceptedFiles[0];
            if (file) {
                const synthetic = {
                    target: {
                        files: [
                            file
                        ]
                    }
                };
                onFileChange(synthetic);
            }
        }
    });
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        return translations[formLanguage][key] || key;
    }, [
        formLanguage
    ]);
    const renderMultiSelect = (fieldName, options, label)=>{
        const selectedValues = Array.isArray(formData[fieldName]) ? formData[fieldName] : [];
        const handleAdd = (value)=>{
            if (value && !selectedValues.includes(value)) {
                const newValues = [
                    ...selectedValues,
                    value
                ];
                onInputChange({
                    target: {
                        name: fieldName,
                        value: newValues
                    }
                });
            }
        };
        const handleRemove = (value)=>{
            const newValues = selectedValues.filter((v)=>v !== value);
            onInputChange({
                target: {
                    name: fieldName,
                    value: newValues
                }
            });
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                    value: undefined,
                    onValueChange: handleAdd,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "w-full bg-white border-2 border-gray-300 hover:border-amber-400 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: translate("selectOption")
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                lineNumber: 679,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 678,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                            className: "max-h-60",
                            children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: option.value,
                                    children: translate(option.labelKey)
                                }, option.value, false, {
                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                    lineNumber: 683,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 681,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                    lineNumber: 677,
                    columnNumber: 9
                }, this),
                selectedValues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 mt-2",
                    children: selectedValues.map((value)=>{
                        const option = options.find((o)=>o.value === value);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium",
                            children: [
                                option ? translate(option.labelKey) : value,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleRemove(value),
                                    className: "hover:bg-amber-200 rounded-full p-0.5 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 702,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                    lineNumber: 697,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, value, true, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 695,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                    lineNumber: 691,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
            lineNumber: 676,
            columnNumber: 7
        }, this);
    };
    const renderField = (field)=>{
        const value = formData[field.name] ?? "";
        const baseClass = "w-full px-3 py-2 border border-gray-300 rounded-lg " + "focus:ring-2 focus:ring-amber-500 focus:border-amber-500 " + "outline-none transition bg-white";
        const commonProps = {
            name: field.name,
            value,
            onChange: onInputChange,
            required: field.required,
            id: field.name
        };
        switch(field.type){
            case "select":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    ...commonProps,
                    className: baseClass,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: translate("selectOption")
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 732,
                            columnNumber: 13
                        }, this),
                        field.options?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: option.value,
                                children: translate(option.labelKey)
                            }, option.value, false, {
                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                lineNumber: 734,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                    lineNumber: 731,
                    columnNumber: 11
                }, this);
            case "textarea":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    ...commonProps,
                    placeholder: field.placeholder ? translate(field.placeholder) : "",
                    rows: 3,
                    className: `${baseClass} resize-y min-h-[80px]`
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                    lineNumber: 742,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...commonProps,
                    type: field.type,
                    placeholder: field.placeholder ? translate(field.placeholder) : "",
                    className: baseClass
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                    lineNumber: 751,
                    columnNumber: 11
                }, this);
        }
    };
    if (!isOpen) return null;
    const currentFields = FIELD_GROUPS[formData.type] || FIELD_GROUPS.journal;
    const groupedFields1 = {
        Identification: currentFields.filter((f)=>[
                "resourceTitle",
                "resourceUrl",
                "issnOnline",
                "issnPrint",
                "abbreviation",
                "domainJournal",
                "discipline"
            ].includes(f.name)),
        Administration: currentFields.filter((f)=>[
                "publisher",
                "chiefEditor",
                "organisationName",
                "contact",
                "email",
                "address"
            ].includes(f.name)),
        Fonctionnement: currentFields.filter((f)=>[
                "frequency",
                "licenseType",
                "statut"
            ].includes(f.name))
    };
    const groupedFields2 = {
        Identification: FIELD_GROUPS.institution.filter((f)=>[
                "organisationName",
                "resourceUrl",
                "domainJournal",
                "discipline"
            ].includes(f.name)),
        details: FIELD_GROUPS.institution.filter((f)=>[
                "abbreviation",
                "statut",
                "address"
            ].includes(f.name)),
        contact: FIELD_GROUPS.institution.filter((f)=>[
                "contact",
                "email"
            ].includes(f.name))
    };
    const groupedFields3 = {
        Identification: FIELD_GROUPS.blog.filter((f)=>[
                "resourceTitle",
                "resourceUrl",
                "organisationName",
                "domainJournal",
                "discipline"
            ].includes(f.name)),
        details: FIELD_GROUPS.blog.filter((f)=>[
                "abbreviation",
                "publisher",
                "statut",
                "subjects",
                "keywords"
            ].includes(f.name)),
        contact: FIELD_GROUPS.blog.filter((f)=>[
                "contact",
                "email"
            ].includes(f.name))
    };
    const ouvrageFields = {
        Identification: FIELD_GROUPS.ouvrage.filter((f)=>[
                "resourceTitle",
                "resourceUrl",
                "organisationName",
                "domainJournal"
            ].includes(f.name)),
        details: FIELD_GROUPS.ouvrage.filter((f)=>[
                "authors",
                "isbn",
                "publisher",
                "publishedYear",
                "pages",
                "edition"
            ].includes(f.name)),
        contact: FIELD_GROUPS.ouvrage.filter((f)=>[
                "contact",
                "email"
            ].includes(f.name))
    };
    const articleFields = {
        Identification: FIELD_GROUPS.article.filter((f)=>[
                "resourceTitle",
                "resourceUrl",
                "domainJournal",
                "organisationName",
                "doiPrefix"
            ].includes(f.name)),
        details: FIELD_GROUPS.article.filter((f)=>[
                "discipline",
                "articleType",
                "licenseType",
                "publisher"
            ].includes(f.name)),
        meta: FIELD_GROUPS.article.filter((f)=>[
                "address",
                "citationCount",
                "references",
                "keywords"
            ].includes(f.name))
    };
    const schoolFields = {
        Identification: FIELD_GROUPS.school.filter((f)=>[
                "organisationName",
                "resourceUrl",
                "abbreviation",
                "domainJournal",
                "discipline"
            ].includes(f.name)),
        details: FIELD_GROUPS.school.filter((f)=>[
                "statut",
                "address"
            ].includes(f.name)),
        contact: FIELD_GROUPS.school.filter((f)=>[
                "contact",
                "email"
            ].includes(f.name))
    };
    const editeurFields = {
        Identification: FIELD_GROUPS.editeur.filter((f)=>[
                "organisationName",
                "resourceUrl",
                "issnOnline",
                "issnPrint",
                "domainJournal",
                "discipline"
            ].includes(f.name)),
        details: FIELD_GROUPS.editeur.filter((f)=>[
                "statut",
                "abbreviation",
                "address",
                "agree"
            ].includes(f.name)),
        contact: FIELD_GROUPS.editeur.filter((f)=>[
                "contact",
                "email"
            ].includes(f.name))
    };
    let fieldsToRender;
    switch(formData.type){
        case 'journal':
            fieldsToRender = groupedFields1;
            break;
        case 'institution':
            fieldsToRender = groupedFields2;
            break;
        case 'blog':
            fieldsToRender = groupedFields3;
            break;
        case 'article':
            fieldsToRender = articleFields;
            break;
        case 'universite':
            fieldsToRender = schoolFields;
            break;
        case 'editeur':
            fieldsToRender = editeurFields;
            break;
        case 'ouvrage':
            fieldsToRender = ouvrageFields;
            break;
        default:
            fieldsToRender = groupedFields1;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-9xl h-[100vh]  shadow-2xl overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex justify-between items-center px-6 py-4 border-b bg-gray-50 sticky top-0 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-800 tracking-tight",
                            children: translate("submitResource")
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 875,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-5 h-5 text-gray-500 absolute left-2 top-1/2 -translate-y-1/2"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                            lineNumber: 880,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formLanguage,
                                            onChange: (e)=>setFormLanguage(e.target.value),
                                            className: "pl-8 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white appearance-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "fr",
                                                    children: "🇫🇷 Français"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "en",
                                                    children: "🇺🇸 English"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                            lineNumber: 881,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                    lineNumber: 879,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-gray-500 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 894,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                    lineNumber: 890,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 878,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                    lineNumber: 874,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: onSubmit,
                        id: "resource-form",
                        className: "p-8 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "type",
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: translate("resourceType")
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 902,
                                        columnNumber: 15
                                    }, this),
                                    renderField({
                                        name: "type",
                                        labelKey: "resourceType",
                                        type: "select",
                                        required: true,
                                        options: [
                                            {
                                                value: "journal",
                                                labelKey: "journal"
                                            },
                                            {
                                                value: "article",
                                                labelKey: "article"
                                            },
                                            {
                                                value: "blog",
                                                labelKey: "blog"
                                            },
                                            {
                                                value: "institution",
                                                labelKey: "institution"
                                            },
                                            {
                                                value: "universite",
                                                labelKey: "school"
                                            },
                                            {
                                                value: "editeur",
                                                labelKey: "publisher"
                                            },
                                            {
                                                value: "ouvrage",
                                                labelKey: "ouvrage"
                                            }
                                        ]
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                lineNumber: 901,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6",
                                children: Object.entries(fieldsToRender).map(([groupName, fields])=>fields.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-800 border-b pb-2 mb-4 capitalize",
                                                children: translate(groupName)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 926,
                                                columnNumber: 21
                                            }, this),
                                            fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: field.name,
                                                            className: "block text-sm font-medium mb-1 text-gray-700",
                                                            children: translate(field.labelKey)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                            lineNumber: 931,
                                                            columnNumber: 25
                                                        }, this),
                                                        renderField(field)
                                                    ]
                                                }, field.name, true, {
                                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                    lineNumber: 930,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, groupName, true, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 925,
                                        columnNumber: 19
                                    }, this) : null)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                lineNumber: 922,
                                columnNumber: 13
                            }, this),
                            (formData.type === 'universite' || formData.type === 'editeur') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-6 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-800 mb-4",
                                        children: translate("filiere")
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 944,
                                        columnNumber: 17
                                    }, this),
                                    renderMultiSelect("filiere", filiereOptions, translate("filiere"))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                lineNumber: 943,
                                columnNumber: 15
                            }, this),
                            formData.type === "journal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-6 rounded-lg border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-800 mb-4",
                                        children: translate("timeCoverage")
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 950,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                                        children: translate("startYear")
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        name: "coverageStartYear",
                                                        value: formData.coverageStartYear || "",
                                                        onChange: onInputChange,
                                                        min: "1900",
                                                        max: new Date().getFullYear(),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white",
                                                        placeholder: "Ex: 2010"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 958,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 954,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                                        children: translate("status")
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "coverageStatus",
                                                        value: formData.coverageStatus || "ongoing",
                                                        onChange: onInputChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "ongoing",
                                                                children: translate("ongoing")
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                                lineNumber: 979,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "stopped",
                                                                children: translate("stopped")
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                                lineNumber: 980,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 973,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 969,
                                                columnNumber: 19
                                            }, this),
                                            formData.coverageStatus === "stopped" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                                        children: translate("endYear")
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 985,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        name: "coverageEndYear",
                                                        value: formData.coverageEndYear || "",
                                                        onChange: onInputChange,
                                                        min: formData.coverageStartYear || "1900",
                                                        max: new Date().getFullYear(),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white",
                                                        placeholder: "Ex: 2020"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 988,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 984,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 953,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                lineNumber: 949,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "country",
                                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                                        children: translate("country")
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 1007,
                                                        columnNumber: 19
                                                    }, this),
                                                    renderField({
                                                        name: "country",
                                                        labelKey: "country",
                                                        type: "select",
                                                        required: true,
                                                        options: [
                                                            "Afrique du Sud",
                                                            "Algérie",
                                                            "Angola",
                                                            "Bénin",
                                                            "Botswana",
                                                            "Burkina Faso",
                                                            "Burundi",
                                                            "Cameroun",
                                                            "Cap-Vert",
                                                            "Centrafrique",
                                                            "Comores",
                                                            "Congo",
                                                            "Côte d'Ivoire",
                                                            "Djibouti",
                                                            "Égypte",
                                                            "Érythrée",
                                                            "Eswatini",
                                                            "Éthiopie",
                                                            "Gabon",
                                                            "Gambie",
                                                            "Ghana",
                                                            "Guinée",
                                                            "Guinée-Bissau",
                                                            "Guinée équatoriale",
                                                            "Kenya",
                                                            "Lesotho",
                                                            "Liberia",
                                                            "Libye",
                                                            "Madagascar",
                                                            "Malawi",
                                                            "Mali",
                                                            "Maroc",
                                                            "Maurice",
                                                            "Mauritanie",
                                                            "Mozambique",
                                                            "Namibie",
                                                            "Niger",
                                                            "Nigeria",
                                                            "Ouganda",
                                                            "RDC",
                                                            "Rwanda",
                                                            "São Tomé-et-Príncipe",
                                                            "Sénégal",
                                                            "Seychelles",
                                                            "Sierra Leone",
                                                            "Somalie",
                                                            "Soudan",
                                                            "Soudan du Sud",
                                                            "Tanzanie",
                                                            "Tchad",
                                                            "Togo",
                                                            "Tunisie",
                                                            "Zambie",
                                                            "Zimbabwe",
                                                            "États-Unis",
                                                            "Canada",
                                                            "France",
                                                            "Allemagne",
                                                            "Royaume-Uni",
                                                            "Italie",
                                                            "Espagne",
                                                            "Portugal",
                                                            "Belgique",
                                                            "Suisse",
                                                            "Pays-Bas",
                                                            "Chine",
                                                            "Japon",
                                                            "Inde",
                                                            "Brésil",
                                                            "Argentine",
                                                            "Mexique",
                                                            "Australie"
                                                        ].map((c)=>({
                                                                value: c,
                                                                labelKey: c
                                                            }))
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 1006,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "language",
                                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                                        children: [
                                                            translate("language"),
                                                            " *"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 19
                                                    }, this),
                                                    renderMultiSelect("language", [
                                                        "Français",
                                                        "English",
                                                        "العربية",
                                                        "Português",
                                                        "Kiswahili",
                                                        "isiZulu",
                                                        "Yorùbá",
                                                        "Hausa",
                                                        "Igbo",
                                                        "አማርኛ",
                                                        "Oromoo",
                                                        "Somali"
                                                    ].map((l)=>({
                                                            value: l,
                                                            labelKey: l
                                                        })), translate("language"))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 1023,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 1005,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "description",
                                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                                        children: translate("description")
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 1039,
                                                        columnNumber: 19
                                                    }, this),
                                                    renderField({
                                                        name: "description",
                                                        labelKey: "description",
                                                        type: "textarea",
                                                        placeholder: "briefDescription"
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 1038,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "about",
                                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                                        children: translate("about")
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 1050,
                                                        columnNumber: 19
                                                    }, this),
                                                    renderField({
                                                        name: "about",
                                                        labelKey: "about",
                                                        type: "textarea",
                                                        placeholder: "aboutOrganization"
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 1037,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                lineNumber: 1004,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700",
                                        children: translate("coverImage")
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ...getRootProps(),
                                        className: `mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 ${isDragActive ? "border-amber-500" : "border-gray-300"} border-dashed rounded-md cursor-pointer transition-colors`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 text-center",
                                                children: [
                                                    formData.image && !selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: formData.image,
                                                        alt: "Current resource image",
                                                        width: 296,
                                                        height: 296,
                                                        className: "mx-auto object-contain rounded-md",
                                                        onError: (e)=>{
                                                            const target = e.target; // Type-cast target to HTMLImageElement
                                                            target.src = "/path/to/fallback_image.jpg"; // Set the fallback image if there's an error
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 1075,
                                                        columnNumber: 9
                                                    }, this),
                                                    selectedFile ? // Display preview of selected file
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: URL.createObjectURL(selectedFile),
                                                                alt: "Preview",
                                                                width: 96,
                                                                height: 96,
                                                                className: "mx-auto object-contain rounded-md"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                                lineNumber: 1090,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600 mt-2",
                                                                children: selectedFile.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                                lineNumber: 1097,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                        lineNumber: 1089,
                                                        columnNumber: 9
                                                    }, this) : // Fallback UI if no image selected or during initial state
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                className: "mx-auto h-12 w-12 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                                lineNumber: 1104,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex text-sm text-gray-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "pl-1",
                                                                    children: translate("dragOrClick")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                                    lineNumber: 1106,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500",
                                                                children: translate("imageSpec")
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                                lineNumber: 1108,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 1073,
                                                columnNumber: 5
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...getInputProps(),
                                                className: "sr-only"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                                lineNumber: 1114,
                                                columnNumber: 5
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 1067,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                lineNumber: 1063,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                        lineNumber: 900,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                    lineNumber: 899,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "px-8 py-4 bg-gray-50 border-t sticky bottom-0 z-10",
                    children: [
                        isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-medium text-amber-700",
                                            children: translate("uploading")
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                            lineNumber: 1125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-amber-700",
                                            children: [
                                                uploadProgress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                    lineNumber: 1124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-gray-200 rounded-full h-2.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-amber-600 h-2.5 rounded-full",
                                        style: {
                                            width: `${uploadProgress}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                        lineNumber: 1133,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                    lineNumber: 1132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 1123,
                            columnNumber: 13
                        }, this),
                        submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-4 mb-4 text-sm rounded-lg ${submitMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                            children: submitMessage.message
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 1142,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500",
                                    disabled: isSubmitting,
                                    children: translate("cancel")
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                    lineNumber: 1154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    form: "resource-form",
                                    className: "px-6 py-2 text-sm font-medium text-white bg-amber-600 border border-transparent rounded-lg shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50",
                                    disabled: isSubmitting,
                                    children: isSubmitting ? translate("submitting") : translate("submit")
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                                    lineNumber: 1162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                            lineNumber: 1153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/ResourceForm.tsx",
                    lineNumber: 1121,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/ResourceForm.tsx",
            lineNumber: 873,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/ResourceForm.tsx",
        lineNumber: 872,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_components_ResourceForm_tsx_9acab8b6._.js.map