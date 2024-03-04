//fetch("https://swapi.dev/api/films/").then(res => res.json()).then(elem => console.log(elem.results[0].title)) --> "A New Hope"

fetch("https://swapi.dev/api/films/")
                                .then(res => res.json())
                                .then(element => {
                                    let films = []; // --> ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"]
                                    for (let i = 0; i < element.results.length; i++) {
                                        films.push(element.results[i].title) 
                                    };
                                    let years = [];
                                    for (let i = 0; i < element.results.length; i++) {
                                        years.push((element.results[i].release_date).slice(0, 4)) // El .slice solo recoge el año de la fecha entera
                                    } 
                                })


// Grafica 1
new Chartist.Line('.grafica1', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
    ]
}, {
    fullWidth: true,
    chartPadding: {
        right: 40
    }
});


// Grafica 2
var data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
};

var options = {
    high: 10,
    low: -10,
    axisX: {
        labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
        }
    }
};

new Chartist.Bar('.grafica2', data, options);

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