import type { Language } from "@/store/language-store"

const es = {
  nav: {
    home: "Inicio",
    partners: "Aliados",
    project: "El proyecto",
    talentHub: "Talent Hub",
    method: "Método",
    growth: "Crecimiento",
    team: "Equipo",
    cta: "Apoya el proyecto",
    menu: "Abrir menú",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Costa Rica · Desarrollo de ciclismo juvenil",
    title: "Talento joven con un camino hacia adelante",
    lede: "Un programa costarricense de desarrollo de ciclismo juvenil construido alrededor de una idea: ayudar a jóvenes atletas a perseguir sus sueños en el deporte mientras construyen su futuro.",
    ctaRiders: "Conoce a los atletas",
    ctaPartner: "Sé un aliado",
    tag: "Temporada 2026 · 3 atletas · Ruta, MTB y contrarreloj",
  },
  context: {
    eyebrow: "Contexto",
    title: "El ciclismo es un deporte popular en Costa Rica",
    paragraphs: [
      "El ciclismo es uno de los deportes más populares de Costa Rica. El circuito nacional de ruta y montaña corre casi todo el año, con la Vuelta a Costa Rica como eje, y las carreras de fin de semana llenan sus parrillas de salida en todo el país.",
      "Esa popularidad llega a las categorías juveniles. Hay clubes amateur y juveniles activos en todas las provincias, y los atletas que salen de ellos entrenan con estructura real en lugar de llegar a correr en bicicletas prestadas.",
    ],
    calendar: [
      "Vuelta a Costa Rica",
      "Copa MTB",
      "Juegos Deportivos Nacionales",
      "Campeonatos nacionales",
      "Carreras amateur todo el año",
    ],
    gallery: [
      "Pelotón en una carrera de ruta en Costa Rica",
      "Dos ciclistas de montaña con números 201 y 202",
      "Ciclistas juveniles en la línea de salida",
      "Grupo de ciclistas en una salida masiva",
    ],
  },
  problem: {
    eyebrow: "El problema",
    title: "Participar no es lo mismo que tener un camino",
    pull: "El talento no es la limitante.",
    pullAccent: "La estructura sí.",
    paragraphs: [
      "Con todos los atletas y todas las carreras, el apoyo que lleva a un joven talento más allá del nivel amateur nunca ha existido realmente en Costa Rica. Un juvenil puede ganarlo todo en casa y aun así no tener a dónde ir después.",
      "Muchos equipos ponen un esfuerzo real en desarrollar a estos atletas, pero la oportunidad de competir en el extranjero a nivel élite sigue fuera de su alcance.",
      "Muy pocos atletas costarricenses tienen la oportunidad de correr afuera o de alinearse en eventos élite, porque el apoyo estructural nunca ha apuntado a eso. Las familias cubren solas el equipo, los viajes y las inscripciones, y la mayoría se detiene cuando el costo supera a la temporada.",
    ],
    closing: "Esa es la brecha que Advance Cycling nació para cerrar.",
  },
  project: {
    eyebrow: "El proyecto",
    title: "Qué es Advance Cycling",
    p1Before: "Advance Cycling es parte de ",
    p1Strong: "Advance Sports",
    p1After:
      ", la empresa detrás de advancetalenthub.com, y comparte su propósito: desarrollar jóvenes atletas y conectarlos con universidades en Estados Unidos y otros países, para que su deporte les abra un lugar donde estudiar y seguir creciendo.",
    p2: "Además, el proyecto impulsa la participación en eventos internacionales. Correr fuera del país es lo que sube el nivel: enseña a los atletas lo que exige la competencia élite y lo que se necesita para sostenerse en ella.",
    motto: "El ciclismo es el vehículo. El destino es una educación y una carrera en el deporte.",
  },
  hub: {
    eyebrow: "Parte de algo más grande",
    title: "Advance Cycling Team es parte de Advance Talent Hub",
    lede: "Advance Talent Hub es la plataforma de Advance Sports que desarrolla a jóvenes atletas y los conecta con universidades en Estados Unidos y otros países. Usamos el deporte como puerta de entrada a una beca, una educación y una carrera.",
    lede2:
      "Advance Cycling Team lleva ese mismo modelo al ciclismo: los atletas compiten con nosotros y su temporada alimenta un perfil que los entrenadores universitarios pueden evaluar.",
    cta: "Visita advancetalenthub.com",
    join: "es parte de",
    lockupLabel: "Advance Cycling Team, parte de Advance Talent Hub",
    whatTitle: "Qué hacemos",
    what: [
      {
        title: "Desarrollamos atletas",
        body: "Acompañamos a jóvenes deportistas para que crezcan en su deporte y en sus estudios al mismo tiempo.",
      },
      {
        title: "Construimos su perfil",
        body: "Cada atleta tiene un expediente completo: resultados, tiempos, notas académicas y video. El perfil que los entrenadores universitarios piden.",
      },
      {
        title: "Los conectamos con universidades",
        body: "Ponemos ese perfil frente a entrenadores universitarios en EE. UU. y otros países, y la temporada se convierte en una conversación sobre becas.",
      },
      {
        title: "Abrimos más deportes",
        body: "La plataforma ha estado dedicada al fútbol y ahora se abre a otros deportes. El ciclismo es el primero.",
      },
    ],
  },
  method: {
    eyebrow: "Cómo lo hacemos",
    title: "Cómo llevamos a un atleta al siguiente nivel",
    steps: [
      {
        title: "Identificar talento real",
        body: "El talento no son solo vatios. Buscamos un buen estudiante y una persona joven íntegra, y seguimos su progreso en el tiempo en lugar de juzgarlo por un solo resultado.",
      },
      {
        title: "Una temporada pensada para subir el nivel",
        body: "Carga de entrenamiento, calendario nacional, equipo y recuperación planificados como un solo programa, para que cada año haga avanzar al atleta.",
      },
      {
        title: "Competir en el extranjero",
        body: "Los eventos internacionales son donde los atletas aprenden lo que exige la competencia élite, y donde sus resultados empiezan a pesar fuera del país.",
      },
      {
        title: "Colocarlos en un programa universitario",
        body: "Su expediente (resultados, tiempos, notas y video) llega a entrenadores universitarios de EE. UU. a través de Advance Talent Hub, y la temporada se convierte en una conversación sobre becas.",
      },
    ],
  },
  riders: {
    eyebrow: "Los atletas",
    title: "Tres promesas costarricenses",
    lede: "El equipo empieza pequeño y con intención: tres jóvenes que ya compiten en la cima de su categoría.",
    jimena: {
      role: "Rodadora y contrarrelojista",
      category: "Ruta · Categoría juvenil",
      badge: "Campeona Nacional de Ruta",
      alt: "Jimena Arroyo con la camiseta de campeona nacional",
    },
    daniela: {
      role: "Rodadora y escaladora",
      category: "Ruta · Categoría juvenil",
      alt: "Daniela Arroyo corriendo con el dorsal 97",
    },
    saul: {
      role: "Rodador y contrarrelojista",
      category: "Ruta y MTB · Categoría prejuvenil",
      alt: "Saúl Vargas en carrera",
    },
    open: {
      title: "Cupo abierto",
      role: "El atleta que queremos sumar",
      body: "Un cuarto lugar en el equipo, a la espera del apoyo que lo haga posible.",
    },
  },
  growth: {
    eyebrow: "Crecimiento",
    title: "El proyecto no se detiene aquí",
    lede: "Tres atletas es el punto de partida. El plan es hacer crecer el equipo temporada a temporada y llevar cada aprendizaje hacia adelante, para que el camino llegue a más jóvenes cada año.",
    seasons: [
      {
        title: "Tres atletas",
        body: "Dos juveniles y un prejuvenil, corriendo una temporada nacional completa con la estructura ya en marcha.",
      },
      {
        title: "Un atleta más",
        body: "Un cuarto atleta se une al equipo y amplía la rama masculina sin diluir el nivel de apoyo que recibe cada uno.",
      },
      {
        title: "Un equipo de seis",
        body: "Tres hombres y tres mujeres: un equipo completo construido sobre lo que enseñaron las primeras temporadas.",
      },
    ],
    ridersLabel: "atletas",
  },
  partners: {
    eyebrow: "Aliados",
    title: "Cómo puedes sumarte",
    lede: "El método y los atletas ya están en marcha. Lo que falta es equipo a la altura de lo que estos jóvenes pueden hacer. Buscamos marcas y patrocinadores que quieran crecer con nosotros.",
    offers: [
      {
        tag: "Equipo",
        title: "Bicicletas para nuestros atletas",
        body: "Bicicletas de ruta, MTB y contrarreloj en la talla correcta, prestadas o asignadas por temporada. No tienen que ser nuevas: sabemos lo que cuesta este equipo.",
      },
      {
        tag: "Condiciones comerciales",
        title: "Precios preferenciales",
        body: "Precios fijos por temporada en bicicletas, repuestos e indumentaria para el equipo. Cualquiera de las dos opciones es un buen punto de partida que crece con los años.",
      },
    ],
    returnsTitle: "Lo que recibe un aliado",
    returns: [
      {
        title: "Tu marca en el podio",
        body: "Una campeona nacional de ruta compitiendo con tu marca en cada fecha del calendario costarricense.",
      },
      {
        title: "Contenido para tus canales",
        body: "Fotografía y video de entrenamientos y carreras, sin costo, con los atletas identificados y etiquetados.",
      },
      {
        title: "Producto probado en carretera",
        body: "Un informe escrito de uso y desgaste real de cada producto, temporada tras temporada.",
      },
      {
        title: "Tu nombre en el uniforme",
        body: "Visibilidad en el uniforme del equipo y en cómo presentamos el proyecto.",
      },
    ],
  },
  team: {
    eyebrow: "Quién lo dirige",
    title: "El equipo detrás del proyecto",
    lede: "Una estructura pequeña, con cada parte del proyecto a cargo de alguien que responde por ella. Como padres y como responsables de estos atletas, estamos comprometidos a llevarlos más lejos y queremos lo mejor para cada uno.",
    alonzo: {
      role: "Director General y Marketing",
      body: "Ingeniero de software con más de veinte años de experiencia en web y marketing.",
    },
    minor: {
      role: "Fundador y CEO, Marvale S.A.",
      body: "Ingeniero en producción industrial y experto en importación de productos.",
    },
  },
  closing: {
    eyebrow: "Construyámoslo juntos",
    title: "Hagamos el ciclismo de Costa Rica más grande",
    lede: "Queremos convertir este proyecto en algo real para estos atletas y ayudar a que el ciclismo en Costa Rica y la región sea más grande de lo que es hoy. Si tu marca, empresa o familia quiere ser parte, conversemos.",
    cta: "Contáctanos en Advance Talent Hub",
    ctaRiders: "Ver a los atletas",
  },
  footer: {
    part: "Parte de Advance Sports",
  },
  explore: {
    eyebrow: "Conoce el programa",
    title: "Todo lo que hay detrás de Advance Cycling",
    open: "Ver",
    items: {
      project: "Qué es Advance Cycling, por qué existe y quiénes son sus atletas.",
      talentHub: "Somos parte de Advance Talent Hub: del deporte a la universidad.",
      method: "Los cuatro pasos para llevar a un atleta al siguiente nivel.",
      growth: "De tres atletas en 2026 a un equipo de seis en 2028.",
      team: "Las personas que dirigen el proyecto.",
    },
  },
  pageNav: {
    previous: "Anterior",
    next: "Siguiente",
  },
}

