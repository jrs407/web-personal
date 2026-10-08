const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

const languageToggle = document.getElementById("languageToggle");
const FLAGS = { es: "🇬🇧", en: "🇪🇸" };
const LANG_LABELS = { es: "Switch to English", en: "Cambiar a español" };

const TRANSLATIONS = {
  es: {
    "index.title": "José Carlos Ruiz Sánchez · Desarrollador Full-stack",
    "skip": "Saltar al contenido",
    "themeToggle": "Cambiar tema",
    "navToggle": "Abrir menú",
    "zoom.open": "Ampliar imagen",
    "zoom.close": "Cerrar imagen ampliada",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia laboral",
    "nav.skills": "Habilidades",
    "nav.education": "Formación Académica",
    "nav.contact": "Contacto",
    "hero.role": "Desarrollador Full-stack",
    "hero.imageAlt": "Imagen de presentación",
    "hero.introTitle": "Sobre mí",
    "hero.introText":
      "Desarrollador full-stack. En prácticas construí en equipo, backend y frontend, un mapa interactivo que muestra los dispositivos conectados a la red wifi del campus de la Universidad de Almería, con datos actualizados cada 2 minutos mediante ingesta automatizada. Fuera del ámbito académico desarrollo proyectos propios por iniciativa personal, entre ellos Tokimori, una aplicación web full-stack con arquitectura de microservicios.",
    "hero.contact": "Contactar",
    "hero.downloadCv": "Descargar CV (español)",
    "hero.downloadCvEn": "Descargar CV (inglés)",
    "section.projects": "Proyectos",
    "section.experience": "Experiencia laboral",
    "section.skills": "Habilidades Técnicas",
    "carousel.prev": "Anterior",
    "carousel.next": "Siguiente",
    "projects.item1": "Portfolio",
    "projects.item2": "Tokimori",
    "projects.img1": "Imagen del proyecto Portfolio",
    "projects.img2": "Imagen del proyecto Tokimori",
    "experience.item1": "Desarrollador full-stack",
    "experience.img1": "Imagen del puesto de desarrollador full-stack en la Universidad de Almería",
    "cta.viewProjects": "Ver proyectos",
    "cta.viewExperience": "Ver experiencia",
    "cta.viewSkills": "Ver habilidades",
    "footer.email": 'Email: <a href="mailto:josecarlosruizsan@gmail.com">josecarlosruizsan@gmail.com</a>',
    "footer.phone": 'Teléfono: <a href="tel:+34608257574">+34 608257574</a>',

    "hab.title": "Habilidades · José Carlos Ruiz Sánchez",
    "hab.eyebrow": "Habilidades",
    "hab.h1": "Habilidades",
    "hab.lead": "Mis competencias técnicas, académicas, transversales e idiomas, agrupadas igual que en mi currículum. En cada una indico dónde la he usado.",
    "hab.toc.tech": "Habilidades técnicas",
    "hab.toc.academic": "Habilidades académicas",
    "hab.toc.soft": "Habilidades transversales",
    "hab.toc.lang": "Idiomas",
    "hab.tech.title": "Habilidades técnicas",
    "hab.tech.desc": "Herramientas y lenguajes con los que trabajo habitualmente. En cada tarjeta indico en qué proyecto los he usado.",
    "hab.card.lang.h3": "Lenguajes de programación",
    "hab.card.lang.p": "Trabajo sobre todo con JavaScript y TypeScript, tanto en backend como en frontend, y uso el tipado estático de TypeScript para modelar el dominio y detectar errores antes de ejecutar. También programo en Java. Python lo uso para modelos de datos e IA, y R para análisis estadístico.",
    "hab.card.lang.applied": "<span>Dónde lo he aplicado</span> API de las prácticas en JavaScript/TypeScript, modelo predictivo de burnout en Python y microservicios de Auscultify combinando Python y JavaScript.",
    "hab.card.fw.h3": "Frameworks y tecnologías",
    "hab.card.fw.p": "Construyo APIs REST con Node.js y Express.js, e interfaces con React y Next.js (renderizado en servidor y rutas dinámicas). En proyectos con React empaqueto con Vite, gestiono la navegación con React Router y aíslo estilos con CSS Modules. Para dibujo e interacción gráfica uso la HTML5 Canvas API sin librerías. En Java trabajo con Spring y también desarrollo interfaces con Angular. Spark lo uso para procesamiento distribuido sobre varios nodos.",
    "hab.card.fw.applied": "<span>Dónde lo he aplicado</span> Frontend del mapa interactivo del campus en Next.js y React, API en Node.js + Express.js durante las prácticas, y despliegue de un modelo sobre un clúster de nodos con Spark en el Predictor de burnout. En Tokimori, frontend en React 19 con Vite y React Router y un editor visual por elemento construido con la HTML5 Canvas API.",
    "hab.card.db.h3": "Bases de datos",
    "hab.card.db.p": "En SQL modelo esquemas relacionales, escribo consultas y cuido los índices (MySQL y PostgreSQL). Con la extensión PostGIS trabajo consultas espaciales sobre datos geográficos. En NoSQL trabajo con MongoDB.",
    "hab.card.db.applied": "<span>Dónde lo he aplicado</span> Almacenamiento y consulta espacial de ~3.000 filas cada 2 minutos en PostgreSQL/PostGIS durante las prácticas, y MySQL como base de datos de Tokimori.",
    "hab.card.auto.h3": "Automatización de procesos",
    "hab.card.auto.p": "Diseño flujos en n8n para conectar servicios, APIs y bases de datos y para lanzar procesos de ingesta programados sin tener que escribir y mantener un servicio propio.",
    "hab.card.auto.applied": "<span>Dónde lo he aplicado</span> Pipeline de telemetría geoespacial del campus: ingesta automatizada cada 2 minutos hacia PostGIS.",
    "hab.card.devops.h3": "DevOps y despliegue",
    "hab.card.devops.p": "Contenerizo aplicaciones con Docker, orquesto varios servicios en local con docker-compose y uso el mismo entorno en desarrollo y en producción. Publico las aplicaciones detrás de Nginx como servidor web, proxy inverso y API Gateway, de forma que solo hay un punto de entrada público y los servicios internos quedan aislados en la red de contenedores.",
    "hab.card.devops.applied": "<span>Dónde lo he aplicado</span> Despliegue en Docker de la aplicación de las prácticas, publicada con Nginx. Este portfolio también tiene Dockerfile y docker-compose. En Tokimori, docker-compose orquesta seis microservicios tras un API Gateway con Nginx, con configuración de producción y un override para desarrollo.",
    "hab.card.vcs.h3": "Control de versiones",
    "hab.card.vcs.p": "Uso Git en flujo colaborativo: ramas por funcionalidad, revisión de cambios, resolución de conflictos y un historial de commits legible.",
    "hab.card.vcs.applied": "<span>Dónde lo he aplicado</span> En todos mis proyectos. En las prácticas trabajé sobre código heredado de otro desarrollador y me coordinaba con mi responsable mediante ramas y revisiones de código.",
    "hab.card.test.h3": "Testing",
    "hab.card.test.p": "Escribo tests automáticos en JavaScript con Jest y Vitest, tanto para APIs de Node.js (tests unitarios y de integración sobre los endpoints con Supertest) como para interfaces de React con Testing Library (render de componentes e interacción del usuario), y en Java con JUnit.",
    "hab.card.test.applied": "<span>Dónde lo he aplicado</span> Pruebas de la API en Node.js y de la interfaz en React durante las prácticas (entorno profesional), y en Tokimori, Vitest con Testing Library en el frontend y Jest con Supertest en el backend.",
    "hab.card.sec.h3": "Autenticación y seguridad web",
    "hab.card.sec.p": "Implemento autenticación con JWT sobre cookies seguras y hashing de contraseñas con bcrypt, y protejo las APIs con helmet, rate limiting y una política de CORS configurable. Así los servicios internos no quedan expuestos y las contraseñas nunca se guardan en claro.",
    "hab.card.sec.applied": "<span>Dónde lo he aplicado</span> Tokimori: inicio de sesión con tokens JWT de 7 días sobre cookies secure, hashing con bcrypt y helmet, rate limiting y CORS en los seis microservicios. Solo el API Gateway es accesible desde fuera de la red Docker.",
    "hab.card.testgrado.h3": "Pruebas de software durante el Grado",
    "hab.card.testgrado.p": "En el Grado en Ingeniería Informática practiqué la verificación de software con la validación de operaciones sobre bases de datos Cassandra. Aquí aprendí a decidir qué hay que probar y a usar la cobertura de código como criterio de calidad.",
    "hab.card.testgrado.applied": "<span>Dónde lo he aplicado</span> Solo en asignaturas del Grado en Ingeniería Informática (Universidad de Almería). Todavía no lo he usado en un entorno profesional.",
    "hab.card.bi.h3": "Análisis de datos y Business Intelligence",
    "hab.card.bi.p": "Creo informes y cuadros de mando en Power BI: importo y preparo los datos, defino indicadores (KPI) y los muestro en gráficos para seguir cómo evoluciona un negocio.",
    "hab.card.bi.applied": "<span>Dónde lo he aplicado</span> En asignaturas del Grado en Ingeniería Informática. Todavía no lo he usado en un entorno profesional.",
    "hab.tag.dashboards": "Cuadros de mando",
    "hab.tag.dataViz": "Visualización de datos",
    "hab.tag.apiIntegration": "Integración de APIs",
    "hab.tag.scheduledIngestion": "Ingesta programada",
    "hab.tag.reproducibleEnvs": "Entornos reproducibles",
    "hab.tag.featureBranches": "Ramas por funcionalidad",
    "hab.tag.collaboration": "Trabajo colaborativo",
    "hab.tag.unitTests": "Tests unitarios",
    "hab.tag.integrationTests": "Tests de integración",
    "hab.tag.rateLimiting": "Rate limiting",
    "hab.academic.title": "Habilidades académicas",
    "hab.academic.desc": "Lo que he aprendido en el Grado en Ingeniería Informática (Universidad de Almería, 2021-2026, con doble mención en Ingeniería del Software y Sistemas de Información), en el Máster en Ingeniería Informática con especialidad en Big Data y en un grupo de investigación.",
    "hab.academic.se.h3": "Ingeniería del Software",
    "hab.academic.se.p": "Análisis y especificación de requisitos, patrones de diseño, arquitecturas (incluida la de microservicios), modelado UML y criterios de calidad y mantenibilidad.",
    "hab.academic.is.h3": "Sistemas de Información",
    "hab.academic.is.p": "Modelado conceptual de datos, procesos de negocio e integración entre sistemas heterogéneos. Me ayuda a entender qué necesita realmente quien va a usar un sistema.",
    "hab.academic.bd.h3": "Big Data (especialidad del Máster)",
    "hab.academic.bd.p": "Procesamiento distribuido con Spark, diseño de pipelines de datos, cómputo en clúster y cómo escalar cuando los datos no caben en una sola máquina.",
    "hab.academic.ml.h3": "Modelado y aprendizaje automático",
    "hab.academic.ml.p": "Construcción, entrenamiento y evaluación de modelos predictivos en Python y diseño de algoritmos de recomendación. Aplicado en el Predictor de burnout y en Auscultify.",
    "hab.academic.consulting.h3": "Consultoría, seguridad de la información y cumplimiento normativo",
    "hab.academic.consulting.p": 'Normas ISO/IEC 27001 (seguridad de la información) y familia ISO 9000 (gestión de la calidad), análisis de riesgos, planes de contingencia, adecuación al RGPD y métricas de rendimiento. Lo puse en práctica con una empresa real en la asignatura Seguridad y Cumplimiento Normativo. Más detalle en <a href="formacion.html#consultoria">Formación Académica</a>.',
    "hab.academic.research.h3": "Método científico e investigación",
    "hab.academic.research.p": "Trabajo en un grupo de investigación de la UAL: formulación de hipótesis, experimentación controlada, medición de resultados e iteración a partir de los datos obtenidos.",
    "hab.academic.comm.h3": "Comunicación técnica y defensa",
    "hab.academic.comm.p": "Redacción de memorias técnicas y defensa oral ante tribunal. Mi Trabajo de Fin de Grado (Auscultify) obtuvo una calificación de 9,4/10.",
    "hab.academic.algo.h3": "Pensamiento algorítmico y análisis de complejidad",
    "hab.academic.algo.p": "Descomposición de problemas, elección de estructuras de datos y evaluación del coste de una solución antes de implementarla.",
    "hab.soft.title": "Habilidades transversales",
    "hab.soft.desc": "Las que aparecen en mi CV como «Habilidades», cada una con un ejemplo concreto.",
    "hab.soft.team.h3": "Trabajo en equipo",
    "hab.soft.team.p": "En las prácticas trabajé dentro de un grupo de investigación (ACG), coordinándome a diario con mi responsable: decisiones técnicas discutidas y validadas en común, revisiones de código y reuniones frecuentes para ajustar el alcance. Además partí del frontend de otro desarrollador, así que tuve que entender y continuar trabajo ajeno.",
    "hab.soft.analytical.h3": "Pensamiento analítico",
    "hab.soft.analytical.p": "Antes de resolver un problema lo divido en partes que pueda medir. Lo aplico sobre todo al trabajar con datos y con modelos predictivos.",
    "hab.soft.time.h3": "Gestión del tiempo",
    "hab.soft.time.p": "Compaginé el Máster, que es online, con el puesto en el Applied Computing Group, y lo combino con proyectos propios como Tokimori, priorizando tareas y fijando entregas realistas. El Máster es compatible con una jornada laboral completa.",
    "hab.soft.learning.h3": "Aprendizaje continuo",
    "hab.soft.learning.p": "He aprendido n8n, PostGIS, Spark y Next.js por mi cuenta, a medida que cada proyecto los necesitaba.",
    "hab.lang.title": "Idiomas",
    "hab.lang.desc": "Nivel de comunicación en entornos técnicos y profesionales.",
    "hab.lang.es.name": "Español",
    "hab.lang.es.level": "Nativo",
    "hab.lang.es.p": "Lengua materna.",
    "hab.lang.en.name": "Inglés",
    "hab.lang.en.level": "B2 · Cambridge First (FCE)",
    "hab.lang.en.p": "Lectura fluida de documentación y especificaciones técnicas, y comunicación escrita y oral en entornos profesionales.",
    "hab.lang.note": '<strong>Nota:</strong> casi todo lo que aparece en esta página lo he usado en algún proyecto de <a href="proyectos.html">Proyectos</a> o en mi <a href="experiencia.html">Experiencia laboral</a>. Cuando solo lo he trabajado en la universidad, lo indico en la tarjeta.',

    "for.title": "Formación Académica · José Carlos Ruiz Sánchez",
    "for.eyebrow": "Formación",
    "for.h1": "Formación Académica",
    "for.lead": "Mis estudios en la Universidad de Almería, el Trabajo de Fin de Grado, las asignaturas de consultoría y cumplimiento normativo y mis certificaciones de idiomas. También explico por qué en el CV se solapan las fechas del Grado y del Máster.",
    "for.toc.degrees": "Titulaciones",
    "for.toc.tfg": "Trabajo de Fin de Grado",
    "for.toc.consulting": "Consultoría y cumplimiento normativo",
    "for.toc.overlap": "Solapamiento Grado y Máster",
    "for.toc.certs": "Certificaciones",
    "for.degrees.title": "Titulaciones",
    "for.degrees.desc": "Toda mi formación universitaria es de la Universidad de Almería. Empecé el Máster antes de cerrar formalmente el Grado.",
    "for.master.period": "Desde 2025 · en curso",
    "for.master.h3": "Máster en Ingeniería Informática",
    "for.master.place": "Universidad de Almería",
    "for.master.p": "Especialidad en Big Data (infraestructura y bases de datos a gran escala, análisis de grandes volúmenes de datos y procesamiento distribuido), uno de los tres itinerarios del máster junto a Internet de las cosas y desarrollo web/móvil. Es 100% online y compatible con una jornada laboral completa.",
    "for.master.tag1": "Especialidad en Big Data",
    "for.master.tag2": "En curso",
    "for.grado.period": "2021-2026",
    "for.grado.h3": "Grado en Ingeniería Informática",
    "for.grado.place": "Universidad de Almería",
    "for.grado.p": "Doble mención en Ingeniería del Software y en Sistemas de Información. Formación en análisis y diseño de software, arquitecturas, bases de datos, modelado de sistemas de información y trabajo en proyectos de equipo.",
    "for.grado.tag1": "Mención en Ingeniería del Software",
    "for.grado.tag2": "Mención en Sistemas de Información",
    "for.tfg.title": "Trabajo de Fin de Grado",
    "for.tfg.desc": "El Grado se cierra con un Trabajo de Fin de Grado defendido ante tribunal.",
    "for.tfg.h3": "Auscultify",
    "for.tfg.grade": "Calificación: 9,4 / 10",
    "for.tfg.p": "Proyecto individual. Incluyó modelado de datos, microservicios y un algoritmo de recomendación, además de la redacción de la memoria técnica y la defensa oral.",
    "for.tfg.p2": "Lo defendí en la convocatoria de febrero de 2026. Por eso el Grado figura como finalizado en 2026, aunque el resto de asignaturas estaban superadas antes.",
    "for.consulting.title": "Consultoría, seguridad y cumplimiento normativo",
    "for.consulting.desc": "En el Grado cursé varias asignaturas orientadas a la consultoría tecnológica: gestión de la seguridad de la información, gestión de la calidad, análisis de riesgos y protección de datos. La más completa fue Seguridad y Cumplimiento Normativo, que se hizo con una empresa real.",
    "for.consulting.case.h3": "Seguridad y Cumplimiento Normativo",
    "for.consulting.case.grade": "Proyecto de consultoría con una empresa real",
    "for.consulting.case.p": "En esta asignatura hicimos un trabajo de consultoría completo para una empresa real. Estas fueron las fases:",
    "for.consulting.s1": "<strong>Toma de contacto.</strong> Contactamos con la empresa y le pedimos información sobre su infraestructura tecnológica.",
    "for.consulting.s2": "<strong>Análisis de riesgos.</strong> Analizamos los posibles riesgos y fallos de seguridad de su infraestructura.",
    "for.consulting.s3": "<strong>Planes de contingencia.</strong> Preparamos planes de contingencia para saber cómo actuar ante un incidente y cómo recuperar la actividad.",
    "for.consulting.s4": "<strong>RGPD.</strong> Usamos un programa de cumplimiento del RGPD y lo personalizamos para la empresa.",
    "for.consulting.s5": "<strong>Métricas de rendimiento.</strong> Definimos métricas para medir el rendimiento de la empresa.",
    "for.consulting.s6": "<strong>Informes.</strong> Entregamos todo el trabajo en varios informes.",
    "for.consulting.tag1": "Consultoría",
    "for.consulting.tag2": "Análisis de riesgos",
    "for.consulting.tag3": "Planes de contingencia",
    "for.consulting.tag4": "RGPD",
    "for.consulting.tag5": "Métricas de rendimiento",
    "for.consulting.tag6": "Informes",
    "for.consulting.case.conf": "No pongo el nombre de la empresa ni detalles de su infraestructura porque el análisis recoge fallos de seguridad reales.",
    "for.consulting.iso27001.h3": "Seguridad de la información (ISO/IEC 27001)",
    "for.consulting.iso27001.p": "Cómo se implanta un sistema de gestión de la seguridad de la información (SGSI), cómo se eligen los controles de seguridad a partir de los riesgos y cómo se mantiene con un ciclo de mejora continua. Es la norma con la que se certifica la seguridad de una organización.",
    "for.consulting.iso9001.h3": "Gestión de la calidad (ISO 9000 e ISO 9001)",
    "for.consulting.iso9001.p": "La familia de normas ISO 9000, con ISO 9001 como norma certificable: enfoque por procesos, documentación del sistema de gestión, orientación al cliente y mejora continua.",
    "for.consulting.risk.h3": "Análisis de riesgos y fiabilidad",
    "for.consulting.risk.p": "Identificación de activos, amenazas y vulnerabilidades, estimación de la probabilidad y el impacto de cada riesgo y elección de su tratamiento, además del estudio de la fiabilidad de los sistemas. Es lo que después aplicamos con la empresa real.",
    "for.consulting.gdpr.h3": "Protección de datos (RGPD)",
    "for.consulting.gdpr.p": "Qué obligaciones impone el RGPD a una empresa y cómo documentar que las cumple. Lo aplicamos con la empresa real del proyecto.",
    "for.consulting.note": '<strong>Nota:</strong> con esta formación también puedo optar a puestos de consultoría tecnológica, auditoría o cumplimiento normativo. Lo que sé de Power BI está en <a href="habilidades.html#tecnicas">Habilidades</a>.',
    "for.overlap.title": "Solapamiento entre Grado y Máster",
    "for.overlap.desc": "En el currículum, el final del Grado y el inicio del Máster se solapan unos meses. Este es el motivo.",
    "for.overlap.i1.h3": "Matrícula del Máster con el TFG pendiente",
    "for.overlap.i1.p": "Empecé el Máster en Ingeniería Informática teniendo pendientes únicamente los créditos del Trabajo de Fin de Grado. Me matriculé con el resto del expediente del Grado ya superado para no perder un curso completo.",
    "for.overlap.i2.h3": "Defensa del TFG en febrero",
    "for.overlap.i2.p": "El Trabajo de Fin de Grado lo defendí en la convocatoria de febrero de 2026. Hasta esa fecha el Grado constaba como no finalizado pese a tener el resto del expediente aprobado.",
    "for.overlap.i3.h3": "Cómo se refleja en el CV",
    "for.overlap.i3.p": "Por eso en el currículum el Grado termina en 2026 y el Máster empieza unos meses antes.",
    "for.certs.title": "Certificaciones e idiomas",
    "for.certs.desc": "Certificaciones oficiales de idiomas. Mi nivel en cada idioma está detallado en Habilidades.",
    "for.cert.fce.h3": "Cambridge English: First (FCE)",
    "for.cert.fce.grade": "Nivel B2 (MCER)",
    "for.cert.fce.p": "Certificado de inglés de nivel B2 según el Marco Común Europeo de Referencia. Lo uso para lectura de documentación y especificaciones técnicas y para comunicación escrita y oral en entornos profesionales.",
    "for.note": '<strong>Nota:</strong> el detalle técnico de lo que he aprendido en cada titulación está en <a href="habilidades.html">Habilidades</a>, y su aplicación en proyectos reales, en <a href="experiencia.html">Experiencia laboral</a> y <a href="proyectos.html">Proyectos</a>.',

    "exp.title": "Experiencia laboral · José Carlos Ruiz Sánchez",
    "exp.eyebrow": "Experiencia laboral",
    "exp.h1": "Experiencia laboral",
    "exp.lead": "Mi experiencia laboral ordenada en el tiempo. Por ahora es un único puesto: desarrollador full-stack en el Applied Computing Group (ACG) de la Universidad de Almería. Cada puesto tiene una página propia con más detalle.",
    "exp.timeline.title": "Cronología",
    "exp.timeline.desc": "Mis puestos ordenados en el tiempo. Usa el buscador para filtrar por empresa, rol o tecnología, y el desplegable para cambiar el orden.",
    "exp.search.label": "Buscar",
    "exp.search.placeholder": "Empresa, rol o tecnología",
    "exp.sort.label": "Ordenar",
    "exp.sort.newest": "Más recientes primero",
    "exp.sort.oldest": "Más antiguos primero",
    "exp.empty": "No hay experiencias que coincidan con la búsqueda.",
    "exp.item.period": "Febrero 2026 – Agosto 2026",
    "exp.item.h3": "Desarrollador full-stack",
    "exp.item.place": "Applied Computing Group (ACG) · Universidad de Almería",
    "exp.item.p": "Construcción en equipo, backend y frontend, de un mapa interactivo que muestra los dispositivos conectados a la red wifi del campus de la Universidad de Almería, con datos actualizados cada 2 minutos mediante ingesta automatizada.",
    "exp.item.b1": "Desarrollo de una API en el backend en Node.js con Express.js.",
    "exp.item.b2": "Frontend en Next.js: mapa interactivo con visualización de los dispositivos conectados a la red wifi sobre el plano del campus.",
    "exp.item.b3": "Pipeline de telemetría geoespacial del campus: ingesta de ~3.000 filas cada 2 minutos automatizada con n8n, con almacenamiento y consulta espacial en PostGIS.",
    "exp.item.b4": "Despliegue en Docker.",
    "exp.item.cta": "Ver detalle del puesto",

    "proy.title": "Proyectos · José Carlos Ruiz Sánchez",
    "proy.eyebrow": "Proyectos",
    "proy.h1": "Proyectos",
    "proy.lead": "Proyectos personales que he desarrollado por mi cuenta, ordenados en el tiempo.",
    "proy.timeline.title": "Cronología",
    "proy.timeline.desc": "Mis proyectos ordenados en el tiempo. Usa el buscador para filtrar por nombre o tecnología, y el desplegable para cambiar el orden.",
    "proy.search.label": "Buscar",
    "proy.search.placeholder": "Proyecto o tecnología",
    "proy.sort.label": "Ordenar",
    "proy.sort.newest": "Más recientes primero",
    "proy.sort.oldest": "Más antiguos primero",
    "proy.empty": "No hay proyectos que coincidan con la búsqueda.",
    "proy.item1.period": "Septiembre 2026 – en curso",
    "proy.item1.h3": "Portfolio",
    "proy.item1.place": "Proyecto personal",
    "proy.item1.p": "Este mismo sitio web: un portfolio personal multipágina (Sobre mí, Proyectos, Experiencia, Habilidades, Formación y Contacto) construido con HTML, CSS y JavaScript puro, sin frameworks ni paso de build, y desplegado en GitHub Pages. Lo hice para dar contexto al currículum y enseñar con más detalle lo que sé hacer.",
    "proy.item1.b1": "Sitio de nueve páginas en HTML, CSS y JavaScript puro, sin frameworks ni bundler.",
    "proy.item1.b2": "Bilingüe (español e inglés) con un diccionario i18n propio en JavaScript. El idioma y el tema elegidos se guardan entre visitas con localStorage.",
    "proy.item1.b3": "Tema claro y oscuro que respeta la preferencia del sistema (prefers-color-scheme).",
    "proy.item1.b4": "Componentes interactivos hechos a mano: carruseles con arrastre táctil, cronologías con buscador y ordenación, y menú responsive.",
    "proy.item1.b5": "Animaciones de aparición al hacer scroll con IntersectionObserver.",
    "proy.item1.b6": "Atención a la accesibilidad (enlace para saltar al contenido, roles ARIA, aria-expanded) y al SEO (meta description, Open Graph, Twitter Card, canonical) en cada página.",
    "proy.item1.b7": "Entorno de desarrollo local con Docker y browser-sync con recarga automática.",
    "proy.item1.cta": "Ver detalle del proyecto",
    "proy.item2.period": "Febrero 2026 – Agosto 2026",
    "proy.item2.h3": "Tokimori",
    "proy.item2.place": "Proyecto personal · Full-stack · Arquitectura de microservicios",
    "proy.item2.p": "Aplicación web full-stack para gestionar una colección personal de elementos con seguimiento de tiempo, notas en Markdown, checklists y un lienzo visual por elemento. Construida sobre una arquitectura de 6 microservicios en Node.js/TypeScript tras un API Gateway (nginx), con frontend en React 19 y despliegue completo con Docker Compose.",
    "proy.item2.b1": "Diseñé una arquitectura de 6 microservicios (auth, items, colección, notas, objetivos/canvas, sesiones) en Node.js + Express 5 + TypeScript, cada uno con su responsabilidad y base de datos MySQL compartida (8 tablas).",
    "proy.item2.b2": "Implementé un API Gateway con nginx como único punto de entrada público, que enruta por path al frontend y a cada servicio. Los servicios internos no son accesibles desde fuera de la red Docker.",
    "proy.item2.b3": "Autenticación con JWT (tokens de 7 días) sobre cookies secure, hashing con bcrypt, y endurecimiento con helmet, rate limiting y CORS configurable.",
    "proy.item2.b4": "Desarrollé un canvas visual por elemento con la HTML5 Canvas API sin librerías: dibujo libre, formas, imágenes y texto, con arrastre, redimensionado y rotación, historial de deshacer/rehacer y control de capas (z-index).",
    "proy.item2.b5": "Frontend en React 19 + Vite 7 + React Router 7 + TypeScript, con React Compiler, CSS Modules, sistema de i18n propio (es/en) e interfaz con tema claro/oscuro/automático y color de acento configurable.",
    "proy.item2.b6": "Creé utilidades a medida: drag & drop con animaciones FLIP (hook useFlipList), render de Markdown propio, temporizador flotante persistente entre páginas y notificaciones del navegador.",
    "proy.item2.b7": "Panel de estadísticas globales (horas totales, racha de días, gráfico de 7 días), sistema de logros desbloqueables, panel de administración y cuenta demo.",
    "proy.item2.b8": "Testing con Vitest + Testing Library (frontend) y Jest + Supertest (backend). Contenerización completa con Docker Compose, separando la configuración de producción (frontend compilado servido por nginx) y un override de desarrollo (Vite hot-reload).",
    "proy.item2.cta": "Ver detalle del proyecto",

    "uat.title": "Desarrollador full-stack en el Applied Computing Group · José Carlos Ruiz Sánchez",
    "uat.eyebrow": "Experiencia laboral · Detalle del puesto",
    "uat.h1": "Desarrollador full-stack en el Applied Computing Group (ACG)",
    "uat.lead": "Prácticas de desarrollo full-stack en el Applied Computing Group de la Universidad de Almería, dedicadas a UAL Trace: una aplicación web que muestra sobre un mapa del campus dónde se concentra la gente a partir de los dispositivos conectados a la red wifi, con datos que se renuevan cada 2 minutos. Partiendo de un prototipo de frontend que funcionaba con datos simulados, desarrollé el resto de la plataforma: la ingesta de datos, la base de datos geoespacial, la API, la conexión del frontend con datos reales, nuevas capas de visualización, el módulo de informes y el despliegue.",
    "uat.hero.imgAlt": "Imagen del proyecto desarrollado en el Applied Computing Group (ACG)",
    "uat.toc.context": "Contexto",
    "uat.toc.description": "Descripción del trabajo",
    "uat.toc.contribution": "Mi aportación",
    "uat.toc.architecture": "Arquitectura y stack",
    "uat.toc.balance": "Balance",
    "uat.context.title": "Contexto del puesto",
    "uat.context.org.dt": "Organización",
    "uat.context.org.dd": "Applied Computing Group (ACG) · Universidad de Almería",
    "uat.context.role.dt": "Rol",
    "uat.context.role.dd": "Desarrollador full-stack",
    "uat.context.period.dt": "Periodo",
    "uat.context.period.dd": "Febrero – Agosto de 2026 (unos 6 meses)",
    "uat.context.hours.dt": "Dedicación",
    "uat.context.hours.dd": "5 horas diarias, de lunes a viernes (25 h/semana)",
    "uat.context.mode.dt": "Modalidad",
    "uat.context.mode.dd": "Presencial hasta principios de junio y en remoto el resto del periodo (algo más de la mitad del tiempo fue presencial)",
    "uat.context.link.dt": "Tipo de vínculo",
    "uat.context.link.dd": "Prácticas de empresa extracurriculares, fuera del horario lectivo, formalizadas a través de la Universidad de Almería",
    "uat.context.origin.h3": "Cómo surgió",
    "uat.context.origin.p": "Surgió de una conversación informal con un profesor del propio grupo (ACG): al terminar una clase me planteó la idea de sacar adelante un proyecto. Me interesó la propuesta, la fuimos concretando y terminó formalizándose como prácticas de empresa extracurriculares.",
    "uat.desc.title": "Descripción del trabajo",
    "uat.desc.idea.h3": "La idea de partida",
    "uat.desc.idea.p": "El objetivo era una aplicación web que mostrara sobre un mapa del campus dónde se concentra la gente, usando como sensor la propia red wifi de la universidad: la infraestructura Cisco Meraki estima la posición de cada dispositivo conectado a partir de los puntos de acceso que lo detectan. Sobre el mapa se pinta una malla de hexágonos coloreada según el número de dispositivos, de amarillo (poca gente) a rojo (mucha), y en modo en vivo se refresca cada 2 minutos, que es la ventana con la que se agregan los datos.",
    "uat.desc.purpose.h3": "Para qué servía",
    "uat.desc.purpose.p": "Esa información abre bastantes posibilidades de análisis: saber qué edificios y plantas concentran más gente en cada momento, cuánto tiempo se queda la gente en cada planta, qué densidad de personas por metro cuadrado tiene cada edificio o cuáles son los desplazamientos más habituales entre edificios.",
    "uat.desc.built.h3": "Qué se construyó",
    "uat.desc.built.p1": "El frontend heredado tenía la malla de hexágonos, las vistas de edificio y unas primeras gráficas, pero funcionaba con datos simulados y ficheros locales, sin backend. Lo conecté a datos reales y, sobre el mismo mapa, fui añadiendo distintas capas de visualización:",
    "uat.desc.built.li1": "<strong>Densidad.</strong> Un mapa de calor continuo, derivado de la misma malla, como alternativa a los hexágonos.",
    "uat.desc.built.li2": "<strong>Edificio.</strong> Cada edificio se colorea, de amarillo a rojo oscuro, según su ocupación total.",
    "uat.desc.built.li3": "<strong>Rutas.</strong> Flujos de personas entre edificios, dibujados como arcos con flecha y con un color más intenso cuanta más gente hace el trayecto. Se calculan sobre una ventana de 2 horas reconstruyendo la secuencia de posiciones de cada dispositivo y exigiendo una estancia mínima en cada edificio, para no contar como viajes los saltos de la localización wifi en la frontera entre dos edificios. También probé una variante que trazaba las rutas por las calles reales (OSRM) y acabé descartándola.",
    "uat.desc.built.li4": "<strong>Detalle por edificio.</strong> Al entrar en un edificio se ve el plano de cada planta con la posición agregada de las personas y cuánta gente hay en cada una.",
    "uat.desc.built.li5": "<strong>Modo histórico.</strong> Se elige fecha y hora y se ve ese instante exacto, con un botón de <em>play</em> que reproduce la evolución en el tiempo. Funciona con todas las capas, rutas incluidas.",
    "uat.desc.built.p2": "Además desarrollé un módulo de estadísticas e informes: gráficas globales (reparto por edificio, tendencia de ocupación y zonas más concurridas) y por edificio (ocupación por planta, densidad por m² y tiempo de permanencia), un panel de «Datos de interés» con conclusiones calculadas a partir de los datos y la exportación a PDF de un informe global y de uno por edificio.",
    "uat.desc.built.p3": "Por debajo, la ingesta está automatizada con n8n, los datos viven en una base de datos PostGIS diseñada para este caso de uso y una API en Node.js con Express y TypeScript calcula todas esas métricas.",
    "uat.contrib.title": "Mi aportación",
    "uat.contrib.lead": "Salvo el prototipo inicial del frontend, que heredé, el resto del proyecto lo desarrollé yo: el modelo de datos, la ingesta, el backend, la integración con el frontend, la evolución del propio frontend y el despliegue. Mi responsable en el grupo hacía el seguimiento en reuniones periódicas y con él contrastaba el enfoque de las decisiones importantes.",
    "uat.contrib.frontend.h3": "Frontend",
    "uat.contrib.frontend.p": "Heredé de un desarrollador anterior un prototipo en Next.js con la malla de hexágonos, las vistas de edificio y algunas gráficas sobre datos simulados. Lo conecté a la API real, terminé lo que estaba a medias, eliminé código muerto y versiones antiguas, y lo seguí desarrollando: las capas de densidad, edificio y rutas, el modo histórico con reproducción, el módulo de informes y PDF, la adaptación a móvil y muchas optimizaciones de carga. A día de hoy, alrededor del 80 % del código del frontend es mío.",
    "uat.contrib.decisions.h3": "Decisiones técnicas",
    "uat.contrib.decisions.li1": "<strong>Base de datos.</strong> Elegí PostgreSQL con PostGIS porque el problema es geoespacial: edificios con su polígono real, puntos de acceso, posiciones y una malla de hexágonos. Diseñé el modelo (12 tablas con borrado lógico e índices espaciales) y lo fui ampliando con migraciones, entre ellas índices pensados para las consultas por ventana de tiempo.",
    "uat.contrib.decisions.li2": "<strong>Backend.</strong> Node.js con Express y TypeScript. Diseñé una API REST de una treintena de operaciones, documentada con OpenAPI y Swagger UI, y la cubrí con más de 200 pruebas con Vitest y Supertest que simulan la base de datos para servir de red de seguridad en los refactors.",
    "uat.contrib.decisions.li3": "<strong>Ingesta de datos.</strong> n8n, para poder montar y ajustar los flujos rápidamente. La red Meraki envía las observaciones a un webhook. El flujo las agrupa por dispositivo, descarta los movimientos de menos de 2 metros, seudonimiza los identificadores con un hash HMAC-SHA512 antes de guardarlos y suma cada observación al hexágono más cercano mediante una búsqueda de vecino más próximo en PostGIS. Otros flujos cargan los catálogos: edificios y plantas, puntos de acceso, la malla de hexágonos y los polígonos de los edificios.",
    "uat.contrib.decisions.li4": "<strong>Preparación de datos.</strong> Scripts en Node.js para asociar los 90 planos de planta de Meraki a sus edificios, extraer de OpenStreetMap el polígono de cada edificio y generar la malla de hexágonos.",
    "uat.contrib.decisions.li5": "<strong>Despliegue.</strong> Dockericé frontend y backend con builds multietapa (salida standalone de Next.js, imagen de producción sin dependencias de desarrollo y ejecución con un usuario sin privilegios) y preparé la aplicación para servirse bajo subrutas tras un proxy inverso nginx.",
    "uat.contrib.privacy.h3": "Privacidad",
    "uat.contrib.privacy.p": "Los datos se trataron como sensibles desde el diseño: la MAC y el identificador de usuario se guardan seudonimizados con HMAC desde la propia ingesta, y lo que muestra la aplicación son siempre recuentos agregados por hexágono, planta o edificio, nunca la posición de una persona concreta.",
    "uat.contrib.ongoing.h3": "Rendimiento y trabajo continuado",
    "uat.contrib.ongoing.p": "Con datos reales y varios usuarios a la vez aparecieron los problemas de rendimiento, y buena parte de la recta final fue optimizar: una caché en memoria que agrupa las peticiones simultáneas idénticas en una sola consulta, el backend repartido en varios procesos con el módulo cluster de Node.js, índices de cobertura creados en caliente (con una página de mantenimiento para aplicarlos sin acceso directo a la base de datos), un endpoint que sustituyó hasta 13 peticiones secuenciales del modo en vivo por una sola y cargas más ligeras de hexágonos, plantas y rutas en el frontend. A la vez fui adaptando todas las capas a cada nueva funcionalidad.",
    "uat.arch.title": "Arquitectura y stack",
    "uat.arch.frontend.h3": "Frontend",
    "uat.arch.backend.h3": "Backend",
    "uat.arch.data.h3": "Datos e infraestructura",
    "uat.arch.li1": "<strong>Fuente de datos.</strong> La API de localización de Cisco Meraki, que envía periódicamente al webhook de n8n las observaciones de los dispositivos detectados por los puntos de acceso wifi: posición estimada, planta y punto de acceso más cercano.",
    "uat.arch.li2": "<strong>Ingesta (n8n).</strong> Agrupa por dispositivo, filtra los movimientos de menos de 2 m, seudonimiza con HMAC-SHA512, guarda observaciones y posiciones e incrementa el contador del hexágono más cercano para cada instante.",
    "uat.arch.li3": "<strong>Base de datos geoespacial (PostGIS).</strong> Edificios con su polígono, plantas y planos, puntos de acceso, observaciones y la malla hexagonal con sus recuentos, con índices espaciales y temporales y migraciones versionadas.",
    "uat.arch.li4": "<strong>Backend (Node.js + Express + TypeScript).</strong> API REST en varios procesos con caché en memoria, organizada en tres bloques: catálogos (edificios, plantas, malla y mapa de calor), gráficas globales e <em>insights</em>, métricas calculadas como el tiempo de permanencia, la densidad por m², la volatilidad por hexágono, las anomalías de tráfico por punto de acceso (z-score), el comportamiento por sistema operativo y los flujos origen-destino entre edificios. Documentada con OpenAPI.",
    "uat.arch.li5": "<strong>Frontend (Next.js).</strong> Leaflet sobre OpenStreetMap y D3 para la malla y las rutas. Capas de calor, densidad, edificio y rutas, detalle por planta, modo en vivo y modo histórico con reproducción, gráficas con Recharts e informes PDF con jsPDF. Adaptado a móvil.",
    "uat.arch.li6": "<strong>Despliegue.</strong> Contenedores Docker para frontend, backend y base de datos, servidos bajo subrutas tras un proxy inverso nginx.",
    "uat.balance.title": "Balance",
    "uat.balance.lead": "Es el proyecto en el que más responsabilidad he tenido: partiendo de un prototipo de frontend, construí y llevé a producción el resto de la plataforma, tomando y justificando las decisiones técnicas.",
    "uat.balance.gains.h3": "Qué me llevo",
    "uat.balance.gains.li1": "Llevar un proyecto real de punta a punta: modelo de datos, ingesta, API, frontend, pruebas, despliegue y optimización con usuarios reales.",
    "uat.balance.gains.li2": "Tomar decisiones técnicas y justificarlas por el problema concreto. Elegí una base de datos geoespacial porque el dominio eran edificios, posiciones y polígonos, n8n porque la ingesta había que ajustarla rápido, y Express con TypeScript y pruebas porque la API cambiaba constantemente.",
    "uat.balance.gains.li3": "Trabajar con datos reales e imperfectos: la posición por wifi tiene ruido, y métricas como las rutas entre edificios solo dieron resultados creíbles al filtrar ese ruido con umbrales de movimiento y de estancia mínima.",
    "uat.balance.gains.li4": "Optimizar con criterio: localizar el cuello de botella y atacarlo con índices, caché, agregación en la base de datos y menos peticiones desde el cliente.",
    "uat.balance.gains.li5": "Tratar la privacidad como un requisito de diseño: seudonimización en la ingesta y solo datos agregados en la interfaz.",
    "uat.balance.different.h3": "Qué haría distinto",
    "uat.balance.different.li1": "Dedicar más tiempo al diseño inicial del modelo de datos y de la API: buena parte de los refactores posteriores vino de que el alcance se fue concretando sobre la marcha.",
    "uat.balance.different.li2": "Fijar antes un contrato estable de endpoints para reducir el retrabajo en la integración.",
    "uat.balance.different.li3": "Probar antes con volúmenes de datos y usuarios reales, en lugar de dejar el grueso de la optimización para el final.",
    "uat.balance.different.li4": "Añadir pruebas de las consultas SQL contra una base de datos real, además de las pruebas de controladores con la base de datos simulada.",
    "uat.balance.back": "‹ Volver a Experiencia laboral",

    "pf.title": "Portfolio · José Carlos Ruiz Sánchez",
    "pf.eyebrow": "Proyectos · Detalle del proyecto",
    "pf.h1": "Portfolio",
    "pf.lead": "Este mismo sitio web: mi portfolio personal multipágina, construido con HTML, CSS y JavaScript puro, sin frameworks ni paso de build, y desplegado en GitHub Pages.",
    "pf.hero.imgAlt": "Imagen del proyecto Portfolio",
    "pf.toc.context": "Contexto",
    "pf.toc.description": "Descripción",
    "pf.toc.decisions": "Decisiones técnicas",
    "pf.toc.architecture": "Arquitectura y stack",
    "pf.toc.balance": "Balance",
    "pf.context.title": "Contexto del proyecto",
    "pf.context.type.dt": "Tipo",
    "pf.context.type.dd": "Proyecto personal",
    "pf.context.period.dt": "Periodo",
    "pf.context.period.dd": "Septiembre 2026 – en curso",
    "pf.context.status.dt": "Estado",
    "pf.context.status.dd": "En desarrollo activo",
    "pf.context.stack.dt": "Stack principal",
    "pf.context.stack.dd": "HTML, CSS y JavaScript, sin frameworks ni paso de build",
    "pf.context.code.dt": "Código",
    "pf.context.code.dd": "github.com/jrs407/web-personal",
    "pf.context.web.dt": "Web",
    "pf.context.web.dd": "jrs407.github.io/web-personal",
    "pf.context.origin.h3": "Cómo surgió",
    "pf.context.origin.p": "Surgió de querer un escaparate donde enseñar mis proyectos y lo que sé hacer. El currículum por sí solo se me quedaba corto y dejaba demasiadas lagunas. Con una web propia puedo mostrar con más detalle de lo que soy capaz ante un entrevistador. Decidí construirla desde cero, sin plantillas, porque el propio sitio es también una muestra de mis habilidades. Empecé a darle forma el 1 de septiembre de 2026 y no tiene fecha de cierre: siempre habrá proyectos y trabajos nuevos que añadir.",
    "pf.desc.title": "Descripción del proyecto",
    "pf.desc.what.h3": "Qué es",
    "pf.desc.what.p": "Este mismo sitio web: un portfolio personal multipágina (Sobre mí, Proyectos, Experiencia, Habilidades, Formación y Contacto) construido con HTML, CSS y JavaScript puro, sin frameworks ni paso de build, y desplegado en GitHub Pages. Lo hice para dar contexto al currículum y enseñar con más detalle lo que sé hacer.",
    "pf.desc.includes.h3": "Qué incluye",
    "pf.desc.includes.li1": "Sitio de nueve páginas en HTML, CSS y JavaScript puro, sin frameworks ni bundler.",
    "pf.desc.includes.li2": "Bilingüe (español e inglés) con un diccionario i18n propio en JavaScript. El idioma y el tema elegidos se guardan entre visitas con localStorage.",
    "pf.desc.includes.li3": "Tema claro y oscuro que respeta la preferencia del sistema (prefers-color-scheme).",
    "pf.desc.includes.li4": "Componentes interactivos hechos a mano: carruseles con arrastre táctil, cronologías con buscador y ordenación, y menú responsive.",
    "pf.desc.includes.li5": "Animaciones de aparición al hacer scroll con IntersectionObserver.",
    "pf.desc.includes.li6": "Atención a la accesibilidad (enlace para saltar al contenido, roles ARIA, aria-expanded) y al SEO (meta description, Open Graph, Twitter Card, canonical) en cada página.",
    "pf.desc.includes.li7": "Entorno de desarrollo local con Docker y browser-sync con recarga automática.",
    "pf.decisions.title": "Decisiones técnicas",
    "pf.decisions.p": "El punto de partida fue el destino: quería desplegar en GitHub Pages, que sirve solo ficheros estáticos. El despliegue es un push a main, sin acción de CI ni compilación. Esa restricción marcó el resto de decisiones, y en todas prioricé mantener el sitio ligero y sin dependencias.",
    "pf.decisions.li1": "HTML, CSS y JavaScript puro, sin framework ni empaquetador. Pages no ejecuta un paso de build, y un sitio estático consume menos memoria y recursos, así que es más difícil topar con los límites del servicio a medida que el sitio crece. A cambio, asumo que no hay componentes reutilizables y que el head, la cabecera y el pie se repiten en cada página.",
    "pf.decisions.li2": "Nueve páginas independientes en lugar de una SPA. Cada URL entrega HTML real en la primera petición, sin router ni renderizado en cliente, lo que favorece el SEO y el rastreo y hace que el contenido no dependa de JavaScript.",
    "pf.decisions.li3": "Sistema de traducción propio: un único objeto con los diccionarios español e inglés en script.js, claves declaradas en el marcado con data-i18n y una función que recorre los nodos y sustituye el texto. El idioma se guarda en localStorage y se aplica al cargar, antes de pintar. Así me ahorro una librería, una petición de red por idioma y un paso de extracción de cadenas, a cambio de mantener las traducciones a mano. Al principio la cabecera fallaba al cambiar de idioma, pero ya está resuelto.",
    "pf.decisions.li4": "Tema claro y oscuro mediante un atributo data-theme en la raíz y variables CSS. En la primera visita se respeta prefers-color-scheme y después manda la elección guardada en localStorage. El tema se aplica antes de pintar para no provocar un parpadeo.",
    "pf.decisions.li5": "Carruseles, cronologías con buscador y menú responsive escritos a mano, sin dependencias. El carrusel mueve una pista con transform, admite arrastre táctil y desactiva la transición mientras se arrastra. Las cronologías ordenan por fecha y filtran por el texto y unas palabras clave. Las apariciones al hacer scroll usan un único IntersectionObserver.",
    "pf.decisions.li6": "Para desarrollar en local, un contenedor con browser-sync que sirve la carpeta y recarga el navegador al guardar. Frente a una extensión del editor, cualquiera con Docker levanta el mismo servidor sin configurar nada, y es el mismo flujo con contenedores que uso en proyectos mayores. En Windows el contenedor no recibe eventos de archivo, así que se fuerza el sondeo. Este entorno no se despliega: Pages sirve los ficheros tal cual.",
    "pf.arch.title": "Arquitectura y stack",
    "pf.arch.site.h3": "Sitio",
    "pf.arch.tooling.h3": "Tooling",
    "pf.arch.deploy.h3": "Despliegue",
    "pf.arch.detail.p": "No hay separación entre código fuente y compilado: la raíz del repositorio es lo que GitHub Pages publica, con un fichero .nojekyll para que sirva los archivos sin procesarlos. En la raíz están las nueve páginas HTML y todo lo demás cuelga de assets/, con el CSS y el JavaScript organizados en dos capas, una global y otra por página.",
    "pf.arch.detail.li1": 'CSS en capas. style.css (unas 850 líneas) es lo común: reset, los tokens de diseño como variables CSS (tema claro y su variante [data-theme="dark"]), el contenedor de layout, la cabecera y el pie, los botones, el carrusel y las animaciones de aparición. Cada página añade después una hoja propia solo con sus componentes. La hoja experiencia.css la comparten experiencia.html, proyectos.html y las páginas de detalle (ual-trace.html, tokimori.html y esta), y proyectos.css son cuatro líneas.',
    "pf.arch.detail.li2": "JavaScript con la misma división. script.js (unas 1.300 líneas) lo carga cada página: comportamiento de la cabecera (menú responsive, cambio de tema y de idioma), el objeto TRANSLATIONS con los dos diccionarios, la función que traduce la página, el IntersectionObserver de las apariciones y el carrusel. Después cada página carga un script pequeño: experiencia.js y proyectos.js mueven la cronología con buscador y orden, y no hacen nada si su elemento no está en la página. Además, experiencia.js amplía la imagen de cabecera de las páginas de detalle al hacer clic. Son scripts clásicos al final de <body>, sin módulos, en un ámbito global compartido.",
    "pf.arch.detail.li3": "El español es el texto de origen en el marcado y los atributos data-i18n (y sus variantes para title, alt, aria-label y placeholder) nombran la clave. Al cargar, script.js lee el idioma de localStorage, por defecto español, y sustituye el contenido de cada nodo marcado.",
    "pf.arch.detail.li4": "En assets/ están las imágenes en subcarpetas por página, con los iconos en su formato original (png, webp o svg) y un placeholder.svg compartido. Las tipografías (Space Grotesk e Inter) vienen de Google Fonts con preconnect, y los PDF del currículum (en español e inglés) están en assets/cv/ y se enlazan desde la portada.",
    "pf.arch.detail.li5": "No hay package.json, dependencias ni compilación: los ficheros se escriben y se sirven tal cual. La única imagen Docker que existe es la del entorno de desarrollo local.",
    "pf.balance.title": "Balance",
    "pf.balance.lead": "Como proyecto personal construido de cero y sin plantillas, cumple el objetivo con el que empecé: sirve de escaparate técnico para lo que el currículum no muestra y demuestra que puedo sacar adelante un proyecto completo sin depender de un framework. No es un proyecto grande, pero está publicado y lo sigo actualizando.",
    "pf.balance.gains.h3": "Qué me llevo",
    "pf.balance.gains.li1": "Al no usar ningún framework, cada pieza (el carrusel, las cronologías, el cambio de tema, la traducción) la he tenido que entender y escribir yo, sin que una librería la resuelva por debajo. Eso me ha obligado a manejar el DOM, los eventos y las variables CSS directamente.",
    "pf.balance.gains.li2": "Montar el sistema de traducción a mano me ha enseñado los compromisos que normalmente esconde una librería de i18n: mantener dos diccionarios sincronizados, decidir cuándo se aplica la traducción para que no haya parpadeo de contenido sin traducir, y nombrar las claves de forma consistente entre páginas.",
    "pf.balance.gains.li3": "Usar Docker para el entorno de desarrollo local, aunque el sitio final no se despliega en contenedores, me ha servido para practicar el mismo flujo que uso en proyectos con más piezas.",
    "pf.balance.different.h3": "Qué haría distinto",
    "pf.balance.different.li1": "Al no tener paso de build, la cabecera, el pie y el <head> se repiten literalmente en las nueve páginas, así que cambiar algo común implica ir página por página. Si empezara de nuevo, valoraría un pequeño paso de compilación (o un script propio) solo para ensamblar esas partes comunes sin perder el despliegue estático.",
    "pf.balance.different.li2": "Las claves de traducción y los nombres de clases CSS por página han ido saliendo sobre la marcha, según construía cada página. Con el sitio ya grande se nota que no seguían una convención pensada desde el principio. La definiría antes de escribir la primera página.",
    "pf.balance.different.li3": "Todo lo he probado a mano, cambiando el idioma, el tema y el tamaño de ventana en el navegador. Con más páginas y componentes compartidos, un par de comprobaciones automáticas, aunque fueran simples, darían más confianza al tocar código común como script.js.",
    "pf.balance.back": "‹ Volver a Proyectos",

    "tk.title": "Tokimori · José Carlos Ruiz Sánchez",
    "tk.eyebrow": "Proyectos · Detalle del proyecto",
    "tk.h1": "Tokimori",
    "tk.lead": "Aplicación web full-stack para gestionar una colección personal de elementos con seguimiento de tiempo, notas en Markdown, checklists y un lienzo visual por elemento. Construida sobre una arquitectura de 6 microservicios en Node.js/TypeScript tras un API Gateway (nginx), con frontend en React 19 y despliegue completo con Docker Compose.",
    "tk.hero.imgAlt": "Imagen del proyecto Tokimori",
    "tk.toc.context": "Contexto",
    "tk.toc.description": "Descripción",
    "tk.toc.decisions": "Decisiones técnicas",
    "tk.toc.architecture": "Arquitectura y stack",
    "tk.toc.balance": "Balance",
    "tk.context.title": "Contexto del proyecto",
    "tk.context.type.dt": "Tipo",
    "tk.context.type.dd": "Proyecto personal",
    "tk.context.period.dt": "Periodo",
    "tk.context.period.dd": "Febrero 2026 – Agosto 2026",
    "tk.context.status.dt": "Estado",
    "tk.context.status.dd": "Finalizado",
    "tk.context.stack.dt": "Stack principal",
    "tk.context.stack.dd": "React 19 + Node.js/Express + MySQL, 6 microservicios tras un API Gateway (nginx), con Docker Compose",
    "tk.context.code.dt": "Código",
    "tk.context.code.dd": "Repositorio privado, disponible bajo petición.",
    "tk.context.demo.dt": "Demo",
    "tk.context.demo.dd": "Ver vídeo en YouTube",
    "tk.context.origin.h3": "Cómo surgió",
    "tk.context.origin.p": "La razón principal es la falta de aplicaciones que permitan organizar correctamente toda la información combinando notas de texto, checklists y un canvas visual que deje estructurarlo todo de esa manera. La mayoría de las apps se centran en un aspecto más plano: solo notas, solo checklists o solo seguimiento de tiempo, sin conectarlo todo en un mismo espacio visual. A la vez, quería un proyecto lo bastante grande como para poner en práctica un stack completo: autenticación, una arquitectura de microservicios, un frontend con estado complejo (temporizadores persistentes, canvas con undo/redo, drag & drop) y un despliegue reproducible con Docker.",
    "tk.context.video.h3": "Vídeo de demostración",
    "tk.desc.title": "Descripción del proyecto",
    "tk.desc.what.h3": "Qué es",
    "tk.desc.what.p": "El núcleo de Tokimori es el canvas: un lienzo visual por elemento donde se combinan notas, checklists, imágenes y formas de forma libre. Alrededor de él, la aplicación permite organizar cualquier tipo de colección o proyecto personal (videojuegos, libros, series, estudios o lo que haga falta), con notas de texto, checklists con tareas anidadas y seguimiento de tiempo, además de estadísticas globales y logros desbloqueables.",
    "tk.desc.includes.h3": "Qué incluye",
    "tk.desc.includes.li1": "Diseñé una arquitectura de 6 microservicios (auth, items, colección, notas, objetivos/canvas, sesiones) en Node.js + Express 5 + TypeScript, cada uno con su responsabilidad y base de datos MySQL compartida (8 tablas).",
    "tk.desc.includes.li2": "Implementé un API Gateway con nginx como único punto de entrada público, que enruta por path al frontend y a cada servicio. Los servicios internos no son accesibles desde fuera de la red Docker.",
    "tk.desc.includes.li3": "Autenticación con JWT (tokens de 7 días) sobre cookies secure, hashing con bcrypt, y endurecimiento con helmet, rate limiting y CORS configurable.",
    "tk.desc.includes.li4": "Desarrollé un canvas visual por elemento con la HTML5 Canvas API sin librerías: dibujo libre, formas, imágenes y texto, con arrastre, redimensionado y rotación, historial de deshacer/rehacer y control de capas (z-index).",
    "tk.desc.includes.li5": "Frontend en React 19 + Vite 7 + React Router 7 + TypeScript, con React Compiler, CSS Modules, sistema de i18n propio (es/en) e interfaz con tema claro/oscuro/automático y color de acento configurable.",
    "tk.desc.includes.li6": "Creé utilidades a medida: drag & drop con animaciones FLIP (hook useFlipList), render de Markdown propio, temporizador flotante persistente entre páginas y notificaciones del navegador.",
    "tk.desc.includes.li7": "Panel de estadísticas globales (horas totales, racha de días, gráfico de 7 días), sistema de logros desbloqueables, panel de administración y cuenta demo.",
    "tk.desc.includes.li8": "Testing con Vitest + Testing Library (frontend) y Jest + Supertest (backend). Contenerización completa con Docker Compose, separando la configuración de producción (frontend compilado servido por nginx) y un override de desarrollo (Vite hot-reload).",
    "tk.decisions.title": "Decisiones técnicas",
    "tk.decisions.p": "Las decisiones técnicas principales y por qué las tomé:",
    "tk.decisions.li1": "API Gateway como único punto de entrada: en vez de exponer cada microservicio con su propio puerto, nginx centraliza el enrutado por prefijo de ruta. Simplifica el CORS, oculta la topología interna y hace que el despliegue en producción solo necesite abrir un puerto.",
    "tk.decisions.li2": "División en microservicios por dominio: autenticación, catálogo, colección, notas, objetivos/canvas y sesiones viven en servicios separados. No lo hice por escala. Quería practicar la separación por dominios y la comunicación entre servicios independientes.",
    "tk.decisions.li3": "Imágenes vía Imgur en lugar de subida propia. La primera versión permitía subir imágenes al servidor, pero lo sustituí por enlaces directos de Imgur para no tener que gestionar almacenamiento, copias de seguridad ni límites de tamaño de archivo.",
    "tk.decisions.li4": "Un docker-compose, dos entornos: docker-compose.yml define la configuración de producción (frontend ya compilado, NODE_ENV=production, MySQL sin exponer) y docker-compose.override.yml añade solo las diferencias de desarrollo (hot-reload, volúmenes montados). Docker Compose carga el override automáticamente si no se indica -f. Así no duplico configuración y desarrollo y producción se parecen lo máximo posible.",
    "tk.decisions.li5": "JWT con expiración de 7 días: la autenticación es sin estado, cada petición lleva su token y ningún microservicio necesita compartir sesión con otro. La cookie se marca secure en producción para viajar solo por HTTPS.",
    "tk.decisions.li6": "Estado local con sincronización por eventos: el temporizador flotante persiste en localStorage y se sincroniza entre pestañas y componentes con un CustomEvent propio (tokimori_timer_change), en lugar de añadir una librería de gestión de estado global solo para un caso de uso puntual.",
    "tk.decisions.li7": "Sistema de idiomas propio: la interfaz en español/inglés usa un contexto de React y un diccionario de claves hecho a medida, sin librerías externas de i18n, ya que las necesidades del proyecto (dos idiomas, sin pluralización compleja) no lo justificaban.",
    "tk.arch.title": "Arquitectura y stack",
    "tk.arch.frontend.h3": "Frontend",
    "tk.arch.backend.h3": "Backend",
    "tk.arch.infra.h3": "Infraestructura",
    "tk.arch.detail.p": "Todo el tráfico entra por un API Gateway (nginx) que es el único puerto publicado al exterior. Por detrás, seis microservicios en Node.js + Express + TypeScript, cada uno con su propia responsabilidad, y una base de datos MySQL compartida. Los microservicios no son alcanzables directamente desde fuera de la red de Docker: el gateway enruta cada petición según el prefijo de la ruta.",
    "tk.arch.detail.li1": "gateway: punto de entrada único. Enruta cada petición al frontend o al microservicio correspondiente según el prefijo de la ruta.",
    "tk.arch.detail.li2": "authenticationService (/auth): registro, login y gestión de tokens JWT.",
    "tk.arch.detail.li3": "gameService (/items): CRUD del catálogo de elementos.",
    "tk.arch.detail.li4": "libraryService (/collection): colección del usuario (favoritos, pins y horas).",
    "tk.arch.detail.li5": "notesService (/notes): notas por elemento.",
    "tk.arch.detail.li6": "objectivesService (/objectives, /canvas): checklists, tareas y canvas.",
    "tk.arch.detail.li7": "sessionService (/sessions): registro de sesiones de tiempo.",
    "tk.balance.title": "Balance",
    "tk.balance.lead": "Tokimori está terminado. Los últimos commits fueron para pulirlo antes de enseñarlo: cuenta demo, documentación de la API, panel de administración, tests en los 6 microservicios, ajustes para desplegarlo en la nube y una última corrección de errores. Ahora mismo no está desplegado en ninguna plataforma, pero está preparado para hacerlo cuando lo decida. Lo que más valoro es haber diseñado y terminado yo solo un backend de 6 microservicios (con su gateway, autenticación JWT y tests) junto a un frontend con partes nada triviales, como un editor de canvas con capas, deshacer/rehacer y animaciones FLIP. Es el proyecto personal más ambicioso que he terminado hasta ahora, y ya tengo en mente otros más grandes.",
    "tk.balance.gains.h3": "Qué me llevo",
    "tk.balance.gains.li1": "La parte más compleja fue el canvas: mantener un historial de deshacer/rehacer coherente con capas (z-index), rotación, redimensionado y distintos tipos de elementos (notas, checklists, imágenes, formas, texto y trazos libres) sin una librería de canvas de terceros.",
    "tk.balance.gains.li2": "También supuso un aprendizaje real coordinar seis servicios independientes que comparten base de datos sin acoplarlos innecesariamente entre sí.",
    "tk.balance.different.h3": "Qué haría distinto",
    "tk.balance.different.li1": "Volviendo a empezar, no elegiría microservicios: montaría un monolito modular en Node.js/Express/TypeScript con los mismos límites de dominio (auth, items, colección, notas, objetivos/canvas, sesiones), pero como módulos internos, cada uno con su propio router y capa de servicio, dentro de un único proceso. Los seis servicios ya comparten una misma base de datos MySQL, así que en la práctica no hay aislamiento de datos ni escalado independiente entre ellos: el proyecto asumió el coste operativo de los microservicios (API Gateway, red Docker, llamadas HTTP entre servicios, seis contenedores que levantar y depurar por separado) sin la principal ventaja que los justificaría. Un monolito modular habría dado la misma separación de responsabilidades en el código, con un despliegue de un solo contenedor, sin llamadas de red internas y con una depuración mucho más simple. Si algún módulo necesitara escalar o desplegarse aparte más adelante, se podría extraer en ese momento.",
    "tk.balance.next.h3": "Próximos pasos",
    "tk.balance.next.p": "El siguiente paso es aprovechar la arquitectura de microservicios para permitir plugins personalizados: módulos independientes que cada usuario pueda activar según sus propias necesidades, sin tocar el resto de la aplicación.",
    "tk.balance.back": "‹ Volver a Proyectos",

    "con.title": "Contacto · José Carlos Ruiz Sánchez",
    "con.eyebrow": "Contacto",
    "con.h1": "Contacto",
    "con.lead": "Cómo contactar conmigo, cuándo puedo incorporarme y respuestas a las preguntas más habituales.",
    "con.action.call": "Llámame",
    "con.action.email": "Enviar un correo",
    "con.action.cv": "Descargar CV en español (PDF)",
    "con.action.cvEn": "Descargar CV en inglés (PDF)",
    "con.toc.channels": "Canales de contacto",
    "con.toc.availability": "Disponibilidad",
    "con.toc.faq": "Preguntas frecuentes",
    "con.channels.title": "Canales de contacto",
    "con.channels.desc": "Los mismos datos que aparecen en el pie de esta web y en mi CV. Para una primera toma de contacto prefiero una llamada.",
    "con.channel.phone": "Teléfono",
    "con.channel.email": "Correo electrónico",
    "con.channel.linkedin": "LinkedIn",
    "con.channel.github": "GitHub",
    "con.avail.title": "Disponibilidad",
    "con.avail.desc": "La misma que figura en mi currículum, con algo más de detalle.",
    "con.avail.start.h3": "Incorporación inmediata",
    "con.avail.start.p": "Puedo empezar sin periodo de preaviso. Actualmente curso el Máster en Ingeniería Informática, compatible con jornada laboral completa.",
    "con.avail.mode.h3": "Modalidad flexible",
    "con.avail.mode.p": "Presencial, híbrida o remota, según lo que necesite el equipo. Ya he trabajado en remoto con coordinación diaria por Git y revisiones de código durante mis prácticas.",
    "con.avail.mobility.h3": "Movilidad geográfica",
    "con.avail.mobility.p": "Estoy en Málaga y puedo trasladarme a cualquier punto de España para un puesto presencial o híbrido.",
    "con.avail.hours.h3": "Jornada e idioma de trabajo",
    "con.avail.hours.p": "Disponible a jornada completa. Trabajo en español y tengo un nivel B2 de inglés (Cambridge First) para documentación y comunicación técnica.",
    "con.faq.title": "Preguntas frecuentes",
    "con.faq.desc": "Las dudas que suelen salir en una primera conversación.",
    "con.faq.q1.h3": "¿Cuál es la mejor forma de contactarte?",
    "con.faq.q1.p": 'Una llamada al <a href="tel:+34608257574">+34 608 25 75 74</a>. Si lo prefieres por escrito, escríbeme a <a href="mailto:josecarlosruizsan@gmail.com">josecarlosruizsan@gmail.com</a>.',
    "con.faq.q2.h3": "¿Estás disponible ya? ¿Cómo lo compaginas con el Máster?",
    "con.faq.q2.p": "Sí: incorporación inmediata y a jornada completa. El Máster en Ingeniería Informática que curso es 100% online y no exige asistencia presencial, así que puede organizarse fuera del horario laboral y no interfiere con un puesto presencial, híbrido o remoto.",
    "con.faq.q3.h3": "¿Trabajas en remoto?",
    "con.faq.q3.p": "Sí, y también presencial o híbrido. Ya he trabajado en remoto con un equipo repartido, coordinándonos por Git y revisiones de código.",
    "con.faq.q4.h3": "¿Puedo ver tu código?",
    "con.faq.q4.p": 'Parte está publicada en <a href="https://github.com/jrs407">github.com/jrs407</a>, junto al código de este portfolio. Algunos proyectos tienen el repositorio privado, pero puedo darte acceso de lectura si me lo pides por teléfono o correo. En <a href="proyectos.html">Proyectos</a> tienes el contexto de cada uno.',
    "con.faq.q5.h3": "¿Tienes CV en PDF?",
    "con.faq.q5.p": 'Sí: descárgalo <a href="assets/cv/CV - Jose Carlos Ruiz Sanchez.pdf" download>en español</a> o <a href="assets/cv/CV_Jose_Carlos_Ruiz_Sanchez_EN.pdf" download>en inglés</a>. Esta web amplía cada sección del CV con más contexto.',
    "con.note": "<strong>Nota:</strong> la disponibilidad de esta página está actualizada a octubre de 2026. Si algo ha cambiado o necesitas una referencia, escríbeme y te respondo el mismo día laborable."
  },
  en: {
    "index.title": "José Carlos Ruiz Sánchez · Full-stack Developer",
    "skip": "Skip to content",
    "themeToggle": "Toggle theme",
    "navToggle": "Open menu",
    "zoom.open": "Enlarge image",
    "zoom.close": "Close enlarged image",
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.experience": "Work experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.role": "Full-stack Developer",
    "hero.imageAlt": "Profile picture",
    "hero.introTitle": "About me",
    "hero.introText":
      "Full-stack developer. During my internship I built, as part of a team and across backend and frontend, an interactive map showing the devices connected to the campus wifi network at the University of Almería, with data refreshed every 2 minutes through automated ingestion. Outside academia I build my own projects on personal initiative, among them Tokimori, a full-stack web app with a microservice architecture.",
    "hero.contact": "Get in touch",
    "hero.downloadCv": "Download CV (Spanish)",
    "hero.downloadCvEn": "Download CV (English)",
    "section.projects": "Projects",
    "section.experience": "Work experience",
    "section.skills": "Technical Skills",
    "carousel.prev": "Previous",
    "carousel.next": "Next",
    "projects.item1": "Portfolio",
    "projects.item2": "Tokimori",
    "projects.img1": "Portfolio project image",
    "projects.img2": "Tokimori project image",
    "experience.item1": "Full-stack developer",
    "experience.img1": "Image of the full-stack developer role at the University of Almería",
    "cta.viewProjects": "View projects",
    "cta.viewExperience": "View experience",
    "cta.viewSkills": "View skills",
    "footer.email": 'Email: <a href="mailto:josecarlosruizsan@gmail.com">josecarlosruizsan@gmail.com</a>',
    "footer.phone": 'Phone: <a href="tel:+34608257574">+34 608257574</a>',

    "hab.title": "Skills · José Carlos Ruiz Sánchez",
    "hab.eyebrow": "Skills",
    "hab.h1": "Skills",
    "hab.lead": "My technical, academic and soft skills plus languages, grouped the same way as on my résumé. For each one I note where I've used it.",
    "hab.toc.tech": "Technical skills",
    "hab.toc.academic": "Academic skills",
    "hab.toc.soft": "Transferable skills",
    "hab.toc.lang": "Languages",
    "hab.tech.title": "Technical skills",
    "hab.tech.desc": "Tools and languages I use regularly. Each card says which project I used them in.",
    "hab.card.lang.h3": "Programming languages",
    "hab.card.lang.p": "I mainly work with JavaScript and TypeScript, on both backend and frontend, and use TypeScript's static typing to model the domain and catch errors before running the code. I also program in Java. I use Python for data and AI models, and R for statistical analysis.",
    "hab.card.lang.applied": "<span>Where I've applied it</span> Internship API in JavaScript/TypeScript, predictive burnout model in Python, and Auscultify microservices combining Python and JavaScript.",
    "hab.card.fw.h3": "Frameworks and technologies",
    "hab.card.fw.p": "I build REST APIs with Node.js and Express.js, and interfaces with React and Next.js (server-side rendering and dynamic routes). In React projects I bundle with Vite, handle navigation with React Router and scope styles with CSS Modules. For drawing and graphical interaction I use the HTML5 Canvas API without libraries. In Java I work with Spring, and I also build interfaces with Angular. I use Spark for distributed processing across several nodes.",
    "hab.card.fw.applied": "<span>Where I've applied it</span> Frontend of the interactive campus map in Next.js and React, API in Node.js + Express.js during the internship, and deployment of a model on a node cluster with Spark in the burnout Predictor. In Tokimori, a React 19 frontend with Vite and React Router and a per-item visual editor built with the HTML5 Canvas API.",
    "hab.card.db.h3": "Databases",
    "hab.card.db.p": "In SQL I model relational schemas, write queries and look after indexes (MySQL and PostgreSQL). With the PostGIS extension I work on spatial queries over geographic data. On the NoSQL side I work with MongoDB.",
    "hab.card.db.applied": "<span>Where I've applied it</span> Storing and spatially querying ~3,000 rows every 2 minutes in PostgreSQL/PostGIS during the internship, and MySQL as Tokimori's database.",
    "hab.card.auto.h3": "Process automation",
    "hab.card.auto.p": "I design n8n workflows to connect services, APIs and databases and to run scheduled ingestion jobs without having to write and maintain a dedicated service.",
    "hab.card.auto.applied": "<span>Where I've applied it</span> Campus geospatial telemetry pipeline: automated ingestion every 2 minutes into PostGIS.",
    "hab.card.devops.h3": "DevOps and deployment",
    "hab.card.devops.p": "I containerize applications with Docker, orchestrate several services locally with docker-compose and use the same environment for development and production. I serve applications behind Nginx as web server, reverse proxy and API Gateway, so there is a single public entry point and internal services stay isolated in the container network.",
    "hab.card.devops.applied": "<span>Where I've applied it</span> Docker deployment of the internship application, served with Nginx. This portfolio also has a Dockerfile and docker-compose. In Tokimori, docker-compose orchestrates six microservices behind an Nginx API Gateway, with a production configuration and a development override.",
    "hab.card.vcs.h3": "Version control",
    "hab.card.vcs.p": "I use Git in a collaborative workflow: feature branches, change reviews, conflict resolution and a readable commit history.",
    "hab.card.vcs.applied": "<span>Where I've applied it</span> In all my projects. During the internship I worked on code inherited from another developer and coordinated with my supervisor through branches and code reviews.",
    "hab.card.test.h3": "Testing",
    "hab.card.test.p": "I write automated tests in JavaScript with Jest and Vitest, both for Node.js APIs (unit and integration tests on the endpoints with Supertest) and for React interfaces with Testing Library (component rendering and user interaction), and in Java with JUnit.",
    "hab.card.test.applied": "<span>Where I've applied it</span> Testing the Node.js API and the React interface during the internship (professional setting), and in Tokimori, Vitest with Testing Library on the frontend and Jest with Supertest on the backend.",
    "hab.card.sec.h3": "Authentication and web security",
    "hab.card.sec.p": "I implement JWT authentication over secure cookies with bcrypt password hashing, and protect APIs with helmet, rate limiting and a configurable CORS policy. That way internal services aren't exposed and passwords are never stored in plain text.",
    "hab.card.sec.applied": "<span>Where I've applied it</span> Tokimori: login with 7-day JWT tokens over secure cookies, bcrypt hashing, and helmet, rate limiting and CORS on all six microservices. Only the API Gateway can be reached from outside the Docker network.",
    "hab.card.testgrado.h3": "Software testing during my Bachelor's",
    "hab.card.testgrado.p": "During my Bachelor's Degree in Computer Engineering I practised software verification by validating operations on Cassandra databases. This is where I learned to decide what needs testing and to use code coverage as a quality criterion.",
    "hab.card.testgrado.applied": "<span>Where I've applied it</span> Only in Bachelor's Degree courses in Computer Engineering (University of Almería). I haven't used it in a professional setting yet.",
    "hab.card.bi.h3": "Data analysis and Business Intelligence",
    "hab.card.bi.p": "I build reports and dashboards in Power BI: I import and prepare the data, define indicators (KPIs) and show them in charts to track how a business is doing.",
    "hab.card.bi.applied": "<span>Where I've applied it</span> In Bachelor's Degree courses in Computer Engineering. I haven't used it in a professional setting yet.",
    "hab.tag.dashboards": "Dashboards",
    "hab.tag.dataViz": "Data visualization",
    "hab.tag.apiIntegration": "API integration",
    "hab.tag.scheduledIngestion": "Scheduled ingestion",
    "hab.tag.reproducibleEnvs": "Reproducible environments",
    "hab.tag.featureBranches": "Feature branches",
    "hab.tag.collaboration": "Collaborative work",
    "hab.tag.unitTests": "Unit tests",
    "hab.tag.integrationTests": "Integration tests",
    "hab.tag.rateLimiting": "Rate limiting",
    "hab.academic.title": "Academic skills",
    "hab.academic.desc": "What I've learned in the Bachelor's Degree in Computer Engineering (University of Almería, 2021-2026, with a double specialization in Software Engineering and Information Systems), in the Master's Degree in Computer Engineering specializing in Big Data, and in a research group.",
    "hab.academic.se.h3": "Software Engineering",
    "hab.academic.se.p": "Requirements analysis and specification, design patterns, architectures (including microservices), UML modeling and quality and maintainability criteria.",
    "hab.academic.is.h3": "Information Systems",
    "hab.academic.is.p": "Conceptual data modeling, business processes and integration between heterogeneous systems. It helps me understand what the people who will use a system actually need.",
    "hab.academic.bd.h3": "Big Data (Master's specialization)",
    "hab.academic.bd.p": "Distributed processing with Spark, data pipeline design, cluster computing and how to scale when the data doesn't fit on a single machine.",
    "hab.academic.ml.h3": "Modeling and machine learning",
    "hab.academic.ml.p": "Building, training and evaluating predictive models in Python and designing recommendation algorithms. Applied in the burnout Predictor and in Auscultify.",
    "hab.academic.consulting.h3": "Consulting, information security and regulatory compliance",
    "hab.academic.consulting.p": 'ISO/IEC 27001 (information security) and the ISO 9000 family (quality management), risk analysis, contingency plans, GDPR compliance and performance metrics. I put it into practice with a real company in the Security and Regulatory Compliance course. More detail on <a href="formacion.html#consultoria">Education</a>.',
    "hab.academic.research.h3": "Scientific method and research",
    "hab.academic.research.p": "I work in a research group at the UAL: hypothesis formulation, controlled experimentation, measurement of results and iteration based on the data obtained.",
    "hab.academic.comm.h3": "Technical communication and defense",
    "hab.academic.comm.p": "Writing technical reports and oral defense before a committee. My Bachelor's thesis (Auscultify) received a grade of 9.4/10.",
    "hab.academic.algo.h3": "Algorithmic thinking and complexity analysis",
    "hab.academic.algo.p": "Breaking problems down, choosing data structures and evaluating the cost of a solution before implementing it.",
    "hab.soft.title": "Transferable skills",
    "hab.soft.desc": 'The ones listed as "Skills" on my résumé, each with a concrete example.',
    "hab.soft.team.h3": "Teamwork",
    "hab.soft.team.p": "During the internship I worked within a research group (ACG), coordinating daily with my supervisor: technical decisions discussed and validated together, code reviews and frequent meetings to adjust scope. I also picked up another developer's frontend, so I had to understand and continue someone else's work.",
    "hab.soft.analytical.h3": "Analytical thinking",
    "hab.soft.analytical.p": "Before solving a problem I break it into parts I can measure. I apply this mostly when working with data and predictive models.",
    "hab.soft.time.h3": "Time management",
    "hab.soft.time.p": "I combined the Master's, which is online, with my position at the Applied Computing Group, alongside personal projects like Tokimori, prioritizing tasks and setting realistic deadlines. The Master's is compatible with a full-time job.",
    "hab.soft.learning.h3": "Continuous learning",
    "hab.soft.learning.p": "I learned n8n, PostGIS, Spark and Next.js on my own, as each project needed them.",
    "hab.lang.title": "Languages",
    "hab.lang.desc": "Communication level in technical and professional settings.",
    "hab.lang.es.name": "Spanish",
    "hab.lang.es.level": "Native",
    "hab.lang.es.p": "Mother tongue.",
    "hab.lang.en.name": "English",
    "hab.lang.en.level": "B2 · Cambridge First (FCE)",
    "hab.lang.en.p": "Fluent reading of documentation and technical specifications, and written and spoken communication in professional settings.",
    "hab.lang.note": '<strong>Note:</strong> almost everything on this page has been used in a project from <a href="proyectos.html">Projects</a> or in my <a href="experiencia.html">Work experience</a>. When I\'ve only worked with something at university, the card says so.',

    "for.title": "Education · José Carlos Ruiz Sánchez",
    "for.eyebrow": "Education",
    "for.h1": "Education",
    "for.lead": "My studies at the University of Almería, my Bachelor's thesis, the consulting and compliance courses, and my language certifications. I also explain why the Bachelor's and Master's dates overlap on my CV.",
    "for.toc.degrees": "Degrees",
    "for.toc.tfg": "Bachelor's thesis",
    "for.toc.consulting": "Consulting and compliance",
    "for.toc.overlap": "Bachelor and Master overlap",
    "for.toc.certs": "Certifications",
    "for.degrees.title": "Degrees",
    "for.degrees.desc": "All my university education is from the University of Almería. I started the Master's before formally finishing the Bachelor's.",
    "for.master.period": "Since 2025 · in progress",
    "for.master.h3": "Master's Degree in Computer Engineering",
    "for.master.place": "University of Almería",
    "for.master.p": "Big Data specialization (large-scale infrastructure and databases, analysis of large data volumes and distributed processing), one of the master's three tracks alongside Internet of Things and web/mobile development. It is 100% online and compatible with a full-time job.",
    "for.master.tag1": "Big Data specialization",
    "for.master.tag2": "In progress",
    "for.grado.period": "2021-2026",
    "for.grado.h3": "Bachelor's Degree in Computer Engineering",
    "for.grado.place": "University of Almería",
    "for.grado.p": "Double specialization in Software Engineering and Information Systems. Training in software analysis and design, architectures, databases, information-systems modeling and working on team projects.",
    "for.grado.tag1": "Software Engineering specialization",
    "for.grado.tag2": "Information Systems specialization",
    "for.tfg.title": "Bachelor's thesis",
    "for.tfg.desc": "The Bachelor's Degree ends with a final thesis defended before a committee.",
    "for.tfg.h3": "Auscultify",
    "for.tfg.grade": "Grade: 9.4 / 10",
    "for.tfg.p": "An individual project. It involved data modeling, microservices and a recommendation algorithm, plus writing the technical report and the oral defense.",
    "for.tfg.p2": "I defended it in the February 2026 session. That's why the Bachelor's is listed as completed in 2026, even though the rest of the courses were passed earlier.",
    "for.consulting.title": "Consulting, security and regulatory compliance",
    "for.consulting.desc": "During my Bachelor's I took several courses geared towards IT consulting: information security management, quality management, risk analysis and data protection. The most complete one was Security and Regulatory Compliance, which was done with a real company.",
    "for.consulting.case.h3": "Security and Regulatory Compliance",
    "for.consulting.case.grade": "Consulting project with a real company",
    "for.consulting.case.p": "In this course we carried out a complete consulting job for a real company. These were the phases:",
    "for.consulting.s1": "<strong>First contact.</strong> We got in touch with the company and asked for information about its IT infrastructure.",
    "for.consulting.s2": "<strong>Risk analysis.</strong> We analyzed the possible risks and security flaws in its infrastructure.",
    "for.consulting.s3": "<strong>Contingency plans.</strong> We prepared contingency plans setting out how to respond to an incident and how to get back to normal operations.",
    "for.consulting.s4": "<strong>GDPR.</strong> We used a GDPR compliance program and tailored it to the company.",
    "for.consulting.s5": "<strong>Performance metrics.</strong> We defined metrics to measure the company's performance.",
    "for.consulting.s6": "<strong>Reports.</strong> We delivered all the work in several reports.",
    "for.consulting.tag1": "Consulting",
    "for.consulting.tag2": "Risk analysis",
    "for.consulting.tag3": "Contingency plans",
    "for.consulting.tag4": "GDPR",
    "for.consulting.tag5": "Performance metrics",
    "for.consulting.tag6": "Reports",
    "for.consulting.case.conf": "I don't give the company's name or details of its infrastructure because the analysis covers real security flaws.",
    "for.consulting.iso27001.h3": "Information security (ISO/IEC 27001)",
    "for.consulting.iso27001.p": "How an information security management system (ISMS) is set up, how security controls are chosen based on risks and how it is maintained through continuous improvement. It's the standard used to certify an organization's security.",
    "for.consulting.iso9001.h3": "Quality management (ISO 9000 and ISO 9001)",
    "for.consulting.iso9001.p": "The ISO 9000 family of standards, with ISO 9001 as the certifiable one: process approach, management-system documentation, customer focus and continuous improvement.",
    "for.consulting.risk.h3": "Risk analysis and reliability",
    "for.consulting.risk.p": "Identifying assets, threats and vulnerabilities, estimating the likelihood and impact of each risk and choosing how to treat it, plus the study of system reliability. It's what we later applied with the real company.",
    "for.consulting.gdpr.h3": "Data protection (GDPR)",
    "for.consulting.gdpr.p": "What obligations the GDPR places on a company and how to document that it meets them. We applied it with the project's real company.",
    "for.consulting.note": '<strong>Note:</strong> with this background I can also apply for IT consulting, audit or regulatory compliance roles. My Power BI skills are on the <a href="habilidades.html#tecnicas">Skills</a> page.',
    "for.overlap.title": "Overlap between the Bachelor's and the Master's",
    "for.overlap.desc": "On my CV, the end of the Bachelor's and the start of the Master's overlap by a few months. This is why.",
    "for.overlap.i1.h3": "Enrolling in the Master's with the thesis pending",
    "for.overlap.i1.p": "I started the Master's Degree in Computer Engineering with only the credits of the Bachelor's thesis left. I enrolled with the rest of my Bachelor's record already passed, so as not to lose a full academic year.",
    "for.overlap.i2.h3": "Defending the thesis in February",
    "for.overlap.i2.p": "I defended the Bachelor's thesis in the February 2026 session. Until then the Bachelor's was recorded as unfinished despite the rest of my record being passed.",
    "for.overlap.i3.h3": "How it shows on the CV",
    "for.overlap.i3.p": "That's why my CV shows the Bachelor's ending in 2026 and the Master's starting a few months earlier.",
    "for.certs.title": "Certifications and languages",
    "for.certs.desc": "Official language certifications. My level in each language is detailed on the Skills page.",
    "for.cert.fce.h3": "Cambridge English: First (FCE)",
    "for.cert.fce.grade": "Level B2 (CEFR)",
    "for.cert.fce.p": "English certificate at CEFR level B2. I use it for reading documentation and technical specifications and for written and spoken communication in professional settings.",
    "for.note": '<strong>Note:</strong> the technical detail of what I learned in each degree is on <a href="habilidades.html">Skills</a>, and its application in real projects is on <a href="experiencia.html">Work experience</a> and <a href="proyectos.html">Projects</a>.',

    "exp.title": "Work experience · José Carlos Ruiz Sánchez",
    "exp.eyebrow": "Work experience",
    "exp.h1": "Work experience",
    "exp.lead": "My work experience in chronological order. So far it's a single position: full-stack developer at the Applied Computing Group (ACG) of the University of Almería. Each position has its own page with more detail.",
    "exp.timeline.title": "Timeline",
    "exp.timeline.desc": "My roles ordered in time. Use the search box to filter by company, role or technology, and the dropdown to change the order.",
    "exp.search.label": "Search",
    "exp.search.placeholder": "Company, role or technology",
    "exp.sort.label": "Sort",
    "exp.sort.newest": "Newest first",
    "exp.sort.oldest": "Oldest first",
    "exp.empty": "No experience matches your search.",
    "exp.item.period": "February 2026 – August 2026",
    "exp.item.h3": "Full-stack developer",
    "exp.item.place": "Applied Computing Group (ACG) · University of Almería",
    "exp.item.p": "Team build, backend and frontend, of an interactive map showing the devices connected to the campus wifi network at the University of Almería, with data refreshed every 2 minutes through automated ingestion.",
    "exp.item.b1": "Development of a backend API in Node.js with Express.js.",
    "exp.item.b2": "Frontend in Next.js: interactive map visualizing the devices connected to the wifi network over the campus plan.",
    "exp.item.b3": "Campus geospatial telemetry pipeline: ingestion of ~3,000 rows every 2 minutes automated with n8n, with storage and spatial querying in PostGIS.",
    "exp.item.b4": "Deployment on Docker.",
    "exp.item.cta": "View role detail",

    "proy.title": "Projects · José Carlos Ruiz Sánchez",
    "proy.eyebrow": "Projects",
    "proy.h1": "Projects",
    "proy.lead": "Personal projects I've built on my own, in chronological order.",
    "proy.timeline.title": "Timeline",
    "proy.timeline.desc": "My projects ordered in time. Use the search box to filter by name or technology, and the dropdown to change the order.",
    "proy.search.label": "Search",
    "proy.search.placeholder": "Project or technology",
    "proy.sort.label": "Sort",
    "proy.sort.newest": "Newest first",
    "proy.sort.oldest": "Oldest first",
    "proy.empty": "No project matches your search.",
    "proy.item1.period": "September 2026 – ongoing",
    "proy.item1.h3": "Portfolio",
    "proy.item1.place": "Personal project",
    "proy.item1.p": "This very website: a multi-page personal portfolio (About, Projects, Experience, Skills, Education and Contact) built with plain HTML, CSS and JavaScript, with no frameworks and no build step, and deployed on GitHub Pages. I made it to give context to my résumé and show in more detail what I can do.",
    "proy.item1.b1": "Nine-page site in plain HTML, CSS and JavaScript, with no frameworks or bundler.",
    "proy.item1.b2": "Bilingual (Spanish and English) with a custom i18n dictionary in JavaScript. The chosen language and theme are remembered between visits with localStorage.",
    "proy.item1.b3": "Light and dark theme that respects the system preference (prefers-color-scheme).",
    "proy.item1.b4": "Hand-built interactive components: drag-to-scroll carousels, timelines with search and sorting, and a responsive menu.",
    "proy.item1.b5": "Scroll-reveal animations with IntersectionObserver.",
    "proy.item1.b6": "Care for accessibility (skip link, ARIA roles, aria-expanded) and SEO (meta description, Open Graph, Twitter Card, canonical) on every page.",
    "proy.item1.b7": "Local development environment with Docker and browser-sync with live reload.",
    "proy.item1.cta": "View project detail",
    "proy.item2.period": "February 2026 – August 2026",
    "proy.item2.h3": "Tokimori",
    "proy.item2.place": "Personal project · Full-stack · Microservice architecture",
    "proy.item2.p": "Full-stack web app for managing a personal collection of items with time tracking, Markdown notes, checklists and a visual canvas per item. Built on a 6-microservice architecture in Node.js/TypeScript behind an API Gateway (nginx), with a React 19 frontend and full deployment with Docker Compose.",
    "proy.item2.b1": "Designed a 6-microservice architecture (auth, items, collection, notes, goals/canvas, sessions) in Node.js + Express 5 + TypeScript, each with its own responsibility and a shared MySQL database (8 tables).",
    "proy.item2.b2": "Implemented an API Gateway with nginx as the single public entry point, with path-based routing to the frontend and each service. Internal services can't be reached from outside the Docker network.",
    "proy.item2.b3": "Authentication with JWT (7-day tokens) over secure cookies, hashing with bcrypt, and hardening with helmet, rate limiting and configurable CORS.",
    "proy.item2.b4": "Built a visual per-item canvas with the HTML5 Canvas API and no libraries: freehand drawing, shapes, images and text, with dragging, resizing and rotation, undo/redo history and layer control (z-index).",
    "proy.item2.b5": "Frontend in React 19 + Vite 7 + React Router 7 + TypeScript, with React Compiler, CSS Modules, a custom i18n system (es/en) and a UI with light/dark/auto theme and a configurable accent color.",
    "proy.item2.b6": "Created custom utilities: drag & drop with FLIP animations (useFlipList hook), a custom Markdown renderer, a floating timer that persists across pages, and browser notifications.",
    "proy.item2.b7": "Global statistics panel (total hours, day streak, 7-day chart), unlockable achievements system, admin panel and demo account.",
    "proy.item2.b8": "Testing with Vitest + Testing Library (frontend) and Jest + Supertest (backend). Full containerization with Docker Compose, separating the production config (compiled frontend served by nginx) from a development override (Vite hot-reload).",
    "proy.item2.cta": "View project detail",

    "uat.title": "Full-stack developer at the Applied Computing Group · José Carlos Ruiz Sánchez",
    "uat.eyebrow": "Work experience · Role detail",
    "uat.h1": "Full-stack developer at the Applied Computing Group (ACG)",
    "uat.lead": "Full-stack development internship at the Applied Computing Group of the University of Almería, working on UAL Trace: a web application that shows on a campus map where people gather, based on the devices connected to the wifi network, with data refreshed every 2 minutes. Starting from a frontend prototype that ran on simulated data, I built the rest of the platform: data ingestion, the geospatial database, the API, wiring the frontend to real data, new visualization layers, the reporting module and the deployment.",
    "uat.hero.imgAlt": "Screenshot of the project built at the Applied Computing Group (ACG)",
    "uat.toc.context": "Context",
    "uat.toc.description": "What the job involved",
    "uat.toc.contribution": "My contribution",
    "uat.toc.architecture": "Architecture and stack",
    "uat.toc.balance": "Takeaways",
    "uat.context.title": "Role context",
    "uat.context.org.dt": "Organization",
    "uat.context.org.dd": "Applied Computing Group (ACG) · University of Almería",
    "uat.context.role.dt": "Role",
    "uat.context.role.dd": "Full-stack developer",
    "uat.context.period.dt": "Period",
    "uat.context.period.dd": "February – August 2026 (about 6 months)",
    "uat.context.hours.dt": "Commitment",
    "uat.context.hours.dd": "5 hours a day, Monday to Friday (25 h/week)",
    "uat.context.mode.dt": "Arrangement",
    "uat.context.mode.dd": "On-site until early June and remote for the rest of the period (slightly more than half of the time was on-site)",
    "uat.context.link.dt": "Type of engagement",
    "uat.context.link.dd": "Extracurricular company internship, outside teaching hours, formalized through the University of Almería",
    "uat.context.origin.h3": "How it came about",
    "uat.context.origin.p": "It came out of an informal conversation with a lecturer from the group itself (ACG): after one class they raised the idea of taking a project forward. The proposal interested me, we gradually shaped it and it ended up being formalized as an extracurricular company internship.",
    "uat.desc.title": "What the job involved",
    "uat.desc.idea.h3": "The starting idea",
    "uat.desc.idea.p": "The goal was a web application that showed on a campus map where people gather, using the university's own wifi network as the sensor: the Cisco Meraki infrastructure estimates the position of each connected device from the access points that detect it. The map is overlaid with a hexagon grid colored by the number of devices, from yellow (few people) to red (many), and in live mode it refreshes every 2 minutes, which is the window the data is aggregated over.",
    "uat.desc.purpose.h3": "What it was for",
    "uat.desc.purpose.p": "That information opens up plenty of analysis: which buildings and floors are busiest at any given moment, how long people stay on each floor, how many people per square meter each building holds, or which trips between buildings are most common.",
    "uat.desc.built.h3": "What was built",
    "uat.desc.built.p1": "The inherited frontend had the hexagon grid, the building views and some early charts, but it ran on simulated data and local files, with no backend. I wired it to real data and, on the same map, added several visualization layers:",
    "uat.desc.built.li1": "<strong>Density.</strong> A continuous heatmap, derived from the same grid, as an alternative to the hexagons.",
    "uat.desc.built.li2": "<strong>Building.</strong> Each building is colored from yellow to dark red according to its total occupancy.",
    "uat.desc.built.li3": "<strong>Routes.</strong> Flows of people between buildings, drawn as arrowed arcs whose color gets stronger the more people make the trip. They are computed over a 2-hour window by rebuilding each device's sequence of positions and requiring a minimum stay in each building, so that wifi positioning jumps at the border between two buildings are not counted as trips. I also tried a variant that traced routes along the actual streets (OSRM) and eventually dropped it.",
    "uat.desc.built.li4": "<strong>Building detail.</strong> Opening a building shows the floor plan of each floor with the aggregated position of people and how many people are on each one.",
    "uat.desc.built.li5": "<strong>History mode.</strong> You pick a date and time and see that exact moment, with a <em>play</em> button that replays how it evolved over time. It works with every layer, routes included.",
    "uat.desc.built.p2": "I also built a statistics and reporting module: global charts (distribution by building, occupancy trend and busiest areas) and per-building charts (occupancy by floor, density per m² and dwell time), a “Key insights” panel with conclusions computed from the data, and PDF export of a global report and a per-building report.",
    "uat.desc.built.p3": "Underneath, ingestion is automated with n8n, the data lives in a PostGIS database designed for this use case, and a Node.js API with Express and TypeScript computes all of those metrics.",
    "uat.contrib.title": "My contribution",
    "uat.contrib.lead": "Apart from the initial frontend prototype, which I inherited, I built the rest of the project myself: the data model, ingestion, the backend, the frontend integration, the evolution of the frontend itself and the deployment. My supervisor in the group followed the work in regular meetings, where I talked through the approach to the major decisions.",
    "uat.contrib.frontend.h3": "Frontend",
    "uat.contrib.frontend.p": "I inherited from a previous developer a Next.js prototype with the hexagon grid, the building views and some charts on simulated data. I connected it to the real API, finished the half-done parts, removed dead code and old versions, and kept developing it: the density, building and routes layers, the history mode with playback, the reporting and PDF module, mobile support and many loading optimizations. Today, around 80% of the frontend code is mine.",
    "uat.contrib.decisions.h3": "Technical decisions",
    "uat.contrib.decisions.li1": "<strong>Database.</strong> I chose PostgreSQL with PostGIS because the problem is geospatial: buildings with their real footprint, access points, positions and a hexagon grid. I designed the model (12 tables with soft deletes and spatial indexes) and extended it through migrations, including indexes tailored to time-window queries.",
    "uat.contrib.decisions.li2": "<strong>Backend.</strong> Node.js with Express and TypeScript. I designed a REST API of around thirty operations, documented with OpenAPI and Swagger UI, and covered it with more than 200 tests using Vitest and Supertest that mock the database, as a safety net for refactors.",
    "uat.contrib.decisions.li3": "<strong>Data ingestion.</strong> n8n, so the flows could be built and adjusted quickly. The Meraki network sends observations to a webhook. The flow groups them by device, drops movements under 2 meters, pseudonymizes identifiers with an HMAC-SHA512 hash before storing them, and adds each observation to the nearest hexagon via a nearest-neighbor search in PostGIS. Other flows load the catalogs: buildings and floors, access points, the hexagon grid and the building footprints.",
    "uat.contrib.decisions.li4": "<strong>Data preparation.</strong> Node.js scripts to map Meraki's 90 floor plans to their buildings, extract each building's footprint from OpenStreetMap and generate the hexagon grid.",
    "uat.contrib.decisions.li5": "<strong>Deployment.</strong> I containerized the frontend and backend with multi-stage builds (Next.js standalone output, a production image without dev dependencies, and an unprivileged user) and set the application up to be served under sub-paths behind an nginx reverse proxy.",
    "uat.contrib.privacy.h3": "Privacy",
    "uat.contrib.privacy.p": "The data was treated as sensitive by design: MAC addresses and user identifiers are stored pseudonymized with HMAC right at ingestion, and the application only ever shows aggregated counts per hexagon, floor or building, never the position of a specific person.",
    "uat.contrib.ongoing.h3": "Performance and ongoing work",
    "uat.contrib.ongoing.p": "With real data and several users at once, performance problems appeared, and much of the final stretch went into optimization: an in-memory cache that collapses identical concurrent requests into a single query, the backend split across several processes with Node.js's cluster module, covering indexes built online (with a maintenance page to apply them without direct database access), an endpoint that replaced up to 13 sequential live-mode requests with a single one, and lighter loading of hexagons, floors and routes in the frontend. Meanwhile I kept adapting every layer to each new feature.",
    "uat.arch.title": "Architecture and stack",
    "uat.arch.frontend.h3": "Frontend",
    "uat.arch.backend.h3": "Backend",
    "uat.arch.data.h3": "Data and infrastructure",
    "uat.arch.li1": "<strong>Data source.</strong> The Cisco Meraki location API, which periodically sends the n8n webhook the observations of the devices detected by the wifi access points: estimated position, floor and nearest access point.",
    "uat.arch.li2": "<strong>Ingestion (n8n).</strong> Groups by device, filters out movements under 2 m, pseudonymizes with HMAC-SHA512, stores observations and positions, and increments the nearest hexagon's counter for each time step.",
    "uat.arch.li3": "<strong>Geospatial database (PostGIS).</strong> Buildings with their footprint, floors and floor plans, access points, observations and the hexagon grid with its counts, with spatial and time indexes and versioned migrations.",
    "uat.arch.li4": "<strong>Backend (Node.js + Express + TypeScript).</strong> A multi-process REST API with an in-memory cache, organized in three blocks: catalogs (buildings, floors, grid and heatmap), global charts, and <em>insights</em>, computed metrics such as dwell time, density per m², per-hexagon volatility, per-access-point traffic anomalies (z-score), behavior by operating system and origin-destination flows between buildings. Documented with OpenAPI.",
    "uat.arch.li5": "<strong>Frontend (Next.js).</strong> Leaflet over OpenStreetMap and D3 for the grid and routes. Heat, density, building and routes layers, per-floor detail, live mode and history mode with playback, charts with Recharts and PDF reports with jsPDF. Mobile-ready.",
    "uat.arch.li6": "<strong>Deployment.</strong> Docker containers for the frontend, backend and database, served under sub-paths behind an nginx reverse proxy.",
    "uat.balance.title": "Takeaways",
    "uat.balance.lead": "This is the project where I have had the most responsibility: starting from a frontend prototype, I built the rest of the platform and took it to production, making and justifying the technical decisions.",
    "uat.balance.gains.h3": "What I take away",
    "uat.balance.gains.li1": "Carrying a real project end to end: data model, ingestion, API, frontend, testing, deployment and optimization with real users.",
    "uat.balance.gains.li2": "Making technical decisions and justifying them by the specific problem. I chose a geospatial database because the domain was buildings, positions and footprints, n8n because the ingestion had to be quick to adjust, and Express with TypeScript and tests because the API kept changing.",
    "uat.balance.gains.li3": "Working with real, imperfect data: wifi positioning is noisy, and metrics such as routes between buildings only became credible once that noise was filtered with movement and minimum-stay thresholds.",
    "uat.balance.gains.li4": "Optimizing with judgment: finding the bottleneck and tackling it with indexes, caching, aggregation in the database and fewer requests from the client.",
    "uat.balance.gains.li5": "Treating privacy as a design requirement: pseudonymization at ingestion and only aggregated data in the interface.",
    "uat.balance.different.h3": "What I'd do differently",
    "uat.balance.different.li1": "Spend more time on the initial design of the data model and the API: a good part of the later refactors came from the scope being pinned down as we went.",
    "uat.balance.different.li2": "Lock down a stable endpoint contract sooner to cut rework in the integration.",
    "uat.balance.different.li3": "Test with real data volumes and users earlier, instead of leaving most of the optimization for the end.",
    "uat.balance.different.li4": "Add tests for the SQL queries against a real database, on top of the controller tests with the mocked database.",
    "uat.balance.back": "‹ Back to Work experience",

    "pf.title": "Portfolio · José Carlos Ruiz Sánchez",
    "pf.eyebrow": "Projects · Project detail",
    "pf.h1": "Portfolio",
    "pf.lead": "This very website: my multi-page personal portfolio, built with plain HTML, CSS and JavaScript, with no frameworks and no build step, and deployed on GitHub Pages.",
    "pf.hero.imgAlt": "Screenshot of the Portfolio project",
    "pf.toc.context": "Context",
    "pf.toc.description": "Description",
    "pf.toc.decisions": "Technical decisions",
    "pf.toc.architecture": "Architecture and stack",
    "pf.toc.balance": "Takeaways",
    "pf.context.title": "Project context",
    "pf.context.type.dt": "Type",
    "pf.context.type.dd": "Personal project",
    "pf.context.period.dt": "Period",
    "pf.context.period.dd": "September 2026 – ongoing",
    "pf.context.status.dt": "Status",
    "pf.context.status.dd": "In active development",
    "pf.context.stack.dt": "Main stack",
    "pf.context.stack.dd": "HTML, CSS and JavaScript, no frameworks or build step",
    "pf.context.code.dt": "Code",
    "pf.context.code.dd": "github.com/jrs407/web-personal",
    "pf.context.web.dt": "Website",
    "pf.context.web.dd": "jrs407.github.io/web-personal",
    "pf.context.origin.h3": "How it came about",
    "pf.context.origin.p": "It came out of wanting a showcase where I could present my projects and what I can do. A CV on its own felt too thin and left too many gaps. With my own site I can show an interviewer in more detail what I'm capable of. I chose to build it from scratch, without templates, because the site itself is also a sample of my skills. I started shaping it on 1 September 2026 and it has no closing date: there will always be new projects and work to add.",
    "pf.desc.title": "Project description",
    "pf.desc.what.h3": "What it is",
    "pf.desc.what.p": "This very website: a multi-page personal portfolio (About, Projects, Experience, Skills, Education and Contact) built with plain HTML, CSS and JavaScript, with no frameworks and no build step, and deployed on GitHub Pages. I made it to give context to my résumé and show in more detail what I can do.",
    "pf.desc.includes.h3": "What it includes",
    "pf.desc.includes.li1": "Nine-page site in plain HTML, CSS and JavaScript, with no frameworks or bundler.",
    "pf.desc.includes.li2": "Bilingual (Spanish and English) with a custom i18n dictionary in JavaScript. The chosen language and theme are remembered between visits with localStorage.",
    "pf.desc.includes.li3": "Light and dark theme that respects the system preference (prefers-color-scheme).",
    "pf.desc.includes.li4": "Hand-built interactive components: drag-to-scroll carousels, timelines with search and sorting, and a responsive menu.",
    "pf.desc.includes.li5": "Scroll-reveal animations with IntersectionObserver.",
    "pf.desc.includes.li6": "Care for accessibility (skip link, ARIA roles, aria-expanded) and SEO (meta description, Open Graph, Twitter Card, canonical) on every page.",
    "pf.desc.includes.li7": "Local development environment with Docker and browser-sync with live reload.",
    "pf.decisions.title": "Technical decisions",
    "pf.decisions.p": "The starting point was the target: I wanted to deploy on GitHub Pages, which only serves static files. Deployment is a push to main, with no CI action or compilation. That constraint shaped every other decision, and in all of them I favoured keeping the site lightweight and dependency-free.",
    "pf.decisions.li1": "Plain HTML, CSS and JavaScript, no framework or bundler. Pages runs no build step, and a static site uses less memory and fewer resources, so it is harder to hit the service's limits as the site grows. The trade-off: no reusable components, and the head, header and footer are duplicated in every page.",
    "pf.decisions.li2": "Nine standalone pages instead of a SPA. Each URL returns real HTML on the first request, with no router or client-side rendering, which helps SEO and crawling and keeps the content working without JavaScript.",
    "pf.decisions.li3": "A hand-rolled translation system: a single object holding the Spanish and English dictionaries in script.js, keys declared in the markup with data-i18n, and a function that walks the nodes and swaps the text. The language is stored in localStorage and applied on load, before paint. This saves me a library, a network request per language and a string-extraction step, at the cost of maintaining the translations by hand. At first the header misbehaved when switching language, but that's fixed now.",
    "pf.decisions.li4": "Light and dark themes via a data-theme attribute on the root element and CSS custom properties. On the first visit it respects prefers-color-scheme, and after that the choice saved in localStorage wins. The theme is applied before paint to avoid a flash.",
    "pf.decisions.li5": "Carousels, searchable timelines and the responsive menu are written by hand with no dependencies. The carousel moves a track with transform, supports touch drag and disables the transition while dragging. The timelines sort by date and filter over the text and a set of keywords. Scroll reveals use a single IntersectionObserver.",
    "pf.decisions.li6": "For local development, a container running browser-sync that serves the folder and reloads the browser on save. Compared with an editor extension, anyone with Docker gets the same server with nothing to configure, and it is the same container-based workflow I use on larger projects. On Windows the container does not receive file events, so polling is forced. This environment is never deployed: Pages serves the files as-is.",
    "pf.arch.title": "Architecture and stack",
    "pf.arch.site.h3": "Site",
    "pf.arch.tooling.h3": "Tooling",
    "pf.arch.deploy.h3": "Deployment",
    "pf.arch.detail.p": "There is no split between source and build output: the repository root is what GitHub Pages publishes, with a .nojekyll file so it serves the files without processing them. The root holds the nine HTML pages and everything else lives under assets/, with the CSS and JavaScript organised in two layers, one global and one per page.",
    "pf.arch.detail.li1": 'Layered CSS. style.css (around 850 lines) is the shared part: reset, the design tokens as CSS custom properties (light theme and its [data-theme="dark"] variant), the layout container, the header and footer, the buttons, the carousel and the reveal animations. Each page then adds its own sheet with only its components. The experiencia.css sheet is shared by experiencia.html, proyectos.html and the detail pages (ual-trace.html, tokimori.html and this one), and proyectos.css is four lines.',
    "pf.arch.detail.li2": "JavaScript with the same split. script.js (around 1,300 lines) is loaded by every page: header behaviour (responsive menu, theme and language switch), the TRANSLATIONS object with both dictionaries, the function that translates the page, the reveal IntersectionObserver and the carousel. Each page then loads a small script: experiencia.js and proyectos.js drive the searchable, sortable timeline and do nothing when their element is absent. In addition, experiencia.js enlarges the detail pages' header image on click. They are classic scripts at the end of <body>, no modules, in a shared global scope.",
    "pf.arch.detail.li3": "Spanish is the source text in the markup, and the data-i18n attributes (with variants for title, alt, aria-label and placeholder) name the key. On load, script.js reads the language from localStorage, Spanish by default, and replaces the content of every marked node.",
    "pf.arch.detail.li4": "assets/ holds the images in per-page subfolders, with icons in their original format (png, webp or svg) and a shared placeholder.svg. The fonts (Space Grotesk and Inter) come from Google Fonts with preconnect, and the CV PDFs (Spanish and English) live in assets/cv/ and are linked from the home page.",
    "pf.arch.detail.li5": "There is no package.json, no dependencies and no compilation: the files are authored and served as-is. The only Docker image that exists is the local development environment.",
    "pf.balance.title": "Takeaways",
    "pf.balance.lead": "As a personal project built from scratch and without templates, it does what I set out to do: it works as a technical showcase for what a CV can't show, and proves I can carry a full project through without leaning on a framework. It's not a big project, but it's published and I keep updating it.",
    "pf.balance.gains.h3": "What I take away",
    "pf.balance.gains.li1": "Without any framework, I had to understand and write every piece myself (the carousel, the timelines, the theme switch, the translation system) instead of a library handling it underneath. That meant working directly with the DOM, events and CSS variables.",
    "pf.balance.gains.li2": "Building the translation system by hand taught me the trade-offs a library usually hides: keeping two dictionaries in sync, deciding when translation runs so there's no flash of untranslated content, and naming keys consistently across pages.",
    "pf.balance.gains.li3": "Using Docker for the local dev environment, even though the site itself isn't deployed in containers, let me practice the same workflow I use on projects with more moving parts.",
    "pf.balance.different.h3": "What I'd do differently",
    "pf.balance.different.li1": "With no build step, the header, footer and <head> are literally repeated across all nine pages, so changing something shared means going page by page. If I started over, I'd consider a small build step (or my own script) just to assemble those shared parts without losing the static deploy.",
    "pf.balance.different.li2": "Translation keys and per-page CSS class names grew organically as I built each page. Now that the site is bigger, it shows they didn't follow a convention planned up front. I'd define one before writing the first page.",
    "pf.balance.different.li3": "I've tested everything by hand: switching language, theme and window size in the browser. With more pages and shared components, a couple of simple automated checks would give more confidence when touching shared code like script.js.",
    "pf.balance.back": "‹ Back to Projects",

    "tk.title": "Tokimori · José Carlos Ruiz Sánchez",
    "tk.eyebrow": "Projects · Project detail",
    "tk.h1": "Tokimori",
    "tk.lead": "Full-stack web app for managing a personal collection of items with time tracking, Markdown notes, checklists and a visual canvas per item. Built on a 6-microservice architecture in Node.js/TypeScript behind an API Gateway (nginx), with a React 19 frontend and full deployment with Docker Compose.",
    "tk.hero.imgAlt": "Image of the Tokimori project",
    "tk.toc.context": "Context",
    "tk.toc.description": "Description",
    "tk.toc.decisions": "Technical decisions",
    "tk.toc.architecture": "Architecture and stack",
    "tk.toc.balance": "Takeaways",
    "tk.context.title": "Project context",
    "tk.context.type.dt": "Type",
    "tk.context.type.dd": "Personal project",
    "tk.context.period.dt": "Period",
    "tk.context.period.dd": "February 2026 – August 2026",
    "tk.context.status.dt": "Status",
    "tk.context.status.dd": "Finished",
    "tk.context.stack.dt": "Main stack",
    "tk.context.stack.dd": "React 19 + Node.js/Express + MySQL, 6 microservices behind an API Gateway (nginx), with Docker Compose",
    "tk.context.code.dt": "Code",
    "tk.context.code.dd": "Private repository, available on request.",
    "tk.context.demo.dt": "Demo",
    "tk.context.demo.dd": "Watch the video on YouTube",
    "tk.context.origin.h3": "How it came about",
    "tk.context.origin.p": "The main reason was the lack of apps that let you organize information properly by combining text notes, checklists and a visual canvas that can structure everything that way. Most apps focus on a single flat aspect: only notes, only checklists, or only time tracking, without tying it all together in one visual space. At the same time, I wanted a project big enough to put a full stack into practice: authentication, a microservice architecture, a frontend with complex state (persistent timers, canvas undo/redo, drag & drop) and a reproducible deployment with Docker.",
    "tk.context.video.h3": "Demo video",
    "tk.desc.title": "Project description",
    "tk.desc.what.h3": "What it is",
    "tk.desc.what.p": "Tokimori's core is the canvas: a visual board per item where notes, checklists, images and shapes can be freely combined. Around it, the app lets you organize any kind of personal collection or project (video games, books, series, studies, or whatever's needed), with text notes, checklists with nested tasks and time tracking, plus global statistics and unlockable achievements.",
    "tk.desc.includes.h3": "What it includes",
    "tk.desc.includes.li1": "Designed a 6-microservice architecture (auth, items, collection, notes, goals/canvas, sessions) in Node.js + Express 5 + TypeScript, each with its own responsibility and a shared MySQL database (8 tables).",
    "tk.desc.includes.li2": "Implemented an API Gateway with nginx as the single public entry point, with path-based routing to the frontend and each service. Internal services can't be reached from outside the Docker network.",
    "tk.desc.includes.li3": "Authentication with JWT (7-day tokens) over secure cookies, hashing with bcrypt, and hardening with helmet, rate limiting and configurable CORS.",
    "tk.desc.includes.li4": "Built a visual per-item canvas with the HTML5 Canvas API and no libraries: freehand drawing, shapes, images and text, with dragging, resizing and rotation, undo/redo history and layer control (z-index).",
    "tk.desc.includes.li5": "Frontend in React 19 + Vite 7 + React Router 7 + TypeScript, with React Compiler, CSS Modules, a custom i18n system (es/en) and a UI with light/dark/auto theme and a configurable accent color.",
    "tk.desc.includes.li6": "Created custom utilities: drag & drop with FLIP animations (useFlipList hook), a custom Markdown renderer, a floating timer that persists across pages, and browser notifications.",
    "tk.desc.includes.li7": "Global statistics panel (total hours, day streak, 7-day chart), unlockable achievements system, admin panel and demo account.",
    "tk.desc.includes.li8": "Testing with Vitest + Testing Library (frontend) and Jest + Supertest (backend). Full containerization with Docker Compose, separating the production config (compiled frontend served by nginx) from a development override (Vite hot-reload).",
    "tk.decisions.title": "Technical decisions",
    "tk.decisions.p": "The main technical decisions and why I made them:",
    "tk.decisions.li1": "API Gateway as the single entry point: instead of exposing each microservice on its own port, nginx centralizes routing by path prefix. It simplifies CORS, hides the internal topology, and means production deployment only needs to open one port.",
    "tk.decisions.li2": "Splitting into microservices by domain: authentication, catalog, collection, notes, goals/canvas and sessions each live in their own service. I didn't do it for scale. I wanted to practice splitting by domain and communication between independent services.",
    "tk.decisions.li3": "Images via Imgur instead of my own upload. The first version allowed uploading images to the server, but I replaced it with direct Imgur links so I wouldn't have to manage storage, backups or file-size limits.",
    "tk.decisions.li4": "One docker-compose, two environments: docker-compose.yml defines the production config (compiled frontend, NODE_ENV=production, MySQL not exposed) and docker-compose.override.yml adds only the development differences (hot-reload, mounted volumes). Docker Compose loads the override automatically unless -f is specified. That way I don't duplicate configuration, and dev and production stay as close as possible.",
    "tk.decisions.li5": "JWT with a 7-day expiration: authentication is stateless, every request carries its own token and no microservice needs to share session state with another. The cookie is marked secure in production so it only travels over HTTPS.",
    "tk.decisions.li6": "Local state synced via events: the floating timer persists in localStorage and syncs across tabs and components with a custom CustomEvent (tokimori_timer_change), instead of adding a global state management library for a single use case.",
    "tk.decisions.li7": "A custom i18n system: the Spanish/English interface uses a React context and a hand-built dictionary of keys, with no external i18n library, since the project's needs (two languages, no complex pluralization) didn't justify one.",
    "tk.arch.title": "Architecture and stack",
    "tk.arch.frontend.h3": "Frontend",
    "tk.arch.backend.h3": "Backend",
    "tk.arch.infra.h3": "Infrastructure",
    "tk.arch.detail.p": "All traffic enters through an API Gateway (nginx), the only port published to the outside. Behind it, six microservices in Node.js + Express + TypeScript, each with its own responsibility, share a single MySQL database. The microservices aren't reachable directly from outside the Docker network: the gateway routes each request by its path prefix.",
    "tk.arch.detail.li1": "gateway: single entry point. Routes each request to the frontend or the matching microservice by path prefix.",
    "tk.arch.detail.li2": "authenticationService (/auth): registration, login and JWT token management.",
    "tk.arch.detail.li3": "gameService (/items): CRUD for the item catalog.",
    "tk.arch.detail.li4": "libraryService (/collection): the user's collection (favorites, pins and hours).",
    "tk.arch.detail.li5": "notesService (/notes): notes per item.",
    "tk.arch.detail.li6": "objectivesService (/objectives, /canvas): checklists, tasks and canvas.",
    "tk.arch.detail.li7": "sessionService (/sessions): time-session logging.",
    "tk.balance.title": "Takeaways",
    "tk.balance.lead": "Tokimori is finished. The last commits went into polishing it before showing it: a demo account, API documentation, an admin panel, tests across all 6 microservices, cloud-deployment adjustments and a final bug fix. It isn't deployed anywhere right now, but it's ready to be whenever I decide to. What I value most is having designed and finished on my own a backend of 6 microservices (with its gateway, JWT authentication and tests) together with a frontend with some non-trivial parts, like a layered canvas editor with undo/redo and FLIP animations. It's the most ambitious personal project I've finished so far, and I already have bigger ones in mind.",
    "tk.balance.gains.h3": "What I gained",
    "tk.balance.gains.li1": "The hardest part was the canvas: keeping a consistent undo/redo history across layers (z-index), rotation, resizing and different element types (notes, checklists, images, shapes, text and freehand strokes) without a third-party canvas library.",
    "tk.balance.gains.li2": "Coordinating six independent services that share a database without coupling them unnecessarily to each other was also a real learning curve.",
    "tk.balance.different.h3": "What I'd do differently",
    "tk.balance.different.li1": "Starting over, I wouldn't choose microservices: I'd build a modular monolith in Node.js/Express/TypeScript with the same domain boundaries (auth, items, collection, notes, goals/canvas, sessions), but as internal modules (each with its own router and service layer) inside a single process. The six services already share one MySQL database, so there's no real data isolation or independent scaling between them in practice: the project paid the operational cost of microservices (API Gateway, a Docker network, HTTP calls between services, six containers to spin up and debug separately) without the main benefit that would justify it. A modular monolith would have given the same separation of concerns in the code, with a single-container deployment, no internal network calls, and much simpler debugging. If a module ever needed to scale or deploy on its own later, it could be extracted at that point.",
    "tk.balance.next.h3": "Next steps",
    "tk.balance.next.p": "The next step is to make use of the microservice architecture to support custom plugins: independent modules that each user can enable based on their own needs, without touching the rest of the app.",
    "tk.balance.back": "‹ Back to Projects",

    "con.title": "Contact · José Carlos Ruiz Sánchez",
    "con.eyebrow": "Contact",
    "con.h1": "Contact",
    "con.lead": "How to reach me, when I can start and answers to the most common questions.",
    "con.action.call": "Call me",
    "con.action.email": "Send an email",
    "con.action.cv": "Download Spanish CV (PDF)",
    "con.action.cvEn": "Download English CV (PDF)",
    "con.toc.channels": "Contact channels",
    "con.toc.availability": "Availability",
    "con.toc.faq": "FAQ",
    "con.channels.title": "Contact channels",
    "con.channels.desc": "The same details that appear in the footer of this site and in my résumé. For a first contact I prefer a call.",
    "con.channel.phone": "Phone",
    "con.channel.email": "Email",
    "con.channel.linkedin": "LinkedIn",
    "con.channel.github": "GitHub",
    "con.avail.title": "Availability",
    "con.avail.desc": "The same as on my résumé, in a bit more detail.",
    "con.avail.start.h3": "Immediate start",
    "con.avail.start.p": "I can start with no notice period. I'm currently studying the Master's Degree in Computer Engineering, compatible with a full-time job.",
    "con.avail.mode.h3": "Flexible arrangement",
    "con.avail.mode.p": "On-site, hybrid or remote, depending on what the team needs. I've already worked remotely with daily coordination through Git and code reviews during my internship.",
    "con.avail.mobility.h3": "Geographic mobility",
    "con.avail.mobility.p": "I'm based in Málaga and can relocate anywhere in Spain for an on-site or hybrid role.",
    "con.avail.hours.h3": "Working hours and language",
    "con.avail.hours.p": "Available full-time. I work in Spanish and have B2 English (Cambridge First) for documentation and technical communication.",
    "con.faq.title": "FAQ",
    "con.faq.desc": "Questions that usually come up in a first conversation.",
    "con.faq.q1.h3": "What's the best way to reach you?",
    "con.faq.q1.p": 'A call to <a href="tel:+34608257574">+34 608 25 75 74</a>. If you prefer it in writing, email me at <a href="mailto:josecarlosruizsan@gmail.com">josecarlosruizsan@gmail.com</a>.',
    "con.faq.q2.h3": "Are you available now? How do you fit in the Master's?",
    "con.faq.q2.p": "Yes: immediate start and full-time. The Master's Degree in Computer Engineering I'm studying is 100% online and requires no in-person attendance, so it can be organized around working hours and doesn't clash with an on-site, hybrid or remote role.",
    "con.faq.q3.h3": "Do you work remotely?",
    "con.faq.q3.p": "Yes, and also on-site or hybrid. I've already worked remotely with a distributed team, coordinating through Git and code reviews.",
    "con.faq.q4.h3": "Can I see your code?",
    "con.faq.q4.p": 'Some of it is published at <a href="https://github.com/jrs407">github.com/jrs407</a>, along with the code for this portfolio. Some projects have private repositories, but I can give you read access if you ask by phone or email. <a href="proyectos.html">Projects</a> has the background on each one.',
    "con.faq.q5.h3": "Do you have a résumé in PDF?",
    "con.faq.q5.p": 'Yes: download it <a href="assets/cv/CV - Jose Carlos Ruiz Sanchez.pdf" download>in Spanish</a> or <a href="assets/cv/CV_Jose_Carlos_Ruiz_Sanchez_EN.pdf" download>in English</a>. This site expands each section of the CV with more context.',
    "con.note": "<strong>Note:</strong> the availability on this page is up to date as of October 2026. If anything has changed or you need a reference, write to me and I'll reply the same working day."
  }
};

