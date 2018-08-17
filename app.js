$(document).ready(function(){
    
    function favoriteMovie(movie = 'The Room', name = 'world') {
        console.log(`My name is ${name} & my favorite movie is ${movie}`);
    }

    favoriteMovie();
    favoriteMovie('Leprechaun 6: Back 2 tha Hood');
    favoriteMovie('Leprechaun 6: Back 2 tha Hood', 'Andrew');
});