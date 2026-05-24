const questionBank = {
  5: {
    math: [
      {
        q: "Un huerto tiene 6 filas con 14 lechugas en cada fila. ¿Cuántas lechugas hay en total?",
        options: ["74", "84", "96", "68"],
        answer: "84",
        help: "Multiplica filas por lechugas: 6 x 14 = 84."
      },
      {
        q: "¿Cuál es el resultado de 3/4 + 1/4?",
        options: ["1", "4/8", "3/8", "2"],
        answer: "1",
        help: "Tienen el mismo denominador: 3 partes + 1 parte = 4/4, que es 1."
      },
      {
        q: "Un libro cuesta 18 euros y tiene un descuento de 5 euros. ¿Cuánto se paga?",
        options: ["13 euros", "15 euros", "23 euros", "12 euros"],
        answer: "13 euros",
        help: "Resta el descuento: 18 - 5 = 13."
      },
      {
        q: "¿Qué número falta? 7, 14, 21, __, 35",
        options: ["24", "27", "28", "30"],
        answer: "28",
        help: "La serie suma 7 cada vez."
      },
      {
        q: "¿Cuántos centímetros hay en 2 metros y medio?",
        options: ["25 cm", "200 cm", "250 cm", "205 cm"],
        answer: "250 cm",
        help: "Un metro son 100 cm. 2,5 metros son 250 cm."
      }
    ],
    language: [
      {
        q: "En la frase “La niña leyó una novela emocionante”, ¿cuál es el adjetivo?",
        options: ["niña", "leyó", "novela", "emocionante"],
        answer: "emocionante",
        help: "El adjetivo dice cómo es la novela."
      },
      {
        q: "¿Cuál de estas palabras es esdrújula?",
        options: ["camión", "árbol", "pájaro", "papel"],
        answer: "pájaro",
        help: "Las esdrújulas llevan el golpe de voz en la antepenúltima sílaba."
      },
      {
        q: "¿Qué signo debe cerrar una pregunta directa?",
        options: [".", "?", "!", ","],
        answer: "?",
        help: "En español se usan dos signos: ¿ al inicio y ? al final."
      },
      {
        q: "Elige el sinónimo de “rápido”.",
        options: ["lento", "veloz", "quieto", "suave"],
        answer: "veloz",
        help: "Rápido y veloz significan casi lo mismo."
      },
      {
        q: "¿Cuál es el sujeto de “Los planetas giran alrededor del Sol”?",
        options: ["Los planetas", "giran", "alrededor", "el Sol"],
        answer: "Los planetas",
        help: "El sujeto indica quién realiza la acción."
      }
    ],
    science: [
      {
        q: "¿Qué órgano bombea la sangre por el cuerpo?",
        options: ["Pulmón", "Corazón", "Estómago", "Hígado"],
        answer: "Corazón",
        help: "El corazón impulsa la sangre por los vasos sanguíneos."
      },
      {
        q: "¿Qué necesitan las plantas para hacer la fotosíntesis?",
        options: ["Luz, agua y dióxido de carbono", "Arena y sal", "Solo oxígeno", "Piedras"],
        answer: "Luz, agua y dióxido de carbono",
        help: "Con esos elementos producen su alimento y liberan oxígeno."
      },
      {
        q: "¿Cuál de estos materiales es buen conductor de electricidad?",
        options: ["Madera", "Plástico", "Cobre", "Goma"],
        answer: "Cobre",
        help: "Los metales como el cobre conducen muy bien la electricidad."
      },
      {
        q: "La Tierra tarda aproximadamente un año en dar una vuelta alrededor de...",
        options: ["La Luna", "El Sol", "Marte", "Júpiter"],
        answer: "El Sol",
        help: "Ese movimiento se llama traslación."
      },
      {
        q: "¿Qué estado de la materia tiene forma propia y volumen propio?",
        options: ["Sólido", "Líquido", "Gas", "Vapor"],
        answer: "Sólido",
        help: "Un sólido mantiene su forma si no se le aplica una fuerza."
      }
    ],
    english: [
      {
        q: "What is the plural of “child”?",
        options: ["childs", "children", "childes", "childrens"],
        answer: "children",
        help: "Child tiene un plural irregular: children."
      },
      {
        q: "Choose the correct sentence.",
        options: ["She are happy.", "She is happy.", "She am happy.", "She be happy."],
        answer: "She is happy.",
        help: "Con she usamos is."
      },
      {
        q: "What does “behind” mean?",
        options: ["delante de", "encima de", "detrás de", "debajo de"],
        answer: "detrás de",
        help: "Behind significa detrás de."
      },
      {
        q: "Complete: I usually ____ breakfast at eight.",
        options: ["has", "have", "having", "to have"],
        answer: "have",
        help: "Con I usamos have."
      },
      {
        q: "Which word is an animal?",
        options: ["river", "pencil", "rabbit", "window"],
        answer: "rabbit",
        help: "Rabbit significa conejo."
      }
    ]
  },
  6: {
    math: [
      {
        q: "Calcula el 20% de 150.",
        options: ["15", "20", "30", "35"],
        answer: "30",
        help: "El 10% de 150 es 15; el 20% es el doble: 30."
      },
      {
        q: "¿Cuál es el mínimo común múltiplo de 6 y 8?",
        options: ["12", "18", "24", "48"],
        answer: "24",
        help: "24 es el primer múltiplo que comparten 6 y 8."
      },
      {
        q: "Un rectángulo mide 9 cm de largo y 4 cm de ancho. ¿Cuál es su área?",
        options: ["13 cm²", "26 cm²", "36 cm²", "40 cm²"],
        answer: "36 cm²",
        help: "Área = largo x ancho: 9 x 4 = 36."
      },
      {
        q: "Resuelve: 45 : 0,5",
        options: ["22,5", "45,5", "90", "9"],
        answer: "90",
        help: "Dividir entre 0,5 es lo mismo que multiplicar por 2."
      },
      {
        q: "¿Qué número es mayor?",
        options: ["0,7", "2/3", "0,65", "3/5"],
        answer: "0,7",
        help: "2/3 es aproximadamente 0,67 y 3/5 es 0,6."
      }
    ],
    language: [
      {
        q: "¿Qué tipo de palabra es “lentamente”?",
        options: ["Sustantivo", "Adverbio", "Artículo", "Pronombre"],
        answer: "Adverbio",
        help: "Los adverbios pueden indicar modo, tiempo, lugar o cantidad."
      },
      {
        q: "En “Ojalá llueva mañana”, el modo verbal es...",
        options: ["Indicativo", "Subjuntivo", "Imperativo", "Infinitivo"],
        answer: "Subjuntivo",
        help: "Ojalá expresa deseo, muy propio del subjuntivo."
      },
      {
        q: "Elige la palabra con diptongo.",
        options: ["poeta", "ciudad", "teatro", "caer"],
        answer: "ciudad",
        help: "En ciudad se unen dos vocales en la misma sílaba."
      },
      {
        q: "¿Qué recurso literario aparece en “Tus ojos son estrellas”?",
        options: ["Metáfora", "Enumeración", "Onomatopeya", "Diálogo"],
        answer: "Metáfora",
        help: "Identifica una cosa con otra para crear una imagen."
      },
      {
        q: "¿Cuál es el complemento directo de “Marcos compró una mochila”?",
        options: ["Marcos", "compró", "una mochila", "ninguno"],
        answer: "una mochila",
        help: "Responde a la pregunta: ¿qué compró Marcos?"
      }
    ],
    science: [
      {
        q: "¿Qué fuerza atrae los objetos hacia la Tierra?",
        options: ["Rozamiento", "Magnetismo", "Gravedad", "Electricidad"],
        answer: "Gravedad",
        help: "La gravedad atrae los cuerpos con masa."
      },
      {
        q: "¿Cuál es la unidad básica de los seres vivos?",
        options: ["Átomo", "Célula", "Órgano", "Tejido"],
        answer: "Célula",
        help: "Todos los seres vivos están formados por células."
      },
      {
        q: "¿Qué gas tomamos al respirar?",
        options: ["Oxígeno", "Dióxido de carbono", "Helio", "Hidrógeno"],
        answer: "Oxígeno",
        help: "El sistema respiratorio toma oxígeno del aire."
      },
      {
        q: "¿Qué capa de la Tierra está entre la corteza y el núcleo?",
        options: ["Atmósfera", "Manto", "Hidrosfera", "Litosfera"],
        answer: "Manto",
        help: "La Tierra se divide en corteza, manto y núcleo."
      },
      {
        q: "Una mezcla de agua y sal es...",
        options: ["Heterogénea", "Homogénea", "Un elemento", "Un mineral"],
        answer: "Homogénea",
        help: "La sal se disuelve y no se distinguen sus partes a simple vista."
      }
    ],
    english: [
      {
        q: "Choose the past simple form of “go”.",
        options: ["goed", "went", "goes", "going"],
        answer: "went",
        help: "Go es irregular: go, went, gone."
      },
      {
        q: "Complete: There ____ many books on the table.",
        options: ["is", "are", "am", "be"],
        answer: "are",
        help: "Con many books, plural, usamos are."
      },
      {
        q: "What is the opposite of “early”?",
        options: ["late", "fast", "easy", "near"],
        answer: "late",
        help: "Early significa temprano; late significa tarde."
      },
      {
        q: "Choose the comparative: This exam is ____ than the last one.",
        options: ["easy", "easier", "easiest", "more easy"],
        answer: "easier",
        help: "Easy cambia a easier en comparativo."
      },
      {
        q: "Which question is correct?",
        options: ["Do she play?", "Does she play?", "Does she plays?", "She does play?"],
        answer: "Does she play?",
        help: "Con he/she usamos does y el verbo queda en forma base."
      }
    ]
  }
};

