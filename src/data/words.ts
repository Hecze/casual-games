// Palabras para "El impostor".
//
// Filtro principal (prueba de las 8 pistas): si no se te ocurren al menos 8
// palabras COMUNES (nada rebuscado) que se puedan decir como pista, la palabra
// no sirve, por buena que suene. Cada palabra lleva al lado sus 8 pistas como
// prueba (solo para quien edite la lista; no se envían al celular).
//
// Además:
//  - Todos la conocen: cero riesgo de "¿qué es eso?".
//  - Mejor si tiene un doble sentido QUE SE USE DE VERDAD EN EL PERÚ: así las
//    pistas de los demás no la delatan de una y el impostor puede colarse.
//  - Una sola palabra, salvo nombres propios que de verdad son dos.
//  - Sin polémicas de relaciones o redes (ex, suegra, dejar en visto,
//    horóscopo, reggaetón...): en la práctica no generan nada.
//  - Nada de fútbol ni de política: no todos siguen el fútbol, y la política
//    genera discusiones que no son divertidas. Tampoco tragedias recientes,
//    crimen organizado ni temas raciales.
//  - El doble sentido nunca puede ser sexual.
//
// Descartadas: Polo, Codo, Violín, Pista, Camote, Huachafo (el doble sentido no
// se usa o las pistas salen rebuscadas), Papa a la huancaína, Machu Picchu,
// Lomo saltado (una sola asociación: la primera pista la regala).

