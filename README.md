# Pokedex
En este proyecto podrás encontrar la prueba de front-end para la empresa onestic.

- url repositorio: https://github.com/arvodb/onesticFront
- url gh-pages: https://arvodb.github.io/onesticFront/ => //*Mozilla Firefox recomendado*

# Introducción

Hola! Me llamo Dani y estoy encantado de poder enseñaros mi pequeña **POKéDEX**.
Me gustaría comentar simplemente, que he disfrutado enormemente de este *micro-proyecto*. Ha sido divertido y reconfortante, a la vez que frustrante por no poder dejar más pulidos algunos aspectos. Sin embargo, estoy en exámenes y creo que ya he invertido suficiente tiempo para que podáis ver como pienso y como llevo a cabo mis soluciones a la hora de desarrollar.

# Despliegue

1. Clonar el proyecto => git clone https://github.com/arvodb/onesticFront.git
1. Ir a la ruta **/pokedex** dentro del repositorio.
2. Desde consola lanzar *npm install* (*puede tardar ~1 minuto*)
3. Desde consola lanzar *ng serve*
4. Desde el navegador (*he usado mozilla aunque puedes usar tu navegador favorito*) acceder a: localhost:4200

- *Quizás quieras lanzarlo primero antes de seguir leyendo*
- ¡O quizás quieres hecharle un vistazo ya! => https://arvodb.github.io/onesticFront/

# Herramientas

Para el desarrollo se ha utilizado:
- Adobe xd => Maquetación y prototipado.
- Visual Studio Code => como mi IDE predilecto.
- Postman => Para navegar y guardar las peticiones a la API.
- PokeApi => He pasado más tiempo del que debería dentro de la documentación.
- QuickType => Para convertir a interface las respuestas de la API.
- Angular => Para el manejo de vistas y componentes.
- Bootstrap => Me gusta tener el control de mis clases CSS, pero como mínimo el sistema de columnas y padding/margin es muy cómodo.



# Desarrollo

Os dejo a continuación una pequeña lista de como planteé el orden de trabajo:

1. Realizar un mockup de la app.
2. Organización de las diferentes consultas.
3. Desarrollar interfaces necesarias para las consultas a la API.
4. Conceptualizar como van a organizarse las diferentes vistas y componentes.
5. Desarrollar diseño bootstrap HTML / CSS
6. Desarrollar componentes / vistas necesarias.
7. Guardar pokemon en favoritos.
8. Paginación. Al volver del detail queremos montener la pagina que estábamos.
9. Darkmode.

En cuanto al diseño quise hacer algo sencillo e intuitivo. Fue prioritario que pudiese ser fácilmente responsive, para que no diese muchos problemas a la hora de desarrollarlo. Sin embargo he de decir que he pecado de dedicarle más tiempo del que era necesario.

Aprendí lo que es una API hace un mes y medio, y hace 2 semanas que aprendí a hacer consultas desde Angular. Sin duda esta era mi preocupación principal. Es por eso que quise dedicar un tiempo a tener claro como iba a sacar la información que necesitaba para mi **POKéDEX**.

# Comentarios de la prueba

Mis mayores dificultades no fueron implementar **la paginación, el listado de favoritos o el modo oscuro**, si no que todas estas características se mantuviesen al recargar o moverse entre páginas. Finalmente todo fue tan fácil como almacenar todas esas variables en el localStorage.

Otra de las partes que fue un quebradero de cabeza, es el **listado de favoritos**. Yo tan solo pedía a la api la información que se ve en pantalla. Por ello, tuve que hacer una modificación para que buscase hasta el pokemon con el id más alto. Esto hace que la aplicación se vuelva lenta al listar un pokemon que tiene un id muy alto.

# A mejorar ó Sin terminar

Indagar en el Testing, no lo he hecho nunca *quitando de algúna cosas vista en clase* y contaba con un tiempo limitado así que decidí dejarlo de lado.

El responsive de la web es regulero. Por algún motivo, los sprite pixel se ven peor que en los que yo descargué desde la documentación. Ni siquiera he intentado meterme a adaptar una versión de movil y en tamaños pequeños hay que pulir cosas.

La limpieza del código es muy mejorable para lo que suelo hacer. Me gusta darle mimo y generar un código legible a la par que eficiente. Creo que empecé de esta forma y al final se me fue de las manos.

Me gustaría haber investigado sobre la forma más eficiente de manejar los datos. Mi propuesta ha sido pedir a la API sólo los datos que voy a necesitar pensando que de esta forma evitaría que tardase en cargar. Si no tratas con cariño la API quizás se solapan las consultas y no muestra la información correctamente.

Indagar en usar un método de búsqueda para los favoritos más eficiente.

Se queda sin terminar método de despliegue de la aplicación mediante dockerfile. Aunque hice algunas pruebas, no he querido implementarlo por que no conseguí que se desplegase de forma eficiente y al final llevaba más tiempo que visualizandolo por *npm install ; ng serve* 

Pulir, pulir y pulir. Siento que he dejado muchos detalles a mejorar:
 - Formatear datos de pesos y medidas.
 - Formatear imágenes *no-pixel* mal encajadas.
 - Verificar el correcto funcionamiento en todos los navegadores.
 - Terminar un sistema de búsqueda por id o diferentes filtros.
 - Diseño responsive, lo siento, es deformación profesional como diseñador gráfico. Me duele en alma ver los textos que salen de sus contendores, imágenes que no se adaptan bien.. etc.
 
 

# Conclusión

Si has llegado hasta aquí, gracias por leer esta extensa memoria. No se resumir, no es uno de mis fuertes. Muchas gracias por la oprtunidad. Ha sido una experiencia gratificante y que me ha ayudado mucho a afianzar mis conocimientos y promover mis inquietudes sobre las tecnologías involucradas en frontend. Sin duda es un mini-proyecto que terminaré de pulir en profundiad cuando tenga tiempo

Espero que os haya gustado mi propuesta, le he dedicado especial mimo.
