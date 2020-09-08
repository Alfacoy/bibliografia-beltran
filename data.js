const data = {
  catedras: [
    {
      name: "Álgebra",
      slides: [],
      complements: [],
      books: [],
      optionalBooks: [],
    },
    {
      name: "Sistemas y Organizaciones",
      slides: [
        {
          name: "Curso de ingreso - Clase 1",
          url: "/docs/slides/siso/CIClase1.pdf",
        },
        {
          name: "Curso de ingreso - Clase 2",
          url: "/docs/slides/siso/CIClase2.pdf",
        },
        {
          name: "Teoría General Sistemas",
          url: "/docs/slides/siso/TeoriaGralSistemas.pdf",
        },
        {
          name: "Tipos de usuarios",
          url: "/docs/slides/siso/SISOTipoUsuarios.pdf",
        },
        {
          name: "Ciclo de vida",
          url: "/docs/slides/siso/SISOCicloVida.pdf",
        },
        {
          name: "Entrevistas",
          url: "/docs/slides/siso/SISOEntrevistas.pdf",
        },
      ],
      complements: [],
      books: [
        {
          name: "Análisis y Diseño Estructurado",
          url: "/docs/books/siso/AnalisisyDisenoEstructuradoModernoYourdon.pdf",
        },
      ],
      optionalBooks: [
        {
          name: "Sistemas de información gerencial",
          url: "/docs/optional/siso/sistemasDeInformacionGerencial.pdf",
        },
        {
          name: "Analisis y diseño de sistemas",
          url: "/docs/optional/siso/analisisYdiseñoDeSistemas.pdf",
        },
        {
          name: "Sistemas de información para los negocios",
          url: "/docs/optional/siso/sistemasDeInformacionParaNegocios.pdf",
        },
      ],
    },
    {
      name: "Algoritmos y estructuras de datos",
      slides: [
        {
          name: "Algoritmos de programación: Introducción",
          url: "/docs/slides/aled/algoritmoProgramacionIntro.pdf",
        },
        {
          name: "Algoritmos de programación: Pseudocódigo (1)",
          url: "/docs/slides/aled/algoritmoProgramacionPseudo_1.pdf",
        },
        {
          name: "Algoritmos de programación: Pseudocódigo (2)",
          url: "/docs/slides/aled/algoritmoProgramacionPseudo_2.pdf",
        },
        {
          name: "Método o esquema de resolución",
          url: "/docs/slides/aled/metodoOEsquema.pdf",
        },
        {
          name: "Introducción a C",
          url: "/docs/slides/aled/introduccion_C.pdf",
        },
        {
          name: "Operadores",
          url: "/docs/slides/aled/operadores.pdf",
        },
        {
          name: "Equivalencias pseudocódigo y C - primera parte",
          url: "/docs/slides/aled/equivalencias_pseudocodigo_uno.pdf",
        },
        {
          name: "Funciones de texto",
          url: "/docs/slides/aled/funciones_texto.pdf",
        },
        {
          name: "Equivalencias pseudocódigo y C - segunda parte",
          url: "/docs/slides/aled/equivalencias_pseudocodigo_dos.pdf",
        },
        {
          name: "Depuración de programas",
          url: "/docs/slides/aled/depuracion.pdf",
        },
        {
          name: "Subalgoritmos",
          url: "/docs/slides/aled/subalgoritmos.pdf",
        },
        {
          name: "Arreglos unidimencionales",
          url: "/docs/slides/aled/arreglos_unidimencionales.pdf",
        },
      ],
      complements: [],
      books: [],
      optionalBooks: [],
    },
    {
      name: "Arquitectura de computadoras",
      slides: [
        {
          name: "Definiciones varias",
          url: "/docs/slides/arco/definicionesVarias.pdf",
        },
      ],
      complements: [],
      books: [],
      optionalBooks: [],
    },
    {
      name: "Análisis Matemático",
      slides: [
        {
          name: "Números enteros, racionales y reales.",
          url: "/docs/slides/anmat/clase1.docx",
        },
      ],
      complements: [],
      books: [],
      optionalBooks: [],
    },
    {
      name: "Inglés Técnico",
      slides: [],
      complements: [],
      books: [
        {
          name: "English for Information Technology",
          url: "/docs/books/in/informationTecnology.pdf",
        },
        {
          name: "Grammar practice booklet 1",
          url: "/docs/books/in/grammarPracticeBooklet1C.pdf",
        },
        {
          name: "Grammar practice booklet 2",
          url: "/docs/books/in/grammarPracticeBooklet2C.pdf",
        },
      ],
      optionalBooks: [],
    },
    {
      name: "Ciencia, Tecnología y Sociedad",
      slides: [],
      complements: [
        {
          name: "Ciencia y tecnología en la sociedad",
          url: "/docs/complement/ctso/CTSINTRO.pdf",
        },
        {
          name: "El concepto de Tecnología",
          url: "/docs/complement/ctso/CTSINTRO.pdf",
        },
        {
          name: "La construcción social de la bicicleta",
          url: "/docs/complement/ctso/bicicleta.pdf",
        },
        {
          name:
            "Efectos de la Tecnología: el modelo consolidado y su impacto económico",
          url: "/docs/complement/ctso/efectosTecnologia.pdf",
        },
        {
          name: "Preguntas articulo Natalia Zuazo",
          url: "/docs/complement/ctso/nataliaZuazo.docx",
        },
        {
          name: "El empleo estable en peligro",
          url: "/docs/complement/ctso/empleoEstablePeligro.pdf",
        },
        {
          name:
            "Inédita protesta de trabajadores chinos contra lasjornadas laborales extenuantes",
          url: "/docs/complement/ctso/protestaTrabajadoresChinos.pdf",
        },
        {
          name: "A merced del algoritmo",
          url: "/docs/complement/ctso/mercedAlgoritmo.pdf",
        },
        {
          name: "El precariado",
          url: "/docs/complement/ctso/precariado.pdf",
        },
        {
          name: "La guerra de las plataformas (1)",
          url: "/docs/complement/ctso/guerraDePlataformas_1.pdf",
        },
        {
          name: "La guerra de las plataformas (2)",
          url: "/docs/complement/ctso/guerraDePlataformas_2.pdf",
        },
        {
          name: "La guerra de las plataformas (3)",
          url: "/docs/complement/ctso/guerraDePlataformas_3.pdf",
        },
        {
          name:
            "Tecnología, Política y Sociedad: de la Ciencia y Tecnología a la Tecnociencia",
          url: "/docs/complement/ctso/TicSocControlPolitica.pdf",
        },
        {
          name: "Industria 4.0: la transformación digital de la industria",
          url: "/docs/complement/ctso/industria4dot0.pdf",
        },
      ],
      books: [
        {
          name: "Ciencia, Tecnología y Sociedad: una aproximación conceptual",
          url: "/docs/books/ctso/CTS.pdf",
        },
        {
          name:
            "Manual de tecnologías abiertas para la gestión de organizaciones de la Economía Social y Solidaria",
          url: "/docs/books/ctso/manualWeb.pdf",
        },
        {
          name: "Textos escogidos",
          url: "/docs/books/ctso/textosEscogidos.pdf",
        },
        {
          name: "La cultura de la conectividad",
          url: "/docs/books/ctso/culturaConectividad.pdf",
        },
        {
          name: "Acepto las condiciones",
          url: "/docs/books/ctso/aceptoCondiciones.pdf",
        },
        {
          name: "La obra de arte en la época de su reproductibilidad técnica",
          url: "/docs/books/ctso/textoPardoBenjamin.pdf",
        },
        {
          name: "Software libre para una sociedad libre",
          url: "/docs/books/ctso/freeSoftware.pdf",
        },
      ],

      optionalBooks: [],
    },
    {
      name: "Prácticas Profesionalizantes",
      slides: [
        {
          name: "Modelo de capas",
          url: "/docs/slides/pp/ppModeloDeCapas.pdf",
        },
        {
          name: "Arquitectura cliente servidor",
          url: "/docs/slides/pp/ppArqCliSer.pdf",
        },
      ],
      complements: [],
      books: [],
      optionalBooks: [],
    },
  ],
};

export default data;
