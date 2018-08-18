$(document).ready(function(){
    
    let favoriteMovie = (movie = 'The Room', name = 'world') => console.log(`My name is ${name} & my favorite movie is ${movie}`);

    favoriteMovie();
    favoriteMovie('Leprechaun 6: Back 2 tha Hood');
    favoriteMovie('Leprechaun 6: Back 2 tha Hood', 'Andrew');

     let getFirstName = (name) => {
        return name.split(' ')[0];
     }

     console.log(`getFirstName: ${getFirstName('Andrew Cartwright')}`);

     let getFirstNameConcise = name => name.split(' ')[0];

     console.log(`getFirstNameConcise: ${getFirstNameConcise('Andrew Cartwright')}`);

     let doMath = (num1, num2) => ({ power: num1 ** num2, product: num1 * num2 });

     console.log(`Power: ${doMath(2,6).power}\nProduct: ${doMath(2,6).product}`);


     function biography(name, location, favFood) {
        console.log(`Name: ${name}\nLocation: ${location}\nFavorite food: ${favFood}`);
     }

     let me = ['Andrew', 'Birmingham', 'Nashville Hot Chicken'];
     biography(...me);


     function doSomeWork(cats) {
        let newString = [...cats];
        newString.forEach((char) => {
            console.log(char);
        });
     }

     let andrew = 'Andrew';
     doSomeWork(andrew);

});