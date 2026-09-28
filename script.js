// ==============================
// CONJUGA — PRESENTE
// REGULARES
// ==============================


// ---------- VERB BANK ----------

const verbs = [

    // ==========================
    // -AR
    // ==========================

    {
        infinitive: "hablar",
        type: "regular",
        forms: {
            yo: "hablo",
            tú: "hablas",
            "él / ella / usted": "habla",
            nosotros: "hablamos",
            vosotros: "habláis",
            "ellos / ustedes": "hablan"
        }
    },

    {
        infinitive: "trabajar",
        type: "regular",
        forms: {
            yo: "trabajo",
            tú: "trabajas",
            "él / ella / usted": "trabaja",
            nosotros: "trabajamos",
            vosotros: "trabajáis",
            "ellos / ustedes": "trabajan"
        }
    },

    {
        infinitive: "estudiar",
        type: "regular",
        forms: {
            yo: "estudio",
            tú: "estudias",
            "él / ella / usted": "estudia",
            nosotros: "estudiamos",
            vosotros: "estudiáis",
            "ellos / ustedes": "estudian"
        }
    },

    {
        infinitive: "comprar",
        type: "regular",
        forms: {
            yo: "compro",
            tú: "compras",
            "él / ella / usted": "compra",
            nosotros: "compramos",
            vosotros: "compráis",
            "ellos / ustedes": "compran"
        }
    },

    {
        infinitive: "viajar",
        type: "regular",
        forms: {
            yo: "viajo",
            tú: "viajas",
            "él / ella / usted": "viaja",
            nosotros: "viajamos",
            vosotros: "viajáis",
            "ellos / ustedes": "viajan"
        }
    },

    {
        infinitive: "escuchar",
        type: "regular",
        forms: {
            yo: "escucho",
            tú: "escuchas",
            "él / ella / usted": "escucha",
            nosotros: "escuchamos",
            vosotros: "escucháis",
            "ellos / ustedes": "escuchan"
        }
    },

    {
        infinitive: "mirar",
        type: "regular",
        forms: {
            yo: "miro",
            tú: "miras",
            "él / ella / usted": "mira",
            nosotros: "miramos",
            vosotros: "miráis",
            "ellos / ustedes": "miran"
        }
    },

    {
        infinitive: "necesitar",
        type: "regular",
        forms: {
            yo: "necesito",
            tú: "necesitas",
            "él / ella / usted": "necesita",
            nosotros: "necesitamos",
            vosotros: "necesitáis",
            "ellos / ustedes": "necesitan"
        }
    },

    {
        infinitive: "llevar",
        type: "regular",
        forms: {
            yo: "llevo",
            tú: "llevas",
            "él / ella / usted": "lleva",
            nosotros: "llevamos",
            vosotros: "lleváis",
            "ellos / ustedes": "llevan"
        }
    },

    {
        infinitive: "ayudar",
        type: "regular",
        forms: {
            yo: "ayudo",
            tú: "ayudas",
            "él / ella / usted": "ayuda",
            nosotros: "ayudamos",
            vosotros: "ayudáis",
            "ellos / ustedes": "ayudan"
        }
    },


    // ==========================
    // -ER
    // ==========================

    {
        infinitive: "comer",
        type: "regular",
        forms: {
            yo: "como",
            tú: "comes",
            "él / ella / usted": "come",
            nosotros: "comemos",
            vosotros: "coméis",
            "ellos / ustedes": "comen"
        }
    },

    {
        infinitive: "beber",
        type: "regular",
        forms: {
            yo: "bebo",
            tú: "bebes",
            "él / ella / usted": "bebe",
            nosotros: "bebemos",
            vosotros: "bebéis",
            "ellos / ustedes": "beben"
        }
    },

    {
        infinitive: "aprender",
        type: "regular",
        forms: {
            yo: "aprendo",
            tú: "aprendes",
            "él / ella / usted": "aprende",
            nosotros: "aprendemos",
            vosotros: "aprendéis",
            "ellos / ustedes": "aprenden"
        }
    },

    {
        infinitive: "comprender",
        type: "regular",
        forms: {
            yo: "comprendo",
            tú: "comprendes",
            "él / ella / usted": "comprende",
            nosotros: "comprendemos",
            vosotros: "comprendéis",
            "ellos / ustedes": "comprenden"
        }
    },

    {
        infinitive: "vender",
        type: "regular",
        forms: {
            yo: "vendo",
            tú: "vendes",
            "él / ella / usted": "vende",
            nosotros: "vendemos",
            vosotros: "vendéis",
            "ellos / ustedes": "venden"
        }
    },

    {
        infinitive: "correr",
        type: "regular",
        forms: {
            yo: "corro",
            tú: "corres",
            "él / ella / usted": "corre",
            nosotros: "corremos",
            vosotros: "corréis",
            "ellos / ustedes": "corren"
        }
    },

    {
        infinitive: "deber",
        type: "regular",
        forms: {
            yo: "debo",
            tú: "debes",
            "él / ella / usted": "debe",
            nosotros: "debemos",
            vosotros: "debéis",
            "ellos / ustedes": "deben"
        }
    },

    {
        infinitive: "responder",
        type: "regular",
        forms: {
            yo: "respondo",
            tú: "respondes",
            "él / ella / usted": "responde",
            nosotros: "respondemos",
            vosotros: "respondéis",
            "ellos / ustedes": "responden"
        }
    },


    // ==========================
    // -IR
    // ==========================

    {
        infinitive: "vivir",
        type: "regular",
        forms: {
            yo: "vivo",
            tú: "vives",
            "él / ella / usted": "vive",
            nosotros: "vivimos",
            vosotros: "vivís",
            "ellos / ustedes": "viven"
        }
    },

    {
        infinitive: "escribir",
        type: "regular",
        forms: {
            yo: "escribo",
            tú: "escribes",
            "él / ella / usted": "escribe",
            nosotros: "escribimos",
            vosotros: "escribís",
            "ellos / ustedes": "escriben"
        }
    },

    {
        infinitive: "abrir",
        type: "regular",
        forms: {
            yo: "abro",
            tú: "abres",
            "él / ella / usted": "abre",
            nosotros: "abrimos",
            vosotros: "abrís",
            "ellos / ustedes": "abren"
        }
    },

    {
        infinitive: "recibir",
        type: "regular",
        forms: {
            yo: "recibo",
            tú: "recibes",
            "él / ella / usted": "recibe",
            nosotros: "recibimos",
            vosotros: "recibís",
            "ellos / ustedes": "reciben"
        }
    },

    {
        infinitive: "decidir",
        type: "regular",
        forms: {
            yo: "decido",
            tú: "decides",
            "él / ella / usted": "decide",
            nosotros: "decidimos",
            vosotros: "decidís",
            "ellos / ustedes": "deciden"
        }
    },

    {
        infinitive: "subir",
        type: "regular",
        forms: {
            yo: "subo",
            tú: "subes",
            "él / ella / usted": "sube",
            nosotros: "subimos",
            vosotros: "subís",
            "ellos / ustedes": "suben"
        }
    },

    {
        infinitive: "permitir",
        type: "regular",
        forms: {
            yo: "permito",
            tú: "permites",
            "él / ella / usted": "permite",
            nosotros: "permitimos",
            vosotros: "permitís",
            "ellos / ustedes": "permiten"
        }
    },

    {
        infinitive: "compartir",
        type: "regular",
        forms: {
            yo: "comparto",
            tú: "compartes",
            "él / ella / usted": "comparte",
            nosotros: "compartimos",
            vosotros: "compartís",
            "ellos / ustedes": "comparten"
        }
    }
];
const stemChangingVerbs = [
    // e → ie
    {
        infinitive: "pensar",
        change: "e-ie",
        forms: {
            yo: "pienso",
            tú: "piensas",
            "él / ella / usted": "piensa",
            nosotros: "pensamos",
            vosotros: "pensáis",
            "ellos / ustedes": "piensan"
        }
    },
    {
        infinitive: "querer",
        change: "e-ie",
        forms: {
            yo: "quiero",
            tú: "quieres",
            "él / ella / usted": "quiere",
            nosotros: "queremos",
            vosotros: "queréis",
            "ellos / ustedes": "quieren"
        }
    },
    {
        infinitive: "cerrar",
        change: "e-ie",
        forms: {
            yo: "cierro",
            tú: "cierras",
            "él / ella / usted": "cierra",
            nosotros: "cerramos",
            vosotros: "cerráis",
            "ellos / ustedes": "cierran"
        }
    },
    {
        infinitive: "empezar",
        change: "e-ie",
        forms: {
            yo: "empiezo",
            tú: "empiezas",
            "él / ella / usted": "empieza",
            nosotros: "empezamos",
            vosotros: "empezáis",
            "ellos / ustedes": "empiezan"
        }
    },
    {
    infinitive: "entender",
    change: "e-ie",
    forms: {
        yo: "entiendo",
        tú: "entiendes",
        "él / ella / usted": "entiende",
        nosotros: "entendemos",
        vosotros: "entendéis",
        "ellos / ustedes": "entienden"
    }
},
{
    infinitive: "preferir",
    change: "e-ie",
    forms: {
        yo: "prefiero",
        tú: "prefieres",
        "él / ella / usted": "prefiere",
        nosotros: "preferimos",
        vosotros: "preferís",
        "ellos / ustedes": "prefieren"
    }
},
{
    infinitive: "perder",
    change: "e-ie",
    forms: {
        yo: "pierdo",
        tú: "pierdes",
        "él / ella / usted": "pierde",
        nosotros: "perdemos",
        vosotros: "perdéis",
        "ellos / ustedes": "pierden"
    }
},
{
    infinitive: "sentir",
    change: "e-ie",
    forms: {
        yo: "siento",
        tú: "sientes",
        "él / ella / usted": "siente",
        nosotros: "sentimos",
        vosotros: "sentís",
        "ellos / ustedes": "sienten"
    }
},
{
    infinitive: "despertar",
    change: "e-ie",
    forms: {
        yo: "despierto",
        tú: "despiertas",
        "él / ella / usted": "despierta",
        nosotros: "despertamos",
        vosotros: "despertáis",
        "ellos / ustedes": "despiertan"
    }
},
{
    infinitive: "comenzar",
    change: "e-ie",
    forms: {
        yo: "comienzo",
        tú: "comienzas",
        "él / ella / usted": "comienza",
        nosotros: "comenzamos",
        vosotros: "comenzáis",
        "ellos / ustedes": "comienzan"
    }
},


    // o → ue
    {
        infinitive: "poder",
        change: "o-ue",
        forms: {
            yo: "puedo",
            tú: "puedes",
            "él / ella / usted": "puede",
            nosotros: "podemos",
            vosotros: "podéis",
            "ellos / ustedes": "pueden"
        }
    },
    {
        infinitive: "volver",
        change: "o-ue",
        forms: {
            yo: "vuelvo",
            tú: "vuelves",
            "él / ella / usted": "vuelve",
            nosotros: "volvemos",
            vosotros: "volvéis",
            "ellos / ustedes": "vuelven"
        }
    },
    {
        infinitive: "dormir",
        change: "o-ue",
        forms: {
            yo: "duermo",
            tú: "duermes",
            "él / ella / usted": "duerme",
            nosotros: "dormimos",
            vosotros: "dormís",
            "ellos / ustedes": "duermen"
        }
    },
    {
        infinitive: "encontrar",
        change: "o-ue",
        forms: {
            yo: "encuentro",
            tú: "encuentras",
            "él / ella / usted": "encuentra",
            nosotros: "encontramos",
            vosotros: "encontráis",
            "ellos / ustedes": "encuentran"
        }
    },
    {
    infinitive: "contar",
    change: "o-ue",
    forms: {
        yo: "cuento",
        tú: "cuentas",
        "él / ella / usted": "cuenta",
        nosotros: "contamos",
        vosotros: "contáis",
        "ellos / ustedes": "cuentan"
    }
},
{
    infinitive: "costar",
    change: "o-ue",
    forms: {
        yo: "cuesto",
        tú: "cuestas",
        "él / ella / usted": "cuesta",
        nosotros: "costamos",
        vosotros: "costáis",
        "ellos / ustedes": "cuestan"
    }
},
{
    infinitive: "recordar",
    change: "o-ue",
    forms: {
        yo: "recuerdo",
        tú: "recuerdas",
        "él / ella / usted": "recuerda",
        nosotros: "recordamos",
        vosotros: "recordáis",
        "ellos / ustedes": "recuerdan"
    }
},
{
    infinitive: "mostrar",
    change: "o-ue",
    forms: {
        yo: "muestro",
        tú: "muestras",
        "él / ella / usted": "muestra",
        nosotros: "mostramos",
        vosotros: "mostráis",
        "ellos / ustedes": "muestran"
    }
},
{
    infinitive: "probar",
    change: "o-ue",
    forms: {
        yo: "pruebo",
        tú: "pruebas",
        "él / ella / usted": "prueba",
        nosotros: "probamos",
        vosotros: "probáis",
        "ellos / ustedes": "prueban"
    }
},
{
    infinitive: "soñar",
    change: "o-ue",
    forms: {
        yo: "sueño",
        tú: "sueñas",
        "él / ella / usted": "sueña",
        nosotros: "soñamos",
        vosotros: "soñáis",
        "ellos / ustedes": "sueñan"
    }
},

    // e → i
    {
        infinitive: "pedir",
        change: "e-i",
        forms: {
            yo: "pido",
            tú: "pides",
            "él / ella / usted": "pide",
            nosotros: "pedimos",
            vosotros: "pedís",
            "ellos / ustedes": "piden"
        }
    },
    {
        infinitive: "repetir",
        change: "e-i",
        forms: {
            yo: "repito",
            tú: "repites",
            "él / ella / usted": "repite",
            nosotros: "repetimos",
            vosotros: "repetís",
            "ellos / ustedes": "repiten"
        }
    },
    {
        infinitive: "servir",
        change: "e-i",
        forms: {
            yo: "sirvo",
            tú: "sirves",
            "él / ella / usted": "sirve",
            nosotros: "servimos",
            vosotros: "servís",
            "ellos / ustedes": "sirven"
        }
    },
    {
    infinitive: "vestir",
    change: "e-i",
    forms: {
        yo: "visto",
        tú: "vistes",
        "él / ella / usted": "viste",
        nosotros: "vestimos",
        vosotros: "vestís",
        "ellos / ustedes": "visten"
    }
},
{
    infinitive: "medir",
    change: "e-i",
    forms: {
        yo: "mido",
        tú: "mides",
        "él / ella / usted": "mide",
        nosotros: "medimos",
        vosotros: "medís",
        "ellos / ustedes": "miden"
    }
},
{
    infinitive: "competir",
    change: "e-i",
    forms: {
        yo: "compito",
        tú: "compites",
        "él / ella / usted": "compite",
        nosotros: "competimos",
        vosotros: "competís",
        "ellos / ustedes": "compiten"
    }
},
{
    infinitive: "despedir",
    change: "e-i",
    forms: {
        yo: "despido",
        tú: "despides",
        "él / ella / usted": "despide",
        nosotros: "despedimos",
        vosotros: "despedís",
        "ellos / ustedes": "despiden"
    }
},
{
    infinitive: "impedir",
    change: "e-i",
    forms: {
        yo: "impido",
        tú: "impides",
        "él / ella / usted": "impide",
        nosotros: "impedimos",
        vosotros: "impedís",
        "ellos / ustedes": "impiden"
    }
},
{
    infinitive: "elegir",
    change: "e-i",
    forms: {
         yo: "elijo",
        tú: "eliges",
        "él / ella / usted": "elige",
        nosotros: "elegimos",
        vosotros: "elegís",
        "ellos / ustedes": "eligen"
    }
},
{
    infinitive: "corregir",
    change: "e-i",
    forms: {
         yo: "corrijo",
        tú: "corriges",
        "él / ella / usted": "corrige",
        nosotros: "corregimos",
        vosotros: "corregís",
        "ellos / ustedes": "corrigen"
    }
},
];
const irregularVerbs = [

    {
        infinitive: "ser",
        forms: {
            yo: "soy",
            tú: "eres",
            "él / ella / usted": "es",
            nosotros: "somos",
            vosotros: "sois",
            "ellos / ustedes": "son"
        }
    },

    {
        infinitive: "estar",
        forms: {
            yo: "estoy",
            tú: "estás",
            "él / ella / usted": "está",
            nosotros: "estamos",
            vosotros: "estáis",
            "ellos / ustedes": "están"
        }
    },

    {
        infinitive: "ir",
        forms: {
            yo: "voy",
            tú: "vas",
            "él / ella / usted": "va",
            nosotros: "vamos",
            vosotros: "vais",
            "ellos / ustedes": "van"
        }
    },

    {
        infinitive: "tener",
        forms: {
            yo: "tengo",
            tú: "tienes",
            "él / ella / usted": "tiene",
            nosotros: "tenemos",
            vosotros: "tenéis",
            "ellos / ustedes": "tienen"
        }
    },

    {
        infinitive: "venir",
        forms: {
            yo: "vengo",
            tú: "vienes",
            "él / ella / usted": "viene",
            nosotros: "venimos",
            vosotros: "venís",
            "ellos / ustedes": "vienen"
        }
    },

    {
        infinitive: "hacer",
        forms: {
            yo: "hago",
            tú: "haces",
            "él / ella / usted": "hace",
            nosotros: "hacemos",
            vosotros: "hacéis",
            "ellos / ustedes": "hacen"
        }
    },

    {
        infinitive: "decir",
        forms: {
            yo: "digo",
            tú: "dices",
            "él / ella / usted": "dice",
            nosotros: "decimos",
            vosotros: "decís",
            "ellos / ustedes": "dicen"
        }
    },

    {
        infinitive: "poner",
        forms: {
            yo: "pongo",
            tú: "pones",
            "él / ella / usted": "pone",
            nosotros: "ponemos",
            vosotros: "ponéis",
            "ellos / ustedes": "ponen"
        }
    },

    {
        infinitive: "salir",
        forms: {
            yo: "salgo",
            tú: "sales",
            "él / ella / usted": "sale",
            nosotros: "salimos",
            vosotros: "salís",
            "ellos / ustedes": "salen"
        }
    },

    {
        infinitive: "traer",
        forms: {
            yo: "traigo",
            tú: "traes",
            "él / ella / usted": "trae",
            nosotros: "traemos",
            vosotros: "traéis",
            "ellos / ustedes": "traen"
        }
    },

    {
        infinitive: "oír",
        forms: {
            yo: "oigo",
            tú: "oyes",
            "él / ella / usted": "oye",
            nosotros: "oímos",
            vosotros: "oís",
            "ellos / ustedes": "oyen"
        }
    },

    {
        infinitive: "dar",
        forms: {
            yo: "doy",
            tú: "das",
            "él / ella / usted": "da",
            nosotros: "damos",
            vosotros: "dais",
            "ellos / ustedes": "dan"
        }
    },

    {
        infinitive: "ver",
        forms: {
            yo: "veo",
            tú: "ves",
            "él / ella / usted": "ve",
            nosotros: "vemos",
            vosotros: "veis",
            "ellos / ustedes": "ven"
        }
    },

    {
        infinitive: "saber",
        forms: {
            yo: "sé",
            tú: "sabes",
            "él / ella / usted": "sabe",
            nosotros: "sabemos",
            vosotros: "sabéis",
            "ellos / ustedes": "saben"
        }
    },

    {
        infinitive: "caber",
        forms: {
            yo: "quepo",
            tú: "cabes",
            "él / ella / usted": "cabe",
            nosotros: "cabemos",
            vosotros: "cabéis",
            "ellos / ustedes": "caben"
        }
    },

    {
        infinitive: "caer",
        forms: {
            yo: "caigo",
            tú: "caes",
            "él / ella / usted": "cae",
            nosotros: "caemos",
            vosotros: "caéis",
            "ellos / ustedes": "caen"
        }
    },

    {
        infinitive: "valer",
        forms: {
            yo: "valgo",
            tú: "vales",
            "él / ella / usted": "vale",
            nosotros: "valemos",
            vosotros: "valéis",
            "ellos / ustedes": "valen"
        }
    }
];