function translatePage(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  const targets = document.querySelectorAll("[data-i18n]");
  // Pages that don't opt in (no [data-i18n] nodes) keep their own lang/title.
  if (!targets.length) return;

  document.documentElement.lang = lang;
  const titleKey = document.documentElement.dataset.i18nTitle;
  if (titleKey && dict[titleKey] != null) document.title = dict[titleKey];

  targets.forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = dict[el.dataset.i18nHtml];
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    const value = dict[el.dataset.i18nLabel];
    if (value != null) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value != null) el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = dict[el.dataset.i18nPlaceholder];
    if (value != null) el.setAttribute("placeholder", value);
  });
}

function applyLanguage(lang) {
  languageToggle.dataset.lang = lang;
  languageToggle.textContent = FLAGS[lang];
  languageToggle.setAttribute("aria-label", LANG_LABELS[lang]);
  translatePage(lang);
}

const storedLang = localStorage.getItem("lang");
applyLanguage(storedLang === "en" ? "en" : "es");

languageToggle.addEventListener("click", () => {
  const next = languageToggle.dataset.lang === "es" ? "en" : "es";
  applyLanguage(next);
  localStorage.setItem("lang", next);
});

const revealEls = document.querySelectorAll(".reveal-left");

if (revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          entry.target.classList.remove("is-exit");
        } else {
          entry.target.classList.remove("is-visible");
          entry.target.classList.toggle(
            "is-exit",
            entry.boundingClientRect.top < 0
          );
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
}

