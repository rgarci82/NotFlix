const movieTitle = document.querySelector(".input")

function validateSearch(){
    let search = (movieTitle.value);
    if(search == null || search.trim() === ''){
        alert("Please enter a movie title");
        return false;
    }
    window.localStorage.setItem('movietitle', search);
}

async function loadMovie(filter){
    let movieName = localStorage.getItem('movietitle');
    const movies = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=fa83a96e&`);
    const moviesData = await movies.json();
    const moviesSearh = moviesData.Search;

    if(filter === 'NEW_TO_OLD'){
        moviesSearh.sort((a,b) => b.Year - a.Year);
    }

    else if(filter === 'OLD_TO_NEW'){
        moviesSearh.sort((a,b) => a.Year - b.Year);
    }

    const moviesWrapper = document.querySelector('.movies')
    moviesWrapper.innerHTML = moviesSearh.map((movie) =>  `<div class="movie">
        <figure class="movie__img--wrapper">
            <img class="movie__img" src=${movie.Poster}>
        </figure>
            <h3 class="movie__title">${movie.Title}</h3>
            <p class="movie__year">${movie.Year}</p>
        </div>`
).join("");

}

function loadSearch(){
    let movieName = localStorage.getItem('movietitle');
    if(movieName === null){
        document.querySelector('.movie__searched').innerHTML += `Search For a Title`
    }else{
        movieName = movieName[0].toUpperCase() + movieName.slice(1);
        document.querySelector('.movie__searched').innerHTML += `Searched for: ${movieName}`
    }
}

function filterMovies(event){
    loadMovie(event.target.value)
}

loadMovie();
loadSearch();
