import { normalizeLanguage, type AppLanguage } from "@/lib/routes";

type ProfileSection = {
  title: string;
  paragraphs: string[];
};

type LocalizedProfile = Record<AppLanguage, ProfileSection[]>;

const teamProfiles: Partial<Record<number, LocalizedProfile>> = {
  2: {
    ca: [
      {
        title: "Presentació",
        paragraphs: [
          "Acompanyant infantil, terapeuta d'integració psico-corporal i psicomotricista preventiu Aucouturier.",
        ],
      },
      {
        title: "L'acompanyament a La Llavor",
        paragraphs: [
          "Noel acompanya les criatures des de la seva experiència i saber, creant vincles segurs per a la relació, l'exploració i el creixement de cada infant. Cada moment és una oportunitat per aprendre del que el grup i la vida ofereixen.",
        ],
      },
      {
        title: "Especialitat",
        paragraphs: [
          "Acompanyament relacional, al joc lliure i als processos de projectes personals i grupals, enriquint i cuidant. Creativitat i aprenentatge pràctic. Vídeo, digital, jocs de taula, anglès, matemàtiques aplicades, cos i moviment.",
        ],
      },
      {
        title: "Recorregut",
        paragraphs: [
          "Vaig créixer en un entorn d'educació viva a casa. La meva mare, Begoña González, al costat del meu padrí Cristóbal Gutiérrez, va fundar La Caseta a Barcelona el 1996 i l'escola viva El Roure el 2001. El meu pare, Gustavo Cresencio, és mestre de tai-txi, chi-kung, arts marcials i creixement personal. Vaig estudiar a l'escola estatal, un any a El Roure, i als 14 anys em vaig traslladar a Anglaterra per estudiar a Brockwood Park School, internat internacional fundat el 1969 pel filòsof i mestre espiritual Jiddu Krishnamurti.",
          "Entre el 2008 i el 2010 em vaig formar en cinema, fotografia i interpretació a Filmosofía, a Granada. Les meves principals formacions inclouen la psicoteràpia en Integració Psico-Corporal a l'ETIP amb Marc Costa i Agustín Prieto, la psicomotricitat en Pràctica Preventiva Aucouturier a l'AEC amb Iolanda Vives, i l'educació viva amb Jordi Mateu i Begoña González.",
          "També em vaig especialitzar en comunicació conscient amb Chema Irusta i Begoña González; acompanyament emocional, agressivitat i conflictes a Senda amb Verónica Antón; i Seitai a Espaidó amb Magda Berneda.",
          "Des del 2011 vaig treballar 14 anys a l'escola Congrés-Indians, en la franja de migdia i fent costat a l'equip docent dins la jornada lectiva. A més, vaig ser assistent terapeuta psicomotriu de Verónica Antón a Senda entre 2014 i 2015.",
          "L'any 2018 vaig cofundar Kun Koro, i el 2024 vaig engegar Rcrear amb Cristina, un estudi creatiu de disseny gràfic i comunicació honesta.",
          "El 2026 vaig arribar a La Llavor, un regal de la vida i de la Tamara, amb qui ens coneixíem de Congrés-Indians i que va apostar per mi.",
        ],
      },
    ],
    es: [
      {
        title: "Presentación",
        paragraphs: [
          "Acompañante infantil, terapeuta de integración psico-corporal y psicomotricista preventivo Aucouturier.",
        ],
      },
      {
        title: "El acompañamiento en La Llavor",
        paragraphs: [
          "Noel Cresencio González acompaña a las criaturas desde su experiencia y saber, creando vínculos seguros para la relación, la exploración y el crecimiento de cada niña y niño. Cada momento es una oportunidad para aprender de lo que el grupo y la vida ofrecen.",
        ],
      },
      {
        title: "Especialidad",
        paragraphs: [
          "Acompañamiento relacional, al juego libre y a los procesos de proyectos personales y grupales, enriqueciendo y cuidando. Creatividad y aprendizaje práctico. Vídeo, digital, juegos de mesa, inglés, matemáticas aplicadas, cuerpo y movimiento.",
        ],
      },
      {
        title: "Recorrido",
        paragraphs: [
          "Crecí en un entorno de educación viva en casa. Mi madre, Begoña González, junto a mi padrino Cristóbal Gutiérrez, fundó La Caseta en Barcelona en 1996 y la escuela viva El Roure en 2001. Mi padre, Gustavo Cresencio, es maestro de tai-chi, chi-kung, artes marciales y crecimiento personal. Estudié en la escuela estatal, un año en El Roure, y a los 14 años me trasladé a Inglaterra para estudiar en Brockwood Park School, internado internacional fundado en 1969 por el filósofo y maestro espiritual Jiddu Krishnamurti.",
          "Entre 2008 y 2010 me formé en cine, fotografía e interpretación en Filmosofía, en Granada. Mis principales formaciones incluyen la psicoterapia en Integración Psico-Corporal en ETIP con Marc Costa y Agustín Prieto, la psicomotricidad en Práctica Preventiva Aucouturier en la AEC con Iolanda Vives, y la educación viva con Jordi Mateu y Begoña González.",
          "También me especialicé en comunicación consciente con Chema Irusta y Begoña González; acompañamiento emocional, agresividad y conflictos en Senda con Verónica Antón; y Seitai en Espaidó con Magda Berneda.",
          "Desde 2011 trabajé 14 años en la escuela Congrés-Indians, en la franja del mediodía y apoyando al equipo docente dentro de la jornada lectiva. Además, fui asistente terapeuta psicomotriz de Verónica Antón en Senda entre 2014 y 2015.",
          "En 2018 cofundé Kun Koro, y en 2024 impulsé Rcrear con Cristina, un estudio creativo de diseño gráfico y comunicación honesta.",
          "En 2026 llegué a La Llavor, un regalo de la vida y de Tamara, con quien nos conocíamos de Congrés-Indians y que apostó por mí.",
        ],
      },
    ],
    en: [
      {
        title: "Introduction",
        paragraphs: [
          "Child guide, psycho-corporal integration therapist, and Aucouturier preventive psychomotricist.",
        ],
      },
      {
        title: "Accompanying at La Llavor",
        paragraphs: [
          "Noel Cresencio González accompanies children through his experience and knowledge, creating safe bonds for relationship, exploration, and the growth of each child. Every moment is an opportunity to learn from what the group and life offer.",
        ],
      },
      {
        title: "Specialty",
        paragraphs: [
          "Relational accompaniment, free play, and personal and group project processes, enriching and caring for each one. Creativity and hands-on learning. Video, digital tools, board games, English, applied mathematics, body and movement.",
        ],
      },
      {
        title: "Journey",
        paragraphs: [
          "I grew up in a living education environment at home. My mother, Begoña González, together with my godfather Cristóbal Gutiérrez, founded La Caseta in Barcelona in 1996 and the living school El Roure in 2001. My father, Gustavo Cresencio, is a teacher of tai chi, chi kung, martial arts and personal growth. I studied in the state school system, spent one year at El Roure, and at age 14 moved to England to study at Brockwood Park School, the international boarding school founded in 1969 by philosopher and spiritual teacher Jiddu Krishnamurti.",
          "Between 2008 and 2010 I trained in film, photography and acting at Filmosofía in Granada. My main trainings include psychotherapy in Psycho-Corporal Integration at ETIP with Marc Costa and Agustín Prieto, psychomotricity in Preventive Aucouturier Practice at AEC with Iolanda Vives, and living education with Jordi Mateu and Begoña González.",
          "I also specialised in conscious communication with Chema Irusta and Begoña González; emotional accompaniment, aggression and conflict at Senda with Verónica Antón; and Seitai at Espaidó with Magda Berneda.",
          "From 2011 I worked for 14 years at Congrés-Indians school, during the midday period and alongside the teaching team during school hours. I was also Verónica Antón's psychomotor therapy assistant at Senda between 2014 and 2015.",
          "In 2018 I co-founded Kun Koro, and in 2024 I launched Rcrear with Cristina, a creative studio for graphic design and honest communication.",
          "In 2026 I arrived at La Llavor, a gift from life and from Tamara, whom I knew from Congrés-Indians and who believed in me.",
        ],
      },
    ],
  },
  3: {
    ca: [
      {
        title: "Presentació",
        paragraphs: [
          "Acompanyant voluntari en projectes d'educació viva i educador emocional en el lleure. Format en diferents pedagogies educatives i en enginyeria. El seu camí vital forma part del seu procés d'aprenentatge.",
        ],
      },
      {
        title: "L'acompanyament a La Llavor",
        paragraphs: [
          "Creació d'espais d'aprenentatge vivencials i segurs, acompanyant a través del que s'està donant en cada moment i de l'observació dels diferents processos dels infants a tots els nivells.",
        ],
      },
      {
        title: "Taller o especialitat",
        paragraphs: [
          "A la fusteria, a mesura que els infants creen, van construint-se internament i posant les bases de la seva seguretat a l'hora d'afrontar projectes o reptes més grans. Explorar, provar i equivocar-se forma part d'aquest aprenentatge.",
        ],
      },
      {
        title: "Recorregut",
        paragraphs: [
          "La meva trajectòria en el món de l'educació s'inicia el 2009 després d'un gran canvi en l'àmbit personal i professional. Fins aquell moment la meva formació com a enginyer m'havia portat a treballar 10 anys dintre de l'empresa privada.",
          "Els primers passos els vaig donar participant en diferents voluntariats en projectes educatius no formals al Casal dels Infants del Raval, Intermón Oxfam, casals d'estiu Ítaca i Permacultura Barcelona.",
          "Del 2011 al 2014 vaig fer la formació en monitor de lleure i altres com kinesologia, aprenentatge i integració cerebral a l'ICE de la UAB, metodologia ASIRI, clown terapèutic, coaching transformacional, formador de formadors i creixement personal amb Gestalt.",
          "El 2015 em vaig formar en coaching essencial a Essential Institute amb acreditació ICF i el 2016 com a Professor 3000 a l'Institut Científic Internacional de la Paz a Bolívia.",
          "Totes aquestes experiències anaven despertant en mi la necessitat de continuar indagant i formant-me en metodologies i pedagogies alternatives en l'acompanyament d'infants i adults.",
          "Per aprofundir més en pedagogies alternatives, el 2016 vaig fer la formació en Educació Viva/Lliure al projecte educatiu de l'Albada, a Arbúcies, i al CAIEV amb Jordi Mateu. Al projecte educatiu de l'Albada vaig formar part de l'equip educatiu l'any 2018, acompanyant l'etapa del grup de més grans.",
          "Entre 2012 i 2015 vaig formar part de la coordinació a l'Oficina d'Educació de la Cooperativa Integral Catalana a Aurea Social, on vaig fer assessorament a famílies i grups de criança, creació de xarxa de persones i projectes d'educació alternativa i posada en marxa de les convivències comunitàries per a adolescents.",
          "Cofundador i membre des del 2013 fins al 2020 d'un equip interdisciplinari de professionals de l'educació a l'associació Espirals d'Aprenentatge. En aquesta entitat vam desenvolupar una metodologia d'aprenentatge anomenada Condicionament Zero, que vam portar a la pràctica dins l'escola formal, en el lleure, en formacions i residencials amb professorat, i en processos d'acompanyament a claustres i direccions.",
          "Del 2015 fins al 2020 vaig treballar com a educador emocional a l'escola Granja de Palautordera, acompanyant grups escolars des d'infantil fins a universitaris, fent formació a professorat i formant part del projecte Masia 360 al FCB.",
          "Entre 2020 i 2025 vaig ser educador referent i coordinador de primària del projecte d'educació viva del Picot de Colors.",
          "Actualment formo part de l'equip de La Llavor, amb ganes de continuar creixent, aprenent i fent aquest camí que va de la mà del meu procés personal i de vida.",
        ],
      },
    ],
    es: [
      {
        title: "Presentación",
        paragraphs: [
          "Acompañante en proyectos de educación viva y educador emocional en el tiempo libre. Formado en distintas pedagogías educativas y en ingeniería. Su camino vital forma parte de su proceso de aprendizaje.",
        ],
      },
      {
        title: "El acompañamiento en La Llavor",
        paragraphs: [
          "Creación de espacios de aprendizaje vivenciales y seguros, acompañando a través de lo que está ocurriendo en cada momento y de la observación de los distintos procesos de las criaturas en todos los niveles.",
        ],
      },
      {
        title: "Taller o especialidad",
        paragraphs: [
          "En carpintería, a medida que las criaturas crean, también se van construyendo internamente y poniendo las bases de su seguridad para afrontar proyectos o retos mayores. Explorar, probar y equivocarse forma parte de este aprendizaje.",
        ],
      },
      {
        title: "Recorrido",
        paragraphs: [
          "Mi trayectoria en el mundo de la educación se inicia en 2009 después de un gran cambio en el ámbito personal y profesional. Hasta ese momento, mi formación como ingeniero me había llevado a trabajar durante 10 años dentro de la empresa privada.",
          "Los primeros pasos los di participando en distintos voluntariados en proyectos educativos no formales en el Casal dels Infants del Raval, Intermón Oxfam, casales de verano Ítaca y Permacultura Barcelona.",
          "De 2011 a 2014 realicé la formación en monitor de tiempo libre y otras como kinesiología, aprendizaje e integración cerebral en el ICE de la UAB, metodología ASIRI, clown terapéutico, coaching transformacional, formador de formadores y crecimiento personal con Gestalt.",
          "En 2015 me formé en coaching esencial en Essential Institute con acreditación ICF y en 2016 como Profesor 3000 en el Instituto Científico Internacional de la Paz en Bolivia.",
          "Todas estas experiencias fueron despertando en mí la necesidad de seguir investigando y formándome en metodologías y pedagogías alternativas en el acompañamiento de niñas, niños y personas adultas.",
          "Para profundizar más en pedagogías alternativas, en 2016 realicé la formación en Educación Viva/Libre en el proyecto educativo de l'Albada, en Arbúcies, y en el CAIEV con Jordi Mateu. En l'Albada formé parte del equipo educativo en 2018, acompañando la etapa del grupo de mayores.",
          "Entre 2012 y 2015 formé parte de la coordinación en la Oficina de Educación de la Cooperativa Integral Catalana en Aurea Social, donde asesoré a familias y grupos de crianza, creé red entre personas y proyectos de educación alternativa y puse en marcha las convivencias comunitarias para adolescentes.",
          "Fui cofundador y miembro desde 2013 hasta 2020 de un equipo interdisciplinar de profesionales de la educación en la asociación Espirals d'Aprenentatge. En esta entidad desarrollamos una metodología de aprendizaje llamada Condicionamiento Cero, que llevamos a la práctica dentro de la escuela formal, en el tiempo libre, en formaciones y residenciales con profesorado, y en procesos de acompañamiento a claustros y direcciones.",
          "De 2015 a 2020 trabajé como educador emocional en la escuela Granja de Palautordera, acompañando grupos escolares desde infantil hasta universitarios, formando a profesorado y formando parte del proyecto Masia 360 en el FCB.",
          "Entre 2020 y 2025 fui educador referente y coordinador de primaria del proyecto de educación viva del Picot de Colors.",
          "Actualmente formo parte del equipo de La Llavor, con ganas de seguir creciendo, aprendiendo y recorriendo este camino que va de la mano de mi proceso personal y vital.",
        ],
      },
    ],
    en: [
      {
        title: "Introduction",
        paragraphs: [
          "Volunteer guide in living education projects and emotional educator in non-formal education. Trained in different educational approaches and in engineering. His life path is part of his learning process.",
        ],
      },
      {
        title: "Accompanying at La Llavor",
        paragraphs: [
          "He creates experiential and safe learning spaces, accompanying through what is arising in each moment and through the observation of children's different processes at every level.",
        ],
      },
      {
        title: "Workshop or specialty",
        paragraphs: [
          "In woodworking, as children create, they also build themselves internally and lay the foundations of their confidence when facing bigger projects and challenges. Exploring, trying and making mistakes are part of that learning.",
        ],
      },
      {
        title: "Journey",
        paragraphs: [
          "My path in education began in 2009 after a major personal and professional shift. Until then, my training as an engineer had led me to work for ten years in the private sector.",
          "My first steps came through volunteering in non-formal educational projects with Casal dels Infants del Raval, Intermón Oxfam, Ítaca summer camps and Permacultura Barcelona.",
          "From 2011 to 2014 I trained as a leisure-time educator and also studied kinesiology, learning and brain integration at ICE-UAB, the ASIRI methodology, therapeutic clowning, transformational coaching, trainer training and personal growth through Gestalt.",
          "In 2015 I trained in Essential Coaching through Essential Institute with ICF accreditation, and in 2016 as a Professor 3000 at the International Scientific Institute of Peace in Bolivia.",
          "All these experiences awakened in me the need to keep exploring and training in alternative methodologies and pedagogies for accompanying children and adults.",
          "To go deeper into alternative pedagogies, in 2016 I undertook training in Living/Free Education at the educational project l'Albada in Arbúcies and at CAIEV with Jordi Mateu. At l'Albada I was part of the educational team in 2018, accompanying the oldest group.",
          "Between 2012 and 2015 I was part of the coordination team at the Education Office of the Cooperativa Integral Catalana at Aurea Social, where I advised families and parenting groups, helped build a network of people and alternative education projects, and launched community gatherings for teenagers.",
          "I was co-founder and member from 2013 to 2020 of an interdisciplinary team of education professionals in the association Espirals d'Aprenentatge. There we developed a learning methodology called Zero Conditioning, which we put into practice in formal schools, in non-formal education, in teacher training and residential programmes, and in accompaniment processes for school staffs and leadership teams.",
          "From 2015 until 2020 I worked as an emotional educator at Granja de Palautordera school, accompanying school groups from early childhood to university level, training teachers and taking part in the Masia 360 project at FCB.",
          "Between 2020 and 2025 I worked as a reference educator and primary coordinator in the living education project Picot de Colors.",
          "I am currently part of the La Llavor team, eager to keep growing, learning, and walking this path that goes hand in hand with my personal and life process.",
        ],
      },
    ],
  },
};

export const getTeamProfileSections = (
  memberId: number,
  language: string,
): ProfileSection[] | undefined => teamProfiles[memberId]?.[normalizeLanguage(language)];