const extraQuestionBank = {
  5: {
    math: [
      {
        q: "Laura reparte 96 cromos entre 8 amigos por igual. ¿Cuántos cromos recibe cada uno?",
        options: ["10", "11", "12", "14"],
        answer: "12",
        help: "Divide 96 entre 8. Cada amigo recibe 12 cromos."
      },
      {
        q: "¿Qué fracción equivale a 1/2?",
        options: ["2/4", "2/3", "3/5", "4/6"],
        answer: "2/4",
        help: "Si multiplicas numerador y denominador por 2, 1/2 se convierte en 2/4."
      },
      {
        q: "Un autobús recorre 35 km por la mañana y 48 km por la tarde. ¿Cuántos kilómetros recorre?",
        options: ["73 km", "83 km", "93 km", "13 km"],
        answer: "83 km",
        help: "Suma los dos recorridos: 35 + 48 = 83."
      },
      {
        q: "¿Cuál es el número decimal de 7 décimas?",
        options: ["0,07", "0,7", "7,0", "70"],
        answer: "0,7",
        help: "Siete décimas se escriben 0,7."
      },
      {
        q: "Si un cuadrado tiene lados de 6 cm, ¿cuál es su perímetro?",
        options: ["12 cm", "24 cm", "36 cm", "18 cm"],
        answer: "24 cm",
        help: "El perímetro del cuadrado es 4 x lado: 4 x 6 = 24."
      },
      {
        q: "Ordena de menor a mayor: 0,4; 0,04; 0,44",
        options: ["0,04; 0,4; 0,44", "0,4; 0,04; 0,44", "0,44; 0,4; 0,04", "0,04; 0,44; 0,4"],
        answer: "0,04; 0,4; 0,44",
        help: "0,04 es cuatro centésimas; después va 0,4 y luego 0,44."
      },
      {
        q: "¿Cuánto es 125 x 4?",
        options: ["400", "450", "500", "525"],
        answer: "500",
        help: "125 x 4 = 500."
      },
      {
        q: "Un paquete tiene 24 galletas. ¿Cuántas galletas hay en 6 paquetes?",
        options: ["120", "130", "144", "150"],
        answer: "144",
        help: "Multiplica 24 x 6 = 144."
      }
    ],
    language: [
      {
        q: "¿Cuál es el antónimo de “valiente”?",
        options: ["atrevido", "cobarde", "fuerte", "amable"],
        answer: "cobarde",
        help: "Un antónimo expresa lo contrario."
      },
      {
        q: "En “Mis primos llegaron tarde”, ¿qué palabra es un posesivo?",
        options: ["Mis", "primos", "llegaron", "tarde"],
        answer: "Mis",
        help: "Mis indica pertenencia."
      },
      {
        q: "¿Qué palabra está escrita correctamente?",
        options: ["havía", "había", "avía", "abía"],
        answer: "había",
        help: "Había se escribe con h y b."
      },
      {
        q: "Elige la oración exclamativa.",
        options: ["¿Dónde está?", "Ven aquí.", "¡Qué sorpresa!", "Hoy llueve."],
        answer: "¡Qué sorpresa!",
        help: "Las exclamativas expresan emoción y usan signos de admiración."
      },
      {
        q: "¿Cuál es el núcleo del sujeto en “El perro pequeño ladra”?",
        options: ["El", "perro", "pequeño", "ladra"],
        answer: "perro",
        help: "El núcleo del sujeto suele ser un sustantivo."
      },
      {
        q: "¿Qué palabra es aguda?",
        options: ["mesa", "café", "pájaro", "lápiz"],
        answer: "café",
        help: "Las agudas tienen la sílaba tónica al final."
      },
      {
        q: "Completa: Ayer nosotros ____ al parque.",
        options: ["fuimos", "fueron", "iremos", "van"],
        answer: "fuimos",
        help: "Ayer indica pasado y con nosotros usamos fuimos."
      },
      {
        q: "¿Qué palabra es un sustantivo común?",
        options: ["Madrid", "Sofía", "río", "Ebro"],
        answer: "río",
        help: "Río nombra algo de forma general."
      }
    ],
    science: [
      {
        q: "¿Cuál es el planeta más cercano al Sol?",
        options: ["Venus", "Mercurio", "Tierra", "Marte"],
        answer: "Mercurio",
        help: "Mercurio es el primer planeta del sistema solar."
      },
      {
        q: "¿Qué aparato usamos para medir la temperatura?",
        options: ["Barómetro", "Termómetro", "Brújula", "Balanza"],
        answer: "Termómetro",
        help: "El termómetro mide la temperatura."
      },
      {
        q: "¿Qué grupo de animales nace de huevos y tiene plumas?",
        options: ["Mamíferos", "Aves", "Peces", "Anfibios"],
        answer: "Aves",
        help: "Las aves tienen plumas y la mayoría nace de huevos."
      },
      {
        q: "¿Cuál es la función de las raíces de una planta?",
        options: ["Absorber agua y sujetar la planta", "Fabricar flores", "Hacer semillas", "Volar con el viento"],
        answer: "Absorber agua y sujetar la planta",
        help: "Las raíces toman agua y sales minerales del suelo."
      },
      {
        q: "¿Qué cambio ocurre cuando el hielo se convierte en agua?",
        options: ["Evaporación", "Fusión", "Condensación", "Solidificación"],
        answer: "Fusión",
        help: "La fusión es el paso de sólido a líquido."
      },
      {
        q: "¿Qué sentido usamos principalmente para escuchar?",
        options: ["Vista", "Oído", "Gusto", "Tacto"],
        answer: "Oído",
        help: "El oído nos permite percibir sonidos."
      },
      {
        q: "¿Cuál de estos alimentos aporta más proteínas?",
        options: ["Pollo", "Agua", "Azúcar", "Aceite"],
        answer: "Pollo",
        help: "La carne, los huevos y las legumbres aportan proteínas."
      },
      {
        q: "¿Qué es un ecosistema?",
        options: ["Un ser vivo aislado", "Un lugar y los seres vivos que lo habitan", "Solo el clima", "Una roca grande"],
        answer: "Un lugar y los seres vivos que lo habitan",
        help: "En un ecosistema interactúan seres vivos y medio físico."
      }
    ],
    english: [
      {
        q: "Translate “mesa” into English.",
        options: ["chair", "table", "door", "floor"],
        answer: "table",
        help: "Mesa en inglés es table."
      },
      {
        q: "Complete: He ____ football on Saturdays.",
        options: ["play", "plays", "playing", "played"],
        answer: "plays",
        help: "Con he añadimos -s en presente simple."
      },
      {
        q: "What color is the sky on a clear day?",
        options: ["green", "blue", "black", "pink"],
        answer: "blue",
        help: "Blue significa azul."
      },
      {
        q: "Choose the correct plural of “box”.",
        options: ["boxs", "boxes", "boxies", "boxen"],
        answer: "boxes",
        help: "Las palabras acabadas en x suelen formar plural con -es."
      },
      {
        q: "What does “always” mean?",
        options: ["nunca", "a veces", "siempre", "ayer"],
        answer: "siempre",
        help: "Always significa siempre."
      },
      {
        q: "Complete: My sister is ____ than me.",
        options: ["tall", "taller", "tallest", "more tall"],
        answer: "taller",
        help: "Para comparar usamos taller."
      },
      {
        q: "Which one is a place?",
        options: ["school", "hungry", "quickly", "yellow"],
        answer: "school",
        help: "School significa colegio."
      },
      {
        q: "Choose the correct question.",
        options: ["Where you live?", "Where do you live?", "Where does you live?", "Where live you?"],
        answer: "Where do you live?",
        help: "Con you usamos do para formar preguntas."
      }
    ],
    workbook: [
      {
        q: "Cuaderno: 348 + 276 =",
        options: ["614", "624", "634", "604"],
        answer: "624",
        help: "348 + 276 = 624."
      },
      {
        q: "Cuaderno: 900 - 457 =",
        options: ["443", "453", "543", "433"],
        answer: "443",
        help: "900 - 457 = 443."
      },
      {
        q: "Cuaderno: 36 x 7 =",
        options: ["242", "252", "262", "272"],
        answer: "252",
        help: "36 x 7 = 252."
      },
      {
        q: "Cuaderno: 864 : 8 =",
        options: ["108", "118", "98", "106"],
        answer: "108",
        help: "8 x 108 = 864."
      },
      {
        q: "Cuaderno: escribe en decimal tres décimas.",
        options: ["0,03", "0,3", "3,0", "30"],
        answer: "0,3",
        help: "Tres décimas se escriben 0,3."
      },
      {
        q: "Cuaderno: completa la serie 12, 24, 36, __, 60.",
        options: ["42", "46", "48", "52"],
        answer: "48",
        help: "La serie suma 12 cada vez."
      },
      {
        q: "Cuaderno: ¿cuál es el doble de 375?",
        options: ["650", "700", "750", "775"],
        answer: "750",
        help: "Doble significa multiplicar por 2."
      },
      {
        q: "Cuaderno: 5/10 equivale a...",
        options: ["1/5", "1/2", "2/5", "5/5"],
        answer: "1/2",
        help: "5/10 se simplifica dividiendo entre 5."
      },
      {
        q: "Cuaderno: selecciona la palabra sin falta.",
        options: ["zanahoria", "sanahoria", "zanaoria", "zanahor ia"],
        answer: "zanahoria",
        help: "Zanahoria se escribe con z y h intercalada."
      },
      {
        q: "Cuaderno: separa en sílabas “ventana”.",
        options: ["ven-ta-na", "ve-nta-na", "vent-a-na", "ven-tan-a"],
        answer: "ven-ta-na",
        help: "Ventana tiene tres sílabas: ven-ta-na."
      },
      {
        q: "Cuaderno: ¿qué palabra completa? Yo ____ una carta.",
        options: ["escribo", "escribe", "escriben", "escribimos"],
        answer: "escribo",
        help: "Con yo usamos escribo."
      },
      {
        q: "Cuaderno: ¿cuántos mililitros hay en medio litro?",
        options: ["50 ml", "500 ml", "1.000 ml", "250 ml"],
        answer: "500 ml",
        help: "Un litro son 1.000 ml; medio litro son 500 ml."
      }
    ]
  },
  6: {
    math: [
      {
        q: "Calcula el 15% de 200.",
        options: ["15", "20", "30", "45"],
        answer: "30",
        help: "El 10% es 20 y el 5% es 10; juntos son 30."
      },
      {
        q: "¿Cuál es el máximo común divisor de 18 y 24?",
        options: ["3", "6", "9", "12"],
        answer: "6",
        help: "6 es el mayor divisor común de 18 y 24."
      },
      {
        q: "Resuelve: 3,5 + 2,75",
        options: ["5,25", "6,25", "6,15", "6,75"],
        answer: "6,25",
        help: "3,50 + 2,75 = 6,25."
      },
      {
        q: "Una caja pesa 2,4 kg. ¿Cuánto pesan 5 cajas iguales?",
        options: ["10 kg", "11 kg", "12 kg", "14 kg"],
        answer: "12 kg",
        help: "2,4 x 5 = 12."
      },
      {
        q: "¿Cuál es el volumen de un cubo de arista 3 cm?",
        options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
        answer: "27 cm³",
        help: "Volumen del cubo = lado x lado x lado: 3 x 3 x 3."
      },
      {
        q: "Resuelve: 2/3 + 1/6",
        options: ["3/9", "5/6", "1/2", "4/6"],
        answer: "5/6",
        help: "2/3 equivale a 4/6; 4/6 + 1/6 = 5/6."
      },
      {
        q: "Un mapa usa escala 1:100.000. 3 cm en el mapa son...",
        options: ["300 m", "3 km", "30 km", "300 km"],
        answer: "3 km",
        help: "3 cm representan 300.000 cm, que son 3 km."
      },
      {
        q: "¿Cuál es la media de 6, 8, 10 y 12?",
        options: ["8", "9", "10", "11"],
        answer: "9",
        help: "Suma 36 y divide entre 4: 9."
      }
    ],
    language: [
      {
        q: "¿Qué oración está en voz pasiva?",
        options: ["Ana abrió la puerta.", "La puerta fue abierta por Ana.", "Ana abre puertas.", "Abre la puerta."],
        answer: "La puerta fue abierta por Ana.",
        help: "En pasiva, el sujeto recibe la acción."
      },
      {
        q: "¿Cuál es el predicado de “El equipo ganó el partido”?",
        options: ["El equipo", "ganó el partido", "el partido", "ganó"],
        answer: "ganó el partido",
        help: "El predicado dice qué hace el sujeto."
      },
      {
        q: "Elige la palabra con hiato.",
        options: ["ciudad", "país", "cuento", "aire"],
        answer: "país",
        help: "En país las vocales se pronuncian en sílabas distintas."
      },
      {
        q: "¿Qué palabra es un pronombre personal?",
        options: ["ellos", "mesa", "rápido", "este"],
        answer: "ellos",
        help: "Ellos sustituye a un grupo de personas."
      },
      {
        q: "¿Qué conector indica causa?",
        options: ["sin embargo", "porque", "además", "después"],
        answer: "porque",
        help: "Porque introduce la razón o causa."
      },
      {
        q: "Elige la forma verbal correcta: Si pudiera, yo ____.",
        options: ["viajo", "viajaría", "viajé", "viajaba"],
        answer: "viajaría",
        help: "La condición pide condicional: viajaría."
      },
      {
        q: "¿Qué recurso imita un sonido?",
        options: ["Metáfora", "Onomatopeya", "Hipérbole", "Comparación"],
        answer: "Onomatopeya",
        help: "Una onomatopeya imita sonidos, como tic-tac."
      },
      {
        q: "¿Cuál está correctamente acentuada?",
        options: ["facilmente", "fácilmente", "facílmente", "facilmenté"],
        answer: "fácilmente",
        help: "Mantiene la tilde del adjetivo fácil."
      }
    ],
    science: [
      {
        q: "¿Qué sistema transporta nutrientes y oxígeno por el cuerpo?",
        options: ["Digestivo", "Circulatorio", "Nervioso", "Locomotor"],
        answer: "Circulatorio",
        help: "La sangre circula por el sistema circulatorio."
      },
      {
        q: "¿Qué tipo de energía tiene un objeto en movimiento?",
        options: ["Cinética", "Química", "Elástica", "Térmica"],
        answer: "Cinética",
        help: "La energía cinética depende del movimiento."
      },
      {
        q: "¿Qué ocurre en la condensación?",
        options: ["Gas a líquido", "Líquido a gas", "Sólido a líquido", "Líquido a sólido"],
        answer: "Gas a líquido",
        help: "El vapor se enfría y pasa a líquido."
      },
      {
        q: "¿Qué órgano coordina muchas funciones del cuerpo?",
        options: ["Cerebro", "Estómago", "Riñón", "Pulmón"],
        answer: "Cerebro",
        help: "El cerebro forma parte del sistema nervioso."
      },
      {
        q: "¿Cuál es una fuente de energía renovable?",
        options: ["Carbón", "Petróleo", "Sol", "Gas natural"],
        answer: "Sol",
        help: "La energía solar se renueva de forma natural."
      },
      {
        q: "¿Qué partículas tienen carga negativa?",
        options: ["Protones", "Neutrones", "Electrones", "Moléculas"],
        answer: "Electrones",
        help: "Los electrones tienen carga eléctrica negativa."
      },
      {
        q: "¿Qué relación hay entre depredador y presa?",
        options: ["Competencia", "Alimentación", "Mutualismo", "Reproducción"],
        answer: "Alimentación",
        help: "El depredador se alimenta de la presa."
      },
      {
        q: "¿Qué aparato mide la presión atmosférica?",
        options: ["Barómetro", "Termómetro", "Anemómetro", "Pluviómetro"],
        answer: "Barómetro",
        help: "El barómetro mide la presión del aire."
      }
    ],
    english: [
      {
        q: "Complete: I have lived here ____ 2020.",
        options: ["for", "since", "during", "ago"],
        answer: "since",
        help: "Since se usa con el punto de inicio."
      },
      {
        q: "Choose the correct past simple sentence.",
        options: ["They goed home.", "They went home.", "They goes home.", "They going home."],
        answer: "They went home.",
        help: "Go en pasado simple es went."
      },
      {
        q: "What does “borrow” mean?",
        options: ["prestar", "tomar prestado", "comprar", "vender"],
        answer: "tomar prestado",
        help: "Borrow es recibir algo prestado."
      },
      {
        q: "Complete: This is the ____ book in the library.",
        options: ["old", "older", "oldest", "more old"],
        answer: "oldest",
        help: "The oldest es superlativo."
      },
      {
        q: "Choose the correct sentence.",
        options: ["There is three apples.", "There are three apples.", "There am three apples.", "There be three apples."],
        answer: "There are three apples.",
        help: "Con plural usamos there are."
      },
      {
        q: "What is the opposite of “dangerous”?",
        options: ["safe", "heavy", "dirty", "wide"],
        answer: "safe",
        help: "Safe significa seguro."
      },
      {
        q: "Complete: She ____ already finished.",
        options: ["has", "have", "is", "does"],
        answer: "has",
        help: "Con she usamos has en present perfect."
      },
      {
        q: "Which word is an adverb?",
        options: ["quickly", "quick", "quicker", "quickness"],
        answer: "quickly",
        help: "Quickly indica cómo se hace una acción."
      }
    ],
    workbook: [
      {
        q: "Cuaderno: 4.506 + 2.789 =",
        options: ["7.195", "7.295", "7.305", "7.395"],
        answer: "7.295",
        help: "4.506 + 2.789 = 7.295."
      },
      {
        q: "Cuaderno: 6.000 - 2.748 =",
        options: ["3.152", "3.252", "3.352", "3.452"],
        answer: "3.252",
        help: "6.000 - 2.748 = 3.252."
      },
      {
        q: "Cuaderno: 128 x 6 =",
        options: ["748", "758", "768", "778"],
        answer: "768",
        help: "128 x 6 = 768."
      },
      {
        q: "Cuaderno: 1.296 : 12 =",
        options: ["98", "108", "118", "128"],
        answer: "108",
        help: "12 x 108 = 1.296."
      },
      {
        q: "Cuaderno: simplifica 18/24.",
        options: ["2/3", "3/4", "4/5", "6/8"],
        answer: "3/4",
        help: "Divide numerador y denominador entre 6."
      },
      {
        q: "Cuaderno: 0,25 equivale a...",
        options: ["1/2", "1/4", "2/5", "3/4"],
        answer: "1/4",
        help: "0,25 son veinticinco centésimas, una cuarta parte."
      },
      {
        q: "Cuaderno: completa 3, 9, 27, __, 243.",
        options: ["54", "72", "81", "90"],
        answer: "81",
        help: "Cada término se multiplica por 3."
      },
      {
        q: "Cuaderno: calcula 2/5 de 100.",
        options: ["20", "30", "40", "50"],
        answer: "40",
        help: "100 dividido entre 5 es 20; 2 partes son 40."
      },
      {
        q: "Cuaderno: ¿qué palabra lleva tilde correctamente?",
        options: ["camion", "camión", "cámion", "camiòn"],
        answer: "camión",
        help: "Camión es aguda acabada en n."
      },
      {
        q: "Cuaderno: analiza “muy rápido”. ¿Qué es “muy”?",
        options: ["Sustantivo", "Adverbio", "Artículo", "Verbo"],
        answer: "Adverbio",
        help: "Muy modifica a rápido."
      },
      {
        q: "Cuaderno: elige el verbo en pretérito perfecto simple.",
        options: ["cantaba", "cantaré", "canté", "canto"],
        answer: "canté",
        help: "Canté expresa una acción pasada terminada."
      },
      {
        q: "Cuaderno: ¿cuántos gramos son 2,5 kg?",
        options: ["250 g", "2.050 g", "2.500 g", "25.000 g"],
        answer: "2.500 g",
        help: "1 kg son 1.000 g; 2,5 kg son 2.500 g."
      }
    ]
  }
};

