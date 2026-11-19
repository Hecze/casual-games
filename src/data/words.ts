// Palabras para "El impostor".
//
// Qué hace buena a una palabra (criterios con los que se eligió cada una):
//  1. Todos la conocen: cero riesgo de "¿qué es eso?".
//  2. Tiene VARIOS ÁNGULOS: doble sentido, jerga peruana, o se puede ver de
//     formas opuestas. Así las pistas de los demás no la delatan de una y el
//     impostor puede colarse con una pista ambigua.
//  3. Genera POLÉMICA u opinión: las pistas salen con chiste ("bendición",
//     "castigo") y el debate se pone bueno.
//  4. Nada de palabras con una sola asociación obvia (p. ej. "Papa a la
//     huancaína", "Machu Picchu", "Lomo saltado"): la primera pista la regala.
//  5. Nada que pueda terminar en pelea de verdad: sin políticos con nombre
//     propio, tragedias recientes, crimen organizado ni temas raciales.
//  6. El doble sentido nunca puede ser sexual.
//
// Se evaluaron ~600 candidatas. Se quedaron solo las de los dos niveles más
// altos. Algunas descartadas y por qué:
//  - Una sola asociación: Papa a la huancaína, Ají de gallina, Lomo saltado,
//    Machu Picchu, Cusco, Líneas de Nazca, Proyector, Libreta de notas,
//    Recibo de luz, Captura de pantalla, Power bank, Tottus, Wong, Real Plaza,
//    Mazamorra morada, Turrón de Doña Pepa, Toy Story, Star Wars, Minecraft,
//    Pokémon, Spider-Man, Harry Potter, Shrek, Dragon Ball.
//  - Muy fáciles de adivinar con una pista: Estadio Nacional, Plaza de Armas,
//    Huacachina, Máncora, Biblioteca, Fotocopiadora, Mochila, Resaltador.
//  - Demasiado delicadas para una reunión: nombres de políticos, Tren de
//    Aragua, extorsión, minería ilegal, migración.
//  - Demasiado abstractas (pistas imposibles): Amor, Felicidad, Religión,
//    Amistad, Poder, Algoritmo.
//
// Cada palabra lleva al lado, en un comentario, sus ángulos (solo para quien
// edite la lista; no se envían al celular).

