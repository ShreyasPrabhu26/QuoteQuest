"use strict"

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote() {
    //Get the Quote Data
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const author = quote?.author ?? "Unknown";

    //Check if Quote Lenght is large and change the style
    (quote.text.length > 50) ? quoteText.classList.add("long-quote") : quoteText.classList.remove("long-quote")

    //Set Dom Fields
    quoteAuthor.textContent = author;
    quoteText.textContent = quote.text;
}

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

getQuotes();