Object.entries(extraQuestionBank).forEach(([grade, subjects]) => {
  Object.entries(subjects).forEach(([subject, questions]) => {
    questionBank[grade][subject] = [...(questionBank[grade][subject] || []), ...questions];
  });
});

const subjectNames = {
  math: "Matemáticas",
  language: "Lengua",
  science: "Ciencias",
  english: "Inglés",
  workbook: "Cuaderno"
};

const defaultAvatar = {
  id: "ari",
  name: "Ari",
  skin: "#f2b184",
  hair: "#20222b",
  suit: "#3468d8",
  badge: "★"
};

const state = {
  grade: "5",
  subject: "math",
  round: [],
  index: 0,
  locked: false,
  progress: JSON.parse(localStorage.getItem("aventuraPrimariaProgress") || "{}"),
  seenQuestions: JSON.parse(localStorage.getItem("aventuraPrimariaSeenQuestions") || "{}"),
  avatar: { ...defaultAvatar, ...JSON.parse(localStorage.getItem("aventuraPrimariaAvatar") || "{}") },
  characters: JSON.parse(localStorage.getItem("aventuraPrimariaCharacters") || "[]"),
  sound: false
};

const els = {
  answers: document.querySelector("#answers"),
  challengeMeta: document.querySelector("#challengeMeta"),
  questionTitle: document.querySelector("#questionTitle"),
  questionText: document.querySelector("#questionText"),
  roundPill: document.querySelector("#roundPill"),
  feedback: document.querySelector("#feedback"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackText: document.querySelector("#feedbackText"),
  nextQuestion: document.querySelector("#nextQuestion"),
  newRound: document.querySelector("#newRound"),
  starRow: document.querySelector("#starRow"),
  meterFill: document.querySelector("#meterFill"),
  correctStat: document.querySelector("#correctStat"),
  streakStat: document.querySelector("#streakStat"),
  answeredStat: document.querySelector("#answeredStat"),
  progressTitle: document.querySelector("#progressTitle"),
  resetProgress: document.querySelector("#resetProgress"),
  soundToggle: document.querySelector("#soundToggle"),
  avatarPreview: document.querySelector("#avatarPreview"),
  avatarName: document.querySelector("#avatarName"),
  miniAvatar: document.querySelector("#miniAvatar"),
  companionName: document.querySelector("#companionName"),
  menuPlayerName: document.querySelector("#menuPlayerName"),
  changeCharacter: document.querySelector("#changeCharacter"),
  saveCharacter: document.querySelector("#saveCharacter"),
  characterList: document.querySelector("#characterList"),
  aiMessage: document.querySelector("#aiMessage")
};

function key() {
  return `${state.grade}-${state.subject}`;
}

function currentProgress() {
  if (!state.progress[key()]) {
    state.progress[key()] = { correct: 0, answered: 0, streak: 0 };
  }
  return state.progress[key()];
}

function saveProgress() {
  localStorage.setItem("aventuraPrimariaProgress", JSON.stringify(state.progress));
}

function saveSeenQuestions() {
  localStorage.setItem("aventuraPrimariaSeenQuestions", JSON.stringify(state.seenQuestions));
}

function saveAvatar() {
  localStorage.setItem("aventuraPrimariaAvatar", JSON.stringify(state.avatar));
}

function saveCharacters() {
  localStorage.setItem("aventuraPrimariaCharacters", JSON.stringify(state.characters));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function questionId(item) {
  return item.q;
}

function currentSeenQuestions() {
  if (!state.seenQuestions[key()]) {
    state.seenQuestions[key()] = [];
  }
  return state.seenQuestions[key()];
}

function startRound() {
  const allQuestions = questionBank[state.grade][state.subject];
  let seen = currentSeenQuestions();
  let available = allQuestions.filter((item) => !seen.includes(questionId(item)));

  if (available.length === 0) {
    state.seenQuestions[key()] = [];
    seen = currentSeenQuestions();
    available = allQuestions;
    saveSeenQuestions();
  }

  state.round = shuffle(available).slice(0, Math.min(10, available.length));
  state.index = 0;
  renderQuestion();
  updateProgress();
}

function renderQuestion() {
  const item = state.round[state.index];
  state.locked = false;
  els.challengeMeta.textContent = `${subjectNames[state.subject]} · ${state.grade}º`;
  els.questionTitle.textContent = `Reto ${state.index + 1}`;
  els.questionText.textContent = item.q;
  els.roundPill.textContent = `${state.index + 1} de ${state.round.length}`;
  els.feedback.hidden = true;
  els.nextQuestion.disabled = true;
  els.nextQuestion.textContent = state.index === state.round.length - 1 ? "Ver resultado" : "Siguiente";
  els.answers.innerHTML = "";
  setAiMessage("Puedo darte una pista, explicarlo paso a paso o inventar un ejemplo parecido.");

  shuffle(item.options).forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => chooseAnswer(button, option));
    els.answers.appendChild(button);
  });
}

