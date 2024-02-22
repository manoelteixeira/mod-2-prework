const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const respone = await fetch(url);
  var data = await respone.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweet() {
  const baseLink = "https://twitter.com/intent/tweet?text=";
  const quoteText = quote.innerHTML;
  const quoteAuthor = author.innerHTML;
  const link = baseLink + quoteText + " - - - by " + quoteAuthor;
  window.open(link, "Teweet Window", "width=600, height=300");
}

getQuote(apiUrl);