/** Nivel 1: doble sentido fuerte o polémica asegurada. */
const TOP: string[] = [
  // --- Doble sentido ---
  'Papa', // la de freír · el Papa León XIV, que vivió en Chiclayo
  'Llama', // animal andino · fuego · "te llama"
  'Caries', // la de los dientes · el gato del grupo
  'Banco', // plata · asiento del parque · banco de peces
  'Gato', // mascota · herramienta del auto · tres en raya · #
  'Cola', // fila · rabo · gaseosa · pegamento
  'Pila', // batería · montón · "ponte pilas"
  'Hoja', // árbol · papel · hoja de coca · cuchilla
  'Planta', // vegetal · planta del pie · fábrica · piso
  'Carta', // naipe · menú · carta de amor
  'Red', // pesca · vóley · internet · redes sociales
  'Ratón', // animal · mouse
  'Virus', // enfermedad · computadora · pandemia
  'Corona', // rey · cerveza · coronavirus
  'Sirena', // ser del mar · ambulancia
  'Batería', // celular · instrumento · batería de cocina
  'Tarjeta', // crédito · roja o amarilla · cumpleaños · Metropolitano
  'Cadena', // joya · bicicleta · cadena de WhatsApp · cadena de tiendas
  'Llave', // puerta · llave inglesa · llave de lucha
  'Sol', // astro · moneda peruana
  'Estrella', // cielo · famoso · estrella de mar · estrella fugaz
  'Cometa', // cielo · juguete que se vuela
  'Ola', // mar · ola de calor · ola en el estadio · "hola"
  'Mate', // bebida · matemáticas · jaque mate · cabeza
  'Coca', // hoja sagrada · Coca-Cola · lo prohibido
  'Taco', // comida mexicana · tacón · billar
  'Piña', // fruta · mala suerte · pizza con piña
  'Mango', // fruta · mango de la sartén · persona guapa
  'Coco', // fruta · cabeza · el cuco · la película
  'Naranja', // fruta · color · media naranja
  'Manzana', // fruta · Apple · Adán y Eva · Newton · Blancanieves
  'Taza', // de café · del baño
  'Plancha', // ropa · "qué plancha" · ejercicio · a la plancha
  'Polo', // prenda · Polo Norte · Marco Polo · deporte a caballo
  'Llanta', // rueda · los rollitos de la barriga
  'Codo', // brazo · tacaño
  'Lengua', // boca · idioma · lengua larga (chismoso)
  'Ojo', // cuerpo · ¡ojo! · ojo del huracán · mal de ojo
  'Mano', // cuerpo · ayuda · falta en el fútbol · mano de Dios
  'Muñeca', // juguete · parte del brazo
  'Ombligo', // panza · Cusco, "ombligo del mundo" · "se cree el ombligo"
  'Riñón', // órgano · "cuesta un riñón"
  'Piedra', // roca · cálculo renal · piedra, papel o tijera
  'Plata', // metal · dinero
  'Mina', // minería · lápiz · explosivo
  'Rosa', // flor · color · Santa Rosa de Lima
  'Hongo', // seta · infección · alucinógeno · nube atómica
  'León', // animal · Papa León XIV · signo Leo
  'Tigre', // animal · Gareca · leche de tigre
  'Pulga', // insecto · Messi
  'Sapo', // animal · soplón
  'Rata', // animal · tacaño · ladrón
  'Burro', // animal · persona bruta · juego de cartas
  'Serpiente', // animal · traidor · Adán y Eva
  'Conejo', // Pascua · Bad Bunny · truco de mago
  'Paloma', // paz · "rata con alas" · nombre
  'Murciélago', // animal · Batman · origen del COVID
  'Perro', // mascota · infiel · hot dog
  'Gallo', // animal · pelea de gallos · gallo al cantar · gallito de las rocas
  'Violín', // instrumento · el tercero que acompaña a la pareja · olor a axila
  'Carpa', // camping · circo · pez
  'Pista', // calle · pista de baile · la pista que se da en este juego
  'Puente', // estructura · feriado largo · puente dental
  'Metro', // tren · unidad de medida
  'Tráfico', // autos · de drogas · de influencias
  'Final', // examen final · final de fútbol · final de serie
  'Copa', // trofeo · de vino · Copa América
  'Penal', // fútbol · derecho penal · cárcel
  'Clásico', // U vs Alianza · Real vs Barça · música clásica · auto clásico
  'Cristal', // vidrio · Sporting Cristal · cerveza
  'Universitario', // club · estudiante
  'Victoria', // triunfo · distrito de Alianza · nombre
  'Lima', // ciudad · fruta · lima de uñas
  'Comas', // distrito · signo de puntuación
  'Lince', // distrito · felino
  'Ventanilla', // distrito · ventanilla del banco o del carro
  'Independencia', // distrito · 28 de julio · vivir solo
  'Asia', // continente · playas del sur
  'Amazonas', // río · Amazon · guerreras
  'Titicaca', // lago · "titi" y "caca"
  'China', // país · Chancay · moneda de 50 céntimos · naranja china
  'Piloto', // avión · Fórmula 1 · capítulo piloto
  'Reina', // monarca · ajedrez · abeja · reina de belleza
  'Rey', // monarca · ajedrez · naipe · el rey del barrio
  'Joker', // villano de Batman · comodín
  'Padrino', // bautizo · boda · la película
  'Primo', // familiar · número primo · el que paga todo
  'Promoción', // fiesta de promo · oferta
  'Confirmación', // sacramento · confirmar asistencia
  'Pensión', // universidad · jubilación · alojamiento
  'Práctica', // prácticas preprofesionales · práctica calificada · ensayo
  'Cachimbo', // novato de la universidad · pipa
  'Torpedo', // submarino · plagio en el examen
  'Zoom', // videollamada · acercar la cámara
  'Tono', // fiesta · tono de voz · ringtone
  'Testamento', // herencia · Antiguo Testamento
  'Herencia', // plata · genética
  'Fenómeno del Niño', // clima · niño prodigio
  'Terremoto', // sismo · trago
  'Paro', // de transportistas · cardíaco
  'Rolex', // reloj de lujo · escándalo presidencial
  'Payaso', // circo · It · el Congreso
  'Fantasma', // espíritu · el que alardea
  'Zombie', // muerto vivo · desvelado
  'Bruja', // Halloween · la suegra · Wicked
  'Diablo', // infierno · diablada de Puno · niño travieso
  'Cura', // sacerdote · remedio
  'Sublime', // chocolate · adjetivo
  'Casino', // galleta · apuestas
  'Margarita', // flor · trago · nombre
  'Cusqueña', // cerveza · mujer de Cusco
  'King Kong', // dulce de Lambayeque · gorila
  'Suspiro a la limeña', // postre · suspiro de amor
  'Leche de tigre', // ceviche · cura de la resaca · el Tigre Gareca
  'Barril', // el Chavo · cerveza · petróleo
  'Merlina', // la serie · miércoles · la de los Locos Addams

  // --- Jerga peruana con doble sentido ---
  'Causa', // plato · amigo · motivo · causa judicial
  'Pata', // pie · amigo
  'Palta', // fruta · vergüenza
  'Yuca', // tubérculo · difícil
  'Camote', // tubérculo · enamorado
  'Pepa', // semilla · persona guapa · pastilla
  'Choro', // mejillón · ladrón
  'Chapa', // apodo · tapa · cerradura · besar
  'Bola', // pelota · rumor · montón de gente
  'Jalar', // desaprobar · llevar a alguien en carro · tirar
  'Chancho', // cerdo · colecta · gordito
  'Lenteja', // legumbre · alguien lento
  'Azotea', // techo con fierros · "mal de la azotea"
  'Chancla', // sandalia · arma de mamá
  'Huachafo', // cursi · polémica sobre quién lo es
  'Cachudo', // engañado · animal con cuernos

  // --- Polémica u opinión dividida ---
  'Ají', // bendición · cosa del diablo
  'Culantro', // delicioso · sabe a jabón
  'Aceituna', // se ama o se odia
  'Pizza con piña', // crimen · manjar
  'Panetón', // con o sin frutas · la marca · chocolatada
  'Pasas', // en el panetón · en el arroz · ¿por qué?
  'Sangrecita', // hierro · asco
  'Anticucho', // delicia · "es corazón"
  'Cuy', // mascota · plato
  'Toro', // animal · corridas · Tauro
  'Matrimonio', // amor eterno · castigo
  'Divorcio', // libertad · tragedia
  'Suegra', // segunda mamá · enemiga
  'Ex', // trauma · "volvería"
  'Crush', // ilusión · sufrimiento
  'Friendzone', // amistad · condena
  'Tinder', // amor · catálogo
  'Dejar en visto', // grosería · costumbre
  'Audio de WhatsApp', // práctico · tortura de 5 minutos
  'Grupo de la familia', // cadenas · buenos días · peleas
  'Spoiler', // crimen · favor
  'Influencer', // trabajo · "no es trabajo"
  'Esto es Guerra', // entretenimiento · basura
  'Ampay', // chisme · escándalo · infidelidad
  'Reggaetón', // se baila · se odia
  'Bad Bunny', // genio · ruido
  'Horóscopo', // ciencia · cuento
  'Tatuaje', // arte · "¿y cuando seas viejo?"
  'Vegano', // conciencia · intensidad
  'Inteligencia artificial', // futuro · fin del mundo
  'ChatGPT', // herramienta · trampa
  'Claude', // IA · nombre francés · el pintor Monet
  'iPhone', // calidad · marca
  'Halloween', // disfraces · Día de la Canción Criolla
  'San Valentín', // amor · negocio · solteros
  'Combi', // "al fondo hay sitio" · peligro
  'Congreso', // democracia · circo
  'Elecciones', // esperanza · el mal menor
  'VAR', // justicia · robo
  'Selección peruana', // esperanza · sufrimiento
  'Chile', // vecino · rival del pisco y el ceviche · el ají
  'Pisco', // peruano · "chileno"
  'Trabajo grupal', // el que hace todo · el que no hace nada
  'Ave nacional', // gallito de las rocas · águila · cóndor
  'Pintor', // arte · brocha gorda · Hitler
  'Titanic', // barco · película · ¿cabía en la puerta?
  'Among Us', // videojuego · literalmente este juego
  'Los Simpson', // serie · predicen el futuro
  'Salsa', // baile · comida
  'Chicha', // bebida · música · algo improvisado
  'Resaca', // post fiesta · corriente del mar
  'Calzón amarillo', // cábala · Año Nuevo
];

