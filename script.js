"use strict"

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById("loader");

//Event Listner
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);


//Fetching Quotes Data
let apiQuotes = [];
let attitudeQuotes = [];
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // attitudeQuotes = apiQuotes.filter((quote) => quote.tag.includes("attitude"))
        newQuote();
    }
    catch (error) {
        console.log(error);
    }
}

function newQuote() {
    showLoadingSpin();
    //Get the Quote Data
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const author = quote?.author ?? "Unknown";

    //Check if Quote Lenght is large and change the style
    (quote.text.length > 50) ? quoteText.classList.add("long-quote") : quoteText.classList.remove("long-quote")

    //Set Dom Fields
    quoteAuthor.textContent = author;
    quoteText.textContent = quote.text;
    removeLoadingSpin();
}

function showLoadingSpin() {
    quoteContainer.classList.add("hide-element");
    loader.classList.remove("hide-element");
}

function removeLoadingSpin() {
    quoteContainer.classList.remove("hide-element");
    loader.classList.add("hide-element");
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${quoteText.textContent}" - ${quoteAuthor.textContent}`;

    //Opens new tab with tweet Component
    window.open(twitterUrl, '_blank');
}

//On Load
getQuotes();