const orthographicVerbs = [

    // -cer / -cir → -zco

    {
        infinitive: "conocer",
        forms: {
            yo: "conozco",
            tú: "conoces",
            "él / ella / usted": "conoce",
            nosotros: "conocemos",
            vosotros: "conocéis",
            "ellos / ustedes": "conocen"
        }
    },

    {
        infinitive: "parecer",
        forms: {
            yo: "parezco",
            tú: "pareces",
            "él / ella / usted": "parece",
            nosotros: "parecemos",
            vosotros: "parecéis",
            "ellos / ustedes": "parecen"
        }
    },

    {
        infinitive: "ofrecer",
        forms: {
            yo: "ofrezco",
            tú: "ofreces",
            "él / ella / usted": "ofrece",
            nosotros: "ofrecemos",
            vosotros: "ofrecéis",
            "ellos / ustedes": "ofrecen"
        }
    },

    {
        infinitive: "crecer",
        forms: {
            yo: "crezco",
            tú: "creces",
            "él / ella / usted": "crece",
            nosotros: "crecemos",
            vosotros: "crecéis",
            "ellos / ustedes": "crecen"
        }
    },

    {
        infinitive: "nacer",
        forms: {
            yo: "nazco",
            tú: "naces",
            "él / ella / usted": "nace",
            nosotros: "nacemos",
            vosotros: "nacéis",
            "ellos / ustedes": "nacen"
        }
    },

    {
        infinitive: "conducir",
        forms: {
            yo: "conduzco",
            tú: "conduces",
            "él / ella / usted": "conduce",
            nosotros: "conducimos",
            vosotros: "conducís",
            "ellos / ustedes": "conducen"
        }
    },

    {
        infinitive: "traducir",
        forms: {
            yo: "traduzco",
            tú: "traduces",
            "él / ella / usted": "traduce",
            nosotros: "traducimos",
            vosotros: "traducís",
            "ellos / ustedes": "traducen"
        }
    },

    {
        infinitive: "producir",
        forms: {
            yo: "produzco",
            tú: "produces",
            "él / ella / usted": "produce",
            nosotros: "producimos",
            vosotros: "producís",
            "ellos / ustedes": "producen"
        }
    },

    // -ger / -gir → j в yo

    {
        infinitive: "coger",
        forms: {
            yo: "cojo",
            tú: "coges",
            "él / ella / usted": "coge",
            nosotros: "cogemos",
            vosotros: "cogéis",
            "ellos / ustedes": "cogen"
        }
    },

    {
        infinitive: "escoger",
        forms: {
            yo: "escojo",
            tú: "escoges",
            "él / ella / usted": "escoge",
            nosotros: "escogemos",
            vosotros: "escogéis",
            "ellos / ustedes": "escogen"
        }
    },

    {
        infinitive: "proteger",
        forms: {
            yo: "protejo",
            tú: "proteges",
            "él / ella / usted": "protege",
            nosotros: "protegemos",
            vosotros: "protegéis",
            "ellos / ustedes": "protegen"
        }
    },

    {
        infinitive: "dirigir",
        forms: {
            yo: "dirijo",
            tú: "diriges",
            "él / ella / usted": "dirige",
            nosotros: "dirigimos",
            vosotros: "dirigís",
            "ellos / ustedes": "dirigen"
        }
    },

    // -guir → g в yo

    {
        infinitive: "distinguir",
        forms: {
            yo: "distingo",
            tú: "distingues",
            "él / ella / usted": "distingue",
            nosotros: "distinguimos",
            vosotros: "distinguís",
            "ellos / ustedes": "distinguen"
        }
    },

    {
        infinitive: "extinguir",
        forms: {
            yo: "extingo",
            tú: "extingues",
            "él / ella / usted": "extingue",
            nosotros: "extinguimos",
            vosotros: "extinguís",
            "ellos / ustedes": "extinguen"
        }
    },

    // -uir → y

    {
        infinitive: "construir",
        forms: {
            yo: "construyo",
            tú: "construyes",
            "él / ella / usted": "construye",
            nosotros: "construimos",
            vosotros: "construís",
            "ellos / ustedes": "construyen"
        }
    },

    {
        infinitive: "incluir",
        forms: {
            yo: "incluyo",
            tú: "incluyes",
            "él / ella / usted": "incluye",
            nosotros: "incluimos",
            vosotros: "incluís",
            "ellos / ustedes": "incluyen"
        }
    },

    {
        infinitive: "huir",
        forms: {
            yo: "huyo",
            tú: "huyes",
            "él / ella / usted": "huye",
            nosotros: "huimos",
            vosotros: "huís",
            "ellos / ustedes": "huyen"
        }
    },

    {
        infinitive: "contribuir",
        forms: {
            yo: "contribuyo",
            tú: "contribuyes",
            "él / ella / usted": "contribuye",
            nosotros: "contribuimos",
            vosotros: "contribuís",
            "ellos / ustedes": "contribuyen"
        }
    },

    {
        infinitive: "distribuir",
        forms: {
            yo: "distribuyo",
            tú: "distribuyes",
            "él / ella / usted": "distribuye",
            nosotros: "distribuimos",
            vosotros: "distribuís",
            "ellos / ustedes": "distribuyen"
        }
    }

];

// ==============================
// INDEFINIDO — REGULARES
// ==============================

const preteriteRegularVerbs = [

    // -AR

    {
        infinitive: "hablar",
        forms: {
            yo: "hablé",
            tú: "hablaste",
            "él / ella / usted": "habló",
            nosotros: "hablamos",
            vosotros: "hablasteis",
            "ellos / ustedes": "hablaron"
        }
    },

    {
        infinitive: "trabajar",
        forms: {
            yo: "trabajé",
            tú: "trabajaste",
            "él / ella / usted": "trabajó",
            nosotros: "trabajamos",
            vosotros: "trabajasteis",
            "ellos / ustedes": "trabajaron"
        }
    },

    {
        infinitive: "estudiar",
        forms: {
            yo: "estudié",
            tú: "estudiaste",
            "él / ella / usted": "estudió",
            nosotros: "estudiamos",
            vosotros: "estudiasteis",
            "ellos / ustedes": "estudiaron"
        }
    },

    {
        infinitive: "comprar",
        forms: {
            yo: "compré",
            tú: "compraste",
            "él / ella / usted": "compró",
            nosotros: "compramos",
            vosotros: "comprasteis",
            "ellos / ustedes": "compraron"
        }
    },

    {
        infinitive: "viajar",
        forms: {
            yo: "viajé",
            tú: "viajaste",
            "él / ella / usted": "viajó",
            nosotros: "viajamos",
            vosotros: "viajasteis",
            "ellos / ustedes": "viajaron"
        }
    },

    {
        infinitive: "escuchar",
        forms: {
            yo: "escuché",
            tú: "escuchaste",
            "él / ella / usted": "escuchó",
            nosotros: "escuchamos",
            vosotros: "escuchasteis",
            "ellos / ustedes": "escucharon"
        }
    },

    {
        infinitive: "mirar",
        forms: {
            yo: "miré",
            tú: "miraste",
            "él / ella / usted": "miró",
            nosotros: "miramos",
            vosotros: "mirasteis",
            "ellos / ustedes": "miraron"
        }
    },

    {
        infinitive: "necesitar",
        forms: {
            yo: "necesité",
            tú: "necesitaste",
            "él / ella / usted": "necesitó",
            nosotros: "necesitamos",
            vosotros: "necesitasteis",
            "ellos / ustedes": "necesitaron"
        }
    },

    {
        infinitive: "ayudar",
        forms: {
            yo: "ayudé",
            tú: "ayudaste",
            "él / ella / usted": "ayudó",
            nosotros: "ayudamos",
            vosotros: "ayudasteis",
            "ellos / ustedes": "ayudaron"
        }
    },


    // -ER

    {
        infinitive: "comer",
        forms: {
            yo: "comí",
            tú: "comiste",
            "él / ella / usted": "comió",
            nosotros: "comimos",
            vosotros: "comisteis",
            "ellos / ustedes": "comieron"
        }
    },

    {
        infinitive: "beber",
        forms: {
            yo: "bebí",
            tú: "bebiste",
            "él / ella / usted": "bebió",
            nosotros: "bebimos",
            vosotros: "bebisteis",
            "ellos / ustedes": "bebieron"
        }
    },

    {
        infinitive: "aprender",
        forms: {
            yo: "aprendí",
            tú: "aprendiste",
            "él / ella / usted": "aprendió",
            nosotros: "aprendimos",
            vosotros: "aprendisteis",
            "ellos / ustedes": "aprendieron"
        }
    },

    {
        infinitive: "vender",
        forms: {
            yo: "vendí",
            tú: "vendiste",
            "él / ella / usted": "vendió",
            nosotros: "vendimos",
            vosotros: "vendisteis",
            "ellos / ustedes": "vendieron"
        }
    },

    {
        infinitive: "correr",
        forms: {
            yo: "corrí",
            tú: "corriste",
            "él / ella / usted": "corrió",
            nosotros: "corrimos",
            vosotros: "corristeis",
            "ellos / ustedes": "corrieron"
        }
    },

    {
        infinitive: "responder",
        forms: {
            yo: "respondí",
            tú: "respondiste",
            "él / ella / usted": "respondió",
            nosotros: "respondimos",
            vosotros: "respondisteis",
            "ellos / ustedes": "respondieron"
        }
    },


    // -IR

    {
        infinitive: "vivir",
        forms: {
            yo: "viví",
            tú: "viviste",
            "él / ella / usted": "vivió",
            nosotros: "vivimos",
            vosotros: "vivisteis",
            "ellos / ustedes": "vivieron"
        }
    },

    {
        infinitive: "escribir",
        forms: {
            yo: "escribí",
            tú: "escribiste",
            "él / ella / usted": "escribió",
            nosotros: "escribimos",
            vosotros: "escribisteis",
            "ellos / ustedes": "escribieron"
        }
    },

    {
        infinitive: "abrir",
        forms: {
            yo: "abrí",
            tú: "abriste",
            "él / ella / usted": "abrió",
            nosotros: "abrimos",
            vosotros: "abristeis",
            "ellos / ustedes": "abrieron"
        }
    },

    {
        infinitive: "recibir",
        forms: {
            yo: "recibí",
            tú: "recibiste",
            "él / ella / usted": "recibió",
            nosotros: "recibimos",
            vosotros: "recibisteis",
            "ellos / ustedes": "recibieron"
        }
    },

    {
        infinitive: "decidir",
        forms: {
            yo: "decidí",
            tú: "decidiste",
            "él / ella / usted": "decidió",
            nosotros: "decidimos",
            vosotros: "decidisteis",
            "ellos / ustedes": "decidieron"
        }
    },

    {
        infinitive: "subir",
        forms: {
            yo: "subí",
            tú: "subiste",
            "él / ella / usted": "subió",
            nosotros: "subimos",
            vosotros: "subisteis",
            "ellos / ustedes": "subieron"
        }
    }

];

// ==============================
// INDEFINIDO — IRREGULARES
// ==============================

const preteriteIrregularVerbs = [

    // -CAR → QUÉ

    {
        infinitive: "buscar",
        forms: {
            yo: "busqué",
            tú: "buscaste",
            "él / ella / usted": "buscó",
            nosotros: "buscamos",
            vosotros: "buscasteis",
            "ellos / ustedes": "buscaron"
        }
    },

    {
        infinitive: "tocar",
        forms: {
            yo: "toqué",
            tú: "tocaste",
            "él / ella / usted": "tocó",
            nosotros: "tocamos",
            vosotros: "tocasteis",
            "ellos / ustedes": "tocaron"
        }
    },

    {
        infinitive: "practicar",
        forms: {
            yo: "practiqué",
            tú: "practicaste",
            "él / ella / usted": "practicó",
            nosotros: "practicamos",
            vosotros: "practicasteis",
            "ellos / ustedes": "practicaron"
        }
    },


    // -GAR → GUÉ

    {
        infinitive: "llegar",
        forms: {
            yo: "llegué",
            tú: "llegaste",
            "él / ella / usted": "llegó",
            nosotros: "llegamos",
            vosotros: "llegasteis",
            "ellos / ustedes": "llegaron"
        }
    },

    {
        infinitive: "pagar",
        forms: {
            yo: "pagué",
            tú: "pagaste",
            "él / ella / usted": "pagó",
            nosotros: "pagamos",
            vosotros: "pagasteis",
            "ellos / ustedes": "pagaron"
        }
    },

    {
        infinitive: "jugar",
        forms: {
            yo: "jugué",
            tú: "jugaste",
            "él / ella / usted": "jugó",
            nosotros: "jugamos",
            vosotros: "jugasteis",
            "ellos / ustedes": "jugaron"
        }
    },


    // -ZAR → CÉ

    {
        infinitive: "empezar",
        forms: {
            yo: "empecé",
            tú: "empezaste",
            "él / ella / usted": "empezó",
            nosotros: "empezamos",
            vosotros: "empezasteis",
            "ellos / ustedes": "empezaron"
        }
    },

    {
        infinitive: "cruzar",
        forms: {
            yo: "crucé",
            tú: "cruzaste",
            "él / ella / usted": "cruzó",
            nosotros: "cruzamos",
            vosotros: "cruzasteis",
            "ellos / ustedes": "cruzaron"
        }
    },


    // E → I EN 3ª PERSONA

    {
        infinitive: "pedir",
        forms: {
            yo: "pedí",
            tú: "pediste",
            "él / ella / usted": "pidió",
            nosotros: "pedimos",
            vosotros: "pedisteis",
            "ellos / ustedes": "pidieron"
        }
    },

    {
        infinitive: "repetir",
        forms: {
            yo: "repetí",
            tú: "repetiste",
            "él / ella / usted": "repitió",
            nosotros: "repetimos",
            vosotros: "repetisteis",
            "ellos / ustedes": "repitieron"
        }
    },

    {
        infinitive: "servir",
        forms: {
            yo: "serví",
            tú: "serviste",
            "él / ella / usted": "sirvió",
            nosotros: "servimos",
            vosotros: "servisteis",
            "ellos / ustedes": "sirvieron"
        }
    },


    // O → U EN 3ª PERSONA

    {
        infinitive: "dormir",
        forms: {
            yo: "dormí",
            tú: "dormiste",
            "él / ella / usted": "durmió",
            nosotros: "dormimos",
            vosotros: "dormisteis",
            "ellos / ustedes": "durmieron"
        }
    },

    {
        infinitive: "morir",
        forms: {
            yo: "morí",
            tú: "moriste",
            "él / ella / usted": "murió",
            nosotros: "morimos",
            vosotros: "moristeis",
            "ellos / ustedes": "murieron"
        }
    },


    // I → Y EN 3ª PERSONA

    {
        infinitive: "leer",
        forms: {
            yo: "leí",
            tú: "leíste",
            "él / ella / usted": "leyó",
            nosotros: "leímos",
            vosotros: "leísteis",
            "ellos / ustedes": "leyeron"
        }
    },

    {
        infinitive: "oír",
        forms: {
            yo: "oí",
            tú: "oíste",
            "él / ella / usted": "oyó",
            nosotros: "oímos",
            vosotros: "oísteis",
            "ellos / ustedes": "oyeron"
        }
    },

    {
        infinitive: "caer",
        forms: {
            yo: "caí",
            tú: "caíste",
            "él / ella / usted": "cayó",
            nosotros: "caímos",
            vosotros: "caísteis",
            "ellos / ustedes": "cayeron"
        }
    },


    // SER / IR

    {
        infinitive: "ser",
        forms: {
            yo: "fui",
            tú: "fuiste",
            "él / ella / usted": "fue",
            nosotros: "fuimos",
            vosotros: "fuisteis",
            "ellos / ustedes": "fueron"
        }
    },

    {
        infinitive: "ir",
        forms: {
            yo: "fui",
            tú: "fuiste",
            "él / ella / usted": "fue",
            nosotros: "fuimos",
            vosotros: "fuisteis",
            "ellos / ustedes": "fueron"
        }
    },


    // RAÍCES IRREGULARES

    {
        infinitive: "tener",
        forms: {
            yo: "tuve",
            tú: "tuviste",
            "él / ella / usted": "tuvo",
            nosotros: "tuvimos",
            vosotros: "tuvisteis",
            "ellos / ustedes": "tuvieron"
        }
    },

    {
        infinitive: "estar",
        forms: {
            yo: "estuve",
            tú: "estuviste",
            "él / ella / usted": "estuvo",
            nosotros: "estuvimos",
            vosotros: "estuvisteis",
            "ellos / ustedes": "estuvieron"
        }
    },

    {
        infinitive: "andar",
        forms: {
            yo: "anduve",
            tú: "anduviste",
            "él / ella / usted": "anduvo",
            nosotros: "anduvimos",
            vosotros: "anduvisteis",
            "ellos / ustedes": "anduvieron"
        }
    },

    {
        infinitive: "poder",
        forms: {
            yo: "pude",
            tú: "pudiste",
            "él / ella / usted": "pudo",
            nosotros: "pudimos",
            vosotros: "pudisteis",
            "ellos / ustedes": "pudieron"
        }
    },

    {
        infinitive: "poner",
        forms: {
            yo: "puse",
            tú: "pusiste",
            "él / ella / usted": "puso",
            nosotros: "pusimos",
            vosotros: "pusisteis",
            "ellos / ustedes": "pusieron"
        }
    },

    {
        infinitive: "saber",
        forms: {
            yo: "supe",
            tú: "supiste",
            "él / ella / usted": "supo",
            nosotros: "supimos",
            vosotros: "supisteis",
            "ellos / ustedes": "supieron"
        }
    },

    {
        infinitive: "querer",
        forms: {
            yo: "quise",
            tú: "quisiste",
            "él / ella / usted": "quiso",
            nosotros: "quisimos",
            vosotros: "quisisteis",
            "ellos / ustedes": "quisieron"
        }
    },

    {
        infinitive: "venir",
        forms: {
            yo: "vine",
            tú: "viniste",
            "él / ella / usted": "vino",
            nosotros: "vinimos",
            vosotros: "vinisteis",
            "ellos / ustedes": "vinieron"
        }
    },


    // HACER

    {
        infinitive: "hacer",
        forms: {
            yo: "hice",
            tú: "hiciste",
            "él / ella / usted": "hizo",
            nosotros: "hicimos",
            vosotros: "hicisteis",
            "ellos / ustedes": "hicieron"
        }
    },


    // J-STEM

    {
        infinitive: "decir",
        forms: {
            yo: "dije",
            tú: "dijiste",
            "él / ella / usted": "dijo",
            nosotros: "dijimos",
            vosotros: "dijisteis",
            "ellos / ustedes": "dijeron"
        }
    },

    {
        infinitive: "traer",
        forms: {
            yo: "traje",
            tú: "trajiste",
            "él / ella / usted": "trajo",
            nosotros: "trajimos",
            vosotros: "trajisteis",
            "ellos / ustedes": "trajeron"
        }
    },


    // DAR / VER

    {
        infinitive: "dar",
        forms: {
            yo: "di",
            tú: "diste",
            "él / ella / usted": "dio",
            nosotros: "dimos",
            vosotros: "disteis",
            "ellos / ustedes": "dieron"
        }
    },

    {
        infinitive: "ver",
        forms: {
            yo: "vi",
            tú: "viste",
            "él / ella / usted": "vio",
            nosotros: "vimos",
            vosotros: "visteis",
            "ellos / ustedes": "vieron"
        }
    }

];
// ==============================
// IMPERFECTO — REGULARES
// ==============================