function chooseAnswer(button, option) {
  if (state.locked) return;

  const item = state.round[state.index];
  const progress = currentProgress();
  const isCorrect = option === item.answer;
  const seen = currentSeenQuestions();
  state.locked = true;

  if (!seen.includes(questionId(item))) {
    seen.push(questionId(item));
    saveSeenQuestions();
  }

  progress.answered += 1;
  if (isCorrect) {
    progress.correct += 1;
    progress.streak += 1;
    button.classList.add("correct");
    els.feedbackTitle.textContent = "¡Correcto!";
    els.feedbackText.textContent = buildChildExplanation(item, option, true);
    setAiMessage(`¡Buen trabajo! ${buildAiResponse("explain")}`);
    playTone(680, 0.08);
  } else {
    progress.streak = 0;
    button.classList.add("wrong");
    els.feedbackTitle.textContent = "Casi. Vamos a entenderlo:";
    els.feedbackText.textContent = buildChildExplanation(item, option, false);
    setAiMessage(buildAiResponse("explain", option));
    markCorrectAnswer(item.answer);
    playTone(260, 0.1);
  }

  [...els.answers.children].forEach((answer) => {
    answer.disabled = true;
  });
  els.feedback.hidden = false;
  els.nextQuestion.disabled = false;
  saveProgress();
  updateProgress();
}

