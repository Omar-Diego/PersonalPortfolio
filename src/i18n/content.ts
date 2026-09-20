export interface Project {
  title: string;
  img: string;
  code?: string;
  link: string;
  tech: string[];
  desc: string;
  modal: string;
}

export interface Experience {
  title: string;
  role: string;
  date: string;
  location: string;
  description: string;
  tech: string[];
}

export interface Credential {
  name: string;
  issuer: string;
  date: string;
  description: string;
  /** Badge artwork; when absent the card shows a generic certificate icon. */
  img?: string;
  /** Public verification URL; when absent the card is not clickable. */
  url?: string;
}

type LocalizedText = { es: string; en: string };

interface CredentialSource extends Omit<Credential, 'description'> {
  description: LocalizedText;
}

export interface Content {
  socials: {
    linkedin: string;
    github: string;
    email: string;
    cv: string;
  };
  hero: {
    title: string;
    tagline: string;
    p1: string;
    p2: string;
    p3: string;
  };
  about: {
    p1: string;
    p2: string;
    p3: string;
  };
  stack: string[];
  projects: Project[];
  experience: Experience[];
  credlyProfile: string;
  credentials: Credential[];
}

const socials = {
  linkedin: 'https://www.linkedin.com/in/omar-diego/',
  github: 'https://github.com/Omar-Diego',
  email: 'omardiegodc@proton.me',
  cv: '/docs/omar-diego-cv.pdf',
};

const credlyProfile = 'https://www.credly.com/users/omar-sebastian-diego-cortes';