function initCarousel(carousel) {
  const track = carousel.querySelector(".carousel-track");
  const viewport = carousel.querySelector(".carousel-viewport");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const prevBtn = carousel.querySelector(".carousel-arrow--prev");
  const nextBtn = carousel.querySelector(".carousel-arrow--next");

  let index = 0;
  let offset = 0;

  const mobileQuery = window.matchMedia("(max-width: 720px)");
  const perViewDesktop = Number(carousel.dataset.perView) || 3;
  const perViewMobile = Number(carousel.dataset.perViewMobile) || 1;
  const perView = () =>
    Math.min(slides.length, mobileQuery.matches ? perViewMobile : perViewDesktop);

  const maxIndex = () => Math.max(0, slides.length - perView());

  function targetFor(i) {
    const pv = perView();
    const first = slides[i];
    const last = slides[Math.min(i + pv - 1, slides.length - 1)];
    const groupWidth = last.offsetLeft + last.offsetWidth - first.offsetLeft;
    const sideSpace = (viewport.clientWidth - groupWidth) / 2;
    return -(first.offsetLeft - slides[0].offsetLeft - sideSpace);
  }

  function markActive() {
    const pv = perView();
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i >= index && i < index + pv);
    });
  }

  function settle(animate = true) {
    index = Math.max(0, Math.min(index, maxIndex()));
    offset = targetFor(index);
    track.classList.toggle("no-transition", !animate);
    track.style.transform = `translateX(${offset}px)`;
    markActive();
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= maxIndex();
  }

  function nearestIndex(px) {
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i <= maxIndex(); i++) {
      const d = Math.abs(targetFor(i) - px);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    return best;
  }

  prevBtn.addEventListener("click", () => {
    index -= 1;
    settle();
  });

  nextBtn.addEventListener("click", () => {
    index += 1;
    settle();
  });

  let pointerActive = false;
  let dragging = false;
  let startX = 0;
  let startOffset = 0;
  let moved = false;

  viewport.addEventListener("pointerdown", (e) => {
    if (e.button != null && e.button !== 0) return;
    pointerActive = true;
    dragging = false;
    moved = false;
    startX = e.clientX;
    startOffset = offset;
  });

  window.addEventListener("pointermove", (e) => {
    if (!pointerActive) return;
    const dx = e.clientX - startX;

    if (!dragging) {
      if (Math.abs(dx) <= 4) return;
      dragging = true;
      moved = true;
      viewport.classList.add("is-dragging");
      track.classList.add("no-transition");
    }

    const hi = targetFor(0);
    const lo = targetFor(maxIndex());
    let next = startOffset + dx;
    if (next > hi) next = hi + (next - hi) * 0.3;
    if (next < lo) next = lo + (next - lo) * 0.3;
    offset = next;
    track.style.transform = `translateX(${offset}px)`;
  });

  window.addEventListener("pointerup", () => {
    if (!pointerActive) return;
    pointerActive = false;
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    index = nearestIndex(offset);
    settle();
  });

  viewport.addEventListener(
    "click",
    (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    },
    true
  );
  slides.forEach((s) =>
    s.addEventListener("dragstart", (e) => e.preventDefault())
  );

  let resizeRaf;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => settle(false));
  });
  window.addEventListener("load", () => settle(false));

  settle(false);
}

document.querySelectorAll(".carousel").forEach(initCarousel);