const imperfectRegularVerbs = [

    // -AR

    {
        infinitive: "hablar",
        forms: {
            yo: "hablaba",
            tú: "hablabas",
            "él / ella / usted": "hablaba",
            nosotros: "hablábamos",
            vosotros: "hablabais",
            "ellos / ustedes": "hablaban"
        }
    },

    {
        infinitive: "trabajar",
        forms: {
            yo: "trabajaba",
            tú: "trabajabas",
            "él / ella / usted": "trabajaba",
            nosotros: "trabajábamos",
            vosotros: "trabajabais",
            "ellos / ustedes": "trabajaban"
        }
    },

    {
        infinitive: "estudiar",
        forms: {
            yo: "estudiaba",
            tú: "estudiabas",
            "él / ella / usted": "estudiaba",
            nosotros: "estudiábamos",
            vosotros: "estudiabais",
            "ellos / ustedes": "estudiaban"
        }
    },

    {
        infinitive: "comprar",
        forms: {
            yo: "compraba",
            tú: "comprabas",
            "él / ella / usted": "compraba",
            nosotros: "comprábamos",
            vosotros: "comprabais",
            "ellos / ustedes": "compraban"
        }
    },

    {
        infinitive: "viajar",
        forms: {
            yo: "viajaba",
            tú: "viajabas",
            "él / ella / usted": "viajaba",
            nosotros: "viajábamos",
            vosotros: "viajabais",
            "ellos / ustedes": "viajaban"
        }
    },

    {
        infinitive: "escuchar",
        forms: {
            yo: "escuchaba",
            tú: "escuchabas",
            "él / ella / usted": "escuchaba",
            nosotros: "escuchábamos",
            vosotros: "escuchabais",
            "ellos / ustedes": "escuchaban"
        }
    },

    {
        infinitive: "mirar",
        forms: {
            yo: "miraba",
            tú: "mirabas",
            "él / ella / usted": "miraba",
            nosotros: "mirábamos",
            vosotros: "mirabais",
            "ellos / ustedes": "miraban"
        }
    },

    {
        infinitive: "ayudar",
        forms: {
            yo: "ayudaba",
            tú: "ayudabas",
            "él / ella / usted": "ayudaba",
            nosotros: "ayudábamos",
            vosotros: "ayudabais",
            "ellos / ustedes": "ayudaban"
        }
    },


    // -ER

    {
        infinitive: "comer",
        forms: {
            yo: "comía",
            tú: "comías",
            "él / ella / usted": "comía",
            nosotros: "comíamos",
            vosotros: "comíais",
            "ellos / ustedes": "comían"
        }
    },

    {
        infinitive: "beber",
        forms: {
            yo: "bebía",
            tú: "bebías",
            "él / ella / usted": "bebía",
            nosotros: "bebíamos",
            vosotros: "bebíais",
            "ellos / ustedes": "bebían"
        }
    },

    {
        infinitive: "aprender",
        forms: {
            yo: "aprendía",
            tú: "aprendías",
            "él / ella / usted": "aprendía",
            nosotros: "aprendíamos",
            vosotros: "aprendíais",
            "ellos / ustedes": "aprendían"
        }
    },

    {
        infinitive: "vender",
        forms: {
            yo: "vendía",
            tú: "vendías",
            "él / ella / usted": "vendía",
            nosotros: "vendíamos",
            vosotros: "vendíais",
            "ellos / ustedes": "vendían"
        }
    },

    {
        infinitive: "correr",
        forms: {
            yo: "corría",
            tú: "corrías",
            "él / ella / usted": "corría",
            nosotros: "corríamos",
            vosotros: "corríais",
            "ellos / ustedes": "corrían"
        }
    },


    // -IR

    {
        infinitive: "vivir",
        forms: {
            yo: "vivía",
            tú: "vivías",
            "él / ella / usted": "vivía",
            nosotros: "vivíamos",
            vosotros: "vivíais",
            "ellos / ustedes": "vivían"
        }
    },

    {
        infinitive: "escribir",
        forms: {
            yo: "escribía",
            tú: "escribías",
            "él / ella / usted": "escribía",
            nosotros: "escribíamos",
            vosotros: "escribíais",
            "ellos / ustedes": "escribían"
        }
    },

    {
        infinitive: "abrir",
        forms: {
            yo: "abría",
            tú: "abrías",
            "él / ella / usted": "abría",
            nosotros: "abríamos",
            vosotros: "abríais",
            "ellos / ustedes": "abrían"
        }
    },

    {
        infinitive: "recibir",
        forms: {
            yo: "recibía",
            tú: "recibías",
            "él / ella / usted": "recibía",
            nosotros: "recibíamos",
            vosotros: "recibíais",
            "ellos / ustedes": "recibían"
        }
    },

    {
        infinitive: "salir",
        forms: {
            yo: "salía",
            tú: "salías",
            "él / ella / usted": "salía",
            nosotros: "salíamos",
            vosotros: "salíais",
            "ellos / ustedes": "salían"
        }
    }

];


// ==============================
// IMPERFECTO — IRREGULARES
// ==============================

const imperfectIrregularVerbs = [

    {
        infinitive: "ser",
        forms: {
            yo: "era",
            tú: "eras",
            "él / ella / usted": "era",
            nosotros: "éramos",
            vosotros: "erais",
            "ellos / ustedes": "eran"
        }
    },

    {
        infinitive: "ir",
        forms: {
            yo: "iba",
            tú: "ibas",
            "él / ella / usted": "iba",
            nosotros: "íbamos",
            vosotros: "ibais",
            "ellos / ustedes": "iban"
        }
    },

    {
        infinitive: "ver",
        forms: {
            yo: "veía",
            tú: "veías",
            "él / ella / usted": "veía",
            nosotros: "veíamos",
            vosotros: "veíais",
            "ellos / ustedes": "veían"
        }
    }

];
// ==============================
// FUTURO — REGULARES
// ==============================

const futureRegularVerbs = [

    {
        infinitive: "hablar",
        forms: {
            yo: "hablaré",
            tú: "hablarás",
            "él / ella / usted": "hablará",
            nosotros: "hablaremos",
            vosotros: "hablaréis",
            "ellos / ustedes": "hablarán"
        }
    },

    {
        infinitive: "trabajar",
        forms: {
            yo: "trabajaré",
            tú: "trabajarás",
            "él / ella / usted": "trabajará",
            nosotros: "trabajaremos",
            vosotros: "trabajaréis",
            "ellos / ustedes": "trabajarán"
        }
    },

    {
        infinitive: "estudiar",
        forms: {
            yo: "estudiaré",
            tú: "estudiarás",
            "él / ella / usted": "estudiará",
            nosotros: "estudiaremos",
            vosotros: "estudiaréis",
            "ellos / ustedes": "estudiarán"
        }
    },

    {
        infinitive: "viajar",
        forms: {
            yo: "viajaré",
            tú: "viajarás",
            "él / ella / usted": "viajará",
            nosotros: "viajaremos",
            vosotros: "viajaréis",
            "ellos / ustedes": "viajarán"
        }
    },

    {
        infinitive: "comprar",
        forms: {
            yo: "compraré",
            tú: "comprarás",
            "él / ella / usted": "comprará",
            nosotros: "compraremos",
            vosotros: "compraréis",
            "ellos / ustedes": "comprarán"
        }
    },

    {
        infinitive: "comer",
        forms: {
            yo: "comeré",
            tú: "comerás",
            "él / ella / usted": "comerá",
            nosotros: "comeremos",
            vosotros: "comeréis",
            "ellos / ustedes": "comerán"
        }
    },

    {
        infinitive: "beber",
        forms: {
            yo: "beberé",
            tú: "beberás",
            "él / ella / usted": "beberá",
            nosotros: "beberemos",
            vosotros: "beberéis",
            "ellos / ustedes": "beberán"
        }
    },

    {
        infinitive: "aprender",
        forms: {
            yo: "aprenderé",
            tú: "aprenderás",
            "él / ella / usted": "aprenderá",
            nosotros: "aprenderemos",
            vosotros: "aprenderéis",
            "ellos / ustedes": "aprenderán"
        }
    },

    {
        infinitive: "vivir",
        forms: {
            yo: "viviré",
            tú: "vivirás",
            "él / ella / usted": "vivirá",
            nosotros: "viviremos",
            vosotros: "viviréis",
            "ellos / ustedes": "vivirán"
        }
    },

    {
        infinitive: "escribir",
        forms: {
            yo: "escribiré",
            tú: "escribirás",
            "él / ella / usted": "escribirá",
            nosotros: "escribiremos",
            vosotros: "escribiréis",
            "ellos / ustedes": "escribirán"
        }
    },

    {
        infinitive: "abrir",
        forms: {
            yo: "abriré",
            tú: "abrirás",
            "él / ella / usted": "abrirá",
            nosotros: "abriremos",
            vosotros: "abriréis",
            "ellos / ustedes": "abrirán"
        }
    },

    {
        infinitive: "recibir",
        forms: {
            yo: "recibiré",
            tú: "recibirás",
            "él / ella / usted": "recibirá",
            nosotros: "recibiremos",
            vosotros: "recibiréis",
            "ellos / ustedes": "recibirán"
        }
    }

];


// ==============================
// FUTURO — IRREGULARES
// ==============================

const futureIrregularVerbs = [

    {
        infinitive: "tener",
        forms: {
            yo: "tendré",
            tú: "tendrás",
            "él / ella / usted": "tendrá",
            nosotros: "tendremos",
            vosotros: "tendréis",
            "ellos / ustedes": "tendrán"
        }
    },

    {
        infinitive: "venir",
        forms: {
            yo: "vendré",
            tú: "vendrás",
            "él / ella / usted": "vendrá",
            nosotros: "vendremos",
            vosotros: "vendréis",
            "ellos / ustedes": "vendrán"
        }
    },

    {
        infinitive: "salir",
        forms: {
            yo: "saldré",
            tú: "saldrás",
            "él / ella / usted": "saldrá",
            nosotros: "saldremos",
            vosotros: "saldréis",
            "ellos / ustedes": "saldrán"
        }
    },

    {
        infinitive: "poner",
        forms: {
            yo: "pondré",
            tú: "pondrás",
            "él / ella / usted": "pondrá",
            nosotros: "pondremos",
            vosotros: "pondréis",
            "ellos / ustedes": "pondrán"
        }
    },

    {
        infinitive: "poder",
        forms: {
            yo: "podré",
            tú: "podrás",
            "él / ella / usted": "podrá",
            nosotros: "podremos",
            vosotros: "podréis",
            "ellos / ustedes": "podrán"
        }
    },

    {
        infinitive: "saber",
        forms: {
            yo: "sabré",
            tú: "sabrás",
            "él / ella / usted": "sabrá",
            nosotros: "sabremos",
            vosotros: "sabréis",
            "ellos / ustedes": "sabrán"
        }
    },

    {
        infinitive: "querer",
        forms: {
            yo: "querré",
            tú: "querrás",
            "él / ella / usted": "querrá",
            nosotros: "querremos",
            vosotros: "querréis",
            "ellos / ustedes": "querrán"
        }
    },

    {
        infinitive: "haber",
        forms: {
            yo: "habré",
            tú: "habrás",
            "él / ella / usted": "habrá",
            nosotros: "habremos",
            vosotros: "habréis",
            "ellos / ustedes": "habrán"
        }
    },

    {
        infinitive: "hacer",
        forms: {
            yo: "haré",
            tú: "harás",
            "él / ella / usted": "hará",
            nosotros: "haremos",
            vosotros: "haréis",
            "ellos / ustedes": "harán"
        }
    },

    {
        infinitive: "decir",
        forms: {
            yo: "diré",
            tú: "dirás",
            "él / ella / usted": "dirá",
            nosotros: "diremos",
            vosotros: "diréis",
            "ellos / ustedes": "dirán"
        }
    },

    {
        infinitive: "caber",
        forms: {
            yo: "cabré",
            tú: "cabrás",
            "él / ella / usted": "cabrá",
            nosotros: "cabremos",
            vosotros: "cabréis",
            "ellos / ustedes": "cabrán"
        }
    },

    {
        infinitive: "valer",
        forms: {
            yo: "valdré",
            tú: "valdrás",
            "él / ella / usted": "valdrá",
            nosotros: "valdremos",
            vosotros: "valdréis",
            "ellos / ustedes": "valdrán"
        }
    }

];
// ==============================
// CONDICIONAL — REGULARES
// ==============================

const conditionalRegularVerbs = [

    {
        infinitive: "hablar",
        forms: {
            yo: "hablaría",
            tú: "hablarías",
            "él / ella / usted": "hablaría",
            nosotros: "hablaríamos",
            vosotros: "hablaríais",
            "ellos / ustedes": "hablarían"
        }
    },

    {
        infinitive: "trabajar",
        forms: {
            yo: "trabajaría",
            tú: "trabajarías",
            "él / ella / usted": "trabajaría",
            nosotros: "trabajaríamos",
            vosotros: "trabajaríais",
            "ellos / ustedes": "trabajarían"
        }
    },

    {
        infinitive: "estudiar",
        forms: {
            yo: "estudiaría",
            tú: "estudiarías",
            "él / ella / usted": "estudiaría",
            nosotros: "estudiaríamos",
            vosotros: "estudiaríais",
            "ellos / ustedes": "estudiarían"
        }
    },

    {
        infinitive: "viajar",
        forms: {
            yo: "viajaría",
            tú: "viajarías",
            "él / ella / usted": "viajaría",
            nosotros: "viajaríamos",
            vosotros: "viajaríais",
            "ellos / ustedes": "viajarían"
        }
    },

    {
        infinitive: "comprar",
        forms: {
            yo: "compraría",
            tú: "comprarías",
            "él / ella / usted": "compraría",
            nosotros: "compraríamos",
            vosotros: "compraríais",
            "ellos / ustedes": "comprarían"
        }
    },

    {
        infinitive: "comer",
        forms: {
            yo: "comería",
            tú: "comerías",
            "él / ella / usted": "comería",
            nosotros: "comeríamos",
            vosotros: "comeríais",
            "ellos / ustedes": "comerían"
        }
    },

    {
        infinitive: "beber",
        forms: {
            yo: "bebería",
            tú: "beberías",
            "él / ella / usted": "bebería",
            nosotros: "beberíamos",
            vosotros: "beberíais",
            "ellos / ustedes": "beberían"
        }
    },

    {
        infinitive: "aprender",
        forms: {
            yo: "aprendería",
            tú: "aprenderías",
            "él / ella / usted": "aprendería",
            nosotros: "aprenderíamos",
            vosotros: "aprenderíais",
            "ellos / ustedes": "aprenderían"
        }
    },

    {
        infinitive: "vivir",
        forms: {
            yo: "viviría",
            tú: "vivirías",
            "él / ella / usted": "viviría",
            nosotros: "viviríamos",
            vosotros: "viviríais",
            "ellos / ustedes": "vivirían"
        }
    },

    {
        infinitive: "escribir",
        forms: {
            yo: "escribiría",
            tú: "escribirías",
            "él / ella / usted": "escribiría",
            nosotros: "escribiríamos",
            vosotros: "escribiríais",
            "ellos / ustedes": "escribirían"
        }
    },

    {
        infinitive: "abrir",
        forms: {
            yo: "abriría",
            tú: "abrirías",
            "él / ella / usted": "abriría",
            nosotros: "abriríamos",
            vosotros: "abriríais",
            "ellos / ustedes": "abrirían"
        }
    },

    {
        infinitive: "recibir",
        forms: {
            yo: "recibiría",
            tú: "recibirías",
            "él / ella / usted": "recibiría",
            nosotros: "recibiríamos",
            vosotros: "recibiríais",
            "ellos / ustedes": "recibirían"
        }
    }

];


// ==============================
// CONDICIONAL — IRREGULARES
// ==============================

const conditionalIrregularVerbs = [

    {
        infinitive: "tener",
        forms: {
            yo: "tendría",
            tú: "tendrías",
            "él / ella / usted": "tendría",
            nosotros: "tendríamos",
            vosotros: "tendríais",
            "ellos / ustedes": "tendrían"
        }
    },

    {
        infinitive: "venir",
        forms: {
            yo: "vendría",
            tú: "vendrías",
            "él / ella / usted": "vendría",
            nosotros: "vendríamos",
            vosotros: "vendríais",
            "ellos / ustedes": "vendrían"
        }
    },

    {
        infinitive: "salir",
        forms: {
            yo: "saldría",
            tú: "saldrías",
            "él / ella / usted": "saldría",
            nosotros: "saldríamos",
            vosotros: "saldríais",
            "ellos / ustedes": "saldrían"
        }
    },

    {
        infinitive: "poner",
        forms: {
            yo: "pondría",
            tú: "pondrías",
            "él / ella / usted": "pondría",
            nosotros: "pondríamos",
            vosotros: "pondríais",
            "ellos / ustedes": "pondrían"
        }
    },

    {
        infinitive: "poder",
        forms: {
            yo: "podría",
            tú: "podrías",
            "él / ella / usted": "podría",
            nosotros: "podríamos",
            vosotros: "podríais",
            "ellos / ustedes": "podrían"
        }
    },

    {
        infinitive: "saber",
        forms: {
            yo: "sabría",
            tú: "sabrías",
            "él / ella / usted": "sabría",
            nosotros: "sabríamos",
            vosotros: "sabríais",
            "ellos / ustedes": "sabrían"
        }
    },

    {
        infinitive: "querer",
        forms: {
            yo: "querría",
            tú: "querrías",
            "él / ella / usted": "querría",
            nosotros: "querríamos",
            vosotros: "querríais",
            "ellos / ustedes": "querrían"
        }
    },

    {
        infinitive: "haber",
        forms: {
            yo: "habría",
            tú: "habrías",
            "él / ella / usted": "habría",
            nosotros: "habríamos",
            vosotros: "habríais",
            "ellos / ustedes": "habrían"
        }
    },

    {
        infinitive: "hacer",
        forms: {
            yo: "haría",
            tú: "harías",
            "él / ella / usted": "haría",
            nosotros: "haríamos",
            vosotros: "haríais",
            "ellos / ustedes": "harían"
        }
    },

    {
        infinitive: "decir",
        forms: {
            yo: "diría",
            tú: "dirías",
            "él / ella / usted": "diría",
            nosotros: "diríamos",
            vosotros: "diríais",
            "ellos / ustedes": "dirían"
        }
    },

    {
        infinitive: "caber",
        forms: {
            yo: "cabría",
            tú: "cabrías",
            "él / ella / usted": "cabría",
            nosotros: "cabríamos",
            vosotros: "cabríais",
            "ellos / ustedes": "cabrían"
        }
    },

    {
        infinitive: "valer",
        forms: {
            yo: "valdría",
            tú: "valdrías",
            "él / ella / usted": "valdría",
            nosotros: "valdríamos",
            vosotros: "valdríais",
            "ellos / ustedes": "valdrían"
        }
    }

];
// ==============================
// SUBJUNTIVO PRESENTE — REGULARES
// ==============================