// Verified digital credentials from Credly. Each URL points to the unique,
// publicly verifiable badge page (which links to its certificate).
const credlyBadges: CredentialSource[] = [
  {
    name: 'Desarrollo Full Stack',
    issuer: 'Universidad Tecmilenio',
    date: '06/2026',
    description: {
      es: 'Desarrollo web de extremo a extremo: interfaces, APIs, lógica de servidor y bases de datos.',
      en: 'End-to-end web development: interfaces, APIs, server logic, and databases.',
    },
    img: '/badges/desarrollo-full-stack.png',
    url: 'https://www.credly.com/badges/2e127c28-a3a1-4128-90e3-9ba6d1190557/public_url',
  },
  {
    name: 'Fundamentos de DevOps',
    issuer: 'Universidad Tecmilenio',
    date: '06/2026',
    description: {
      es: 'Cultura y prácticas DevOps: integración y entrega continua, automatización y colaboración.',
      en: 'DevOps culture and practices: continuous integration and delivery, automation, and collaboration.',
    },
    img: '/badges/fundamentos-de-devops.png',
    url: 'https://www.credly.com/badges/12395d2a-6d14-4550-a53a-40abc919bb7d/public_url',
  },
  {
    name: 'Gestión de Redes',
    issuer: 'Universidad Tecmilenio',
    date: '06/2026',
    description: {
      es: 'Administración y monitoreo de redes: configuración de dispositivos, protocolos y seguridad.',
      en: 'Network administration and monitoring: device configuration, protocols, and security.',
    },
    img: '/badges/gestion-de-redes.png',
    url: 'https://www.credly.com/badges/18eed810-6356-47fe-887e-c78c9b8340f4/public_url',
  },
  {
    name: 'Certified SOLIDWORKS Design Associate',
    issuer: 'Dassault Systèmes',
    date: '05/2026',
    description: {
      es: 'Modelado paramétrico 3D y diseño de piezas y ensambles en SOLIDWORKS.',
      en: 'Parametric 3D modeling and design of parts and assemblies in SOLIDWORKS.',
    },
    img: '/badges/solidworks-design-associate.png',
    url: 'https://www.credly.com/badges/14893b45-5eb5-43a1-bd8d-6244f9972506/public_url',
  },
  {
    name: 'AWS Academy Graduate — Cloud Operations',
    issuer: 'Amazon Web Services',
    date: '04/2026',
    description: {
      es: 'Operación en la nube de AWS: monitoreo, automatización, redes y gestión de costos.',
      en: 'AWS cloud operations: monitoring, automation, networking, and cost management.',
    },
    img: '/badges/aws-cloud-operations.png',
    url: 'https://www.credly.com/badges/7eeb171e-bd00-4498-a1f6-11b7845341f7/public_url',
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco',
    date: '02/2026',
    description: {
      es: 'Fundamentos de redes: modelos OSI/TCP-IP, direccionamiento IP y dispositivos de red.',
      en: 'Networking fundamentals: OSI/TCP-IP models, IP addressing, and network devices.',
    },
    img: '/badges/networking-basics.png',
    url: 'https://www.credly.com/badges/5e770dbf-bde6-4f19-bd7e-e77bb62f0947/public_url',
  },
  {
    name: 'Web Development Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: '02/2026',
    description: {
      es: 'Fundamentos del desarrollo web: HTML, CSS y JavaScript.',
      en: 'Web development fundamentals: HTML, CSS, and JavaScript.',
    },
    img: '/badges/web-development-fundamentals.png',
    url: 'https://www.credly.com/badges/2c34bac0-373f-4fc9-acfa-bd993ce292de/public_url',
  },
  {
    name: 'Ciencia de Datos',
    issuer: 'Universidad Tecmilenio',
    date: '01/2026',
    description: {
      es: 'Flujo de trabajo de ciencia de datos: análisis exploratorio, visualización y modelos predictivos.',
      en: 'Data science workflow: exploratory analysis, visualization, and predictive models.',
    },
    img: '/badges/ciencia-de-datos.png',
    url: 'https://www.credly.com/badges/19bcd19e-90f6-4b33-9e6f-391b5525b946/public_url',
  },
  {
    name: 'Computación en la Nube',
    issuer: 'Universidad Tecmilenio',
    date: '01/2026',
    description: {
      es: 'Conceptos de cómputo en la nube: modelos de servicio, despliegue y virtualización.',
      en: 'Cloud computing concepts: service models, deployment, and virtualization.',
    },
    img: '/badges/computacion-en-la-nube.png',
    url: 'https://www.credly.com/badges/15198a84-1665-4776-b936-15616ee28458/public_url',
  },
  {
    name: 'Fundamentos de Programación',
    issuer: 'Universidad Tecmilenio',
    date: '01/2026',
    description: {
      es: 'Lógica de programación: variables, estructuras de control, funciones y algoritmos.',
      en: 'Programming logic: variables, control structures, functions, and algorithms.',
    },
    img: '/badges/fundamentos-de-programacion.png',
    url: 'https://www.credly.com/badges/89184148-c520-4112-8f51-76d1bbe4d5ff/public_url',
  },
  {
    name: 'Inglés Intermedio Alto',
    issuer: 'Universidad Tecmilenio',
    date: '01/2026',
    description: {
      es: 'Competencia en inglés nivel B2: comprensión y comunicación en contextos profesionales.',
      en: 'B2-level English proficiency: comprehension and communication in professional contexts.',
    },
    img: '/badges/ingles-intermedio-alto.png',
    url: 'https://www.credly.com/badges/fe9c6ef0-01ec-415f-82b6-19e526e04d95/public_url',
  },
  {
    name: 'Probabilidad y Estadística para la Ciencia de Datos',
    issuer: 'Universidad Tecmilenio',
    date: '01/2026',
    description: {
      es: 'Estadística aplicada: probabilidad, distribuciones e inferencia para el análisis de datos.',
      en: 'Applied statistics: probability, distributions, and inference for data analysis.',
    },
    img: '/badges/probabilidad-y-estadistica.png',
    url: 'https://www.credly.com/badges/6d4f70d0-a4cb-4fcc-954c-64b2a4e55145/public_url',
  },
  {
    name: 'Programación Orientada a Objetos',
    issuer: 'Universidad Tecmilenio',
    date: '01/2026',
    description: {
      es: 'Diseño con POO: clases, herencia, polimorfismo y encapsulamiento.',
      en: 'OOP design: classes, inheritance, polymorphism, and encapsulation.',
    },
    img: '/badges/programacion-orientada-a-objetos.png',
    url: 'https://www.credly.com/badges/abb46e74-11c4-40b7-85b6-6a58f06d5d31/public_url',
  },
  {
    name: 'Sistemas Operativos',
    issuer: 'Universidad Tecmilenio',
    date: '01/2026',
    description: {
      es: 'Fundamentos de sistemas operativos: procesos, memoria, sistemas de archivos y concurrencia.',
      en: 'Operating system fundamentals: processes, memory, file systems, and concurrency.',
    },
    img: '/badges/sistemas-operativos.png',
    url: 'https://www.credly.com/badges/4247d1bb-994c-4893-830a-7c1cad2f8e53/public_url',
  },
  {
    name: 'Metodologías Ágiles',
    issuer: 'Universidad Tecmilenio',
    date: '12/2025',
    description: {
      es: 'Marcos ágiles: Scrum, Kanban y gestión iterativa de proyectos.',
      en: 'Agile frameworks: Scrum, Kanban, and iterative project management.',
    },
    img: '/badges/metodologias-agiles.png',
    url: 'https://www.credly.com/badges/07e54783-ed24-4d3b-8278-dc456a4c3aa0/public_url',
  },
  {
    name: 'Bases de Datos',
    issuer: 'Universidad Tecmilenio',
    date: '10/2025',
    description: {
      es: 'Diseño y consulta de bases de datos relacionales con SQL y modelado entidad-relación.',
      en: 'Relational database design and querying with SQL and entity-relationship modeling.',
    },
    img: '/badges/bases-de-datos.png',
    url: 'https://www.credly.com/badges/a1a4a289-f67e-4fa5-9ec4-48dba4ef9d91/public_url',
  },
  {
    name: 'Estructura de Datos',
    issuer: 'Universidad Tecmilenio',
    date: '10/2025',
    description: {
      es: 'Estructuras de datos y algoritmos: listas, árboles, grafos y análisis de complejidad.',
      en: 'Data structures and algorithms: lists, trees, graphs, and complexity analysis.',
    },
    img: '/badges/estructura-de-datos.png',
    url: 'https://www.credly.com/badges/a696b963-ebb3-419f-9846-fdcb5085053d/public_url',
  },
  {
    name: 'Introduction to Data Science',
    issuer: 'Cisco',
    date: '04/2025',
    description: {
      es: 'Introducción a los conceptos y el flujo de trabajo de la ciencia de datos.',
      en: 'Introduction to data science concepts and workflow.',
    },
    img: '/badges/introduction-to-data-science.png',
    url: 'https://www.credly.com/badges/ff89e372-0e01-4ce9-9914-edddf820b7a3/public_url',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco',
    date: '09/2024',
    description: {
      es: 'Fundamentos de Python: sintaxis, tipos de datos, estructuras de control y funciones.',
      en: 'Python fundamentals: syntax, data types, control structures, and functions.',
    },
    img: '/badges/python-essentials-1.png',
    url: 'https://www.credly.com/badges/4c485639-c006-443a-bbeb-a593bbedfcfc/public_url',
  },
  {
    name: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: '09/2024',
    description: {
      es: 'Conceptos fundamentales de la nube de AWS: cómputo, almacenamiento, redes y precios.',
      en: 'Core AWS cloud concepts: compute, storage, networking, and pricing.',
    },
    img: '/badges/aws-cloud-foundations.png',
    url: 'https://www.credly.com/badges/b5c314dc-cbc7-4365-b346-ad296dab574f/public_url',
  },
];