function markCorrectAnswer(answerText) {
  [...els.answers.children].forEach((answer) => {
    if (answer.textContent === answerText) answer.classList.add("correct");
  });
}

function currentQuestion() {
  return state.round[state.index];
}

function buildChildExplanation(item, selected, isCorrect) {
  if (isCorrect) {
    return `Lo has pensado bien: “${selected}” encaja con la pregunta. ${item.help}`;
  }

  return `Tú marcaste “${selected}”, pero la respuesta correcta era “${item.answer}”. No pasa nada: fallar aquí sirve para aprender. Piensa así: ${item.help}`;
}

function setAiMessage(text) {
  els.aiMessage.textContent = text;
}

function buildAiResponse(action, selected = "") {
  const item = currentQuestion();
  if (!item) return "Elige una actividad y te ayudo con ella.";

  const intro = `${state.avatar.name.trim() || "Ari"}, estoy mirando este reto: “${item.q}”`;
  const subject = subjectNames[state.subject].toLowerCase();

  if (action === "hint") {
    return `${intro}. Pista: busca la idea importante antes de mirar las respuestas. En ${subject}, muchas veces ayuda subrayar los datos y descartar las opciones que no pueden ser.`;
  }

  if (action === "example") {
    return buildSimilarExample();
  }

  if (selected) {
    return `${intro}. Has elegido “${selected}”. La buena es “${item.answer}”. Vamos despacio: ${item.help} Después compara tu respuesta con la correcta y busca qué dato cambió.`;
  }

  return `${intro}. Para resolverlo paso a paso: primero entiende qué te preguntan, luego mira los datos de la frase y por último comprueba si tu respuesta tiene sentido. En este caso: ${item.help}`;
}

