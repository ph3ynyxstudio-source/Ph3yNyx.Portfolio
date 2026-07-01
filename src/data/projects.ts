export interface ProjectGalleryItem {
  src: string;
  title: string;
  description: string;
}

export interface ProjectContent {
  id: string;
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  summary: string[];
  description: string;
  stack: string[];
  status: string;
  proof: string;
  group: "main" | "prototype";
  href: string;
  about: {
    objective: string;
    value: string;
    proof: string;
  };
  evolution: string[];
  gallery: ProjectGalleryItem[];
  learned: string[];
  next: string[];
}

export const projects: ProjectContent[] = [
  {
    id: "01",
    slug: "chronosv3rs",
    title: "Chr0nosV3rs",
    icon: "CH",
    tagline: "Suivi local de sessions et progression de projet.",
    summary: [
      "Outil local conçu pour documenter le travail réel d’un projet : sessions, blocages, apprentissages, synthèses et prochaines étapes.",
      "Il sert de repère quotidien pour garder le contexte, mesurer la progression et éviter de repartir de zéro.",
    ],
    description:
      "Outil local de suivi de sessions pour documenter la progression, les blocages, les apprentissages, les synthèses et les prochaines étapes d’un projet.",
    stack: [
      "React",
      "TypeScript",
      "CSS",
      "Vite",
      "Tauri v2",
      "Rust",
      "Python",
      "Markdown",
      "JSON",
    ],
    status: "Utilisable · évolution par besoins",
    proof:
      "Documentation des sessions, blocages, apprentissages, synthèses et prochaines étapes.",
    group: "main",
    href: "/projets/chronosv3rs/",
    about: {
      objective:
        "Créer un outil simple pour suivre l’avancement réel d’un projet sans dépendre d’un système lourd ou dispersé.",
      value:
        "Chr0nosV3rs aide à retrouver rapidement le contexte, à comparer les journées de travail et à garder une continuité concrète.",
      proof:
        "Ce projet montre ma capacité à structurer l’information, concevoir une logique d’usage quotidienne et transformer un besoin personnel en outil exploitable.",
    },
    evolution: [
      "Validation du concept",
      "Premier MVP",
      "Usage quotidien",
      "Évolution par besoins",
    ],
    gallery: [
      {
        src: "images/projects/chronosv3rs/03-dashboard.webp",
        title: "Dashboard",
        description:
          "Vue principale pour retrouver rapidement l’état du projet et les éléments importants.",
      },
      {
        src: "images/projects/chronosv3rs/01-weekly-view.webp",
        title: "Vue hebdomadaire",
        description:
          "Lecture synthétique des sessions pour observer la progression sur plusieurs journées.",
      },
      {
        src: "images/projects/chronosv3rs/02-session-comparison.webp",
        title: "Comparaison de sessions",
        description:
          "Comparer deux journées afin d’observer les apprentissages, les blocages et les écarts.",
      },
    ],
    learned: [
      "Découper un besoin personnel en vues concrètes.",
      "Documenter les sessions de travail pour garder un contexte utile.",
      "Améliorer une interface par itérations à partir d’un usage réel.",
    ],
    next: [
      "Affiner les vues de synthèse.",
      "Rendre la comparaison de sessions plus lisible.",
      "Consolider le flux de navigation quotidien.",
    ],
  },
  {
    id: "02",
    slug: "vesper",
    title: "VespΣr",
    icon: "VE",
    tagline: "Cockpit local pour naviguer entre projets, contexte et ressources.",
    summary: [
      "VespΣr rassemble les points d’entrée utiles d’un projet : documents, sessions, contexte de travail et repères rapides.",
      "L’objectif est de réduire la friction entre les idées, les outils et l’exécution quotidienne.",
    ],
    description:
      "Cockpit local de projets pour naviguer entre documents, sessions, contexte et outils de travail.",
    stack: ["Tauri", "React", "TypeScript", "Rust"],
    status: "Utilisable · en évolution",
    proof:
      "Organisation contextuelle des projets et accès rapide aux informations utiles.",
    group: "main",
    href: "/projets/vesper/",
    about: {
      objective:
        "Créer un point central pour accéder rapidement aux ressources utiles d’un projet sans perdre le contexte.",
      value:
        "VespΣr aide à mieux naviguer entre documents, outils et informations de travail dans un même cadre local.",
      proof:
        "Ce projet montre ma capacité à organiser un environnement numérique cohérent, orienté usage et continuité.",
    },
    evolution: [
      "Validation du concept",
      "Premier cockpit local",
      "Réorganisation de l’interface",
      "Évolution par besoins",
    ],
    gallery: [
      {
        src: "images/projects/vesper/01-dashboard.webp",
        title: "Dashboard",
        description:
          "Vue centrale pour naviguer entre projets, repères contextuels et accès rapides.",
      },
    ],
    learned: [
      "Concevoir une interface qui sert d’espace de travail plutôt que simple vitrine.",
      "Réduire la friction entre navigation, contexte et action.",
      "Clarifier un projet complexe en modules plus lisibles.",
    ],
    next: [
      "Renforcer la hiérarchie de navigation.",
      "Ajouter des raccourcis plus contextuels.",
      "Faire évoluer le cockpit selon les usages réels.",
    ],
  },
  {
    id: "03",
    slug: "lunarmood",
    title: "Lun△rMood",
    icon: "LU",
    tagline: "Observation personnelle des émotions, de l’énergie et des cycles.",
    summary: [
      "Lun△rMood est un projet centré sur l’observation personnelle, avec une logique locale, intime et progressive.",
      "Il a d’abord été développé en React, puis reconstruit en Flutter/Dart pour mieux soutenir son évolution.",
    ],
    description:
      "Application en développement pour l’observation personnelle des émotions, de l’énergie et des cycles, pensée avec une approche local-first.",
    stack: ["React", "Vite", "TypeScript", "Flutter", "Dart"],
    status: "Utilisable · en reconstruction évolutive",
    proof:
      "Structuration d’un MVP local-first centré sur l’observation, les données personnelles et l’usage humain.",
    group: "main",
    href: "/projets/lunarmood/",
    about: {
      objective:
        "Construire un outil d’observation personnelle simple, respectueux des données locales et utilisable au quotidien.",
      value:
        "Lun△rMood aide à suivre les émotions, l’énergie et les cycles personnels avec une approche lisible et progressive.",
      proof:
        "Ce projet montre ma capacité à concevoir un MVP, à documenter sa reconstruction et à revoir une architecture quand elle atteint ses limites.",
    },
    evolution: [
      "Validation du concept",
      "Premier MVP React",
      "Reconstruction Flutter",
      "Évolution par besoins",
    ],
    gallery: [
      {
        src: "images/projects/lunarmood/01-react-dashboard.webp",
        title: "Dashboard React",
        description:
          "Première vue principale du MVP pour observer rapidement l’état général.",
      },
      {
        src: "images/projects/lunarmood/02-react-calendar.webp",
        title: "Calendrier React",
        description:
          "Vue pensée pour suivre les variations et relire les cycles sur plusieurs journées.",
      },
      {
        src: "images/projects/lunarmood/03-flutter-dashboard.webp",
        title: "Dashboard Flutter",
        description:
          "Nouvelle base en reconstruction pour une évolution plus durable de l’application.",
      },
    ],
    learned: [
      "Découper un MVP centré sur un usage intime et quotidien.",
      "Documenter les décisions importantes pendant une reconstruction.",
      "Repenser l’architecture lorsqu’elle limite l’évolution du projet.",
    ],
    next: [
      "Synchronisation optionnelle.",
      "Statistiques Flutter.",
      "Moteur d’analyse progressif.",
    ],
  },
  {
    id: "04",
    slug: "astr4l",
    title: "Astr4l",
    icon: "AS",
    tagline: "Laboratoire visuel pour interfaces, assets et expérimentations graphiques.",
    summary: [
      "Astr4l est un terrain d’essai personnel pour explorer la création d’interfaces, de formes et d’assets visuels.",
      "Le projet sert surtout à expérimenter rapidement des idées sans alourdir les autres outils.",
    ],
    description:
      "Outil personnel de création visuelle et d’interfaces, utilisé pour expérimenter la création d’assets, de formes et de concepts graphiques.",
    stack: ["React", "Vite", "Canvas", "SVG"],
    status: "Prototype utilisable",
    proof:
      "Prototype personnel orienté expérimentation graphique, création d’assets et essais d’interfaces.",
    group: "prototype",
    href: "/projets/astr4l/",
    about: {
      objective:
        "Garder un espace dédié à l’exploration visuelle, sans mélanger ces essais avec les outils principaux.",
      value:
        "Astr4l aide à tester vite des idées graphiques, des compositions d’interface et des éléments visuels réutilisables.",
      proof:
        "Ce projet montre ma capacité à explorer visuellement, à prototyper des idées et à faire émerger des directions concrètes.",
    },
    evolution: [
      "Exploration visuelle",
      "Premier studio utilisable",
      "Essais d’interface",
      "Évolution par besoins",
    ],
    gallery: [
      {
        src: "images/projects/astr4l/01-studio.webp",
        title: "Studio",
        description:
          "Espace principal d’expérimentation pour tester des idées d’interface et de composition.",
      },
      {
        src: "images/projects/astr4l/02-pocket-draft.webp",
        title: "Pocket draft",
        description:
          "Prototype de travail plus compact pour esquisser rapidement des pistes visuelles.",
      },
    ],
    learned: [
      "Explorer rapidement plusieurs pistes visuelles.",
      "Transformer une intuition graphique en prototype visible.",
      "Isoler un espace de test pour préserver la clarté des autres projets.",
    ],
    next: [
      "Stabiliser les outils les plus utiles.",
      "Mieux réutiliser certains assets dans d’autres projets.",
      "Clarifier les expérimentations qui méritent une suite.",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
