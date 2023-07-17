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
    const movieName = localStorage.getItem('movietitle');
    const movies = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=fa83a96e&`);
    const moviesData = await movies.json();
    console.log(moviesData);
    if(movieName === null){
        //document.querySelector('.test').innerHTML += `<h3>empty</h3>`
    }else{
        //document.querySelector('.test').innerHTML += `<h3>${movieName}</h3>`
    }
}

loadMovie();