function buildSimilarExample() {
  const examples = {
    math: "Ejemplo parecido: si tienes 4 bolsas con 6 canicas, haces 4 x 6 y obtienes 24 canicas.",
    language: "Ejemplo parecido: en “El gato negro duerme”, “negro” es adjetivo porque dice cómo es el gato.",
    science: "Ejemplo parecido: si hablamos de plantas, recuerda que raíz, tallo y hojas tienen funciones distintas.",
    english: "Similar example: with “she”, we say “she plays”, because in present simple we add -s.",
    workbook: "Ejemplo de cuaderno: en 245 + 136, suma unidades, decenas y centenas con cuidado: el resultado es 381."
  };

  return examples[state.subject] || "Te propongo hacer uno parecido cambiando los números o las palabras, y luego comparar el método.";
}

function updateProgress() {
  const progress = currentProgress();
  const accuracy = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;
  const stars = Math.min(5, Math.floor(progress.correct / 4));
  const seenCount = currentSeenQuestions().length;
  const totalCount = questionBank[state.grade][state.subject].length;
  els.correctStat.textContent = progress.correct;
  els.streakStat.textContent = progress.streak;
  els.answeredStat.textContent = progress.answered;
  els.meterFill.style.width = `${accuracy}%`;
  els.progressTitle.textContent =
    progress.correct >= 20 ? "Nivel maestro" : progress.correct >= 10 ? "Nivel aventurero" : "Nivel explorador";
  if (state.round.length) {
    els.roundPill.textContent = `${state.index + 1} de ${state.round.length} · ${seenCount}/${totalCount}`;
  }
  els.starRow.innerHTML = "";

  for (let i = 0; i < 5; i += 1) {
    const star = document.createElement("span");
    star.className = `star ${i < stars ? "on" : ""}`;
    star.textContent = "★";
    els.starRow.appendChild(star);
  }
}

