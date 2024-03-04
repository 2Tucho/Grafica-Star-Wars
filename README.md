# Grafica-Star-Wars
Primeros contactos para hacer gráficas con librerias y JS

Ejercicio - Gráficas con Star Wars ⚔️ 🔫

Practicaremos cómo crear gráficas con las librerías vistas en clase ------> SIMPLE LINE CHART (gráfica)

1. Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
    - En el eje X el nombre de la película --> .results[i].title
    - En el eje Y año de publicación --------> .results[i].release_date (aparece la fecha exacta y solo queremos el año)
API ENDPOINT --> https://swapi.dev/api/films/

2. Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver -----> BI-POLAR BAR CHART (gráfica)
    - En el eje X el nombre del personaje ----------------------------> .results[i].name
    - En el eje Y el número de películas en las que ha participado. --> .results[i].films  [.length = saber el total]
API ENDPOINT --> https://swapi.dev/api/people/

Para pintar todo esto usaremos Chartist Link a la docu: Chartist


Pasos a seguir:
    - [X] Creo un par de <div>, uno para cada parte del ejercicio
    - [X] Entro en la api de Star Wars para localizar la información que precisa cada tarea
    - [X] Me meto en Chartist y busco una gráfica de líneas que me mole
    - [X] Conseguir el nombre de las pelis
    <!-- let films = []
                                    for (let i = 0; i < element.results.length; i++) {
                                        films.push(element.results[i].title) 
                                    }
                                    return films -->
    - [X] Conseguir solo el año de publicación de las pelis
    <!-- yearsArray.push((element.results[i].release_date).slice(0, 4)) -->
    - [X] Hago fetch de las rutas que toquen de la api
    - [X] Copio la gráfica desde su cdn, el código en mi scrip.js y lo anexo al <div> que le toque
    - [X] Acabada tarea 1
    - [] No aparecen todos los personajes en https://swapi.dev/api/people/, vienen luego en páginas como https://swapi.dev/api/people/?page=2 y así hasta la 9. Debería hacer un fetch de todas y guardar todos los personajes en un mismo array para el eje "X"
    - [] Hay personajes que no aparecen en ninguna peli, habría que meter un if(element2.results[i].films = Null/U)
