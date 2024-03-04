//fetch("https://swapi.dev/api/films/").then(res => res.json()).then(elem => console.log(elem.results[0].title)) --> "A New Hope"

// Gráfica 1
fetch("https://swapi.dev/api/films/")
                                .then(res => res.json())
                                .then(element => {
                                    let films = []; // --> ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"]
                                    for (let i = 0; i < element.results.length; i++) {
                                        films.push(element.results[i].title)
                                    };

                                    let years = [];
                                    let yearsArray = []; // Es necesario crear este segundo array porque el eje "Y" solo trabaja con arrays de arrays
                                    for (let i = 0; i < element.results.length; i++) {
                                        yearsArray.push((element.results[i].release_date).slice(0, 4)) // El .slice solo recoge el año de la fecha entera
                                    };
                                    years.push(yearsArray)

                                    new Chartist.Line('.grafica1', {
                                        labels: films, // Aqui me pilla el array
                                        series: years // Aquí me pilla el array de arrays
                                    }, {
                                        fullWidth: true,
                                        chartPadding: {
                                            right: 90,
                                            bottom: 10
                                        }
                                    });
                                })

fetch("https://swapi.dev/api/people/")
                                .then(res => res.json())
                                .then(element2 => {
                                    let characters = [];
                                    for (let i = 0; i < element2.results.length; i++) {
                                        characters.push(element2.results[i].name)
                                    };

                                    let numFilms = [];
				                    let numFilmsArray = [];
                                    for (let i = 0; i < element2.results.length; i++) {
                                        let counter = (element2.results[i].films).length
                                        numFilmsArray.push(counter)
                                    };
                                    numFilms.push(numFilmsArray)

                                    var data = {
                                        labels: characters,
                                        series: numFilms
                                      };
                                      
                                      var options = {
                                        seriesBarDistance: 10
                                      };
                                      
                                      var responsiveOptions = [
                                        ['screen and (max-width: 640px)', {
                                          seriesBarDistance: 5,
                                          axisX: {
                                            labelInterpolationFnc: function (value) {
                                              return value[0];
                                            }
                                          }
                                        }]
                                      ];
                                      
                                      new Chartist.Bar('.grafica2', data, options, responsiveOptions);
                                })
                                
// Obtengo array con los personajes
/* fetch("https://swapi.dev/api/people/")
                                .then(res => res.json())
                                .then(element2 => {
                                    let characters = [];
                                    for (let i = 0; i < element2.results.length; i++) {
                                        characters.push(element2.results[i].name)
                                    };
                                })

// Obtengo array con array de nº pelis en las que ha salido cada uno
fetch("https://swapi.dev/api/people/")
                                .then(res => res.json())
                                .then(element2 => {
                                    let numFilms = [];
				                    let numFilmsArray = [];
                                    for (let i = 0; i < element2.results.length; i++) {
                                        let counter = (element2.results[i].films).length
                                        numFilmsArray.push(counter)
                                    };
                                    numFilms.push(numFilmsArray)
                                }) */




// He conseguido un array con los años de publicacion de cada peli
/* fetch("https://swapi.dev/api/films/")
                                .then(res => res.json())
                                .then(element => {
                                    let years = [];
                                    for (let i = 0; i < element.results.length; i++) {
                                        years.push((element.results[i].release_date).slice(0, 4)) // El .slice solo recoge el año de la fecha entera
                                    } 
                                    return years
                                }) */

// He obtenido el fecth de todas las páginas que contienen personajes de Star Wars
/* Promise.all([
    fetch("https://swapi.dev/api/people/").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=2").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=3").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=4").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=5").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=6").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=7").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=8").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=9").then((res) => res.json())
    ]).then(element2 => console.log(element2)) */

//He conseguido acceder al nombre de un personaje
/* Promise.all([
    fetch("https://swapi.dev/api/people/").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=2").then((res) => res.json()),
  fetch("https://swapi.dev/api/people/?page=3").then((res) => res.json()),
  fetch("https://swapi.dev/api/people/?page=4").then((res) => res.json()),
  fetch("https://swapi.dev/api/people/?page=5").then((res) => res.json()),
  fetch("https://swapi.dev/api/people/?page=6").then((res) => res.json()),
  fetch("https://swapi.dev/api/people/?page=7").then((res) => res.json()),
  fetch("https://swapi.dev/api/people/?page=8").then((res) => res.json()),
  fetch("https://swapi.dev/api/people/?page=9").then((res) => res.json())
  ]).then(element2 => console.log(element2[0].results[0].name)) // --> Luke Skywalker */

  /* Promise.all([
    fetch("https://swapi.dev/api/people/").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=2").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=3").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=4").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=5").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=6").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=7").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=8").then((res) => res.json()),
    fetch("https://swapi.dev/api/people/?page=9").then((res) => res.json())
    ])
        .then(element2 => {
            let characters = []
            for (let i = 0; i < element2.length; i++) {
                characters.push(element2[i].results[i].name)
            }
            return characters
        }) */