function renderAvatar() {
  const name = state.avatar.name.trim() || "Ari";
  if (document.activeElement !== els.avatarName) {
    els.avatarName.value = state.avatar.name;
  }
  els.companionName.textContent = name;
  els.menuPlayerName.textContent = name;

  [els.avatarPreview, els.miniAvatar].forEach((avatar) => {
    avatar.style.setProperty("--skin", state.avatar.skin);
    avatar.style.setProperty("--hair", state.avatar.hair);
    avatar.style.setProperty("--suit", state.avatar.suit);
  });

  els.avatarPreview.querySelector(".avatar-badge").textContent = state.avatar.badge;

  document.querySelectorAll("[data-avatar-part]").forEach((button) => {
    const part = button.dataset.avatarPart;
    button.classList.toggle("active", state.avatar[part] === button.dataset.avatarValue);
  });

  renderCharacterList();
}

function updateAvatar(part, value) {
  state.avatar[part] = value;
  saveAvatar();
  renderAvatar();
}

function createCharacterId() {
  return `character-${Date.now()}-${Math.round(Math.random() * 1000)}`;
}

function normalizeAvatar(avatar) {
  return {
    ...defaultAvatar,
    ...avatar,
    name: (avatar.name || defaultAvatar.name).trim() || defaultAvatar.name,
    id: avatar.id || createCharacterId()
  };
}