// Certifications without a Credly badge. No public verification URL on file, so
// their cards render with a generic certificate icon and are not clickable.
const otherCertifications: CredentialSource[] = [
  {
    name: 'Java Fundamentals',
    issuer: 'Oracle Academy',
    date: '03/2025',
    description: {
      es: 'Fundamentos de Java y programación orientada a objetos.',
      en: 'Java fundamentals and object-oriented programming.',
    },
  },
  {
    name: 'Red Hat System Administration I (RH124)',
    issuer: 'Red Hat',
    date: '03/2025',
    description: {
      es: 'Administración de sistemas Linux: línea de comandos, usuarios, procesos y servicios.',
      en: 'Linux system administration: command line, users, processes, and services.',
    },
  },
  {
    name: 'IT Security Foundations: Operating System Security',
    issuer: 'LinkedIn Learning',
    date: '02/2025',
    description: {
      es: 'Fundamentos de seguridad en sistemas operativos: control de acceso, permisos y hardening.',
      en: 'Operating system security fundamentals: access control, permissions, and hardening.',
    },
  },
];

// MM/YYYY -> sortable integer (YYYYMM), newest first.
const byDateDesc = (a: Credential, b: Credential) => {
  const key = (d: string) => {
    const [m, y] = d.split('/');
    return Number(y) * 100 + Number(m);
  };
  return key(b.date) - key(a.date);
};

const buildCredentials = (lang: 'es' | 'en'): Credential[] =>
  [...credlyBadges, ...otherCertifications]
    .map(({ description, ...rest }) => ({ ...rest, description: description[lang] }))
    .sort(byDateDesc);