const subjunctivePresentRegularVerbs = [

    {
        infinitive: "hablar",
        forms: {
            yo: "hable",
            tú: "hables",
            "él / ella / usted": "hable",
            nosotros: "hablemos",
            vosotros: "habléis",
            "ellos / ustedes": "hablen"
        }
    },

    {
        infinitive: "trabajar",
        forms: {
            yo: "trabaje",
            tú: "trabajes",
            "él / ella / usted": "trabaje",
            nosotros: "trabajemos",
            vosotros: "trabajéis",
            "ellos / ustedes": "trabajen"
        }
    },

    {
        infinitive: "estudiar",
        forms: {
            yo: "estudie",
            tú: "estudies",
            "él / ella / usted": "estudie",
            nosotros: "estudiemos",
            vosotros: "estudiéis",
            "ellos / ustedes": "estudien"
        }
    },

    {
        infinitive: "comprar",
        forms: {
            yo: "compre",
            tú: "compres",
            "él / ella / usted": "compre",
            nosotros: "compremos",
            vosotros: "compréis",
            "ellos / ustedes": "compren"
        }
    },

    {
        infinitive: "viajar",
        forms: {
            yo: "viaje",
            tú: "viajes",
            "él / ella / usted": "viaje",
            nosotros: "viajemos",
            vosotros: "viajéis",
            "ellos / ustedes": "viajen"
        }
    },

    {
        infinitive: "comer",
        forms: {
            yo: "coma",
            tú: "comas",
            "él / ella / usted": "coma",
            nosotros: "comamos",
            vosotros: "comáis",
            "ellos / ustedes": "coman"
        }
    },

    {
        infinitive: "beber",
        forms: {
            yo: "beba",
            tú: "bebas",
            "él / ella / usted": "beba",
            nosotros: "bebamos",
            vosotros: "bebáis",
            "ellos / ustedes": "beban"
        }
    },

    {
        infinitive: "aprender",
        forms: {
            yo: "aprenda",
            tú: "aprendas",
            "él / ella / usted": "aprenda",
            nosotros: "aprendamos",
            vosotros: "aprendáis",
            "ellos / ustedes": "aprendan"
        }
    },

    {
        infinitive: "vivir",
        forms: {
            yo: "viva",
            tú: "vivas",
            "él / ella / usted": "viva",
            nosotros: "vivamos",
            vosotros: "viváis",
            "ellos / ustedes": "vivan"
        }
    },

    {
        infinitive: "escribir",
        forms: {
            yo: "escriba",
            tú: "escribas",
            "él / ella / usted": "escriba",
            nosotros: "escribamos",
            vosotros: "escribáis",
            "ellos / ustedes": "escriban"
        }
    },

    {
        infinitive: "abrir",
        forms: {
            yo: "abra",
            tú: "abras",
            "él / ella / usted": "abra",
            nosotros: "abramos",
            vosotros: "abráis",
            "ellos / ustedes": "abran"
        }
    },

    {
        infinitive: "recibir",
        forms: {
            yo: "reciba",
            tú: "recibas",
            "él / ella / usted": "reciba",
            nosotros: "recibamos",
            vosotros: "recibáis",
            "ellos / ustedes": "reciban"
        }
    },
        {
        infinitive: "escuchar",
        forms: {
            yo: "escuche",
            tú: "escuches",
            "él / ella / usted": "escuche",
            nosotros: "escuchemos",
            vosotros: "escuchéis",
            "ellos / ustedes": "escuchen"
        }
    },

    {
        infinitive: "mirar",
        forms: {
            yo: "mire",
            tú: "mires",
            "él / ella / usted": "mire",
            nosotros: "miremos",
            vosotros: "miréis",
            "ellos / ustedes": "miren"
        }
    },

    {
        infinitive: "necesitar",
        forms: {
            yo: "necesite",
            tú: "necesites",
            "él / ella / usted": "necesite",
            nosotros: "necesitemos",
            vosotros: "necesitéis",
            "ellos / ustedes": "necesiten"
        }
    },

    {
        infinitive: "llevar",
        forms: {
            yo: "lleve",
            tú: "lleves",
            "él / ella / usted": "lleve",
            nosotros: "llevemos",
            vosotros: "llevéis",
            "ellos / ustedes": "lleven"
        }
    },

    {
        infinitive: "ayudar",
        forms: {
            yo: "ayude",
            tú: "ayudes",
            "él / ella / usted": "ayude",
            nosotros: "ayudemos",
            vosotros: "ayudéis",
            "ellos / ustedes": "ayuden"
        }
    },

    {
        infinitive: "preguntar",
        forms: {
            yo: "pregunte",
            tú: "preguntes",
            "él / ella / usted": "pregunte",
            nosotros: "preguntemos",
            vosotros: "preguntéis",
            "ellos / ustedes": "pregunten"
        }
    },

    {
        infinitive: "vender",
        forms: {
            yo: "venda",
            tú: "vendas",
            "él / ella / usted": "venda",
            nosotros: "vendamos",
            vosotros: "vendáis",
            "ellos / ustedes": "vendan"
        }
    },

    {
        infinitive: "correr",
        forms: {
            yo: "corra",
            tú: "corras",
            "él / ella / usted": "corra",
            nosotros: "corramos",
            vosotros: "corráis",
            "ellos / ustedes": "corran"
        }
    },

    {
        infinitive: "deber",
        forms: {
            yo: "deba",
            tú: "debas",
            "él / ella / usted": "deba",
            nosotros: "debamos",
            vosotros: "debáis",
            "ellos / ustedes": "deban"
        }
    },

    {
        infinitive: "responder",
        forms: {
            yo: "responda",
            tú: "respondas",
            "él / ella / usted": "responda",
            nosotros: "respondamos",
            vosotros: "respondáis",
            "ellos / ustedes": "respondan"
        }
    },

    {
        infinitive: "comprender",
        forms: {
            yo: "comprenda",
            tú: "comprendas",
            "él / ella / usted": "comprenda",
            nosotros: "comprendamos",
            vosotros: "comprendáis",
            "ellos / ustedes": "comprendan"
        }
    },

    {
        infinitive: "decidir",
        forms: {
            yo: "decida",
            tú: "decidas",
            "él / ella / usted": "decida",
            nosotros: "decidamos",
            vosotros: "decidáis",
            "ellos / ustedes": "decidan"
        }
    },

    {
        infinitive: "subir",
        forms: {
            yo: "suba",
            tú: "subas",
            "él / ella / usted": "suba",
            nosotros: "subamos",
            vosotros: "subáis",
            "ellos / ustedes": "suban"
        }
    }

];

// ==============================
// SUBJUNTIVO PRESENTE — CAMBIO VOCÁLICO
// ==============================

const subjunctivePresentStemVerbs = [

    // e → ie

    {
        infinitive: "pensar",
        change: "e-ie",
        forms: {
            yo: "piense",
            tú: "pienses",
            "él / ella / usted": "piense",
            nosotros: "pensemos",
            vosotros: "penséis",
            "ellos / ustedes": "piensen"
        }
    },

    {
        infinitive: "cerrar",
        change: "e-ie",
        forms: {
            yo: "cierre",
            tú: "cierres",
            "él / ella / usted": "cierre",
            nosotros: "cerremos",
            vosotros: "cerréis",
            "ellos / ustedes": "cierren"
        }
    },

    {
        infinitive: "empezar",
        change: "e-ie",
        forms: {
            yo: "empiece",
            tú: "empieces",
            "él / ella / usted": "empiece",
            nosotros: "empecemos",
            vosotros: "empecéis",
            "ellos / ustedes": "empiecen"
        }
    },

    {
        infinitive: "entender",
        change: "e-ie",
        forms: {
            yo: "entienda",
            tú: "entiendas",
            "él / ella / usted": "entienda",
            nosotros: "entendamos",
            vosotros: "entendáis",
            "ellos / ustedes": "entiendan"
        }
    },

    {
        infinitive: "perder",
        change: "e-ie",
        forms: {
            yo: "pierda",
            tú: "pierdas",
            "él / ella / usted": "pierda",
            nosotros: "perdamos",
            vosotros: "perdáis",
            "ellos / ustedes": "pierdan"
        }
    },

    {
        infinitive: "querer",
        change: "e-ie",
        forms: {
            yo: "quiera",
            tú: "quieras",
            "él / ella / usted": "quiera",
            nosotros: "queramos",
            vosotros: "queráis",
            "ellos / ustedes": "quieran"
        }
    },


    // o → ue

    {
        infinitive: "poder",
        change: "o-ue",
        forms: {
            yo: "pueda",
            tú: "puedas",
            "él / ella / usted": "pueda",
            nosotros: "podamos",
            vosotros: "podáis",
            "ellos / ustedes": "puedan"
        }
    },

    {
        infinitive: "volver",
        change: "o-ue",
        forms: {
            yo: "vuelva",
            tú: "vuelvas",
            "él / ella / usted": "vuelva",
            nosotros: "volvamos",
            vosotros: "volváis",
            "ellos / ustedes": "vuelvan"
        }
    },

    {
        infinitive: "encontrar",
        change: "o-ue",
        forms: {
            yo: "encuentre",
            tú: "encuentres",
            "él / ella / usted": "encuentre",
            nosotros: "encontremos",
            vosotros: "encontréis",
            "ellos / ustedes": "encuentren"
        }
    },

    {
        infinitive: "contar",
        change: "o-ue",
        forms: {
            yo: "cuente",
            tú: "cuentes",
            "él / ella / usted": "cuente",
            nosotros: "contemos",
            vosotros: "contéis",
            "ellos / ustedes": "cuenten"
        }
    },

    {
        infinitive: "recordar",
        change: "o-ue",
        forms: {
            yo: "recuerde",
            tú: "recuerdes",
            "él / ella / usted": "recuerde",
            nosotros: "recordemos",
            vosotros: "recordéis",
            "ellos / ustedes": "recuerden"
        }
    },

    {
        infinitive: "mostrar",
        change: "o-ue",
        forms: {
            yo: "muestre",
            tú: "muestres",
            "él / ella / usted": "muestre",
            nosotros: "mostremos",
            vosotros: "mostréis",
            "ellos / ustedes": "muestren"
        }
    },


    // e → i

    {
        infinitive: "pedir",
        change: "e-i",
        forms: {
            yo: "pida",
            tú: "pidas",
            "él / ella / usted": "pida",
            nosotros: "pidamos",
            vosotros: "pidáis",
            "ellos / ustedes": "pidan"
        }
    },

    {
        infinitive: "repetir",
        change: "e-i",
        forms: {
            yo: "repita",
            tú: "repitas",
            "él / ella / usted": "repita",
            nosotros: "repitamos",
            vosotros: "repitáis",
            "ellos / ustedes": "repitan"
        }
    },

    {
        infinitive: "servir",
        change: "e-i",
        forms: {
            yo: "sirva",
            tú: "sirvas",
            "él / ella / usted": "sirva",
            nosotros: "sirvamos",
            vosotros: "sirváis",
            "ellos / ustedes": "sirvan"
        }
    },

    {
        infinitive: "vestir",
        change: "e-i",
        forms: {
            yo: "vista",
            tú: "vistas",
            "él / ella / usted": "vista",
            nosotros: "vistamos",
            vosotros: "vistáis",
            "ellos / ustedes": "vistan"
        }
    },

    {
        infinitive: "medir",
        change: "e-i",
        forms: {
            yo: "mida",
            tú: "midas",
            "él / ella / usted": "mida",
            nosotros: "midamos",
            vosotros: "midáis",
            "ellos / ustedes": "midan"
        }
    },

    {
        infinitive: "competir",
        change: "e-i",
        forms: {
            yo: "compita",
            tú: "compitas",
            "él / ella / usted": "compita",
            nosotros: "compitamos",
            vosotros: "compitáis",
            "ellos / ustedes": "compitan"
        }
    },

// -IR ESPECIALES

{
    infinitive: "dormir",
    change: "ir-special",
    forms: {
        yo: "duerma",
        tú: "duermas",
        "él / ella / usted": "duerma",
        nosotros: "durmamos",
        vosotros: "durmáis",
        "ellos / ustedes": "duerman"
    }
},

{
    infinitive: "morir",
    change: "ir-special",
    forms: {
        yo: "muera",
        tú: "mueras",
        "él / ella / usted": "muera",
        nosotros: "muramos",
        vosotros: "muráis",
        "ellos / ustedes": "mueran"
    }
},

{
    infinitive: "sentir",
    change: "ir-special",
    forms: {
        yo: "sienta",
        tú: "sientas",
        "él / ella / usted": "sienta",
        nosotros: "sintamos",
        vosotros: "sintáis",
        "ellos / ustedes": "sientan"
    }
},

{
    infinitive: "preferir",
    change: "ir-special",
    forms: {
        yo: "prefiera",
        tú: "prefieras",
        "él / ella / usted": "prefiera",
        nosotros: "prefiramos",
        vosotros: "prefiráis",
        "ellos / ustedes": "prefieran"
    }
},

{
    infinitive: "mentir",
    change: "ir-special",
    forms: {
        yo: "mienta",
        tú: "mientas",
        "él / ella / usted": "mienta",
        nosotros: "mintamos",
        vosotros: "mintáis",
        "ellos / ustedes": "mientan"
    }
},

];

const subjunctivePresentOrthographicVerbs = [

    // c → qu

    {
        infinitive: "buscar",
        forms: {
            yo: "busque",
            tú: "busques",
            "él / ella / usted": "busque",
            nosotros: "busquemos",
            vosotros: "busquéis",
            "ellos / ustedes": "busquen"
        }
    },

    {
        infinitive: "tocar",
        forms: {
            yo: "toque",
            tú: "toques",
            "él / ella / usted": "toque",
            nosotros: "toquemos",
            vosotros: "toquéis",
            "ellos / ustedes": "toquen"
        }
    },

    {
        infinitive: "sacar",
        forms: {
            yo: "saque",
            tú: "saques",
            "él / ella / usted": "saque",
            nosotros: "saquemos",
            vosotros: "saquéis",
            "ellos / ustedes": "saquen"
        }
    },

    {
        infinitive: "practicar",
        forms: {
            yo: "practique",
            tú: "practiques",
            "él / ella / usted": "practique",
            nosotros: "practiquemos",
            vosotros: "practiquéis",
            "ellos / ustedes": "practiquen"
        }
    },

    // g → gu

    {
        infinitive: "llegar",
        forms: {
            yo: "llegue",
            tú: "llegues",
            "él / ella / usted": "llegue",
            nosotros: "lleguemos",
            vosotros: "lleguéis",
            "ellos / ustedes": "lleguen"
        }
    },

    {
        infinitive: "pagar",
        forms: {
            yo: "pague",
            tú: "pagues",
            "él / ella / usted": "pague",
            nosotros: "paguemos",
            vosotros: "paguéis",
            "ellos / ustedes": "paguen"
        }
    },

    {
        infinitive: "jugar",
        forms: {
            yo: "juegue",
            tú: "juegues",
            "él / ella / usted": "juegue",
            nosotros: "juguemos",
            vosotros: "juguéis",
            "ellos / ustedes": "jueguen"
        }
    },

    // z → c

    {
        infinitive: "cruzar",
        forms: {
            yo: "cruce",
            tú: "cruces",
            "él / ella / usted": "cruce",
            nosotros: "crucemos",
            vosotros: "crucéis",
            "ellos / ustedes": "crucen"
        }
    },

    {
        infinitive: "empezar",
        forms: {
            yo: "empiece",
            tú: "empieces",
            "él / ella / usted": "empiece",
            nosotros: "empecemos",
            vosotros: "empecéis",
            "ellos / ustedes": "empiecen"
        }
    }

];

const subjunctivePresentIrregularVerbs = [

    {
        infinitive: "ser",
        forms: {
            yo: "sea",
            tú: "seas",
            "él / ella / usted": "sea",
            nosotros: "seamos",
            vosotros: "seáis",
            "ellos / ustedes": "sean"
        }
    },

    {
        infinitive: "ir",
        forms: {
            yo: "vaya",
            tú: "vayas",
            "él / ella / usted": "vaya",
            nosotros: "vayamos",
            vosotros: "vayáis",
            "ellos / ustedes": "vayan"
        }
    },

    {
        infinitive: "haber",
        forms: {
            yo: "haya",
            tú: "hayas",
            "él / ella / usted": "haya",
            nosotros: "hayamos",
            vosotros: "hayáis",
            "ellos / ustedes": "hayan"
        }
    },

    {
        infinitive: "saber",
        forms: {
            yo: "sepa",
            tú: "sepas",
            "él / ella / usted": "sepa",
            nosotros: "sepamos",
            vosotros: "sepáis",
            "ellos / ustedes": "sepan"
        }
    },

    {
        infinitive: "dar",
        forms: {
            yo: "dé",
            tú: "des",
            "él / ella / usted": "dé",
            nosotros: "demos",
            vosotros: "deis",
            "ellos / ustedes": "den"
        }
    },

    {
        infinitive: "estar",
        forms: {
            yo: "esté",
            tú: "estés",
            "él / ella / usted": "esté",
            nosotros: "estemos",
            vosotros: "estéis",
            "ellos / ustedes": "estén"
        }
    }

];
// ==============================
// SUBJUNTIVO — IMPERFECTO
// REGULARES
// ==============================

