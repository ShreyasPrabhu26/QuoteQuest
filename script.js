"use strict"

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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