export const content: Record<'es' | 'en', Content> = {
  es: {
    socials,
    hero: {
      title: "Hola, soy Omar",
      tagline: 'Desarrollador de Software',
      p1: 'Estudiante de Ingeniería en Desarrollo de Software, apasionado por el desarrollo web, móvil y la infraestructura.',
      p2: 'Construyo con React, Next.js y Astro en la web, Kotlin y React Native en móvil, y tengo experiencia en administración de servidores, seguridad de correo y despliegues CI/CD.',
      p3: '¿Buscas a alguien con ganas de aprender rápido y aportar en tu equipo? Hablemos.',
    },
    about: {
      p1: 'Ingeniero de software en formación, con experiencia práctica en desarrollo web y móvil, así como en administración de servidores, seguridad de correo y despliegue de aplicaciones. Como IT Trainee en Latin Link Blockchain, administré servidores VPS y cPanel, gestioné dominios y certificados SSL/TLS, y coordiné despliegues continuos (CI/CD) en Vercel.',
      p2: 'Supervisé flujos de trabajo en GitHub, integré y monitoreé servicios Web3 y APIs como OpenOcean, Reown, CoinMarketCap, Zerion y Upstash, y optimicé la operación de nodos en las redes blockchain Songbird y Flare. También analicé tráfico web y KPIs de conversión con Google Analytics 4 y PostHog.',
      p3: 'Mi stack incluye React, Next.js, Astro, Kotlin y React Native, respaldado por certificaciones en Python, AWS, Java y Red Hat. Curso actualmente Ingeniería en Desarrollo de Software en la Universidad Tecmilenio, donde presido el grupo estudiantil de IDS.',
    },
    stack: [
      'React',
      'Next.js',
      'Astro',
      'Kotlin',
      'React Native',
      'HTML',
      'CSS',
      'JavaScript',
      'Administración VPS',
      'Configuración cPanel',
      'AWS (EC2, S3, IAM)',
      'Python',
      'Java (POO)',
      'Linux (Red Hat / terminal)',
      'Windows',
      'Fundamentos de Networking (Cisco)',
      'Inglés (B2)',
      'Aprendizaje rápido',
      'Liderazgo y trabajo en equipo',
      'Organización y responsabilidad',
    ],
    projects: [
      {
        title: 'Racing Cards',
        img: '/gallery/racing-cards.webp',
        link: 'https://racingcards.osdc.cloud/',
        tech: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Room'],
        desc: 'App Android nativa de cartas coleccionables de coches de carreras, con creación de cartas estilo "gacha", ficha técnica y niveles de rareza. Repositorio privado; el enlace lleva a la documentación oficial.',
        modal:
          'Racing Cards es una app Android 100% Jetpack Compose (sin XML ni Fragments) construida alrededor de una colección de cartas coleccionables de coches de carreras. Al crear una carta, sus estadísticas se revelan con una animación tipo "slot machine" y quedan clasificadas por nivel de rareza (S–D). Cuenta con tres pantallas —Gallery, Details y Edit— navegables desde una barra inferior, persistencia local con Room, y un sistema de diseño "dark-native" propio basado en Material 3. Repositorio privado; el enlace lleva a la documentación técnica oficial del proyecto.',
      },
      {
        title: '¿Dios existe?',
        img: '/gallery/blog-religioso.webp',
        link: 'https://isajuablog.osdc.cloud/',
        tech: ['Astro', 'React', 'TypeScript', 'Keystatic CMS', 'Supabase', 'Tailwind CSS', 'Vercel'],
        desc: 'Blog personal que explora, a través de experiencia personal, entrevistas, reseñas y ensayos, si Dios existe o es una defensa que construimos frente a lo incierto.',
        modal:
          'Blog editorial construido con Astro y TypeScript, con contenido (introducción, desarrollo y conclusión) gestionado vía Keystatic CMS y comentarios de lectores almacenados en Supabase/PostgreSQL. Incluye secciones de artículos, entrevistas y reseñas de libros, música y cine organizadas en torno a la pregunta central del proyecto, con animaciones en React/Framer Motion y despliegue en Vercel. Repositorio privado; el enlace lleva al sitio en producción.',
      },
      {
        title: 'Finanzas 3000',
        img: '/gallery/finanzas-3000.webp',
        code: 'https://github.com/Omar-Diego/ProyectoGastos',
        link: 'https://finanzaspersonales.osdc.cloud/',
        tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'Navigation Compose', 'Coroutines'],
        desc: 'App Android para registrar un gasto en segundos y ver de un vistazo cuánto se ha gastado en el mes, con gráficas de ingresos vs. gastos y desglose por categoría. Proyecto en equipo (5 personas) para la materia de Aplicaciones Móviles.',
        modal:
          'Finanzas 3000 es una app de finanzas personales construida con Kotlin, Jetpack Compose y arquitectura MVVM sobre una base de datos Room. La pantalla de Resumen muestra el balance del mes, su variación contra el mes anterior, una gráfica de barras de ingresos vs. gastos de los últimos 6 meses y una gráfica de dona por categoría. El Registro usa un teclado numérico propio y un flujo de dos pasos (monto → categoría) para capturar movimientos en segundos, y el Historial permite filtrar y agrupar por mes. Proyecto colaborativo de 5 personas (desarrollo y diseño) para la materia de Aplicaciones Móviles; el enlace lleva a la documentación oficial del proyecto.',
      },
      {
        title: 'Latin Link',
        img: '/gallery/latinlink.webp',
        link: 'https://latin-link.net',
        tech: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS', 'next-intl', 'Supabase', 'Vercel'],
        desc: 'Plataforma Web3 de Latin Link, el primer FTSO y DEX de Latinoamérica en Flare Network. Proyecto privado de la empresa: prácticamente todo el desarrollo del sitio fue mío.',
        modal:
          'Latin Link es una plataforma DeFi construida con Next.js 16 y TypeScript que ofrece un agregador de swaps no-custodial (vía OpenOcean), un dashboard de delegación de tokens FLR/SGB con estadísticas en tiempo real, y contenido educativo sobre el ecosistema Flare, disponible en español, inglés y portugués con next-intl. Es el repositorio privado de la empresa donde trabajo como IT Trainee, y desarrollé prácticamente la totalidad del frontend y las rutas de API que consumen los datos de FTSO, precios y delegación.',
      },
      {
        title: 'Colegio Guadiana',
        img: '/gallery/colegio-guadiana.webp',
        link: 'https://colegio-guadiana-next-js.vercel.app',
        tech: ['Next.js', 'TypeScript', 'Payload CMS', 'PostgreSQL', 'Supabase', 'Cloudinary', 'Tailwind CSS'],
        desc: 'Sitio web institucional para un colegio, con panel de administración de contenido vía Payload CMS. Proyecto privado para un cliente.',
        modal:
          'Sitio institucional construido con Next.js y TypeScript, con Payload CMS como backend de administración de contenido sobre PostgreSQL (Supabase). El equipo del colegio puede editar niveles educativos, calendario (FullCalendar) y avisos sin tocar código, con imágenes gestionadas vía Cloudinary y notificaciones por correo con Resend. Repositorio privado por tratarse de un proyecto para un cliente; el sitio en producción está disponible en la URL de la demo.',
      },
      {
        title: 'A La Reja',
        img: '/gallery/a-la-reja.webp',
        code: 'https://github.com/Omar-Diego/a-la-reja',
        link: 'https://a-la-reja.vercel.app/',
        tech: ['Next.js', 'React', 'TypeScript', 'Express', 'MySQL', 'NextAuth.js', 'Tailwind CSS', 'Docker'],
        desc: 'Aplicación web full-stack para reservar canchas de pádel, con autenticación de usuarios, gestión de reservaciones y un panel de administración con visibilidad global.',
        modal:
          'A La Reja es un sistema de reservación de canchas de pádel construido con una arquitectura de tres capas: frontend en Next.js/React, API REST en Express y base de datos MySQL. Los usuarios pueden explorar canchas disponibles, reservar y cancelar horarios, mientras que los administradores cuentan con una interfaz separada para gestionar reservaciones, usuarios y canchas. Incluye autenticación con NextAuth.js, notificaciones por correo y despliegue containerizado con Docker.',
      },
      {
        title: 'Santander Fiesta Awards',
        img: '/gallery/santander-fiesta-awards.webp',
        code: 'https://github.com/Omar-Diego/SantanderFiestaAwards',
        link: 'https://github.com/Omar-Diego/SantanderFiestaAwards',
        tech: ['Expo', 'React Native', 'TypeScript', 'Firebase Firestore'],
        desc: 'App Android para llevar el control de gastos compartidos de una tarjeta Santander Fiesta Awards entre 2 personas, con sincronización en tiempo real y sin necesidad de cuentas.',
        modal:
          'Aplicación móvil construida con Expo y React Native para que dos personas lleven juntas el control de los gastos de una tarjeta de crédito compartida. No requiere login: basta un código de grupo de 16 caracteres compartido por WhatsApp para vincular ambos dispositivos, que se sincronizan en tiempo real vía Firebase Firestore. Incluye dashboard con balance y disponible por período, registro y edición de gastos, presupuesto mensual con fecha de corte, y una interfaz dark mode estilo banca.',
      },
    ],
    experience: [
      {
        title: 'Tech Lead (Proyecto por contrato)',
        role: 'Latin Link Blockchain',
        date: '07/09/2026 – 12/09/2026',
        location: 'Querétaro — Remoto',
        description:
          'Lideré, bajo un contrato por proyecto, a un equipo de desarrollo encargado de implementar una nueva funcionalidad de pagos dentro de la infraestructura blockchain de la empresa, adaptándola a los sistemas ya existentes. Fui responsable de la investigación y lectura de documentación técnica para la integración de APIs, de la planeación del trabajo del equipo y de garantizar la entrega del proyecto en tiempo y forma. Al concluir el alcance definido, finalizó la relación contractual con la empresa.',
        tech: ['Blockchain', 'Liderazgo técnico', 'Integración de APIs', 'Gestión de equipos'],
      },
      {
        title: 'IT Trainee',
        role: 'Latin Link Blockchain',
        date: 'Desde 07/2025',
        location: 'Querétaro — Remoto',
        description:
          'Orquesté la administración de servidores VPS y cPanel, incluyendo la gestión integral de respaldos y la administración de dominios (DonDominio, DonWeb). Implementé protocolos de seguridad de correo (SPF, DKIM, DMARC), monitoreé la reputación de IP (RBLs) y gestioné certificados SSL/TLS. Supervisé flujos de trabajo en GitHub (Pull Requests, merges) y coordiné despliegues continuos (CI/CD) en Vercel. Integré y monitoreé el consumo de servicios Web3 y APIs como OpenOcean, Reown, CoinMarketCap, Zerion y Upstash. Analicé el tráfico web, creé filtros personalizados y realicé el seguimiento de KPIs de conversión utilizando Google Analytics 4 (GA4) y PostHog. Monitoreé y optimicé la operación de nodos en las redes blockchain Songbird y Flare. Elaboré informes técnicos detallados y resolví incidencias críticas en sistemas y servicios.',
        tech: ['VPS', 'cPanel', 'SPF/DKIM/DMARC', 'SSL/TLS', 'GitHub', 'CI/CD', 'Vercel', 'Web3', 'GA4', 'PostHog'],
      },
      {
        title: 'Ayudante de Carpintería y Montaje de Muebles',
        role: 'Miguel Diego, Organizador de Espacios',
        date: '2022 – 2024',
        location: 'Querétaro, México',
        description: 'Desarrollé hojas de despiece y generé renderizados de modelos 3D para presentaciones a clientes.',
        tech: ['Modelado 3D', 'Renderizado', 'Hojas de despiece'],
      },
    ],
    credlyProfile,
    credentials: buildCredentials('es'),
  },
  en: {
    socials,
    hero: {
      title: "Hi, I'm Omar",
      tagline: 'Software Developer',
      p1: 'Software Development Engineering student, passionate about web development, mobile, and infrastructure.',
      p2: 'I build with React, Next.js, and Astro on the web, Kotlin and React Native on mobile, and have hands-on experience in server administration, email security, and CI/CD deployments.',
      p3: "Looking for someone eager to learn fast and contribute to your team? Let's talk.",
    },
    about: {
      p1: 'Software engineer in training, with hands-on experience in web and mobile development, as well as server administration, email security, and application deployment. As an IT Trainee at Latin Link Blockchain, I managed VPS and cPanel servers, handled domains and SSL/TLS certificates, and coordinated continuous deployments (CI/CD) on Vercel.',
      p2: 'I oversaw GitHub workflows, integrated and monitored Web3 services and APIs such as OpenOcean, Reown, CoinMarketCap, Zerion, and Upstash, and optimized node operation on the Songbird and Flare blockchain networks. I also analyzed web traffic and conversion KPIs with Google Analytics 4 and PostHog.',
      p3: "My stack includes React, Next.js, Astro, Kotlin, and React Native, backed by certifications in Python, AWS, Java, and Red Hat. I'm currently pursuing a degree in Software Development Engineering at Universidad Tecmilenio, where I chair the student IDS group.",
    },
    stack: [
      'React',
      'Next.js',
      'Astro',
      'Kotlin',
      'React Native',
      'HTML',
      'CSS',
      'JavaScript',
      'VPS Administration',
      'cPanel Configuration',
      'AWS (EC2, S3, IAM)',
      'Python',
      'Java (OOP)',
      'Linux (Red Hat / terminal)',
      'Windows',
      'Networking Fundamentals (Cisco)',
      'English (B2)',
      'Fast learner',
      'Leadership & teamwork',
      'Organization & responsibility',
    ],
    projects: [
      {
        title: 'Racing Cards',
        img: '/gallery/racing-cards.webp',
        link: 'https://racingcards.osdc.cloud/',
        tech: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Room'],
        desc: 'Native Android app for collecting racing-car trading cards, with "gacha"-style card creation, a technical spec sheet, and rarity tiers. Private repository; the link goes to the official documentation.',
        modal:
          'Racing Cards is a 100% Jetpack Compose Android app (no XML, no Fragments) built around a collection of racing-car trading cards. Creating a card reveals its stats through a "slot machine" style animation and classifies it into a rarity tier (S–D). It has three screens — Gallery, Details, and Edit — navigated from a bottom bar, local persistence with Room, and a custom "dark-native" design system built on Material 3. Private repository; the link goes to the project\'s official technical documentation.',
      },
      {
        title: '¿Dios existe?',
        img: '/gallery/blog-religioso.webp',
        link: 'https://isajuablog.osdc.cloud/',
        tech: ['Astro', 'React', 'TypeScript', 'Keystatic CMS', 'Supabase', 'Tailwind CSS', 'Vercel'],
        desc: "Personal blog exploring, through personal experience, interviews, reviews, and essays, whether God exists or is a defense we build against uncertainty.",
        modal:
          "Editorial blog built with Astro and TypeScript, with its content (introduction, development, and conclusion) managed via Keystatic CMS and reader comments stored in Supabase/PostgreSQL. It includes articles, interviews, and book, music, and film reviews organized around the project's central question, with React/Framer Motion animations and deployment on Vercel. Private repository; the link goes to the live site.",
      },
      {
        title: 'Finanzas 3000',
        img: '/gallery/finanzas-3000.webp',
        code: 'https://github.com/Omar-Diego/ProyectoGastos',
        link: 'https://finanzaspersonales.osdc.cloud/',
        tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'Navigation Compose', 'Coroutines'],
        desc: 'Android app for logging an expense in seconds and seeing at a glance how much you\'ve spent this month, with income-vs-expense charts and a per-category breakdown. Built as a 5-person team project for a Mobile Applications course.',
        modal:
          "Finanzas 3000 is a personal finance app built with Kotlin, Jetpack Compose, and MVVM architecture on top of a Room database. The Summary screen shows the month's balance, its change versus the prior month, a 6-month income-vs-expense bar chart, and a per-category donut chart. Registration uses a custom numeric keypad and a two-step flow (amount → category) to log movements in seconds, and History supports filtering and grouping by month. A 5-person team project (development and design) for a Mobile Applications course; the link goes to the project's official documentation.",
      },
      {
        title: 'Latin Link',
        img: '/gallery/latinlink.webp',
        link: 'https://latin-link.net',
        tech: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS', 'next-intl', 'Supabase', 'Vercel'],
        desc: "Web3 platform for Latin Link, Latin America's first FTSO and DEX on the Flare Network. Private company project: I built practically the entire site myself.",
        modal:
          "Latin Link is a DeFi platform built with Next.js 16 and TypeScript, featuring a non-custodial swap aggregator (via OpenOcean), a FLR/SGB token delegation dashboard with real-time stats, and educational content on the Flare ecosystem, available in Spanish, English, and Portuguese via next-intl. It's the private repository of the company where I work as an IT Trainee, and I developed practically the entire frontend and the API routes that consume FTSO, price, and delegation data.",
      },
      {
        title: 'Colegio Guadiana',
        img: '/gallery/colegio-guadiana.webp',
        link: 'https://colegio-guadiana-next-js.vercel.app',
        tech: ['Next.js', 'TypeScript', 'Payload CMS', 'PostgreSQL', 'Supabase', 'Cloudinary', 'Tailwind CSS'],
        desc: 'Institutional website for a school, with a content admin panel via Payload CMS. Private project built for a client.',
        modal:
          "Institutional site built with Next.js and TypeScript, with Payload CMS as the content-management backend on top of PostgreSQL (Supabase). The school's staff can edit education levels, the calendar (FullCalendar), and announcements without touching code, with images managed via Cloudinary and email notifications through Resend. The repository is private since it's a client project; the live site is available at the demo URL.",
      },
      {
        title: 'A La Reja',
        img: '/gallery/a-la-reja.webp',
        code: 'https://github.com/Omar-Diego/a-la-reja',
        link: 'https://a-la-reja.vercel.app/',
        tech: ['Next.js', 'React', 'TypeScript', 'Express', 'MySQL', 'NextAuth.js', 'Tailwind CSS', 'Docker'],
        desc: 'Full-stack web app for booking padel courts, with user authentication, reservation management, and an admin panel with global visibility.',
        modal:
          'A La Reja is a padel court reservation system built with a three-layer architecture: a Next.js/React frontend, an Express REST API, and a MySQL database. Users can browse available courts, book and cancel time slots, while admins get a separate interface to manage reservations, users, and courts. It includes NextAuth.js authentication, email notifications, and containerized deployment with Docker.',
      },
      {
        title: 'Santander Fiesta Awards',
        img: '/gallery/santander-fiesta-awards.webp',
        code: 'https://github.com/Omar-Diego/SantanderFiestaAwards',
        link: 'https://github.com/Omar-Diego/SantanderFiestaAwards',
        tech: ['Expo', 'React Native', 'TypeScript', 'Firebase Firestore'],
        desc: 'Android app for tracking shared expenses on a Santander Fiesta Awards card between 2 people, with real-time sync and no accounts required.',
        modal:
          "Mobile app built with Expo and React Native so two people can jointly track spending on a shared credit card. No login required: a shared 16-character group code sent over WhatsApp links both devices, which sync in real time via Firebase Firestore. It includes a dashboard with balance and available spend per period, expense logging and editing, a monthly budget with cutoff date, and a dark, banking-style UI.",
      },
    ],
    experience: [
      {
        title: 'Tech Lead (Contract Project)',
        role: 'Latin Link Blockchain',
        date: '09/07/2026 – 09/12/2026',
        location: 'Querétaro — Remote',
        description:
          'Led, under a project-based contract, a development team tasked with implementing a new payments feature within the company\'s blockchain infrastructure, adapting it to the existing systems. I was responsible for researching and reading technical documentation for API integration, planning the team\'s work, and ensuring the project was delivered on time and to spec. Once the defined scope was completed, the contractual relationship with the company concluded.',
        tech: ['Blockchain', 'Technical Leadership', 'API Integration', 'Team Management'],
      },
      {
        title: 'IT Trainee',
        role: 'Latin Link Blockchain',
        date: 'Since 07/2025',
        location: 'Querétaro — Remote',
        description:
          'Orchestrated the administration of VPS and cPanel servers, including comprehensive backup management and domain administration (DonDominio, DonWeb). Implemented email security protocols (SPF, DKIM, DMARC), monitored IP reputation (RBLs), and managed SSL/TLS certificates. Oversaw GitHub workflows (Pull Requests, merges) and coordinated continuous deployments (CI/CD) on Vercel. Integrated and monitored the consumption of Web3 services and APIs such as OpenOcean, Reown, CoinMarketCap, Zerion, and Upstash. Analyzed web traffic, built custom filters, and tracked conversion KPIs using Google Analytics 4 (GA4) and PostHog. Monitored and optimized node operation on the Songbird and Flare blockchain networks. Produced detailed technical reports and resolved critical system and service incidents.',
        tech: ['VPS', 'cPanel', 'SPF/DKIM/DMARC', 'SSL/TLS', 'GitHub', 'CI/CD', 'Vercel', 'Web3', 'GA4', 'PostHog'],
      },
      {
        title: 'Carpentry & Furniture Assembly Assistant',
        role: 'Miguel Diego, Organizador de Espacios',
        date: '2022 – 2024',
        location: 'Querétaro, Mexico',
        description: 'Developed cut lists and produced 3D model renderings for client presentations.',
        tech: ['3D Modeling', 'Rendering', 'Cut Lists'],
      },
    ],
    credlyProfile,
    credentials: buildCredentials('en'),
  },
};