const subjunctiveImperfectRegularVerbs = [

    // -AR

    {
        infinitive: "hablar",
        forms: {
            yo: ["hablara", "hablase"],
            tú: ["hablaras", "hablases"],
            "él / ella / usted": ["hablara", "hablase"],
            nosotros: ["habláramos", "hablásemos"],
            vosotros: ["hablarais", "hablaseis"],
            "ellos / ustedes": ["hablaran", "hablasen"]
        }
    },

    {
        infinitive: "trabajar",
        forms: {
            yo: ["trabajara", "trabajase"],
            tú: ["trabajaras", "trabajases"],
            "él / ella / usted": ["trabajara", "trabajase"],
            nosotros: ["trabajáramos", "trabajásemos"],
            vosotros: ["trabajarais", "trabajaseis"],
            "ellos / ustedes": ["trabajaran", "trabajasen"]
        }
    },

    {
        infinitive: "estudiar",
        forms: {
            yo: ["estudiara", "estudiase"],
            tú: ["estudiaras", "estudiases"],
            "él / ella / usted": ["estudiara", "estudiase"],
            nosotros: ["estudiáramos", "estudiásemos"],
            vosotros: ["estudiarais", "estudiaseis"],
            "ellos / ustedes": ["estudiaran", "estudiasen"]
        }
    },

    {
        infinitive: "comprar",
        forms: {
            yo: ["comprara", "comprase"],
            tú: ["compraras", "comprases"],
            "él / ella / usted": ["comprara", "comprase"],
            nosotros: ["compráramos", "comprásemos"],
            vosotros: ["comprarais", "compraseis"],
            "ellos / ustedes": ["compraran", "comprasen"]
        }
    },

    {
        infinitive: "viajar",
        forms: {
            yo: ["viajara", "viajase"],
            tú: ["viajaras", "viajases"],
            "él / ella / usted": ["viajara", "viajase"],
            nosotros: ["viajáramos", "viajásemos"],
            vosotros: ["viajarais", "viajaseis"],
            "ellos / ustedes": ["viajaran", "viajasen"]
        }
    },

    {
        infinitive: "escuchar",
        forms: {
            yo: ["escuchara", "escuchase"],
            tú: ["escucharas", "escuchases"],
            "él / ella / usted": ["escuchara", "escuchase"],
            nosotros: ["escucháramos", "escuchásemos"],
            vosotros: ["escucharais", "escuchaseis"],
            "ellos / ustedes": ["escucharan", "escuchasen"]
        }
    },

    {
        infinitive: "mirar",
        forms: {
            yo: ["mirara", "mirase"],
            tú: ["miraras", "mirases"],
            "él / ella / usted": ["mirara", "mirase"],
            nosotros: ["miráramos", "mirásemos"],
            vosotros: ["mirarais", "miraseis"],
            "ellos / ustedes": ["miraran", "mirasen"]
        }
    },

    {
        infinitive: "ayudar",
        forms: {
            yo: ["ayudara", "ayudase"],
            tú: ["ayudaras", "ayudases"],
            "él / ella / usted": ["ayudara", "ayudase"],
            nosotros: ["ayudáramos", "ayudásemos"],
            vosotros: ["ayudarais", "ayudaseis"],
            "ellos / ustedes": ["ayudaran", "ayudasen"]
        }
    },


    // -ER

    {
        infinitive: "comer",
        forms: {
            yo: ["comiera", "comiese"],
            tú: ["comieras", "comieses"],
            "él / ella / usted": ["comiera", "comiese"],
            nosotros: ["comiéramos", "comiésemos"],
            vosotros: ["comierais", "comieseis"],
            "ellos / ustedes": ["comieran", "comiesen"]
        }
    },

    {
        infinitive: "beber",
        forms: {
            yo: ["bebiera", "bebiese"],
            tú: ["bebieras", "bebieses"],
            "él / ella / usted": ["bebiera", "bebiese"],
            nosotros: ["bebiéramos", "bebiésemos"],
            vosotros: ["bebierais", "bebieseis"],
            "ellos / ustedes": ["bebieran", "bebiesen"]
        }
    },

    {
        infinitive: "aprender",
        forms: {
            yo: ["aprendiera", "aprendiese"],
            tú: ["aprendieras", "aprendieses"],
            "él / ella / usted": ["aprendiera", "aprendiese"],
            nosotros: ["aprendiéramos", "aprendiésemos"],
            vosotros: ["aprendierais", "aprendieseis"],
            "ellos / ustedes": ["aprendieran", "aprendiesen"]
        }
    },

    {
        infinitive: "vender",
        forms: {
            yo: ["vendiera", "vendiese"],
            tú: ["vendieras", "vendieses"],
            "él / ella / usted": ["vendiera", "vendiese"],
            nosotros: ["vendiéramos", "vendiésemos"],
            vosotros: ["vendierais", "vendieseis"],
            "ellos / ustedes": ["vendieran", "vendiesen"]
        }
    },

    {
        infinitive: "correr",
        forms: {
            yo: ["corriera", "corriese"],
            tú: ["corrieras", "corrieses"],
            "él / ella / usted": ["corriera", "corriese"],
            nosotros: ["corriéramos", "corriésemos"],
            vosotros: ["corrierais", "corrieseis"],
            "ellos / ustedes": ["corrieran", "corriesen"]
        }
    },


    // -IR

    {
        infinitive: "vivir",
        forms: {
            yo: ["viviera", "viviese"],
            tú: ["vivieras", "vivieses"],
            "él / ella / usted": ["viviera", "viviese"],
            nosotros: ["viviéramos", "viviésemos"],
            vosotros: ["vivierais", "vivieseis"],
            "ellos / ustedes": ["vivieran", "viviesen"]
        }
    },

    {
        infinitive: "escribir",
        forms: {
            yo: ["escribiera", "escribiese"],
            tú: ["escribieras", "escribieses"],
            "él / ella / usted": ["escribiera", "escribiese"],
            nosotros: ["escribiéramos", "escribiésemos"],
            vosotros: ["escribierais", "escribieseis"],
            "ellos / ustedes": ["escribieran", "escribiesen"]
        }
    },

    {
        infinitive: "abrir",
        forms: {
            yo: ["abriera", "abriese"],
            tú: ["abrieras", "abrieses"],
            "él / ella / usted": ["abriera", "abriese"],
            nosotros: ["abriéramos", "abriésemos"],
            vosotros: ["abrierais", "abrieseis"],
            "ellos / ustedes": ["abrieran", "abriesen"]
        }
    },

    {
        infinitive: "recibir",
        forms: {
            yo: ["recibiera", "recibiese"],
            tú: ["recibieras", "recibieses"],
            "él / ella / usted": ["recibiera", "recibiese"],
            nosotros: ["recibiéramos", "recibiésemos"],
            vosotros: ["recibierais", "recibieseis"],
            "ellos / ustedes": ["recibieran", "recibiesen"]
        }
    },
        {
        infinitive: "necesitar",
        forms: {
            yo: ["necesitara", "necesitase"],
            tú: ["necesitaras", "necesitases"],
            "él / ella / usted": ["necesitara", "necesitase"],
            nosotros: ["necesitáramos", "necesitásemos"],
            vosotros: ["necesitarais", "necesitaseis"],
            "ellos / ustedes": ["necesitaran", "necesitasen"]
        }
    },

    {
        infinitive: "llevar",
        forms: {
            yo: ["llevara", "llevase"],
            tú: ["llevaras", "llevases"],
            "él / ella / usted": ["llevara", "llevase"],
            nosotros: ["lleváramos", "llevásemos"],
            vosotros: ["llevarais", "llevaseis"],
            "ellos / ustedes": ["llevaran", "llevasen"]
        }
    },

    {
        infinitive: "preguntar",
        forms: {
            yo: ["preguntara", "preguntase"],
            tú: ["preguntaras", "preguntases"],
            "él / ella / usted": ["preguntara", "preguntase"],
            nosotros: ["preguntáramos", "preguntásemos"],
            vosotros: ["preguntarais", "preguntaseis"],
            "ellos / ustedes": ["preguntaran", "preguntasen"]
        }
    },

    {
        infinitive: "responder",
        forms: {
            yo: ["respondiera", "respondiese"],
            tú: ["respondieras", "respondieses"],
            "él / ella / usted": ["respondiera", "respondiese"],
            nosotros: ["respondiéramos", "respondiésemos"],
            vosotros: ["respondierais", "respondieseis"],
            "ellos / ustedes": ["respondieran", "respondiesen"]
        }
    },

    {
        infinitive: "comprender",
        forms: {
            yo: ["comprendiera", "comprendiese"],
            tú: ["comprendieras", "comprendieses"],
            "él / ella / usted": ["comprendiera", "comprendiese"],
            nosotros: ["comprendiéramos", "comprendiésemos"],
            vosotros: ["comprendierais", "comprendieseis"],
            "ellos / ustedes": ["comprendieran", "comprendiesen"]
        }
    },

    {
        infinitive: "deber",
        forms: {
            yo: ["debiera", "debiese"],
            tú: ["debieras", "debieses"],
            "él / ella / usted": ["debiera", "debiese"],
            nosotros: ["debiéramos", "debiésemos"],
            vosotros: ["debierais", "debieseis"],
            "ellos / ustedes": ["debieran", "debiesen"]
        }
    },

    {
        infinitive: "decidir",
        forms: {
            yo: ["decidiera", "decidiese"],
            tú: ["decidieras", "decidieses"],
            "él / ella / usted": ["decidiera", "decidiese"],
            nosotros: ["decidiéramos", "decidiésemos"],
            vosotros: ["decidierais", "decidieseis"],
            "ellos / ustedes": ["decidieran", "decidiesen"]
        }
    },

    {
        infinitive: "permitir",
        forms: {
            yo: ["permitiera", "permitiese"],
            tú: ["permitieras", "permitieses"],
            "él / ella / usted": ["permitiera", "permitiese"],
            nosotros: ["permitiéramos", "permitiésemos"],
            vosotros: ["permitierais", "permitieseis"],
            "ellos / ustedes": ["permitieran", "permitiesen"]
        }
    }

];

// ==============================
// SUBJUNTIVO — IMPERFECTO
// IRREGULARES
// ==============================

const subjunctiveImperfectIrregularVerbs = [

    {
        infinitive: "ser",
        forms: {
            yo: ["fuera", "fuese"],
            tú: ["fueras", "fueses"],
            "él / ella / usted": ["fuera", "fuese"],
            nosotros: ["fuéramos", "fuésemos"],
            vosotros: ["fuerais", "fueseis"],
            "ellos / ustedes": ["fueran", "fuesen"]
        }
    },

    {
        infinitive: "ir",
        forms: {
            yo: ["fuera", "fuese"],
            tú: ["fueras", "fueses"],
            "él / ella / usted": ["fuera", "fuese"],
            nosotros: ["fuéramos", "fuésemos"],
            vosotros: ["fuerais", "fueseis"],
            "ellos / ustedes": ["fueran", "fuesen"]
        }
    },

    {
        infinitive: "tener",
        forms: {
            yo: ["tuviera", "tuviese"],
            tú: ["tuvieras", "tuvieses"],
            "él / ella / usted": ["tuviera", "tuviese"],
            nosotros: ["tuviéramos", "tuviésemos"],
            vosotros: ["tuvierais", "tuvieseis"],
            "ellos / ustedes": ["tuvieran", "tuviesen"]
        }
    },

    {
        infinitive: "estar",
        forms: {
            yo: ["estuviera", "estuviese"],
            tú: ["estuvieras", "estuvieses"],
            "él / ella / usted": ["estuviera", "estuviese"],
            nosotros: ["estuviéramos", "estuviésemos"],
            vosotros: ["estuvierais", "estuvieseis"],
            "ellos / ustedes": ["estuvieran", "estuviesen"]
        }
    },

    {
        infinitive: "andar",
        forms: {
            yo: ["anduviera", "anduviese"],
            tú: ["anduvieras", "anduvieses"],
            "él / ella / usted": ["anduviera", "anduviese"],
            nosotros: ["anduviéramos", "anduviésemos"],
            vosotros: ["anduvierais", "anduvieseis"],
            "ellos / ustedes": ["anduvieran", "anduviesen"]
        }
    },

    {
        infinitive: "poder",
        forms: {
            yo: ["pudiera", "pudiese"],
            tú: ["pudieras", "pudieses"],
            "él / ella / usted": ["pudiera", "pudiese"],
            nosotros: ["pudiéramos", "pudiésemos"],
            vosotros: ["pudierais", "pudieseis"],
            "ellos / ustedes": ["pudieran", "pudiesen"]
        }
    },

    {
        infinitive: "poner",
        forms: {
            yo: ["pusiera", "pusiese"],
            tú: ["pusieras", "pusieses"],
            "él / ella / usted": ["pusiera", "pusiese"],
            nosotros: ["pusiéramos", "pusiésemos"],
            vosotros: ["pusierais", "pusieseis"],
            "ellos / ustedes": ["pusieran", "pusiesen"]
        }
    },

    {
        infinitive: "saber",
        forms: {
            yo: ["supiera", "supiese"],
            tú: ["supieras", "supieses"],
            "él / ella / usted": ["supiera", "supiese"],
            nosotros: ["supiéramos", "supiésemos"],
            vosotros: ["supierais", "supieseis"],
            "ellos / ustedes": ["supieran", "supiesen"]
        }
    },

    {
        infinitive: "querer",
        forms: {
            yo: ["quisiera", "quisiese"],
            tú: ["quisieras", "quisieses"],
            "él / ella / usted": ["quisiera", "quisiese"],
            nosotros: ["quisiéramos", "quisiésemos"],
            vosotros: ["quisierais", "quisieseis"],
            "ellos / ustedes": ["quisieran", "quisiesen"]
        }
    },

    {
        infinitive: "venir",
        forms: {
            yo: ["viniera", "viniese"],
            tú: ["vinieras", "vinieses"],
            "él / ella / usted": ["viniera", "viniese"],
            nosotros: ["viniéramos", "viniésemos"],
            vosotros: ["vinierais", "vinieseis"],
            "ellos / ustedes": ["vinieran", "viniesen"]
        }
    },

    {
        infinitive: "hacer",
        forms: {
            yo: ["hiciera", "hiciese"],
            tú: ["hicieras", "hicieses"],
            "él / ella / usted": ["hiciera", "hiciese"],
            nosotros: ["hiciéramos", "hiciésemos"],
            vosotros: ["hicierais", "hicieseis"],
            "ellos / ustedes": ["hicieran", "hiciesen"]
        }
    },

    {
        infinitive: "decir",
        forms: {
            yo: ["dijera", "dijese"],
            tú: ["dijeras", "dijeses"],
            "él / ella / usted": ["dijera", "dijese"],
            nosotros: ["dijéramos", "dijésemos"],
            vosotros: ["dijerais", "dijeseis"],
            "ellos / ustedes": ["dijeran", "dijesen"]
        }
    },

    {
        infinitive: "traer",
        forms: {
            yo: ["trajera", "trajese"],
            tú: ["trajeras", "trajeses"],
            "él / ella / usted": ["trajera", "trajese"],
            nosotros: ["trajéramos", "trajésemos"],
            vosotros: ["trajerais", "trajeseis"],
            "ellos / ustedes": ["trajeran", "trajesen"]
        }
    },

    {
        infinitive: "dormir",
        forms: {
            yo: ["durmiera", "durmiese"],
            tú: ["durmieras", "durmieses"],
            "él / ella / usted": ["durmiera", "durmiese"],
            nosotros: ["durmiéramos", "durmiésemos"],
            vosotros: ["durmierais", "durmieseis"],
            "ellos / ustedes": ["durmieran", "durmiesen"]
        }
    },

    {
        infinitive: "morir",
        forms: {
            yo: ["muriera", "muriese"],
            tú: ["murieras", "murieses"],
            "él / ella / usted": ["muriera", "muriese"],
            nosotros: ["muriéramos", "muriésemos"],
            vosotros: ["murierais", "murieseis"],
            "ellos / ustedes": ["murieran", "muriesen"]
        }
    },

    {
        infinitive: "pedir",
        forms: {
            yo: ["pidiera", "pidiese"],
            tú: ["pidieras", "pidieses"],
            "él / ella / usted": ["pidiera", "pidiese"],
            nosotros: ["pidiéramos", "pidiésemos"],
            vosotros: ["pidierais", "pidieseis"],
            "ellos / ustedes": ["pidieran", "pidiesen"]
        }
    },

    {
        infinitive: "sentir",
        forms: {
            yo: ["sintiera", "sintiese"],
            tú: ["sintieras", "sintieses"],
            "él / ella / usted": ["sintiera", "sintiese"],
            nosotros: ["sintiéramos", "sintiésemos"],
            vosotros: ["sintierais", "sintieseis"],
            "ellos / ustedes": ["sintieran", "sintiesen"]
        }
    },

    {
        infinitive: "preferir",
        forms: {
            yo: ["prefiriera", "prefiriese"],
            tú: ["prefirieras", "prefirieses"],
            "él / ella / usted": ["prefiriera", "prefiriese"],
            nosotros: ["prefiriéramos", "prefiriésemos"],
            vosotros: ["prefirierais", "prefirieseis"],
            "ellos / ustedes": ["prefirieran", "prefiriesen"]
        }
    },

    {
        infinitive: "leer",
        forms: {
            yo: ["leyera", "leyese"],
            tú: ["leyeras", "leyeses"],
            "él / ella / usted": ["leyera", "leyese"],
            nosotros: ["leyéramos", "leyésemos"],
            vosotros: ["leyerais", "leyeseis"],
            "ellos / ustedes": ["leyeran", "leyesen"]
        }
    },

    {
        infinitive: "oír",
        forms: {
            yo: ["oyera", "oyese"],
            tú: ["oyeras", "oyeses"],
            "él / ella / usted": ["oyera", "oyese"],
            nosotros: ["oyéramos", "oyésemos"],
            vosotros: ["oyerais", "oyeseis"],
            "ellos / ustedes": ["oyeran", "oyesen"]
        }
    },

    {
        infinitive: "caer",
        forms: {
            yo: ["cayera", "cayese"],
            tú: ["cayeras", "cayeses"],
            "él / ella / usted": ["cayera", "cayese"],
            nosotros: ["cayéramos", "cayésemos"],
            vosotros: ["cayerais", "cayeseis"],
            "ellos / ustedes": ["cayeran", "cayesen"]
        }
    }

];

// ==============================
// IMPERATIVO — AFIRMATIVO
// REGULARES
// ==============================

const imperativeAffirmativeRegularVerbs = [

    // -AR

    {
        infinitive: "hablar",
        forms: {
            tú: "habla",
            usted: "hable",
            nosotros: "hablemos",
            vosotros: "hablad",
            ustedes: "hablen"
        }
    },

    {
        infinitive: "trabajar",
        forms: {
            tú: "trabaja",
            usted: "trabaje",
            nosotros: "trabajemos",
            vosotros: "trabajad",
            ustedes: "trabajen"
        }
    },

    {
        infinitive: "estudiar",
        forms: {
            tú: "estudia",
            usted: "estudie",
            nosotros: "estudiemos",
            vosotros: "estudiad",
            ustedes: "estudien"
        }
    },

    {
        infinitive: "comprar",
        forms: {
            tú: "compra",
            usted: "compre",
            nosotros: "compremos",
            vosotros: "comprad",
            ustedes: "compren"
        }
    },

    {
        infinitive: "viajar",
        forms: {
            tú: "viaja",
            usted: "viaje",
            nosotros: "viajemos",
            vosotros: "viajad",
            ustedes: "viajen"
        }
    },

    {
        infinitive: "escuchar",
        forms: {
            tú: "escucha",
            usted: "escuche",
            nosotros: "escuchemos",
            vosotros: "escuchad",
            ustedes: "escuchen"
        }
    },

    {
        infinitive: "mirar",
        forms: {
            tú: "mira",
            usted: "mire",
            nosotros: "miremos",
            vosotros: "mirad",
            ustedes: "miren"
        }
    },

    {
        infinitive: "ayudar",
        forms: {
            tú: "ayuda",
            usted: "ayude",
            nosotros: "ayudemos",
            vosotros: "ayudad",
            ustedes: "ayuden"
        }
    },

    // -ER

    {
        infinitive: "comer",
        forms: {
            tú: "come",
            usted: "coma",
            nosotros: "comamos",
            vosotros: "comed",
            ustedes: "coman"
        }
    },

    {
        infinitive: "beber",
        forms: {
            tú: "bebe",
            usted: "beba",
            nosotros: "bebamos",
            vosotros: "bebed",
            ustedes: "beban"
        }
    },

    {
        infinitive: "aprender",
        forms: {
            tú: "aprende",
            usted: "aprenda",
            nosotros: "aprendamos",
            vosotros: "aprended",
            ustedes: "aprendan"
        }
    },

    {
        infinitive: "vender",
        forms: {
            tú: "vende",
            usted: "venda",
            nosotros: "vendamos",
            vosotros: "vended",
            ustedes: "vendan"
        }
    },

    {
        infinitive: "correr",
        forms: {
            tú: "corre",
            usted: "corra",
            nosotros: "corramos",
            vosotros: "corred",
            ustedes: "corran"
        }
    },

    {
        infinitive: "responder",
        forms: {
            tú: "responde",
            usted: "responda",
            nosotros: "respondamos",
            vosotros: "responded",
            ustedes: "respondan"
        }
    },

    // -IR

    {
        infinitive: "vivir",
        forms: {
            tú: "vive",
            usted: "viva",
            nosotros: "vivamos",
            vosotros: "vivid",
            ustedes: "vivan"
        }
    },

    {
        infinitive: "escribir",
        forms: {
            tú: "escribe",
            usted: "escriba",
            nosotros: "escribamos",
            vosotros: "escribid",
            ustedes: "escriban"
        }
    },

    {
        infinitive: "abrir",
        forms: {
            tú: "abre",
            usted: "abra",
            nosotros: "abramos",
            vosotros: "abrid",
            ustedes: "abran"
        }
    },

    {
        infinitive: "recibir",
        forms: {
            tú: "recibe",
            usted: "reciba",
            nosotros: "recibamos",
            vosotros: "recibid",
            ustedes: "reciban"
        }
    },

    {
        infinitive: "decidir",
        forms: {
            tú: "decide",
            usted: "decida",
            nosotros: "decidamos",
            vosotros: "decidid",
            ustedes: "decidan"
        }
    },

    {
        infinitive: "subir",
        forms: {
            tú: "sube",
            usted: "suba",
            nosotros: "subamos",
            vosotros: "subid",
            ustedes: "suban"
        }
    }

];
// ==============================
// IMPERATIVO — AFIRMATIVO
// IRREGULARES
// ==============================

const imperativeAffirmativeIrregularVerbs = [

    {
        infinitive: "decir",
        forms: {
            tú: "di",
            usted: "diga",
            nosotros: "digamos",
            vosotros: "decid",
            ustedes: "digan"
        }
    },

    {
        infinitive: "hacer",
        forms: {
            tú: "haz",
            usted: "haga",
            nosotros: "hagamos",
            vosotros: "haced",
            ustedes: "hagan"
        }
    },

    {
        infinitive: "ir",
        forms: {
            tú: "ve",
            usted: "vaya",
            nosotros: "vayamos",
            vosotros: "id",
            ustedes: "vayan"
        }
    },

    {
        infinitive: "poner",
        forms: {
            tú: "pon",
            usted: "ponga",
            nosotros: "pongamos",
            vosotros: "poned",
            ustedes: "pongan"
        }
    },

    {
        infinitive: "salir",
        forms: {
            tú: "sal",
            usted: "salga",
            nosotros: "salgamos",
            vosotros: "salid",
            ustedes: "salgan"
        }
    },

    {
        infinitive: "ser",
        forms: {
            tú: "sé",
            usted: "sea",
            nosotros: "seamos",
            vosotros: "sed",
            ustedes: "sean"
        }
    },

    {
        infinitive: "tener",
        forms: {
            tú: "ten",
            usted: "tenga",
            nosotros: "tengamos",
            vosotros: "tened",
            ustedes: "tengan"
        }
    },

    {
        infinitive: "venir",
        forms: {
            tú: "ven",
            usted: "venga",
            nosotros: "vengamos",
            vosotros: "venid",
            ustedes: "vengan"
        }
    },

    {
        infinitive: "empezar",
        forms: {
            tú: "empieza",
            usted: "empiece",
            nosotros: "empecemos",
            vosotros: "empezad",
            ustedes: "empiecen"
        }
    },

    {
        infinitive: "jugar",
        forms: {
            tú: "juega",
            usted: "juegue",
            nosotros: "juguemos",
            vosotros: "jugad",
            ustedes: "jueguen"
        }
    },

    {
        infinitive: "conocer",
        forms: {
            tú: "conoce",
            usted: "conozca",
            nosotros: "conozcamos",
            vosotros: "conoced",
            ustedes: "conozcan"
        }
    },

    {
        infinitive: "traer",
        forms: {
            tú: "trae",
            usted: "traiga",
            nosotros: "traigamos",
            vosotros: "traed",
            ustedes: "traigan"
        }
    },

    {
        infinitive: "oír",
        forms: {
            tú: "oye",
            usted: "oiga",
            nosotros: "oigamos",
            vosotros: "oíd",
            ustedes: "oigan"
        }
    },
    {
    infinitive: "jugar",
    forms: {
        tú: "juega",
        usted: "juegue",
        nosotros: "juguemos",
        vosotros: "jugad",
        ustedes: "jueguen"
    }
},

];
// ==============================
// IMPERATIVO — AFIRMATIVO
// CAMBIO VOCÁLICO
// ==============================