/** Nivel 2: buenas, con al menos dos ángulos claros. */
const GOOD: string[] = [
  'Grifo', // gasolinera · caño · criatura mitológica
  'Bomba', // explosivo · bomba de agua · noticia bomba
  'Teclado', // computadora · piano
  'Nube', // cielo · iCloud · algodón de azúcar
  'Filtro', // Instagram · agua · café
  'Contador', // profesión · medidor de luz
  'Mozo', // mesero · joven
  'Miss', // profesora · Miss Perú
  'Delegado', // del salón · político
  'Parcial', // examen · a medias
  'Tesis', // título · sufrimiento
  'Gratificación', // julio y diciembre · recompensa
  'AFP', // jubilación · retiro de fondos
  'SUNAT', // impuestos · terror
  'Yape', // pago · "yapéame"
  'Brevete', // licencia · "comprado"
  'Metropolitano', // bus · lata de sardinas
  'Huaico', // desastre · avalancha de gente
  'Mascarilla', // COVID · belleza
  'Cuarentena', // pandemia · encierro
  'Pastilla', // medicina · "tómate una pastilla" (cálmate)
  'Dentista', // salud · miedo
  'Brackets', // dientes · adolescencia
  'Muela del juicio', // diente · sabiduría
  'Hueso', // esqueleto · perro · profe difícil
  'Volcán', // Misti · persona explosiva
  'Arcoíris', // lluvia · bandera
  'Rayo', // tormenta · Rayo McQueen
  'Árbol', // naturaleza · de Navidad · genealógico
  'Selva', // Amazonía · ciudad caótica
  'Canchita', // cine · cebiche · cancha pequeña
  'Karaoke', // diversión · vergüenza
  'Discoteca', // fiesta · ruido
  'Previa', // antes de la fiesta · previo
  'Chela', // cerveza · nombre
  'Vino', // trago · misa · "vino" de venir
  'Hielo', // frío · ley del hielo
  'Globo', // cumpleaños · aerostático · mundo
  'Anillo', // compromiso · El Señor de los Anillos · Saturno
  'Corazón', // órgano · amor · naipe
  'Cielo', // paraíso · "mi cielo" · atmósfera
  'Navidad', // regalos · familia · gasto
  'Fiestas Patrias', // desfile · feriado · parrilla
  'Cumpleaños', // torta · tortazo en la cara
  'Piñata', // fiesta infantil · golpes
  'Cigüeña', // ave · los bebés
  'Luna de miel', // viaje · romance
  'Serenata', // romance · vergüenza
  'Celos', // amor · tóxico
  'Cuñado', // familiar · "cuñao"
  'Lonchera', // colegio · táper
  'Táper', // comida · "devuélveme el táper"
  'Netflix', // series · cuenta compartida
  'Meme', // humor · internet
  'Selfie', // foto · vanidad
  'TikTok', // videos · adicción · China
  'Facebook', // red social · de los tíos
  'Tesla', // auto · científico
  'Android', // celular · robot
  'Bitcoin', // inversión · estafa
  'Wi-Fi', // internet · contraseña del vecino
  'Pádel', // deporte de moda · tenis con paredes
  'Vóley', // deporte · las Matadoras
  'Messi', // el mejor · la Pulga
  'Cristiano Ronaldo', // el mejor · "siuuu"
  'Paolo Guerrero', // goleador · polémica
  'Alianza Lima', // club · pasión · sufrimiento
  'Árbitro', // juez · culpable de todo
  'Gol', // fútbol · auto Volkswagen
  'Arquero', // fútbol · tiro con arco · Cupido
  'Maratón', // correr · maratón de series
  'Scooter', // transporte · peligro en la vereda
  'Proteína', // gimnasio · alimento
  'Gimnasio', // salud · ego
  'Dieta', // salud · "desde el lunes"
  'Ayuno', // religión · ayuno intermitente
  'Magaly', // chisme · urracas
  'Urraca', // ave · reportera de chismes
  'Concierto', // música · entradas agotadas
  'Reventa', // entradas · estafa
  'Shakira', // cantante · "las mujeres ya no lloran"
  'Ricardo Arjona', // poeta · meme
  'Grupo 5', // cumbia · fiesta
  'Marinera', // baile · pañuelo
  'Silla', // mueble · de ruedas · juego de las sillas
  'Toalla', // baño · "tirar la toalla"
  'Papel higiénico', // baño · pánico de la pandemia
  'Olla', // cocina · olla común · olla de presión
  'Cuchara', // cubierto · "meter la cuchara"
  'Peluca', // disfraz · calvicie
  'Bigote', // estilo · Hitler · Mario Bros
  'Abogado', // justicia · "del diablo"
  'Ingeniero', // profesión · "inge"
  'Albañil', // construcción · piropos
  'Capitán', // barco · equipo · Capitán América
  'Mago', // trucos · Harry Potter
  'Circo', // espectáculo · "esto es un circo"
  'Tinka', // lotería · sueño de millonario
  'Bingo', // juego · "¡bingo!" · pollada
  'Pollada', // fiesta · recaudar fondos
  'UNO', // juego de cartas · número
  'Monopolio', // juego de mesa · economía
  'Mundo', // planeta · rayuela
  'Escondidas', // juego · infidelidad
  'Teléfono malogrado', // juego · chisme
  'FIFA', // videojuego · organización corrupta
  'Rocoto', // picante · rocoto relleno · persona brava
  'Tentación', // galleta · pecado
  'Emoliente', // bebida de carrito · remedio
  'Red Bull', // "te da alas" · Fórmula 1
  'Café', // bebida · color · una cita
  'Queso', // comida · "¡whisky!" de la foto · ratón
  'Pan', // panadería · "pan comido" · Peter Pan
  'Uva', // fruta · vino · las 12 uvas
  'Tuna', // fruta · estudiantina
  'Chifa', // comida · domingo
  'Ceviche', // plato bandera · resaca · ¿de Chile?
  'Pollo a la brasa', // domingo · "¿qué pollería es la mejor?"
  'Salchipapa', // bajón · comida chatarra
  'Caldo de gallina', // madrugada · levantamuertos
  'Inca Kola', // bandera · "es de Coca-Cola"
  'Menú', // almuerzo de 12 soles · menú del celular
  'Bodega', // tienda del barrio · almacén · vinos
  'Polvos Azules', // mercado · maquillaje
  'Mesa Redonda', // mercado · reunión · caballeros del rey Arturo
  'Gamarra', // ropa · emprendimiento
  'Puerto de Chancay', // China · comercio · progreso
  'Aeropuerto Jorge Chávez', // viaje · el nuevo terminal
  'Miraflores', // distrito · mirar flores
  'Surco', // distrito · surco de la tierra
  'Barranco', // distrito · precipicio
  'Jesús María', // distrito · religión
  'Magdalena', // distrito · "llorar como una Magdalena"
  'San Juan de Lurigancho', // distrito · el más grande · cárcel
  'Callao', // primer puerto · chalaco
  'Arequipa', // Misti · "república independiente"
  'Chiclayo', // King Kong · el Papa León XIV
  'España', // conquista · "madre patria"
  'Estados Unidos', // sueño americano · águila
  'Trump', // presidente · meme
  'Cóndor', // ave · "El cóndor pasa"
  'Loro', // ave · persona que habla mucho
  'Gallina', // ave · cobarde · caldo
  'Caballo', // caballo de paso · ajedrez · Troya
  'Alpaca', // animal · chompa
  'Cucaracha', // plaga · sobrevive todo · vuela
  'Tiburón', // animal · prestamista
  'Unicornio', // mítico · startup
  'Dinosaurio', // animal · persona mayor
  'Vampiro', // Drácula · chupasangre
  'Cenicienta', // cuento · la que hace todo · medianoche
  'Pinocho', // cuento · mentiroso
  'Barbie', // muñeca · película · Ken
  'Frozen', // película · congelado
  'Espejo', // vanidad · retrovisor · mala suerte
];

export const WORDS: string[] = [...TOP, ...GOOD];
