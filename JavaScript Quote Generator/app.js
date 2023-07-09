const btn = document.getElementById("button-box").children[0];
const quoteEl = document.getElementById("quote");
const author = document.getElementById("author");
const defaultQuote = {
    quote: "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",
    author: "Abraham Lincoln"
}
const quote1 = {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
}
const quote2 = {
    quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama"
}
const quote3 = {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi"   
}
const quote4 = {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
}
const quote5 = {
    quote: "At his best, man is the noblest of all animals; sseparated from law and justice he is the worst",
    author: "Aristotle"
}

const quotes = [defaultQuote, quote1, quote2, quote3, quote4, quote5];

let prev;
let currentQuote = quotes[0];

function changeQuote() {
    let randomNum = Math.floor(Math.random() * quotes.length);

    if(prev === randomNum) {
        while(prev === randomNum) {
            randomNum = Math.floor(Math.random() * quotes.length);
        }
    }

    quoteEl.innerText = quotes[randomNum].quote;
    author.innerText = quotes[randomNum].author;


    prev = randomNum;
}

btn.onclick = changeQuote;