const imperativeAffirmativeStemVerbs = [

    // e → ie

    {
        infinitive: "pensar",
        change: "e-ie",
        forms: {
            tú: "piensa",
            usted: "piense",
            nosotros: "pensemos",
            vosotros: "pensad",
            ustedes: "piensen"
        }
    },
    {
    infinitive: "empezar",
    change: "e-ie",
    forms: {
        tú: "empieza",
        usted: "empiece",
        nosotros: "empecemos",
        vosotros: "empezad",
        ustedes: "empiecen"
    }
},

    {
        infinitive: "cerrar",
        change: "e-ie",
        forms: {
            tú: "cierra",
            usted: "cierre",
            nosotros: "cerremos",
            vosotros: "cerrad",
            ustedes: "cierren"
        }
    },

    {
        infinitive: "entender",
        change: "e-ie",
        forms: {
            tú: "entiende",
            usted: "entienda",
            nosotros: "entendamos",
            vosotros: "entended",
            ustedes: "entiendan"
        }
    },

    {
        infinitive: "querer",
        change: "e-ie",
        forms: {
            tú: "quiere",
            usted: "quiera",
            nosotros: "queramos",
            vosotros: "quered",
            ustedes: "quieran"
        }
    },

    {
        infinitive: "sentir",
        change: "e-ie",
        forms: {
            tú: "siente",
            usted: "sienta",
            nosotros: "sintamos",
            vosotros: "sentid",
            ustedes: "sientan"
        }
    },

    {
        infinitive: "preferir",
        change: "e-ie",
        forms: {
            tú: "prefiere",
            usted: "prefiera",
            nosotros: "prefiramos",
            vosotros: "preferid",
            ustedes: "prefieran"
        }
    },


    // o → ue

    {
        infinitive: "poder",
        change: "o-ue",
        forms: {
            tú: "puede",
            usted: "pueda",
            nosotros: "podamos",
            vosotros: "poded",
            ustedes: "puedan"
        }
    },

    {
        infinitive: "volver",
        change: "o-ue",
        forms: {
            tú: "vuelve",
            usted: "vuelva",
            nosotros: "volvamos",
            vosotros: "volved",
            ustedes: "vuelvan"
        }
    },

    {
        infinitive: "dormir",
        change: "o-ue",
        forms: {
            tú: "duerme",
            usted: "duerma",
            nosotros: "durmamos",
            vosotros: "dormid",
            ustedes: "duerman"
        }
    },

    {
        infinitive: "contar",
        change: "o-ue",
        forms: {
            tú: "cuenta",
            usted: "cuente",
            nosotros: "contemos",
            vosotros: "contad",
            ustedes: "cuenten"
        }
    },

    {
        infinitive: "recordar",
        change: "o-ue",
        forms: {
            tú: "recuerda",
            usted: "recuerde",
            nosotros: "recordemos",
            vosotros: "recordad",
            ustedes: "recuerden"
        }
    },


    // e → i

    {
        infinitive: "pedir",
        change: "e-i",
        forms: {
            tú: "pide",
            usted: "pida",
            nosotros: "pidamos",
            vosotros: "pedid",
            ustedes: "pidan"
        }
    },

    {
        infinitive: "repetir",
        change: "e-i",
        forms: {
            tú: "repite",
            usted: "repita",
            nosotros: "repitamos",
            vosotros: "repetid",
            ustedes: "repitan"
        }
    },

    {
        infinitive: "servir",
        change: "e-i",
        forms: {
            tú: "sirve",
            usted: "sirva",
            nosotros: "sirvamos",
            vosotros: "servid",
            ustedes: "sirvan"
        }
    }

];
const imperativeNegativeRegularVerbs = [

    {
        infinitive: "hablar",
        forms: {
            tú: "no hables",
            usted: "no hable",
            nosotros: "no hablemos",
            vosotros: "no habléis",
            ustedes: "no hablen"
        }
    },

    {
        infinitive: "trabajar",
        forms: {
            tú: "no trabajes",
            usted: "no trabaje",
            nosotros: "no trabajemos",
            vosotros: "no trabajéis",
            ustedes: "no trabajen"
        }
    },

    {
        infinitive: "estudiar",
        forms: {
            tú: "no estudies",
            usted: "no estudie",
            nosotros: "no estudiemos",
            vosotros: "no estudiéis",
            ustedes: "no estudien"
        }
    },

    {
        infinitive: "comprar",
        forms: {
            tú: "no compres",
            usted: "no compre",
            nosotros: "no compremos",
            vosotros: "no compréis",
            ustedes: "no compren"
        }
    },

    {
        infinitive: "viajar",
        forms: {
            tú: "no viajes",
            usted: "no viaje",
            nosotros: "no viajemos",
            vosotros: "no viajéis",
            ustedes: "no viajen"
        }
    },

    {
        infinitive: "escuchar",
        forms: {
            tú: "no escuches",
            usted: "no escuche",
            nosotros: "no escuchemos",
            vosotros: "no escuchéis",
            ustedes: "no escuchen"
        }
    },

    {
        infinitive: "mirar",
        forms: {
            tú: "no mires",
            usted: "no mire",
            nosotros: "no miremos",
            vosotros: "no miréis",
            ustedes: "no miren"
        }
    },

    {
        infinitive: "ayudar",
        forms: {
            tú: "no ayudes",
            usted: "no ayude",
            nosotros: "no ayudemos",
            vosotros: "no ayudéis",
            ustedes: "no ayuden"
        }
    },

    {
        infinitive: "comer",
        forms: {
            tú: "no comas",
            usted: "no coma",
            nosotros: "no comamos",
            vosotros: "no comáis",
            ustedes: "no coman"
        }
    },

    {
        infinitive: "beber",
        forms: {
            tú: "no bebas",
            usted: "no beba",
            nosotros: "no bebamos",
            vosotros: "no bebáis",
            ustedes: "no beban"
        }
    },

    {
        infinitive: "aprender",
        forms: {
            tú: "no aprendas",
            usted: "no aprenda",
            nosotros: "no aprendamos",
            vosotros: "no aprendáis",
            ustedes: "no aprendan"
        }
    },

    {
        infinitive: "vender",
        forms: {
            tú: "no vendas",
            usted: "no venda",
            nosotros: "no vendamos",
            vosotros: "no vendáis",
            ustedes: "no vendan"
        }
    },

    {
        infinitive: "correr",
        forms: {
            tú: "no corras",
            usted: "no corra",
            nosotros: "no corramos",
            vosotros: "no corráis",
            ustedes: "no corran"
        }
    },

    {
        infinitive: "responder",
        forms: {
            tú: "no respondas",
            usted: "no responda",
            nosotros: "no respondamos",
            vosotros: "no respondáis",
            ustedes: "no respondan"
        }
    },

    {
        infinitive: "vivir",
        forms: {
            tú: "no vivas",
            usted: "no viva",
            nosotros: "no vivamos",
            vosotros: "no viváis",
            ustedes: "no vivan"
        }
    },

    {
        infinitive: "escribir",
        forms: {
            tú: "no escribas",
            usted: "no escriba",
            nosotros: "no escribamos",
            vosotros: "no escribáis",
            ustedes: "no escriban"
        }
    },

    {
        infinitive: "abrir",
        forms: {
            tú: "no abras",
            usted: "no abra",
            nosotros: "no abramos",
            vosotros: "no abráis",
            ustedes: "no abran"
        }
    },

    {
        infinitive: "recibir",
        forms: {
            tú: "no recibas",
            usted: "no reciba",
            nosotros: "no recibamos",
            vosotros: "no recibáis",
            ustedes: "no reciban"
        }
    },

    {
        infinitive: "decidir",
        forms: {
            tú: "no decidas",
            usted: "no decida",
            nosotros: "no decidamos",
            vosotros: "no decidáis",
            ustedes: "no decidan"
        }
    },

    {
        infinitive: "subir",
        forms: {
            tú: "no subas",
            usted: "no suba",
            nosotros: "no subamos",
            vosotros: "no subáis",
            ustedes: "no suban"
        }
    },
    {
    infinitive: "necesitar",
    forms: {
        tú: "no necesites",
        usted: "no necesite",
        nosotros: "no necesitemos",
        vosotros: "no necesitéis",
        ustedes: "no necesiten"
    }
},

{
    infinitive: "llevar",
    forms: {
        tú: "no lleves",
        usted: "no lleve",
        nosotros: "no llevemos",
        vosotros: "no llevéis",
        ustedes: "no lleven"
    }
},

{
    infinitive: "preguntar",
    forms: {
        tú: "no preguntes",
        usted: "no pregunte",
        nosotros: "no preguntemos",
        vosotros: "no preguntéis",
        ustedes: "no pregunten"
    }
},

{
    infinitive: "caminar",
    forms: {
        tú: "no camines",
        usted: "no camine",
        nosotros: "no caminemos",
        vosotros: "no caminéis",
        ustedes: "no caminen"
    }
},

{
    infinitive: "cantar",
    forms: {
        tú: "no cantes",
        usted: "no cante",
        nosotros: "no cantemos",
        vosotros: "no cantéis",
        ustedes: "no canten"
    }
},

{
    infinitive: "preparar",
    forms: {
        tú: "no prepares",
        usted: "no prepare",
        nosotros: "no preparemos",
        vosotros: "no preparéis",
        ustedes: "no preparen"
    }
},

{
    infinitive: "terminar",
    forms: {
        tú: "no termines",
        usted: "no termine",
        nosotros: "no terminemos",
        vosotros: "no terminéis",
        ustedes: "no terminen"
    }
},

{
    infinitive: "deber",
    forms: {
        tú: "no debas",
        usted: "no deba",
        nosotros: "no debamos",
        vosotros: "no debáis",
        ustedes: "no deban"
    }
},

{
    infinitive: "comprender",
    forms: {
        tú: "no comprendas",
        usted: "no comprenda",
        nosotros: "no comprendamos",
        vosotros: "no comprendáis",
        ustedes: "no comprendan"
    }
},

{
    infinitive: "prometer",
    forms: {
        tú: "no prometas",
        usted: "no prometa",
        nosotros: "no prometamos",
        vosotros: "no prometáis",
        ustedes: "no prometan"
    }
},

{
    infinitive: "permitir",
    forms: {
        tú: "no permitas",
        usted: "no permita",
        nosotros: "no permitamos",
        vosotros: "no permitáis",
        ustedes: "no permitan"
    }
},

{
    infinitive: "compartir",
    forms: {
        tú: "no compartas",
        usted: "no comparta",
        nosotros: "no compartamos",
        vosotros: "no compartáis",
        ustedes: "no compartan"
    }
},

{
    infinitive: "existir",
    forms: {
        tú: "no existas",
        usted: "no exista",
        nosotros: "no existamos",
        vosotros: "no existáis",
        ustedes: "no existan"
    }
},

{
    infinitive: "insistir",
    forms: {
        tú: "no insistas",
        usted: "no insista",
        nosotros: "no insistamos",
        vosotros: "no insistáis",
        ustedes: "no insistan"
    }
},

{
    infinitive: "discutir",
    forms: {
        tú: "no discutas",
        usted: "no discuta",
        nosotros: "no discutamos",
        vosotros: "no discutáis",
        ustedes: "no discutan"
    }
}

];
// ==============================
// IMPERATIVO NEGATIVO
// CAMBIO VOCÁLICO
// ==============================

const imperativeNegativeStemVerbs = [

    // e → ie

    {
        infinitive: "pensar",
        change: "e-ie",
        forms: {
            tú: "no pienses",
            usted: "no piense",
            nosotros: "no pensemos",
            vosotros: "no penséis",
            ustedes: "no piensen"
        }
    },

    {
        infinitive: "cerrar",
        change: "e-ie",
        forms: {
            tú: "no cierres",
            usted: "no cierre",
            nosotros: "no cerremos",
            vosotros: "no cerréis",
            ustedes: "no cierren"
        }
    },

    {
        infinitive: "entender",
        change: "e-ie",
        forms: {
            tú: "no entiendas",
            usted: "no entienda",
            nosotros: "no entendamos",
            vosotros: "no entendáis",
            ustedes: "no entiendan"
        }
    },

    {
        infinitive: "querer",
        change: "e-ie",
        forms: {
            tú: "no quieras",
            usted: "no quiera",
            nosotros: "no queramos",
            vosotros: "no queráis",
            ustedes: "no quieran"
        }
    },

    {
        infinitive: "perder",
        change: "e-ie",
        forms: {
            tú: "no pierdas",
            usted: "no pierda",
            nosotros: "no perdamos",
            vosotros: "no perdáis",
            ustedes: "no pierdan"
        }
    },

    {
        infinitive: "empezar",
        change: "e-ie",
        forms: {
            tú: "no empieces",
            usted: "no empiece",
            nosotros: "no empecemos",
            vosotros: "no empecéis",
            ustedes: "no empiecen"
        }
    },

    {
        infinitive: "sentir",
        change: "e-ie",
        forms: {
            tú: "no sientas",
            usted: "no sienta",
            nosotros: "no sintamos",
            vosotros: "no sintáis",
            ustedes: "no sientan"
        }
    },

    {
        infinitive: "preferir",
        change: "e-ie",
        forms: {
            tú: "no prefieras",
            usted: "no prefiera",
            nosotros: "no prefiramos",
            vosotros: "no prefiráis",
            ustedes: "no prefieran"
        }
    },


    // o → ue

    {
        infinitive: "poder",
        change: "o-ue",
        forms: {
            tú: "no puedas",
            usted: "no pueda",
            nosotros: "no podamos",
            vosotros: "no podáis",
            ustedes: "no puedan"
        }
    },

    {
        infinitive: "volver",
        change: "o-ue",
        forms: {
            tú: "no vuelvas",
            usted: "no vuelva",
            nosotros: "no volvamos",
            vosotros: "no volváis",
            ustedes: "no vuelvan"
        }
    },

    {
        infinitive: "dormir",
        change: "o-ue",
        forms: {
            tú: "no duermas",
            usted: "no duerma",
            nosotros: "no durmamos",
            vosotros: "no durmáis",
            ustedes: "no duerman"
        }
    },

    {
        infinitive: "contar",
        change: "o-ue",
        forms: {
            tú: "no cuentes",
            usted: "no cuente",
            nosotros: "no contemos",
            vosotros: "no contéis",
            ustedes: "no cuenten"
        }
    },

    {
        infinitive: "recordar",
        change: "o-ue",
        forms: {
            tú: "no recuerdes",
            usted: "no recuerde",
            nosotros: "no recordemos",
            vosotros: "no recordéis",
            ustedes: "no recuerden"
        }
    },

    {
        infinitive: "encontrar",
        change: "o-ue",
        forms: {
            tú: "no encuentres",
            usted: "no encuentre",
            nosotros: "no encontremos",
            vosotros: "no encontréis",
            ustedes: "no encuentren"
        }
    },


    // e → i

    {
        infinitive: "pedir",
        change: "e-i",
        forms: {
            tú: "no pidas",
            usted: "no pida",
            nosotros: "no pidamos",
            vosotros: "no pidáis",
            ustedes: "no pidan"
        }
    },

    {
        infinitive: "repetir",
        change: "e-i",
        forms: {
            tú: "no repitas",
            usted: "no repita",
            nosotros: "no repitamos",
            vosotros: "no repitáis",
            ustedes: "no repitan"
        }
    },

    {
        infinitive: "servir",
        change: "e-i",
        forms: {
            tú: "no sirvas",
            usted: "no sirva",
            nosotros: "no sirvamos",
            vosotros: "no sirváis",
            ustedes: "no sirvan"
        }
    },

    {
        infinitive: "vestir",
        change: "e-i",
        forms: {
            tú: "no vistas",
            usted: "no vista",
            nosotros: "no vistamos",
            vosotros: "no vistáis",
            ustedes: "no vistan"
        }
    },

    {
        infinitive: "medir",
        change: "e-i",
        forms: {
            tú: "no midas",
            usted: "no mida",
            nosotros: "no midamos",
            vosotros: "no midáis",
            ustedes: "no midan"
        }
    },

    {
        infinitive: "competir",
        change: "e-i",
        forms: {
            tú: "no compitas",
            usted: "no compita",
            nosotros: "no compitamos",
            vosotros: "no compitáis",
            ustedes: "no compitan"
        }
    }

];


// ==============================
// IMPERATIVO NEGATIVO
// IRREGULARES
// ==============================

const imperativeNegativeIrregularVerbs = [

    {
        infinitive: "decir",
        forms: {
            tú: "no digas",
            usted: "no diga",
            nosotros: "no digamos",
            vosotros: "no digáis",
            ustedes: "no digan"
        }
    },

    {
        infinitive: "hacer",
        forms: {
            tú: "no hagas",
            usted: "no haga",
            nosotros: "no hagamos",
            vosotros: "no hagáis",
            ustedes: "no hagan"
        }
    },

    {
        infinitive: "ir",
        forms: {
            tú: "no vayas",
            usted: "no vaya",
            nosotros: "no vayamos",
            vosotros: "no vayáis",
            ustedes: "no vayan"
        }
    },

    {
        infinitive: "poner",
        forms: {
            tú: "no pongas",
            usted: "no ponga",
            nosotros: "no pongamos",
            vosotros: "no pongáis",
            ustedes: "no pongan"
        }
    },

    {
        infinitive: "salir",
        forms: {
            tú: "no salgas",
            usted: "no salga",
            nosotros: "no salgamos",
            vosotros: "no salgáis",
            ustedes: "no salgan"
        }
    },

    {
        infinitive: "ser",
        forms: {
            tú: "no seas",
            usted: "no sea",
            nosotros: "no seamos",
            vosotros: "no seáis",
            ustedes: "no sean"
        }
    },

    {
        infinitive: "tener",
        forms: {
            tú: "no tengas",
            usted: "no tenga",
            nosotros: "no tengamos",
            vosotros: "no tengáis",
            ustedes: "no tengan"
        }
    },

    {
        infinitive: "venir",
        forms: {
            tú: "no vengas",
            usted: "no venga",
            nosotros: "no vengamos",
            vosotros: "no vengáis",
            ustedes: "no vengan"
        }
    },

    {
        infinitive: "conocer",
        forms: {
            tú: "no conozcas",
            usted: "no conozca",
            nosotros: "no conozcamos",
            vosotros: "no conozcáis",
            ustedes: "no conozcan"
        }
    },

    {
        infinitive: "traer",
        forms: {
            tú: "no traigas",
            usted: "no traiga",
            nosotros: "no traigamos",
            vosotros: "no traigáis",
            ustedes: "no traigan"
        }
    },

    {
        infinitive: "oír",
        forms: {
            tú: "no oigas",
            usted: "no oiga",
            nosotros: "no oigamos",
            vosotros: "no oigáis",
            ustedes: "no oigan"
        }
    },

    {
        infinitive: "jugar",
        forms: {
            tú: "no juegues",
            usted: "no juegue",
            nosotros: "no juguemos",
            vosotros: "no juguéis",
            ustedes: "no jueguen"
        }
    }

];