export type Dictionary = typeof es

const en: Dictionary = {
  nav: {
    home: "Home",
    partners: "Partners",
    project: "The project",
    talentHub: "Talent Hub",
    method: "Method",
    growth: "Growth",
    team: "Team",
    cta: "Support the project",
    menu: "Open menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Costa Rica · Youth cycling development",
    title: "Young talent with a pathway forward",
    lede: "A Costa Rican youth cycling development program, built around one idea: helping young athletes chase their dreams in the sport while they build a future.",
    ctaRiders: "Meet the riders",
    ctaPartner: "Become a partner",
    tag: "2026 season · 3 riders · Road, MTB and time trial",
  },
  context: {
    eyebrow: "Context",
    title: "Cycling is a popular sport in Costa Rica",
    paragraphs: [
      "Cycling is one of the most popular sports in Costa Rica. The national road and mountain-bike circuit runs almost year-round, with the Vuelta a Costa Rica as its anchor, and weekend races draw full fields across the country.",
      "That popularity reaches the youth categories. Amateur and junior clubs are active in every province, and the riders coming out of them train with real structure rather than turning up to race on borrowed bikes.",
    ],
    calendar: [
      "Vuelta a Costa Rica",
      "Copa MTB",
      "National Sports Games",
      "National championships",
      "Amateur races all year",
    ],
    gallery: [
      "Peloton at a road race in Costa Rica",
      "Two mountain bikers wearing numbers 201 and 202",
      "Junior riders on the start line",
      "A group of riders at a mass start",
    ],
  },
  problem: {
    eyebrow: "The problem",
    title: "Participation is not the same as a pathway",
    pull: "Talent is not the constraint.",
    pullAccent: "Structure is.",
    paragraphs: [
      "For all the riders and all the races, the support that takes a young talent past the amateur level has never really existed in Costa Rica. A junior can win everything at home and still have nowhere to go next.",
      "Plenty of teams put real effort into developing these riders, but the chance to compete abroad at elite level stays out of reach.",
      "Very few Costa Rican athletes get the chance to race abroad or line up in elite events, because the structural support has never been aimed at that. Families cover the equipment, the travel and the entries on their own, and most stop when the cost outgrows the season.",
    ],
    closing: "That is the gap Advance Cycling was created to close.",
  },
  project: {
    eyebrow: "The project",
    title: "What Advance Cycling is",
    p1Before: "Advance Cycling is part of ",
    p1Strong: "Advance Sports",
    p1After:
      ", the company behind advancetalenthub.com, and carries the same purpose: develop young athletes and connect them with universities in the United States and elsewhere, so their sport opens a place to study and keep growing.",
    p2: "The project also promotes participation in international events. Racing outside the country is what raises the level: it teaches riders what elite competition demands and what it takes to hold their own in it.",
    motto: "Cycling is the vehicle. The destination is an education and a career in the sport.",
  },
  hub: {
    eyebrow: "Part of something bigger",
    title: "Advance Cycling Team is part of Advance Talent Hub",
    lede: "Advance Talent Hub is the Advance Sports platform that develops young athletes and connects them with universities in the United States and elsewhere. We use sport as the way in to a scholarship, an education and a career.",
    lede2:
      "Advance Cycling Team brings that same model to cycling: riders compete with us, and their season feeds a profile that university coaches can evaluate.",
    cta: "Visit advancetalenthub.com",
    join: "is part of",
    lockupLabel: "Advance Cycling Team, part of Advance Talent Hub",
    whatTitle: "What we do",
    what: [
      {
        title: "We develop athletes",
        body: "We support young athletes so they grow in their sport and in their studies at the same time.",
      },
      {
        title: "We build their profile",
        body: "Every rider gets a complete record: results, times, academics and video. The profile college coaches actually ask for.",
      },
      {
        title: "We connect them with universities",
        body: "We put that profile in front of university coaches in the U.S. and elsewhere, turning the season into a scholarship conversation.",
      },
      {
        title: "We open more sports",
        body: "The platform has been dedicated to soccer and is now opening to other sports. Cycling is the first of them.",
      },
    ],
  },
  method: {
    eyebrow: "How we do it",
    title: "How we take a rider to the next level",
    steps: [
      {
        title: "Identify real talent",
        body: "Talent is not only watts. We look for a strong student and a young person with integrity, and track progress over time rather than judging on a single result.",
      },
      {
        title: "A season built to raise the level",
        body: "Training load, national calendar, equipment and recovery planned as one program, so each year moves the rider forward.",
      },
      {
        title: "Race abroad",
        body: "International events are where riders learn what elite competition demands, and where results start to carry weight outside the country.",
      },
      {
        title: "Place them in a university program",
        body: "Their record (results, times, academics, video) goes to U.S. college coaches through Advance Talent Hub, turning the season into a scholarship conversation.",
      },
    ],
  },
  riders: {
    eyebrow: "The riders",
    title: "Three Costa Rican prospects",
    lede: "The team starts small and deliberate: three young riders already competing at the top of their category.",
    jimena: {
      role: "Rouleur & time trialist",
      category: "Road · Junior category",
      badge: "Road National Champion",
      alt: "Jimena Arroyo in the national champion jersey",
    },
    daniela: {
      role: "Rouleur & climber",
      category: "Road · Junior category",
      alt: "Daniela Arroyo racing with number 97",
    },
    saul: {
      role: "Rouleur & time trialist",
      category: "Road and MTB · Pre-junior category",
      alt: "Saúl Vargas racing",
    },
    open: {
      title: "Open seat",
      role: "The rider we want to add",
      body: "A fourth place on the team, waiting on the support to fill it.",
    },
  },
  growth: {
    eyebrow: "Growth",
    title: "The project does not stop here",
    lede: "Three riders is where we start. The plan is to grow the team season by season and carry every lesson forward, so the pathway reaches more young athletes each year.",
    seasons: [
      {
        title: "Three riders",
        body: "Two juniors and one pre-junior, racing a full national season with the structure already in place.",
      },
      {
        title: "One more rider",
        body: "A fourth rider joins the team, widening the men's side without diluting the level of support each rider gets.",
      },
      {
        title: "A squad of six",
        body: "Three men and three women, a full team built on what the first seasons taught us.",
      },
    ],
    ridersLabel: "riders",
  },
  partners: {
    eyebrow: "Partners",
    title: "How you can get involved",
    lede: "The method and the riders are already in place. What is missing is equipment that matches what these young athletes can do. We are looking for brands and sponsors who want to grow with us.",
    offers: [
      {
        tag: "Equipment",
        title: "Bikes for our riders",
        body: "Road, MTB and TT bikes in the right size, on loan or assigned for the season. They do not have to be new: we know what this equipment costs.",
      },
      {
        tag: "Commercial terms",
        title: "Preferential pricing",
        body: "Fixed season pricing on bikes, parts and apparel for the team. Either option is a workable starting point that grows over several seasons.",
      },
    ],
    returnsTitle: "What a partner gets",
    returns: [
      {
        title: "Your brand on the podium",
        body: "A national road champion racing with your brand at every round of the Costa Rican calendar.",
      },
      {
        title: "Content for your channels",
        body: "Training and race photography and video at no cost, with riders named and tagged.",
      },
      {
        title: "Product tested on the road",
        body: "A written report on real use and wear for every product, season after season.",
      },
      {
        title: "Your name on the kit",
        body: "Visibility on the team kit and in how the project is presented.",
      },
    ],
  },
  team: {
    eyebrow: "Who runs it",
    title: "The team behind the project",
    lede: "A small structure, with each part of the project owned by someone accountable for it. As parents and as the people responsible for these riders, we are committed to taking them further and want the best for every one of them.",
    alonzo: {
      role: "General Director & Marketing",
      body: "Software engineer with more than twenty years of experience in web and marketing.",
    },
    minor: {
      role: "Founder & CEO, Marvale S.A.",
      body: "Industrial production engineer and an expert in product importation.",
    },
  },
  closing: {
    eyebrow: "Let's build it together",
    title: "Let's make Costa Rican cycling bigger",
    lede: "We want to turn this project into something real for these riders and help make cycling in Costa Rica and the region bigger than it is today. If your brand, company or family wants to be part of it, let's talk.",
    cta: "Contact us at Advance Talent Hub",
    ctaRiders: "See the riders",
  },
  footer: {
    part: "Part of Advance Sports",
  },
  explore: {
    eyebrow: "Explore the program",
    title: "Everything behind Advance Cycling",
    open: "Open",
    items: {
      project: "What Advance Cycling is, why it exists and who its riders are.",
      talentHub: "We are part of Advance Talent Hub: from sport to university.",
      method: "The four steps that take a rider to the next level.",
      growth: "From three riders in 2026 to a squad of six in 2028.",
      team: "The people who run the project.",
    },
  },
  pageNav: {
    previous: "Previous",
    next: "Next",
  },
}

export const dictionaries: Record<Language, Dictionary> = { es, en }
