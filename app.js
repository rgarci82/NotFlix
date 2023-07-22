const movieTitle = document.querySelector(".input")

function validateSearch(){
    let search = (movieTitle.value);
    if(search == null || search.trim() === ''){
        alert("Please enter a movie title");
        return false;
    }
    window.localStorage.setItem('movietitle', search);
}

async function loadMovie(){
    let movieName = localStorage.getItem('movietitle');
    const movies = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=fa83a96e&`);
    const moviesData = await movies.json();
    if(movieName === null){
        document.querySelector('.movie__searched').innerHTML += `Search For a Title`
    }else{
        movieName = movieName[0].toUpperCase() + movieName.slice(1);
        document.querySelector('.movie__searched').innerHTML += `Searched for: ${movieName}`
    }
    const moviesWrapper = document.querySelector('.movies')
    moviesWrapper.innerHTML = moviesData.Search.map((movie) =>  `<div class="movie">
            <img class="movie__img" src=${movie.Poster}>
            <h3 class="movie__title">${movie.Title}</h3>
            <p class="movie__year">${movie.Year}</p>
        </div>`
).join("");

}

loadMovie();