// ==============================
// GERUNDIO — REGULARES
// ==============================

const gerundRegularVerbs = [

    { infinitive: "hablar", answer: "hablando" },
    { infinitive: "trabajar", answer: "trabajando" },
    { infinitive: "estudiar", answer: "estudiando" },
    { infinitive: "comprar", answer: "comprando" },
    { infinitive: "viajar", answer: "viajando" },
    { infinitive: "escuchar", answer: "escuchando" },
    { infinitive: "mirar", answer: "mirando" },
    { infinitive: "ayudar", answer: "ayudando" },
    { infinitive: "preguntar", answer: "preguntando" },
    { infinitive: "caminar", answer: "caminando" },

    { infinitive: "comer", answer: "comiendo" },
    { infinitive: "beber", answer: "bebiendo" },
    { infinitive: "aprender", answer: "aprendiendo" },
    { infinitive: "vender", answer: "vendiendo" },
    { infinitive: "correr", answer: "corriendo" },
    { infinitive: "responder", answer: "respondiendo" },
    { infinitive: "comprender", answer: "comprendiendo" },

    { infinitive: "vivir", answer: "viviendo" },
    { infinitive: "escribir", answer: "escribiendo" },
    { infinitive: "abrir", answer: "abriendo" },
    { infinitive: "recibir", answer: "recibiendo" },
    { infinitive: "decidir", answer: "decidiendo" },
    { infinitive: "subir", answer: "subiendo" },
    { infinitive: "permitir", answer: "permitiendo" },
    { infinitive: "compartir", answer: "compartiendo" }

];


// ==============================
// GERUNDIO — IRREGULARES
// ==============================

const gerundIrregularVerbs = [

    { infinitive: "dormir", answer: "durmiendo" },
    { infinitive: "morir", answer: "muriendo" },

    { infinitive: "pedir", answer: "pidiendo" },
    { infinitive: "repetir", answer: "repitiendo" },
    { infinitive: "servir", answer: "sirviendo" },
    { infinitive: "vestir", answer: "vistiendo" },
    { infinitive: "sentir", answer: "sintiendo" },
    { infinitive: "preferir", answer: "prefiriendo" },
    { infinitive: "seguir", answer: "siguiendo" },
    { infinitive: "decir", answer: "diciendo" },

    { infinitive: "leer", answer: "leyendo" },
    { infinitive: "oír", answer: "oyendo" },
    { infinitive: "caer", answer: "cayendo" },
    { infinitive: "traer", answer: "trayendo" },
    { infinitive: "creer", answer: "creyendo" },
    { infinitive: "construir", answer: "construyendo" },
    { infinitive: "huir", answer: "huyendo" },
    { infinitive: "ir", answer: "yendo" }

];


// PARTICIPIO — forma invariable usada con haber (-ado / -ido).
const participleRegularVerbs = [
    {
        "infinitive": "hablar",
        "answer": "hablado"
    },
    {
        "infinitive": "trabajar",
        "answer": "trabajado"
    },
    {
        "infinitive": "estudiar",
        "answer": "estudiado"
    },
    {
        "infinitive": "comprar",
        "answer": "comprado"
    },
    {
        "infinitive": "viajar",
        "answer": "viajado"
    },
    {
        "infinitive": "escuchar",
        "answer": "escuchado"
    },
    {
        "infinitive": "mirar",
        "answer": "mirado"
    },
    {
        "infinitive": "ayudar",
        "answer": "ayudado"
    },
    {
        "infinitive": "preguntar",
        "answer": "preguntado"
    },
    {
        "infinitive": "caminar",
        "answer": "caminado"
    },
    {
        "infinitive": "bailar",
        "answer": "bailado"
    },
    {
        "infinitive": "cantar",
        "answer": "cantado"
    },
    {
        "infinitive": "cocinar",
        "answer": "cocinado"
    },
    {
        "infinitive": "llamar",
        "answer": "llamado"
    },
    {
        "infinitive": "llegar",
        "answer": "llegado"
    },
    {
        "infinitive": "buscar",
        "answer": "buscado"
    },
    {
        "infinitive": "jugar",
        "answer": "jugado"
    },
    {
        "infinitive": "empezar",
        "answer": "empezado"
    },
    {
        "infinitive": "pensar",
        "answer": "pensado"
    },
    {
        "infinitive": "encontrar",
        "answer": "encontrado"
    },
    {
        "infinitive": "comer",
        "answer": "comido"
    },
    {
        "infinitive": "beber",
        "answer": "bebido"
    },
    {
        "infinitive": "aprender",
        "answer": "aprendido"
    },
    {
        "infinitive": "vender",
        "answer": "vendido"
    },
    {
        "infinitive": "correr",
        "answer": "corrido"
    },
    {
        "infinitive": "responder",
        "answer": "respondido"
    },
    {
        "infinitive": "comprender",
        "answer": "comprendido"
    },
    {
        "infinitive": "tener",
        "answer": "tenido"
    },
    {
        "infinitive": "poder",
        "answer": "podido"
    },
    {
        "infinitive": "querer",
        "answer": "querido"
    },
    {
        "infinitive": "saber",
        "answer": "sabido"
    },
    {
        "infinitive": "conocer",
        "answer": "conocido"
    },
    {
        "infinitive": "vivir",
        "answer": "vivido"
    },
    {
        "infinitive": "recibir",
        "answer": "recibido"
    },
    {
        "infinitive": "decidir",
        "answer": "decidido"
    },
    {
        "infinitive": "subir",
        "answer": "subido"
    },
    {
        "infinitive": "permitir",
        "answer": "permitido"
    },
    {
        "infinitive": "compartir",
        "answer": "compartido"
    },
    {
        "infinitive": "dormir",
        "answer": "dormido"
    },
    {
        "infinitive": "pedir",
        "answer": "pedido"
    },
    {
        "infinitive": "sentir",
        "answer": "sentido"
    },
    {
        "infinitive": "seguir",
        "answer": "seguido"
    },
    {
        "infinitive": "ir",
        "answer": "ido"
    },
    {
        "infinitive": "ser",
        "answer": "sido"
    },
    {
        "infinitive": "leer",
        "answer": "leído"
    },
    {
        "infinitive": "creer",
        "answer": "creído"
    },
    {
        "infinitive": "traer",
        "answer": "traído"
    },
    {
        "infinitive": "caer",
        "answer": "caído"
    },
    {
        "infinitive": "oír",
        "answer": "oído"
    },
    {
        "infinitive": "construir",
        "answer": "construido"
    }
];

// Incluye verbos con dos participios válidos.
const participleIrregularVerbs = [
    {
        "infinitive": "abrir",
        "answer": "abierto"
    },
    {
        "infinitive": "cubrir",
        "answer": "cubierto"
    },
    {
        "infinitive": "decir",
        "answer": "dicho"
    },
    {
        "infinitive": "escribir",
        "answer": "escrito"
    },
    {
        "infinitive": "hacer",
        "answer": "hecho"
    },
    {
        "infinitive": "morir",
        "answer": "muerto"
    },
    {
        "infinitive": "poner",
        "answer": "puesto"
    },
    {
        "infinitive": "resolver",
        "answer": "resuelto"
    },
    {
        "infinitive": "romper",
        "answer": "roto"
    },
    {
        "infinitive": "ver",
        "answer": "visto"
    },
    {
        "infinitive": "volver",
        "answer": "vuelto"
    },
    {
        "infinitive": "descubrir",
        "answer": "descubierto"
    },
    {
        "infinitive": "describir",
        "answer": "descrito"
    },
    {
        "infinitive": "deshacer",
        "answer": "deshecho"
    },
    {
        "infinitive": "devolver",
        "answer": "devuelto"
    },
    {
        "infinitive": "envolver",
        "answer": "envuelto"
    },
    {
        "infinitive": "componer",
        "answer": "compuesto"
    },
    {
        "infinitive": "proponer",
        "answer": "propuesto"
    },
    {
        "infinitive": "suponer",
        "answer": "supuesto"
    },
    {
        "infinitive": "disponer",
        "answer": "dispuesto"
    },
    {
        "infinitive": "prever",
        "answer": "previsto"
    },
    {
        "infinitive": "rehacer",
        "answer": "rehecho"
    },
    {
        "infinitive": "imprimir",
        "answer": [
            "impreso",
            "imprimido"
        ]
    },
    {
        "infinitive": "freír",
        "answer": [
            "frito",
            "freído"
        ]
    },
    {
        "infinitive": "proveer",
        "answer": [
            "provisto",
            "proveído"
        ]
    }
];

const persons = [
    "yo",
    "tú",
    "él / ella / usted",
    "nosotros",
    "vosotros",
    "ellos / ustedes"
];
const imperativePersons = [
    "tú",
    "usted",
    "nosotros",
    "vosotros",
    "ustedes"
];


// ==============================
// ELEMENTS
// ==============================

const typeButtons =
    document.querySelectorAll(".type-options button");
    const modeButtons =
    document.querySelectorAll(".mode-options button");

let selectedMode = "indicativo";
    const tenseButtons =
    document.querySelectorAll(".tense-options button");

const startButton =
    document.querySelector(".start-button");

const setup =
    document.querySelector("#setup");

const trainer =
    document.querySelector("#trainer");

const results =
    document.querySelector("#results");

const verbElement =
    document.querySelector(".verb");

const personElement =
    document.querySelector(".person");

const answerInput =
    document.querySelector(".answer-input");

const checkButton =
    document.querySelector(".check-button");

const feedback =
    document.querySelector(".answer-feedback");

const questionCounter =
    document.querySelector(".question-counter");

const progressFill =
    document.querySelector(".progress-fill");

const sessionType =
    document.querySelector(".session-type");
    const retryButton =
    document.querySelector(".retry-button");

const newSessionButton =
    document.querySelector(".new-session-button");
    const stemOptions =
    document.querySelector(".stem-options");

const stemButtons =
    document.querySelectorAll(".stem-buttons button");

    const amountButtons =
    document.querySelectorAll(".amount-buttons button");

    const exitButton =
    document.querySelector(".exit-button");




// ==============================
// SESSION DATA
// ==============================

let selectedType = null;
let selectedTense = "presente";

let questions = [];

let currentQuestion = 0;

let score = 0;

let mistakes = [];
let answerHistory = [];

let answerChecked = false;
let selectedStemChange = null;
let selectedAmount = 20;

// ==============================
// CHOOSE TENSE
// ==============================
function updateTenseOptions() {

    const tenseOptions =
        document.querySelector(".tense-options");

    if (selectedMode === "indicativo") {

        tenseOptions.innerHTML = `
            <button data-value="presente">Presente</button>
            <button data-value="indefinido">Indefinido</button>
            <button data-value="imperfecto">Imperfecto</button>
            <button data-value="futuro">Futuro</button>
            <button data-value="condicional">Condicional</button>
        `;

    } else if (selectedMode === "subjuntivo") {

        tenseOptions.innerHTML = `
            <button data-value="subjuntivo-presente">
                Presente
            </button>

            <button data-value="subjuntivo-imperfecto">
                Imperfecto
            </button>
        `;

    } else if (selectedMode === "imperativo") {

        tenseOptions.innerHTML = `
            <button data-value="imperativo-afirmativo">
                Afirmativo
            </button>

            <button data-value="imperativo-negativo">
                Negativo
            </button>
        `;

    } else if (selectedMode === "no-personales") {

        tenseOptions.innerHTML = `
            <button data-value="gerundio">
                Gerundio
            </button>

            <button data-value="participio">
                Participio
            </button>
        `;
    }

    selectedTense = null;
    selectedType = null;

    startButton.disabled = true;
}
modeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        modeButtons.forEach(function(otherButton) {
            otherButton.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedMode = button.dataset.value;

        updateTenseOptions();
    });
});
function updateTypeOptions() {




    const regularButton =
        document.querySelector(
            '.type-options button[data-value="regular"]'
        );

    const stemButton =
        document.querySelector(
            '.type-options button[data-value="stem"]'
        );

    const orthographicButton =
        document.querySelector(
            '.type-options button[data-value="orthographic"]'
        );
         const irSpecialButton =
        document.querySelector(
            '.stem-buttons button[data-change="ir-special"]'
        );

    // Спецгруппа -IR только для Subjuntivo Presente
if (selectedTense === "subjuntivo-presente") {
    irSpecialButton.classList.remove("hidden");
} else {
    irSpecialButton.classList.add("hidden");
}

    const irregularButton =
        document.querySelector(
            '.type-options button[data-value="irregular"]'
        );

    const allButton =
        document.querySelector(
            '.type-options button[data-value="all"]'
        );


    // PRESente

    if (selectedTense === "presente") {

        regularButton.style.display = "";
        stemButton.style.display = "";
        orthographicButton.style.display = "";
        irregularButton.style.display = "";
        allButton.style.display = "";

        regularButton.innerHTML =
            "Regulares<small>-ar, -er, -ir</small>";

        stemButton.innerHTML =
            "Cambio vocálico<small>e→ie, o→ue, e→i</small>";

        orthographicButton.innerHTML =
            "Cambios ortográficos<small>-zco, -jo, -go, -y</small>";

        irregularButton.innerHTML =
            "Irregulares<small>tener, hacer, venir...</small>";

        allButton.innerHTML =
            "Todo<small>modo mixto</small>";
    }


    // INDEFINIDO

    if (selectedTense === "indefinido") {

        regularButton.style.display = "";
        irregularButton.style.display = "";
        allButton.style.display = "";

        stemButton.style.display = "none";
        orthographicButton.style.display = "none";

        regularButton.innerHTML =
            "Regulares<small>hablé, comí, viví</small>";

        irregularButton.innerHTML =
            "Irregulares<small>busqué, pidió, tuve...</small>";

        allButton.innerHTML =
            "Todo<small>modo mixto</small>";
    }
// IMPERFECTO

if (selectedTense === "imperfecto") {

    regularButton.style.display = "";
    irregularButton.style.display = "";
    allButton.style.display = "";

    stemButton.style.display = "none";
    orthographicButton.style.display = "none";

    regularButton.innerHTML =
        "Regulares<small>hablaba, comía, vivía</small>";

    irregularButton.innerHTML =
        "Irregulares<small>era, iba, veía</small>";

    allButton.innerHTML =
        "Todo<small>modo mixto</small>";
}
// FUTURO

if (selectedTense === "futuro") {

    regularButton.style.display = "";
    irregularButton.style.display = "";
    allButton.style.display = "";

    stemButton.style.display = "none";
    orthographicButton.style.display = "none";

    regularButton.innerHTML =
        "Regulares<small>hablaré, comeré, viviré</small>";

    irregularButton.innerHTML =
        "Irregulares<small>tendré, podré, haré...</small>";

    allButton.innerHTML =
        "Todo<small>modo mixto</small>";
}


// CONDICIONAL

if (selectedTense === "condicional") {

    regularButton.style.display = "";
    irregularButton.style.display = "";
    allButton.style.display = "";

    stemButton.style.display = "none";
    orthographicButton.style.display = "none";

    regularButton.innerHTML =
        "Regulares<small>hablaría, comería, viviría</small>";

    irregularButton.innerHTML =
        "Irregulares<small>tendría, podría, haría...</small>";

    allButton.innerHTML =
        "Todo<small>modo mixto</small>";
}
// SUBJUNTIVO — PRESENTE

if (selectedTense === "subjuntivo-presente") {
irSpecialButton.style.display = "";
    regularButton.style.display = "";
    stemButton.style.display = "";
    orthographicButton.style.display = "";
    irregularButton.style.display = "";
    allButton.style.display = "";

    regularButton.innerHTML =
        "Regulares<small>hable, coma, viva</small>";

    stemButton.innerHTML =
        "Cambio vocálico<small>piense, duerma, pida</small>";

    orthographicButton.innerHTML =
        "Cambios ortográficos<small>busque, llegue, empiece...</small>";

    irregularButton.innerHTML =
        "Irregulares<small>sea, vaya, haya...</small>";

    allButton.innerHTML =
        "Todo<small>modo mixto</small>";
}
// SUBJUNTIVO — IMPERFECTO

if (selectedTense === "subjuntivo-imperfecto") {

    regularButton.style.display = "";
    stemButton.style.display = "none";
    orthographicButton.style.display = "none";
    irregularButton.style.display = "";
    allButton.style.display = "";

    regularButton.innerHTML =
        "Regulares<small>hablara / hablase</small>";

    irregularButton.innerHTML =
        "Irregulares<small>tuviera / tuviese, fuera / fuese...</small>";

    allButton.innerHTML =
        "Todo<small>modo mixto</small>";
}
// IMPERATIVO — AFIRMATIVO

if (selectedTense === "imperativo-afirmativo") {
   



    regularButton.style.display = "";
    stemButton.style.display = "";
    orthographicButton.style.display = "none";
    irregularButton.style.display = "";
    allButton.style.display = "";

    regularButton.innerHTML =
        "Regulares<small>habla, come, vive...</small>";

    stemButton.innerHTML =
        "Cambio vocálico<small>piensa, duerme, pide...</small>";

    irregularButton.innerHTML =
        "Irregulares<small>di, haz, ve, pon...</small>";

    allButton.innerHTML =
        "Todo<small>modo mixto</small>";
}
// IMPERATIVO — NEGATIVO

if (selectedTense === "imperativo-negativo") {

    regularButton.style.display = "";
    stemButton.style.display = "";
    orthographicButton.style.display = "none";
    irregularButton.style.display = "";
    allButton.style.display = "";

    regularButton.innerHTML =
        "Regulares<small>no hables, no comas, no vivas...</small>";

    stemButton.innerHTML =
        "Cambio vocálico<small>no pienses, no duermas, no pidas...</small>";

    irregularButton.innerHTML =
        "Irregulares<small>no digas, no hagas, no vayas...</small>";

    allButton.innerHTML =
        "Todo<small>modo mixto</small>";
}
// ==============================
// GERUNDIO
// ==============================

if (selectedTense === "gerundio") {

    regularButton.style.display = "";
    stemButton.style.display = "none";
    orthographicButton.style.display = "none";
    irregularButton.style.display = "";
    allButton.style.display = "";

    regularButton.innerHTML =
        "Regulares<small>hablando, comiendo, viviendo</small>";

    irregularButton.innerHTML =
        "Irregulares<small>durmiendo, pidiendo, leyendo...</small>";

    allButton.innerHTML =
        "Todo<small>modo mixto</small>";
}

// PARTICIPIO
if (selectedTense === "participio") {
    regularButton.style.display = "";
    irregularButton.style.display = "";
    allButton.style.display = "";
    stemButton.style.display = "none";
    orthographicButton.style.display = "none";
    regularButton.innerHTML = "Regulares<small>hablado, comido, vivido...</small>";
    irregularButton.innerHTML = "Irregulares<small>hecho, dicho, escrito...</small>";
    allButton.innerHTML = "Todo<small>modo mixto</small>";
}

    // Сбрасываем выбранную категорию
    // при смене времени

typeButtons.forEach
    (function(button) {
        button.classList.remove("selected");
    });

    selectedType = null;
    selectedStemChange = null;

    stemOptions.classList.add("hidden");

    stemButtons.forEach(function(button) {
        button.classList.remove("selected");
    });

    startButton.disabled = true;
}
const tenseOptions =
    document.querySelector(".tense-options");

tenseOptions.addEventListener("click", function(event) {

    const button = event.target.closest("button");

    if (!button || button.disabled) {
        return;
    }

    tenseOptions
        .querySelectorAll("button")
        .forEach(function(otherButton) {
            otherButton.classList.remove("selected");
        });

    button.classList.add("selected");

    selectedTense = button.dataset.value;

    updateTypeOptions();
});

// ==============================
// CHOOSE TYPE
// ==============================

typeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        typeButtons.forEach(function(otherButton) {
            otherButton.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedType = button.dataset.value;


        // CAMBIO VOCÁLICO
        // Только у него есть подменю

        if (selectedType === "stem") {

            stemOptions.classList.remove("hidden");

            selectedStemChange = null;

            stemButtons.forEach(function(stemButton) {
                stemButton.classList.remove("selected");
            });
            const irSpecialButton =
    document.querySelector('[data-change="ir-special"]');
    

if (selectedTense === "subjuntivo-presente") {
    irSpecialButton.classList.remove("hidden");
} else {
    irSpecialButton.classList.add("hidden");
}

            startButton.disabled = true;

        } else {

            // У всех остальных категорий
            // подменю не нужно

            stemOptions.classList.add("hidden");

            selectedStemChange = null;

            stemButtons.forEach(function(stemButton) {
                stemButton.classList.remove("selected");
            });

            startButton.disabled = false;
        }

    });

});


// ==============================
// CHOOSE STEM CHANGE
// ==============================

stemButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        stemButtons.forEach(function(otherButton) {
            otherButton.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedStemChange =
            button.dataset.change;

        startButton.disabled = false;

    });

});


// ==============================
// CHOOSE AMOUNT
// ==============================

amountButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        amountButtons.forEach(function(otherButton) {
            otherButton.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedAmount =
            Number(button.dataset.amount);

        startButton.textContent =
            "EMPEZAR · " +
            selectedAmount +
            " VERBOS";

    });

});

exitButton.addEventListener("click", function() {

    trainer.classList.add("hidden");
    results.classList.add("hidden");
    setup.classList.remove("hidden");

});

// ==============================
// START
// ==============================
startButton.addEventListener("click", function() {
    // ==========================
    // PRESENTE
    // ==========================

    if (selectedTense === "presente") {

        if (selectedType === "regular") {

            questions =
                generateQuestions(verbs);

        } else if (selectedType === "stem") {

            let selectedVerbs;

            if (selectedStemChange === "all") {

                selectedVerbs = stemChangingVerbs;

            } else {

                selectedVerbs =
                    stemChangingVerbs.filter(function(verb) {
                        return verb.change === selectedStemChange;
                    });
            }

            questions =
                generateQuestions(selectedVerbs);

        } else if (selectedType === "orthographic") {

            questions =
                generateQuestions(orthographicVerbs);

        } else if (selectedType === "irregular") {

            questions =
                generateQuestions(irregularVerbs);

        } else if (selectedType === "all") {

            const allPresentVerbs = [
                ...verbs,
                ...stemChangingVerbs,
                ...orthographicVerbs,
                ...irregularVerbs
            ];

            questions =
                generateQuestions(allPresentVerbs);

        } else {

            return;
        }


    // ==========================
    // INDEFINIDO
    // ==========================

    } else if (selectedTense === "indefinido") {

        if (selectedType === "regular") {

            questions =
                generateQuestions(
                    preteriteRegularVerbs
                );

        } else if (selectedType === "irregular") {

            questions =
                generateQuestions(
                    preteriteIrregularVerbs
                );

        } else if (selectedType === "all") {

            const allPreteriteVerbs = [
                ...preteriteRegularVerbs,
                ...preteriteIrregularVerbs
            ];

            questions =
                generateQuestions(
                    allPreteriteVerbs
                );

        } else {

            return;
        }


    // ==========================
    // IMPERFECTO
    // ==========================

    } else if (selectedTense === "imperfecto") {

        if (selectedType === "regular") {

            questions =
                generateQuestions(
                    imperfectRegularVerbs
                );

        } else if (selectedType === "irregular") {

            questions =
                generateQuestions(
                    imperfectIrregularVerbs
                );

        } else if (selectedType === "all") {

            const allImperfectVerbs = [
                ...imperfectRegularVerbs,
                ...imperfectIrregularVerbs
            ];

            questions =
                generateQuestions(
                    allImperfectVerbs
                );

        } else {

            return;
        }


    // ==========================
    // FUTURO
    // ==========================

    } else if (selectedTense === "futuro") {

        if (selectedType === "regular") {

            questions =
                generateQuestions(
                    futureRegularVerbs
                );

        } else if (selectedType === "irregular") {

            questions =
                generateQuestions(
                    futureIrregularVerbs
                );

        } else if (selectedType === "all") {

            const allFutureVerbs = [
                ...futureRegularVerbs,
                ...futureIrregularVerbs
            ];

            questions =
                generateQuestions(
                    allFutureVerbs
                );

        } else {

            return;
        }


    // ==========================
    // CONDICIONAL
    // ==========================

    } else if (selectedTense === "condicional") {

        if (selectedType === "regular") {

            questions =
                generateQuestions(
                    conditionalRegularVerbs
                );

        } else if (selectedType === "irregular") {

            questions =
                generateQuestions(
                    conditionalIrregularVerbs
                );

        } else if (selectedType === "all") {

            const allConditionalVerbs = [
                ...conditionalRegularVerbs,
                ...conditionalIrregularVerbs
            ];

            questions =
                generateQuestions(
                    allConditionalVerbs
                );

        } else {

            return;
        }

// ==========================
// SUBJUNTIVO — PRESENTE
// ==========================

} else if (selectedTense === "subjuntivo-presente") {

    if (selectedType === "regular") {

        questions =
            generateQuestions(
                subjunctivePresentRegularVerbs
            );

    } else if (selectedType === "stem") {

        let selectedVerbs;

        if (selectedStemChange === "all") {

            selectedVerbs =
                subjunctivePresentStemVerbs;

        } else {

            selectedVerbs =
                subjunctivePresentStemVerbs.filter(function(verb) {
                    return verb.change === selectedStemChange;
                });
        }

        questions =
            generateQuestions(selectedVerbs);

    } else if (selectedType === "orthographic") {

        questions =
            generateQuestions(
                subjunctivePresentOrthographicVerbs
            );

    } else if (selectedType === "irregular") {

        questions =
            generateQuestions(
                subjunctivePresentIrregularVerbs
            );

    } else if (selectedType === "all") {

        const allSubjunctivePresentVerbs = [
            ...subjunctivePresentRegularVerbs,
            ...subjunctivePresentStemVerbs,
            ...subjunctivePresentOrthographicVerbs,
            ...subjunctivePresentIrregularVerbs
        ];

        questions =
            generateQuestions(
                allSubjunctivePresentVerbs
            );

    } else {

        return;
    }
    } else if (selectedTense === "subjuntivo-imperfecto") {

    if (selectedType === "regular") {

        questions =
            generateQuestions(
                subjunctiveImperfectRegularVerbs
            );

    } else if (selectedType === "irregular") {

        questions =
            generateQuestions(
                subjunctiveImperfectIrregularVerbs
            );

    } else if (selectedType === "all") {

        const allSubjunctiveImperfectVerbs = [
            ...subjunctiveImperfectRegularVerbs,
            ...subjunctiveImperfectIrregularVerbs
        ];

        questions =
            generateQuestions(
                allSubjunctiveImperfectVerbs
            );

    } else {
        return;
    }
   } else if (selectedTense === "imperativo-afirmativo") {

    // ==========================
    // IMPERATIVO AFIRMATIVO
    // ==========================

    if (selectedType === "regular") {

        questions =
            generateImperativeQuestions(
                imperativeAffirmativeRegularVerbs
            );

    } else if (selectedType === "stem") {

        let selectedVerbs;

        if (selectedStemChange === "all") {

            selectedVerbs =
                imperativeAffirmativeStemVerbs;

        } else {

            selectedVerbs =
                imperativeAffirmativeStemVerbs.filter(function(verb) {
                    return verb.change === selectedStemChange;
                });
        }

        questions =
            generateImperativeQuestions(
                selectedVerbs
            );

    } else if (selectedType === "irregular") {

        questions =
            generateImperativeQuestions(
                imperativeAffirmativeIrregularVerbs
            );

    } else if (selectedType === "all") {

        const allImperativeAffirmativeVerbs = [
            ...imperativeAffirmativeRegularVerbs,
            ...imperativeAffirmativeStemVerbs,
            ...imperativeAffirmativeIrregularVerbs
        ];

        questions =
            generateImperativeQuestions(
                allImperativeAffirmativeVerbs
            );

    } else {

        return;
    }

} else if (selectedTense === "imperativo-negativo") {

    // ==========================
    // IMPERATIVO NEGATIVO
    // ==========================

    if (selectedType === "regular") {

    questions =
        generateImperativeQuestions(
            imperativeNegativeRegularVerbs
        );


} else if (selectedType === "stem") {

    let selectedVerbs;

    if (selectedStemChange === "all") {

        selectedVerbs =
            imperativeNegativeStemVerbs;

    } else {

        selectedVerbs =
            imperativeNegativeStemVerbs.filter(function(verb) {
                return verb.change === selectedStemChange;
            });
    }

    questions =
        generateImperativeQuestions(
            selectedVerbs
        );


} else if (selectedType === "irregular") {

    questions =
        generateImperativeQuestions(
            imperativeNegativeIrregularVerbs
        );


} else if (selectedType === "all") {

    const allImperativeNegativeVerbs = [
        ...imperativeNegativeRegularVerbs,
        ...imperativeNegativeStemVerbs,
        ...imperativeNegativeIrregularVerbs
    ];

    questions =
        generateImperativeQuestions(
            allImperativeNegativeVerbs
        );

    } else {
        return;
    }

} else if (selectedTense === "gerundio") {

    // ==========================
    // GERUNDIO
    // ==========================

    if (selectedType === "regular") {

        questions =
            generateNonPersonalQuestions(
                gerundRegularVerbs
            );

    } else if (selectedType === "irregular") {

        questions =
            generateNonPersonalQuestions(
                gerundIrregularVerbs
            );

    } else if (selectedType === "all") {

        const allGerundVerbs = [
            ...gerundRegularVerbs,
            ...gerundIrregularVerbs
        ];

        questions =
            generateNonPersonalQuestions(
                allGerundVerbs
            );


} else {

    return;
}

} else if (selectedTense === "participio") {
    let selectedVerbs;
    if (selectedType === "regular") {
        selectedVerbs = participleRegularVerbs;
    } else if (selectedType === "irregular") {
        selectedVerbs = participleIrregularVerbs;
    } else if (selectedType === "all") {
        selectedVerbs = [...participleRegularVerbs, ...participleIrregularVerbs];
    } else {
        return;
    }
    questions = generateNonPersonalQuestions(selectedVerbs);

    // ==========================
    // UNKNOWN TENSE
    // ==========================

} else {

    return;
}

// ==========================
// RESET
// ==========================

    if (questions.length === 0) {
        return;
    }

    currentQuestion = 0;
    score = 0;
    mistakes = [];
    answerHistory = [];
    answerChecked = false;


    // ==========================
    // SHOW TRAINER
    // ==========================

    setup.classList.add("hidden");
    results.classList.add("hidden");
    trainer.classList.remove("hidden");


    // ==========================
    // SESSION NAME
    // ==========================

    const tenseLabels = {
        presente: "PRESENTE", indefinido: "INDEFINIDO", imperfecto: "IMPERFECTO",
        futuro: "FUTURO", condicional: "CONDICIONAL",
        "subjuntivo-presente": "SUBJUNTIVO · PRESENTE",
        "subjuntivo-imperfecto": "SUBJUNTIVO · IMPERFECTO",
        "imperativo-afirmativo": "IMPERATIVO · AFIRMATIVO",
        "imperativo-negativo": "IMPERATIVO · NEGATIVO", gerundio: "GERUNDIO", participio: "PARTICIPIO"
    };
    const typeLabels = {
        regular: "REGULARES", stem: "CAMBIO VOCÁLICO",
        orthographic: "CAMBIOS ORTOGRÁFICOS", irregular: "IRREGULARES", all: "TODO"
    };
    const categoryLabel = selectedType === "stem" && selectedStemChange !== "all"
        ? selectedStemChange.replace("-", " → ").toUpperCase()
        : typeLabels[selectedType];
    sessionType.textContent = tenseLabels[selectedTense] + " · " + categoryLabel;

    showQuestion();

});

// ==============================
// GENERATE 20 QUESTIONS
// ==============================

// ==============================
// GENERATE QUESTIONS
// ==============================

function generateQuestions(verbBank) {

    const allPossibleQuestions = [];

    verbBank.forEach(function(verb) {

        persons.forEach(function(person) {

            allPossibleQuestions.push({
                infinitive: verb.infinitive,
                person: person,
                answer: verb.forms[person]
            });

        });

    });

    for (let i = allPossibleQuestions.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [
            allPossibleQuestions[i],
            allPossibleQuestions[j]
        ] = [
            allPossibleQuestions[j],
            allPossibleQuestions[i]
        ];
    }

    return allPossibleQuestions.slice(0, selectedAmount);
}


// ==============================
// GENERATE IMPERATIVE QUESTIONS
// ==============================

function generateImperativeQuestions(verbBank) {

    const allPossibleQuestions = [];

    verbBank.forEach(function(verb) {

        imperativePersons.forEach(function(person) {

            allPossibleQuestions.push({
                infinitive: verb.infinitive,
                person: person,
                answer: verb.forms[person]
            });

        });

    });

    for (let i = allPossibleQuestions.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [
            allPossibleQuestions[i],
            allPossibleQuestions[j]
        ] = [
            allPossibleQuestions[j],
            allPossibleQuestions[i]
        ];
    }

    return allPossibleQuestions.slice(0, selectedAmount);
}
// ==============================
// NON-PERSONAL FORMS GENERATOR
// ==============================

function generateNonPersonalQuestions(verbBank) {

    const allPossibleQuestions =
        verbBank.map(function(verb) {

            return {
                infinitive: verb.infinitive,
                person: selectedTense === "participio" ? "Participio · he …" : "",
                answer: verb.answer
            };

        });

    for (
        let i = allPossibleQuestions.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            allPossibleQuestions[i],
            allPossibleQuestions[j]
        ] = [
            allPossibleQuestions[j],
            allPossibleQuestions[i]
        ];
    }

    return allPossibleQuestions.slice(
        0,
        selectedAmount
    );
}

// ==============================
// SHOW QUESTION
// ==============================

function showQuestion() {

    const question =
        questions[currentQuestion];

    answerChecked = false;

    verbElement.textContent =
        question.infinitive.toUpperCase();

    personElement.textContent =
        question.person;

    questionCounter.textContent =
    String(currentQuestion + 1).padStart(2, "0") +
    " / " +
    questions.length;

progressFill.style.width =
    ((currentQuestion + 1) / questions.length) * 100 + "%";

    answerInput.value = "";
   answerInput.focus();
answerInput.disabled = false;
checkButton.disabled = false;

feedback.textContent = "";

    checkButton.textContent =
        "COMPROBAR";

    answerInput.focus();

}


// ==============================
// CHECK / NEXT
// ==============================

checkButton.addEventListener("click", function() {

    if (!answerChecked) {
        checkAnswer();
    } else {
        nextQuestion();
    }

});


// ENTER ALSO WORKS

answerInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        if (!answerChecked) {
            checkAnswer();
        } else {
            nextQuestion();
        }

    }

});


// ==============================
// CHECK ANSWER
// ==============================

function checkAnswer
() {

    const userAnswer =
        answerInput.value.trim().toLowerCase();

    if (userAnswer === "") {
        return;
    }

    const question =
        questions[currentQuestion];
        const correctAnswers =
    Array.isArray(question.answer)
        ? question.answer
        : [question.answer];

const isCorrect =
    correctAnswers.some(function(answer) {
        return normalize(userAnswer) === normalize(answer);
    });
    const correctAnswerText =
    correctAnswers.join(" / ");

answerHistory.push({
    number: currentQuestion + 1,
    infinitive: question.infinitive,
    person: question.person,
    userAnswer: userAnswer,
    correctAnswer: correctAnswerText,
    correct: isCorrect
});

    answerChecked = true;
    answerInput.disabled = true;

    if (isCorrect) {

        score++;

        feedback.textContent =
            "✓ ¡Correcto!";

        feedback.className =
            "answer-feedback correct";

    } else {

        feedback.innerHTML =
    "✕ " +
    userAnswer +
    "<br>✓ " +
    correctAnswerText;

        feedback.className =
            "answer-feedback wrong";

        mistakes.push({
            infinitive: question.infinitive,
            person: question.person,
            answer: question.answer,
            userAnswer: userAnswer
        });

    }

    checkButton.textContent =
    currentQuestion === questions.length - 1
        ? "VER RESULTADOS"
        : "SIGUIENTE";

}


// ==============================
// NEXT
// ==============================

function nextQuestion() {

    currentQuestion++;

   if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();
        

    }

}


// ==============================
// NORMALIZE
// ==============================

function normalize(text) {

    return text
        .toLowerCase()
        .trim();

}


// ==============================
// RESULTS
// ==============================

function showResults() {

    trainer.classList.add("hidden");
    results.classList.remove("hidden");

    // SCORE
    document.querySelector(
        ".final-score"
    ).textContent = score;

    // TOTAL QUESTIONS
    document.querySelector(
        ".final-total"
    ).textContent = questions.length;

    // ACCURACY
    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    document.querySelector(
        ".accuracy"
    ).textContent =
        percentage + "% de precisión";


    // RETRY BUTTON
    if (mistakes.length === 0) {

        retryButton.classList.add("hidden");

    } else {

        retryButton.classList.remove("hidden");

    }

}

// ==============================
// ANSWER HISTORY
// ==============================

const answersButton =
    document.querySelector(".answers-button");

const answersHistory =
    document.querySelector(".answers-history");

answersButton.addEventListener("click", function() {

    const isHidden =
        answersHistory.classList.contains("hidden");

    if (isHidden) {

        answersHistory.innerHTML = "";

        answerHistory.forEach(function(item) {

            const row =
                document.createElement("div");

            row.classList.add("answer-row");

            if (item.correct) {
                row.classList.add("answer-correct");
            } else {
                row.classList.add("answer-wrong");
            }

            row.innerHTML = `
                <span class="answer-number">
                    ${String(item.number).padStart(2, "0")}
                </span>

                <div class="answer-details">
                    <strong>
                        ${item.infinitive} · ${item.person}
                    </strong>

                    <span>
                        Tu respuesta:
                        <b>${item.userAnswer}</b>
                    </span>

                    ${
                        item.correct
                            ? `<span class="answer-status">✓ Correcto</span>`
                            : `<span class="answer-status">
                                   ✕ Correcta: <b>${item.correctAnswer}</b>
                               </span>`
                    }
                </div>
            `;

            answersHistory.appendChild(row);
        });

        answersHistory.classList.remove("hidden");

        answersButton.textContent =
            "OCULTAR RESPUESTAS";

    } else {

        answersHistory.classList.add("hidden");

        answersButton.textContent =
            "VER MIS RESPUESTAS";
    }

});
// ==============================
// RETRY MISTAKES
// ==============================

retryButton.addEventListener("click", function() {

    if (mistakes.length === 0) {
        return;
    }

    questions = mistakes.map(function(item) {
        return {
            infinitive: item.infinitive,
            person: item.person,
            answer: item.answer
        };
    });

    currentQuestion = 0;
    score = 0;

    // очищаем историю новой попытки
    mistakes = [];
    answerHistory = [];

    results.classList.add("hidden");
    trainer.classList.remove("hidden");

    answersHistory.classList.add("hidden");

    answersButton.textContent =
        "VER MIS RESPUESTAS";

    sessionType.textContent =
        "REPASO · MIS ERRORES";

    showQuestion();
});
// ==============================
// NEW SESSION
// ==============================

newSessionButton.addEventListener("click", function() {

    questions = [];
    currentQuestion = 0;
    score = 0;
    mistakes = [];
    answerHistory = [];
    answerChecked = false;

    selectedType = null;
    selectedStemChange = null;

stemOptions.classList.add("hidden");

stemButtons.forEach(function(button) {
    button.classList.remove("selected");
});

    results.classList.add("hidden");
    trainer.classList.add("hidden");
    setup.classList.remove("hidden");

    answersHistory.classList.add("hidden");

    answersButton.textContent =
        "VER MIS RESPUESTAS";
typeButtons.forEach
    (function(button) {
        button.classList.remove("selected");
    });

    startButton.disabled = true;

    answerInput.value = "";
    feedback.textContent = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});