export const WORDS: string[] = [
  // --- Del grupo ---
  'Caries', // diente · dentista · dulces · cepillo · muela · dolor · gato · maullar
  'Castores', // dientes · madera · represa · río · árbol · roer · Canadá · los de la U

  // --- Doble sentido peruano ---
  'Papa', // freír · puré · rellena · huancaína · Vaticano · León · Chiclayo · misa
  'Sol', // playa · calor · verano · moneda · bloqueador · sombra · dólar · Inti
  'Luna', // noche · estrellas · lobo · astronauta · llena · de miel · carro · vidrio
  'Cancha', // maíz · tostada · ceviche · salada · canchita · cine · chela · picar
  'Santo', // cumpleaños · torta · regalo · iglesia · Santa Rosa · vela · saludo · santito
  'Sencillo', // monedas · cambio · cobrador · combi · fácil · simple · canción · humilde
  'Vuelto', // cambio · cobrador · cajero · monedas · combi · regresar · "ya volví" · propina
  'Boleta', // compra · tienda · RUC · notas · colegio · libreta · sueldo · pago
  'Pasaje', // combi · cobrador · medio pasaje · avión · viaje · aeropuerto · calle · estudiante
  'Paradero', // combi · bajar · esquina · "baja" · micro · esperar · carro · desconocido
  'Cono', // tránsito · naranja · pista · helado · barquillo · Cono Norte · Comas · triángulo
  'Papeleta', // multa · tránsito · policía · carro · grúa · brevete · puntos · pagar
  'Carpeta', // colegio · salón · sentarse · mochila · archivo · computadora · documentos · PDF
  'Plumón', // pizarra · colores · marcador · escribir · plumas · almohada · casaca · edredón
  'Cartón', // caja · reciclaje · mudanza · título · universidad · graduación · diploma · huevos
  'Once', // nota · aprobado · jalado · veinte · examen · número · hora · libreta
  'Media', // pie · calcetín · zapato · lavar · mitad · promedio · nota · hora
  'Cartera', // mujer · bolso · plata · billetera · robo · maquillaje · llaves · celular
  'Vara', // palo · árbol · contactos · recomendación · trabajo · favor · amigo · conocido
  'Argolla', // anillo · matrimonio · oro · grupo · amigos · cerrado · exclusivo · arete
  'Salado', // sal · mar · papitas · comida · mala suerte · piña · "qué salado" · agua
  'Piña', // fruta · pizza · tropical · jugo · mala suerte · "qué piña" · Bob Esponja · ácida
  'Palta', // verde · pan · guacamole · ensalada · vergüenza · roche · "qué palta" · pepa
  'Yuca', // frita · tubérculo · selva · difícil · examen · "está yuca" · huancaína · blanca
  'Churro', // dulce · manjar · azúcar · frito · guapo · chico · "qué churro" · feria
  'Cuero', // zapato · casaca · vaca · guapo · chico · cinturón · cartera · "cuerazo"
  'Mosca', // insecto · basura · volar · molesta · atento · "estar mosca" · matamoscas · sopa
  'Sapo', // rana · verde · princesa · beso · chismoso · soplón · charco · croar
  'Rata', // ratón · alcantarilla · queso · ladrón · robo · tacaño · plaga · veneno
  'Choro', // mejillón · mar · a la chalaca · ladrón · robo · celular · policía · cuidado
  'Perro', // mascota · ladrar · hueso · collar · infiel · cachorro · pasear · hot dog
  'Causa', // plato · papa · limeña · amarilla · amigo · causita · motivo · razón
  'Pata', // pie · pato · mesa · amigo · patita · uña · "mi pata" · pierna
  'Pepa', // semilla · fruta · palta · guapo · "qué pepa" · pastilla · mango · durazno
  'Chapa', // apodo · puerta · llave · botella · tapa · beso · "chapar" · nombre
  'Jalar', // curso · examen · nota · cuerda · empujar · llevar · carro · tirar
  'Bola', // pelota · rumor · chisme · gente · montón · "corre la bola" · redonda · bolita
  'Chancho', // cerdo · chicharrón · gordo · colecta · chanchita · lodo · alcancía · comer
  'Llanta', // rueda · carro · pinchar · repuesto · gordito · barriga · rollo · bicicleta
  'Plancha', // ropa · arrugada · caliente · vergüenza · roche · "qué plancha" · ejercicio · abdomen
  'Azotea', // techo · casa · fierros · ropa tendida · loco · cabeza · perro · "mal de la azotea"
  'Chancla', // playa · pie · sandalia · mamá · golpe · castigo · ducha · verano
  'Cachudo', // cuernos · toro · infiel · engaño · novia · diablo · venado · "le pusieron"
  'Fantasma', // miedo · sábana · casa · espíritu · mentiroso · alardear · Halloween · invisible
  'Tono', // fiesta · música · tonear · cumpleaños · voz · llamada · celular · color
  'Cachimbo', // universidad · nuevo · primer ciclo · novato · matrícula · pipa · tabaco · fiesta
  'Torpedo', // examen · copiar · plagio · papelito · submarino · guerra · misil · profe
  'Pensión', // universidad · pagar · mensualidad · jubilación · viejo · abuelo · alojamiento · cuarto
  'Práctica', // prácticas · practicante · trabajo · calificada · examen · ensayo · entrenamiento · deporte
  'Control', // remoto · televisor · canal · de lectura · examen · policía · videojuego · pilas
  'Terma', // agua caliente · ducha · baño · invierno · gas · eléctrica · termales · piscina
  'Grifo', // gasolina · carro · combustible · caño · agua · lavadero · cocina · grifero
  'Barra', // bar · trago · chocolate · gimnasio · pesas · cereal · metal · mostrador
  'Combi', // cobrador · pasaje · paradero · "al fondo hay sitio" · chofer · apretado · micro · ruta

  // --- Doble sentido general ---
  'Llama', // animal · Cusco · lana · escupir · fuego · vela · encendedor · teléfono
  'Banco', // plata · cajero · cuenta · préstamo · parque · sentarse · asiento · cola
  'Gato', // maullar · mascota · ratón · bigotes · carro · llanta · levantar · herramienta
  'Cola', // fila · esperar · banco · perro · rabo · gaseosa · Inca Kola · pegamento
  'Pila', // batería · control · energía · montón · ropa · "ponte pilas" · AA · linterna
  'Hoja', // árbol · papel · cuaderno · verde · otoño · coca · escribir · cuchilla
  'Planta', // maceta · regar · verde · pie · fábrica · edificio · piso · jardín
  'Carta', // naipe · baraja · póker · menú · restaurante · amor · correo · sobre
  'Red', // pesca · pescador · vóley · internet · wifi · social · conexión · malla
  'Ratón', // queso · trampa · gato · Mickey · computadora · mouse · clic · roedor
  'Virus', // enfermedad · gripe · vacuna · COVID · computadora · antivirus · contagio · fiebre
  'Corona', // rey · reina · princesa · cerveza · limón · COVID · oro · cabeza
  'Sirena', // mar · cola · pez · Ariel · ambulancia · bomberos · ruido · policía
  'Batería', // celular · cargador · por ciento · pila · instrumento · tambor · baterista · banda
  'Tarjeta', // crédito · banco · deuda · cumpleaños · Metropolitano · regalo · de presentación · cajero
  'Cadena', // oro · cuello · bicicleta · WhatsApp · reenviar · cárcel · tiendas · candado
  'Llave', // puerta · casa · candado · carro · inglesa · gasfitero · abrir · llavero
  'Estrella', // cielo · noche · famoso · Hollywood · mar · fugaz · deseo · cinco puntas
  'Cometa', // cielo · espacio · cola · volar · hilo · viento · juguete · playa
  'Ola', // mar · surf · playa · calor · estadio · verano · tabla · ola mexicana
  'Mate', // coca · té · matemáticas · curso · jaque · ajedrez · calabaza · Argentina
  'Coca', // hoja · chacchar · mate · Cusco · Coca-Cola · gaseosa · droga · sagrada
  'Taco', // México · picante · tortilla · zapato · tacón · billar · mesa · bola
  'Mango', // fruta · amarillo · jugo · verano · sartén · cuchillo · agarrar · pepa
  'Coco', // playa · palmera · agua · cabeza · película · Disney · México · rallado
  'Naranja', // fruta · jugo · color · media naranja · pareja · vitamina C · desayuno · cáscara
  'Manzana', // fruta · roja · Apple · iPhone · Adán · Eva · Newton · Blancanieves
  'Taza', // café · té · desayuno · baño · inodoro · jalar la cadena · plato · asa
  'Lengua', // boca · idioma · inglés · chismoso · larga · sabor · picante · morder
  'Ojo', // ver · ciego · lentes · "¡ojo!" · huracán · mal de ojo · pestaña · llorar
  'Mano', // dedo · uña · saludar · ayuda · guante · anillo · palma · "dar una mano"
  'Muñeca', // juguete · Barbie · niña · reloj · brazo · Chucky · pulsera · vestido
  'Pestaña', // ojo · rímel · maquillaje · navegador · Google · abrir · cerrar · larga
  'Pulgar', // dedo · like · arriba · Pulgarcito · mano · "ok" · celular · emoji
  'Ombligo', // panza · bebé · Cusco · mundo · "se cree" · pelusa · piercing · centro
  'Riñón', // órgano · cálculo · caro · "cuesta un riñón" · trasplante · dolor · espalda · orina
  'Piedra', // roca · papel · tijera · cálculo · riñón · preciosa · río · lanzar
  'Plata', // dinero · metal · medalla · segundo · joya · sueldo · billete · luca
  'Mina', // minería · oro · cobre · casco · lápiz · explosivo · campo minado · socavón
  'Rosa', // flor · roja · espinas · Santa Rosa · pozo · color · San Valentín · ramo
  'Hongo', // champiñón · pizza · pie · infección · Mario Bros · bosque · nube atómica · humedad
  'Caja', // cartón · regalo · supermercado · cajera · pagar · cambios · carro · mudanza
  'Cuenta', // banco · plata · "la cuenta" · restaurante · Netflix · contar · número · contraseña
  'Crédito', // banco · tarjeta · deuda · cuotas · universidad · cursos · matrícula · préstamo
  'Visa', // tarjeta · pago · viaje · Estados Unidos · embajada · pasaporte · entrevista · sello
  'Cámara', // foto · celular · video · selfie · llanta · bicicleta · flash · fotógrafo
  'Radio', // música · locutor · noticias · carro · emisora · círculo · centro · hueso
  'Canal', // televisión · YouTube · suscribirse · control · agua · río · Panamá · cable
  'Cable', // televisión · Movistar · luz · enchufe · cargador · "se le cruzaron" · eléctrico · internet
  'Historia', // Instagram · curso · Perú · pasado · cuento · libro · profesor · 24 horas
  'Estado', // WhatsApp · soltero · casado · civil · ánimo · salud · sólido · líquido
  'Perfil', // foto · Instagram · Facebook · rostro · cara · lado · criminal · LinkedIn
  'Volante', // carro · manejar · timón · chofer · folleto · publicidad · repartir · papel
  'Arco', // flecha · Robin Hood · Cupido · arcoíris · iris · arquitectura · Arco del Triunfo · ceja
  'Palo', // madera · árbol · escoba · golf · millón · bastón · fósforo · piñata
  'Copa', // vino · brindis · champán · cristal · helado · árbol · trofeo · Año Nuevo
  'Final', // examen · último · serie · película · final feliz · temporada · fin de ciclo · llegada
  'Cristal', // vidrio · ventana · cerveza · romper · transparente · copa · zapatito de Cenicienta · espejo
  'Escalera', // subir · bajar · escalón · casa · edificio · póker · escalera de color · caerse
  'Tanque', // guerra · militar · agua · gasolina · carro · lleno · azotea · cisterna
  'Escudo', // Perú · vicuña · bandera · guerrero · espada · Capitán América · proteger · armadura
  'Sello', // cara o sello · moneda · carta · correo · timbre · oficina · calidad · pasaporte
  'Cruz', // Jesús · iglesia · tumba · Cruz Roja · ambulancia · cruzar · collar · rosario
  'Rosario', // rezar · cuentas · abuela · iglesia · Virgen · Argentina · ciudad · nombre
  'Hábito', // costumbre · monja · cura · octubre · morado · Señor de los Milagros · rutina · vicio
  'Morado', // color · octubre · Señor de los Milagros · chicha · mazamorra · moretón · golpe · uva
  'Cajón', // instrumento · música criolla · afroperuano · mueble · ropa · ataúd · muerto · velorio
  'Festejo', // danza · afroperuano · Chincha · celebrar · fiesta · cumpleaños · cajón · alegría
  'Collar', // perro · joya · cuello · perlas · oro · gato · cadena · flores
  'Correa', // perro · pasear · cinturón · pantalón · reloj · cuero · castigo · papá
  'Cinturón', // pantalón · correa · karate · negro · seguridad · carro · abrocharse · hebilla
  'Tabla', // surf · ola · playa · multiplicar · madera · mesa · Excel · planchar
  'Anzuelo', // pesca · pez · caña · carnada · morder · gusano · engañar · trampa
  'Pirata', // barco · parche · loro · tesoro · Jack Sparrow · película pirata · Polvos Azules · copia
  'Parrilla', // carne · anticucho · carbón · domingo · chorizo · carro · frente · programación
  'Puente', // río · cruzar · feriado largo · dental · diente · de los Suspiros · Barranco · carro
  'Metro', // tren · Línea 1 · Villa El Salvador · medida · centímetro · regla · estación · tráfico
  'Tráfico', // carro · Lima · hora punta · claxon · combi · drogas · semáforo · choque
  'Piloto', // avión · aeropuerto · Fórmula 1 · carrera · casco · serie · capítulo · azafata
  'Reina', // rey · corona · Isabel · ajedrez · abeja · belleza · Miss Perú · princesa
  'Rey', // corona · castillo · reina · ajedrez · baraja · Rey León · Arturo · trono
  'Joker', // Batman · payaso · villano · comodín · cartas · risa · Gotham · maquillaje
  'Padrino', // bautizo · boda · ahijado · regalo · película · mafia · compadre · iglesia
  'Promoción', // colegio · fiesta de promo · quinto año · graduación · oferta · descuento · tienda · 2x1
  'Payaso', // circo · nariz roja · globos · It · miedo · cumpleaños · chiste · maquillaje
  'Zombie', // muerto · cerebro · The Walking Dead · desvelado · sueño · examen · Halloween · apocalipsis
  'Bruja', // escoba · sombrero · Halloween · hechizo · gato negro · caldero · Blancanieves · verruga
  'Diablo', // infierno · cuernos · rojo · tridente · diablada · Puno · travieso · ají
  'Cura', // iglesia · misa · sotana · confesión · remedio · enfermedad · medicina · sanar
  'Avatar', // película · azul · Pandora · James Cameron · foto de perfil · perfil · juego · personaje
  'Sublime', // chocolate · maní · D'Onofrio · dulce · bodega · increíble · perfecto · rojo
  'Casino', // galleta · menta · vainilla · apuestas · ruleta · tragamonedas · fichas · dinero
  'Cusqueña', // cerveza · Cusco · mujer · chela · dorada · trigo · andina · sierra
  'Suspiro', // a la limeña · postre · manjar · merengue · amor · cansancio · Barranco · puente
  'Barril', // Chavo · vecindad · cerveza · petróleo · madera · chop · rodar · Ñoño
  'Zoom', // videollamada · clase virtual · cámara · micrófono · "apaga tu cámara" · acercar · foto · pandemia

  // --- Animales con más de una lectura ---
  'León', // rey · selva · melena · rugir · Papa · Simba · Leo · zoológico
  'Tigre', // rayas · selva · leche de tigre · ceviche · Winnie Pooh · naranja · zoológico · rugir
  'Pulga', // perro · picar · rascarse · chiquito · saltar · mercado de pulgas · gato · antipulgas
  'Burro', // orejas · Shrek · tonto · bruto · carga · juego de cartas · cola · terco
  'Serpiente', // veneno · cobra · Adán · Eva · manzana · traidor · víbora · lengua
  'Conejo', // zanahoria · orejas · Pascua · huevos · mago · sombrero · Bad Bunny · Bugs Bunny
  'Paloma', // paz · blanca · parque · plaza · rata con alas · migas · caca · mensajera
  'Murciélago', // Batman · cueva · noche · COVID · China · vampiro · sangre · ciego
  'Gallo', // amanecer · kikirikí · pelea · gallina · cresta · voz · desafinar · gallito
  'Zorro', // astuto · bosque · cola · El Zorro · espada · máscara · Firefox · gallinero
  'Lobo', // aullar · luna · Caperucita · feroz · marino · manada · lobito · Wall Street
  'Carpa', // camping · playa · circo · pez · lago · dormir · fogata · estacas
  'Toro', // corrida · Acho · rojo · cuernos · torero · Tauro · Pamplona · Red Bull
  'Cuy', // plato · Cusco · frito · mascota · roedor · chactado · jaula · Arequipa

  // --- Lugares que también son otra cosa ---
  'Lima', // ciudad · capital · garúa · tráfico · limón · uñas · lima de uñas · Rímac
  'Comas', // distrito · Lima Norte · Cono Norte · punto · coma · signo · escribir · puntuación
  'Lince', // distrito · Risso · felino · gato · montés · ojos · ágil · salvaje
  'Ventanilla', // distrito · Callao · banco · cajero · carro · bajar la luna · atención · cola
  'Independencia', // 28 de julio · San Martín · libertad · desfile · distrito · Mega Plaza · mudarse · solo
  'Victoria', // triunfo · ganar · Gamarra · distrito · nombre · campeón · celebrar · medalla
  'Magdalena', // llorar · distrito · mar · Biblia · María · nombre · Pueblo Libre · iglesia
  'Barranco', // distrito · bohemio · Puente de los Suspiros · bajada de baños · precipicio · abismo · malecón · bares
  'Surco', // distrito · pituco · Jockey · Higuereta · arado · tierra · chacra · sembrar
  'Asia', // continente · China · Japón · playa · sur · verano · boulevard · sushi
  'Amazonas', // río · selva · Amazon · compras · guerreras · Mujer Maravilla · Brasil · Iquitos
  'Titicaca', // lago · Puno · Bolivia · totora · Uros · caca · chiste · frío
  'China', // país · chino · chifa · Chancay · moneda · 50 céntimos · Muralla · TikTok
  'Chile', // país · vecino · pisco · mar · ají · rival · Santiago · terremoto
  'Lurigancho', // cárcel · preso · San Juan · distrito · Chosica · reja · penal · Lima Este
  'Chancay', // puerto · China · barco · comercio · contenedores · Huaral · mandarina · tren

  // --- Personajes que también son otra cosa ---
  'Mario', // Bros · hongo · Luigi · princesa · Nintendo · Vargas Llosa · Nobel · libro
  'Túpac', // Amaru · rebelión · inca · Cusco · rapero · Shakur · hip hop · caballos
  'Pizarro', // conquistador · Atahualpa · España · Cajamarca · caballo · oro · fundación de Lima · armadura
  'Grau', // Huáscar · almirante · héroe · avenida · billete · combate · Angamos · mar
  'Inca', // imperio · Cusco · Machu Picchu · Atahualpa · Inca Kola · gaseosa · quechua · sol
  'Inti', // sol · inca · dios · Raymi · moneda · Cusco · junio · Sacsayhuamán
  'Cueva', // oscura · murciélago · cavernícola · Aladino · piedra · oso · Batman · eco
  'Claude', // inteligencia artificial · chat · Anthropic · tarea · nombre · francés · Monet · robot
  'Titanic', // barco · iceberg · Jack · Rose · puerta · hundirse · película · Leonardo
  'Among Us', // impostor · nave · tripulantes · votar · sospechoso · videojuego · rojo · "sus"
  'Los Simpson', // Homero · Bart · amarillo · dona · predicen · Springfield · Marge · serie

  // --- Polémica que sí da juego ---
  'Ají', // picante · rocoto · amarillo · huancaína · bendición · diablo · arder · salsa
  'Culantro', // verde · ceviche · jabón · sopa · aguadito · perejil · hierba · odio
  'Aceituna', // verde · negra · botija · pizza · pepa · odio · aceite · Tacna
  'Panetón', // Navidad · chocolatada · frutas · pasas · D'Onofrio · Gloria · Todinno · caja
  'Pasas', // uva · panetón · arroz · odio · seca · arrugada · Navidad · sacar
  'Sangrecita', // hierro · anemia · pollo · cebolla · asco · sangre · niños · camote
  'Anticucho', // corazón · palito · parrilla · Grimanesa · carretilla · ají · papa · noche
  'Matrimonio', // boda · anillo · iglesia · novia · castigo · amor · divorcio · fiesta
  'Pintor', // cuadro · pincel · Picasso · arte · brocha · pared · Hitler · museo
  'Pisco', // sour · chileno · uva · Ica · chilcano · trago · botija · Perú
  'Halloween', // disfraz · calabaza · dulces · Canción Criolla · bruja · 31 de octubre · gringo · miedo
  'ChatGPT', // tarea · copiar · IA · preguntar · profesor · ensayo · OpenAI · prompt
  'Resaca', // chela · agua · dolor de cabeza · domingo · caldo · Gatorade · mar · fiesta
  'Chicha', // morada · maíz · música · cumbia · de jora · carteles · Los Shapis · cultura
  'Salsa', // baile · Héctor Lavoe · pareja · ají · huancaína · tomate · ketchup · discoteca

  // --- Pocas lecturas, pero llenas de pistas comunes ---
  'Velorio', // muerto · café · llanto · cajón · flores · misa · chisme · coronas
  'Pollada', // pollo · fiesta · vecinos · ticket · recaudar · cerveza · parlante · bingo
  'Fotocheck', // trabajo · foto · nombre · oficina · seguridad · colgar · cuello · empresa
  'Mandil', // colegio · blanco · laboratorio · cocina · profesora · manchas · delantal · bolsillo
  'Guachimán', // vigilante · caseta · noche · edificio · silbato · uniforme · puerta · seguridad
  'Serenazgo', // seguridad · camioneta · distrito · municipalidad · sirena · vigilancia · cámaras · noche
  'Rompemuelles', // carro · frenar · pista · saltar · amarillo · velocidad · calle · muelles
  'Claxon', // carro · combi · tráfico · ruido · Lima · bocina · pito · chofer
  'Grúa', // carro · depósito · mal estacionado · multa · construcción · edificio · levantar · remolque
  'Soroche', // altura · Cusco · Puno · mate de coca · dolor de cabeza · oxígeno · mareo · pastilla
  'Kion', // chifa · jengibre · té · remedio · tos · limón · miel · picante
  'Sillao', // chifa · arroz chaufa · salsa · soya · negro · salado · wantán · tallarín
  'Wantán', // chifa · sopa · frito · pollo · chancho · crocante · tamarindo · chino
  'Palillo', // chifa · dientes · comida · madera · sushi · flaco · persona · palito
  'Lúcuma', // helado · fruta · postre · torta · peruana · amarilla · D'Onofrio · batido
  'Pachamanca', // tierra · piedras · papa · carne · horno · sierra · fiesta · humita
  'Chullo', // Cusco · gorro · lana · frío · alpaca · colores · orejas · turista
  'Lonche', // té · pan · cinco de la tarde · abuela · café · tostada · merienda · mantequilla
  'Cachito', // pan · mantequilla · panadería · poquito · pedazo · desayuno · croissant · café
  'Malecón', // Miraflores · mar · parapente · Barranco · correr · bicicleta · atardecer · Costa Verde
  'Huaca', // Pucllana · pirámide · adobe · preinca · ruinas · Trujillo · Sol y Luna · antiguo
  'Atahualpa', // inca · Pizarro · Cajamarca · rescate · oro · cuarto · Huáscar · ejecución
  'Gamarra', // ropa · La Victoria · galerías · barato · textil · emprender · polos · ambulantes
  'Mozo', // restaurante · propina · mesa · carta · bandeja · pedido · cuenta · joven
  'Miss', // profesora · colegio · tarea · Miss Perú · belleza · corona · banda · concurso
  'Delegado', // salón · aula · profesor · representante · curso · grupo · WhatsApp · lista
  'Parcial', // examen · ciclo · mitad · nota · estudiar · jalar · final · parcialmente
  'Tesis', // título · asesor · jurado · sustentar · tesista · plagio · investigación · años
  'Jurado', // tesis · concurso · juez · tribunal · nota · calificar · Yo Soy · culpable
  'Borrador', // lápiz · goma · error · pizarra · versión · documento · correo · tiza
  'Corrector', // líquido · blanco · error · Word · ortografía · lapicero · profesor · examen
  'Tiza', // pizarra · profesor · polvo · blanca · colegio · billar · taco · rayuela
  'Recreo', // colegio · kiosko · lonchera · patio · timbre · jugar · descanso · amigos
  'Gratificación', // julio · diciembre · sueldo · bono · trabajo · Navidad · Fiestas Patrias · planilla
  'SUNAT', // impuestos · RUC · boleta · factura · multa · declarar · contador · deuda
  'Yape', // pago · celular · QR · BCP · Plin · transferir · bodega · "yapéame"
  'Brevete', // licencia · manejar · examen · carro · MTC · auto · comprado · puntos
  'Metropolitano', // bus · estación · tarjeta · lleno · expreso · apretado · carril · Lima
  'Huaico', // lluvia · barro · Chosica · piedras · río · desastre · carretera · verano
  'Mascarilla', // COVID · cara · pandemia · cubrir · belleza · crema · puntos negros · oxígeno
  'Cuarentena', // COVID · casa · encierro · pandemia · Zoom · toque de queda · aburrido · 2020
  'Dentista', // diente · muela · caries · brackets · dolor · sillón · anestesia · limpieza
  'Muela', // diente · juicio · dolor · dentista · sacar · caries · masticar · cordal
  'Hueso', // perro · esqueleto · fractura · calcio · profe · difícil · jalar · yeso
  'Volcán', // Misti · lava · Arequipa · erupción · ceniza · montaña · fuego · explotar
  'Arcoíris', // lluvia · colores · sol · unicornio · siete · bandera · olla de oro · cielo
  'Rayo', // tormenta · trueno · luz · McQueen · carro · rápido · Zeus · electricidad
  'Árbol', // hoja · tronco · rama · Navidad · genealógico · familia · sombra · raíz
  'Selva', // Iquitos · calor · mosquito · río · Amazonía · animales · juane · lluvia
  'Karaoke', // cantar · micrófono · desafinar · letra · canción · fiesta · chela · vergüenza
  'Discoteca', // bailar · música · DJ · trago · noche · fila · luces · reggaetón
  'Previa', // fiesta · chela · casa · antes · trago · juntarse · amigos · discoteca
  'Chela', // cerveza · Cristal · Pilsen · espuma · bar · salud · amigos · botella
  'Vino', // uva · copa · misa · tinto · blanco · Ica · Tacama · brindis
  'Hielo', // frío · agua · nieve · ley del hielo · trago · congelador · cubito · patinar
  'Globo', // cumpleaños · inflar · helio · pinchar · aerostático · rojo · Up · payaso
  'Anillo', // compromiso · matrimonio · dedo · oro · diamante · Señor de los Anillos · Saturno · joyería
  'Corazón', // amor · órgano · latido · rojo · anticucho · San Valentín · cardiólogo · naipe
  'Cielo', // azul · nubes · Dios · ángel · paraíso · estrellas · "mi cielo" · avión
  'Navidad', // panetón · regalos · árbol · Papá Noel · chocolatada · 24 de diciembre · nacimiento · pavo
  'Cumpleaños', // torta · velas · regalo · tortazo · globo · fiesta · cumpleañero · canción
  'Piñata', // caramelos · palo · romper · cumpleaños · niños · vendar · sorpresas · payaso
  'Cigüeña', // bebé · París · ave · pañal · embarazo · pico · nido · cuento
  'Serenata', // mariachi · guitarra · ventana · noche · novia · canción · amor · enamorado
  'Cuñado', // hermana · familia · "cuñao" · Navidad · esposo · parrilla · amigo · reunión
  'Lonchera', // colegio · recreo · sándwich · jugo · fruta · táper · mamá · termo
  'Táper', // comida · devolver · mamá · almuerzo · plástico · refrigeradora · tapa · oficina
  'Netflix', // series · películas · cuenta · contraseña · compartir · maratón · "¿sigues ahí?" · sofá
  'Meme', // gracioso · internet · imagen · compartir · WhatsApp · viral · sticker · risa
  'Selfie', // foto · celular · cámara · filtro · Instagram · pose · espejo · sonrisa
  'TikTok', // videos · baile · viral · China · celular · influencer · trend · scroll
  'Facebook', // red social · tíos · Zuckerberg · like · perfil · amigos · Marketplace · cumpleaños
  'Bitcoin', // dinero · cripto · inversión · estafa · digital · minar · millonario · Elon
  'Wifi', // internet · contraseña · señal · router · vecino · conectar · lento · inalámbrico
  'Pádel', // raqueta · pelota · paredes · cancha · moda · tenis · pareja · club
  'Vóley', // red · pelota · saque · Matadoras · colegio · playa · rodilleras · mate
  'Maratón', // correr · 42 km · medalla · zapatillas · series · Netflix · cansancio · carrera
  'Gimnasio', // pesas · músculos · proteína · espejo · entrenador · cardio · gym · sudor
  'Dieta', // lunes · ensalada · kilos · nutricionista · "estoy a dieta" · gimnasio · hambre · balanza
  'Magaly', // chisme · ampay · urracas · televisión · farándula · escándalo · "chibolo" · cámara escondida
  'Urraca', // ave · negra · Magaly · reportero · chisme · cámara · brillante · robar
  'Concierto', // música · entradas · escenario · fila · cantante · reventa · celular · luces
  'Reventa', // entradas · concierto · caro · estafa · Teleticket · Joinnus · fila · revendedor
  'Shakira', // Colombia · caderas · Piqué · "facturan" · Waka Waka · loba · cantante · Barranquilla
  'Marinera', // baile · pañuelo · Trujillo · caballo de paso · norteña · limeña · concurso · sombrero
  'Silla', // sentarse · mesa · ruedas · eléctrica · juego · plástico · respaldo · oficina
  'Toalla', // baño · ducha · playa · secarse · "tirar la toalla" · rendirse · húmeda · piscina
  'Olla', // cocina · olla común · presión · arroz · tapa · fuego · sopa · caliente
  'Cuchara', // sopa · cubierto · "meter la cuchara" · tenedor · cuchillo · opinar · cucharita · azúcar
  'Peluca', // pelo · calvo · disfraz · payaso · rubia · Halloween · cabeza · falsa
  'Bigote', // pelo · labio · Mario · Hitler · Chaplin · papá · barba · peine
  'Abogado', // juicio · juez · corte · derecho · cliente · diablo · terno · defender
  'Ingeniero', // inge · obra · casco · planos · matemáticas · universidad · construcción · calculadora
  'Albañil', // construcción · ladrillo · cemento · obra · piropo · casco · maestro de obra · almuerzo
  'Capitán', // barco · ancla · Garfio · América · escudo · piloto · timón · tripulación
  'Mago', // varita · conejo · sombrero · trucos · magia · cartas · desaparecer · Harry Potter
  'Circo', // payaso · carpa · malabares · elefante · trapecio · león · "esto es un circo" · domador
  'Tinka', // lotería · millonario · números · sorteo · domingo · pozo · suerte · apuesta
  'Bingo', // cartón · números · premio · pollada · abuelita · gritar · sorteo · bolitas
  'UNO', // cartas · colores · +4 · gritar · reversa · amigos · número uno · primero
  'Monopolio', // dinero · casas · hoteles · cárcel · dados · juego · empresa · banco
  'Escondidas', // juego · contar · buscar · niños · esconderse · noche · pareja secreta · pillar
  'Rocoto', // picante · relleno · Arequipa · rojo · ají · cebolla · uchucuta · bravo
  'Tentación', // galleta · chocolate · pecado · dieta · comer · diablo · ceder · prohibido
  'Emoliente', // carrito · esquina · caliente · cebada · linaza · gripe · mañana · señora
  'Café', // taza · mañana · cafetería · Starbucks · negro · leche · color · cita
  'Queso', // ratón · pizza · foto · "di whisky" · parmesano · fresco · huancaína · pan
  'Uva', // vino · pisco · Ica · pasas · doce uvas · Año Nuevo · morada · racimo
  'Chifa', // arroz chaufa · wantán · tallarín · sillao · Capón · domingo · mesa giratoria · kion
  'Ceviche', // pescado · limón · cebolla · leche de tigre · camote · choclo · resaca · Chile
  'Pollería', // pollo · brasa · papas · ensalada · domingo · cuarto de pollo · Norky's · cremas
  'Salchipapa', // salchicha · papas · mayonesa · ketchup · carretilla · bajón · noche · chatarra
  'Menú', // almuerzo · entrada · segundo · refresco · 12 soles · restaurante · celular · opciones
  'Bodega', // barrio · tía · fiado · chela · pan · vinos · almacén · esquina
  'Mesa Redonda', // mercado · Centro de Lima · Navidad · juguetes · rey Arturo · caballeros · reunión · gentío
  'Polvos Azules', // mercado · pirata · celulares · Centro de Lima · barato · películas · maquillaje · ropa
  'Callao', // puerto · chalaco · aeropuerto · primer puerto · La Punta · barrio · mar · ceviche
  'Arequipa', // Misti · rocoto · ciudad blanca · volcán · "república independiente" · chupe · queso helado · sillar
  'Chiclayo', // Papa · León · King Kong · arroz con pato · norte · Señor de Sipán · Lambayeque · calor
  'King Kong', // gorila · Nueva York · Empire State · dulce · manjar · Lambayeque · galleta · Godzilla
  'Inca Kola', // amarilla · gaseosa · Coca-Cola · chifa · sabor nacional · burbujas · peruana · pollo a la brasa
  'España', // conquista · Madrid · Barcelona · madre patria · ceceo · paella · flamenco · Real Madrid
  'Cóndor', // ave · Andes · Colca · "El cóndor pasa" · vuelo · negro · grande · carroña
  'Loro', // verde · hablar · repetir · pirata · plumas · jaula · hablador · papagayo
  'Gallina', // huevo · pollo · cobarde · caldo · corral · cacarear · plumas · gallo
  'Caballo', // caballo de paso · galope · montar · ajedrez · Troya · establo · herradura · jinete
  'Alpaca', // lana · chompa · Puno · llama · suave · sierra · peluche · fibra
  'Cucaracha', // insecto · asco · volar · cocina · chancleta · veneno · sobrevive · canción
  'Tiburón', // mar · dientes · aleta · Jaws · prestamista · Shark Tank · peligro · nadar
  'Vampiro', // Drácula · sangre · colmillos · ajo · noche · murciélago · Crepúsculo · ataúd
  'Cenicienta', // zapato · príncipe · medianoche · calabaza · madrastra · baile · hada · limpiar
  'Pinocho', // mentira · nariz · madera · Gepetto · títere · grillo · crecer · niño
  'Barbie', // muñeca · rosado · Ken · película · Margot Robbie · rubia · casa · juguete
  'Frozen', // Elsa · Anna · Olaf · hielo · "libre soy" · nieve · Disney · congelado
  'Espejo', // reflejo · baño · vanidad · retrovisor · romper · siete años · Blancanieves · selfie
];
