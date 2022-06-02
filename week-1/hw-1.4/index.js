const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

const explanation = document.getElementById("explanation");
const form = document.getElementsByTagName("form")[0];
const input = document.getElementById("input-form");
const showHint = document.getElementById("show-hint");
const hint = document.getElementById("hint");

const movie = chooseRandomMovie();
console.log(movie);
   
function chooseRandomMovie() {
    let randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
}

function fillInMovieElements() {
    explanation.innerHTML = movie.explanation;
}

function handleSubmit() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input.value === movie.title) {
            alert("You won! The correct answer was " + movie.title + ". Please refresh the page to play again.");
            input.value = "";
            document.location.reload();
        } else {
            alert("Wrong answer, please try again.");
        }
    });
}

function handleShowHint() {
    showHint.addEventListener("click", function(event) {
        event.preventDefault();
        if (hint.style.display != "visible") {
            hint.innerHTML = movie.hint;
            hint.style.display = "visible";
        }
    });
}

fillInMovieElements();
handleShowHint();
handleSubmit();

// fillInMovieElements();