function saveCurrentCharacter() {
  const character = normalizeAvatar(state.avatar);
  const sameNameIndex = state.characters.findIndex((item) => item.name.toLowerCase() === character.name.toLowerCase());

  if (sameNameIndex >= 0) {
    character.id = state.characters[sameNameIndex].id;
    state.characters[sameNameIndex] = character;
  } else if (state.characters.some((item) => item.id === character.id)) {
    character.id = createCharacterId();
    state.characters.push(character);
  } else {
    state.characters.push(character);
  }

  state.avatar = character;
  saveAvatar();
  saveCharacters();
  renderAvatar();
  showMenu();
}

function selectCharacter(id) {
  const character = state.characters.find((item) => item.id === id);
  if (!character) return;
  state.avatar = normalizeAvatar(character);
  saveAvatar();
  renderAvatar();
  showMenu();
}

function showMenu() {
  document.body.classList.add("menu-open");
  startRound();
}

function showCharacterStart() {
  document.body.classList.remove("menu-open");
  renderAvatar();
}

function renderCharacterList() {
  els.characterList.innerHTML = "";

  if (state.characters.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-library";
    empty.textContent = "Guarda tu primer personaje.";
    els.characterList.appendChild(empty);
    return;
  }

  state.characters.forEach((character) => {
    const button = document.createElement("button");
    button.className = `character-chip ${character.id === state.avatar.id ? "active" : ""}`;
    button.type = "button";
    button.dataset.characterId = character.id;
    button.style.setProperty("--skin", character.skin);
    button.style.setProperty("--hair", character.hair);
    button.style.setProperty("--suit", character.suit);
    button.setAttribute("aria-label", `Elegir ${character.name}`);

    const chipAvatar = document.createElement("span");
    chipAvatar.className = "chip-avatar";
    chipAvatar.setAttribute("aria-hidden", "true");
    const chipHead = document.createElement("span");
    chipHead.className = "chip-head";
    const chipBody = document.createElement("span");
    chipBody.className = "chip-body";
    chipBody.textContent = character.badge;
    const label = document.createElement("span");
    label.textContent = character.name;

    chipAvatar.append(chipHead, chipBody);
    button.append(chipAvatar, label);
    button.addEventListener("click", () => selectCharacter(character.id));
    els.characterList.appendChild(button);
  });
}

function prepareCharacters() {
  state.avatar = normalizeAvatar(state.avatar);
  if (state.characters.length === 0) {
    state.characters = [state.avatar];
  } else if (!state.characters.some((character) => character.id === state.avatar.id)) {
    state.characters.unshift(state.avatar);
  }
  saveAvatar();
  saveCharacters();
}

function changeGrade(grade) {
  state.grade = grade;
  document.querySelectorAll("[data-grade]").forEach((button) => {
    button.classList.toggle("active", button.dataset.grade === grade);
  });
  startRound();
}

function changeSubject(subject) {
  state.subject = subject;
  document.querySelectorAll("[data-subject]").forEach((button) => {
    button.classList.toggle("active", button.dataset.subject === subject);
  });
  startRound();
}

function playTone(frequency, duration) {
  if (!state.sound || !window.AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.frequency.value = frequency;
  oscillator.connect(gain);
  gain.connect(context.destination);
  gain.gain.setValueAtTime(0.05, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
}

document.querySelectorAll("[data-grade]").forEach((button) => {
  button.addEventListener("click", () => changeGrade(button.dataset.grade));
});

document.querySelectorAll("[data-subject]").forEach((button) => {
  button.addEventListener("click", () => changeSubject(button.dataset.subject));
});

els.nextQuestion.addEventListener("click", () => {
  if (state.index < state.round.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    startRound();
  }
});

els.newRound.addEventListener("click", startRound);

els.resetProgress.addEventListener("click", () => {
  state.progress = {};
  state.seenQuestions = {};
  saveProgress();
  saveSeenQuestions();
  startRound();
});

els.soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  els.soundToggle.classList.toggle("active", state.sound);
  els.soundToggle.setAttribute("aria-label", state.sound ? "Desactivar sonido" : "Activar sonido");
});

els.changeCharacter.addEventListener("click", showCharacterStart);

els.avatarName.addEventListener("input", () => {
  state.avatar.name = els.avatarName.value.slice(0, 14);
  saveAvatar();
  renderAvatar();
});

els.saveCharacter.addEventListener("click", saveCurrentCharacter);

document.querySelectorAll("[data-avatar-part]").forEach((button) => {
  button.addEventListener("click", () => updateAvatar(button.dataset.avatarPart, button.dataset.avatarValue));
});

document.querySelectorAll("[data-ai-action]").forEach((button) => {
  button.addEventListener("click", () => setAiMessage(buildAiResponse(button.dataset.aiAction)));
});

prepareCharacters();
renderAvatar();
showCharacterStart();
