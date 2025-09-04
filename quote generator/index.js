const api_url = "https://dummyjson.com/quotes?limit=0&skip=0";
const quote = document.getElementById("quote");
const author = document.getElementById("author_name");
const nextButton = document.getElementById("nextBtn");

//getting the data
async function getQuote(api_url) {
    const response = await fetch(api_url);
    var data = await response.json();
    console.log(data);

    // Select a random quote
    const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];

    // change the content
    quote.innerHTML = `"${randomQuote.quote}"`;
    author.innerHTML = `- ${randomQuote.author}`;
}

getQuote(api_url);

// Add event listener for the 'Next' button
nextButton.addEventListener("click", () => {
    getQuote(api_url);
});