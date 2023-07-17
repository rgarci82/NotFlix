const movieTitle = document.querySelector(".input")

function validateSearch(){
    let search = (movieTitle.value);
    if(search == null || search.trim() === ''){
        alert("Please enter a movie title");
        return false;
    }
    window.localStorage.setItem('movietitle', search);
}

function loadMovie(){
    if(localStorage.getItem('movietitle') === null){
        document.querySelector('.test').innerHTML += `<h3>empty</h3>`
    }else{
        document.querySelector('.test').innerHTML += `<h3>${localStorage.getItem('movietitle')}</h3>`
    }
}

loadMovie();
