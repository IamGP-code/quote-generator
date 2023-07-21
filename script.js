const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// let apiQuotes = [];

// show newQuote
function newQuote() {
    //Picking a random Wuotes from APIQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    
    // Check if Author field is blank and replace it with 'Qnknown'

    if(!quote.author){
        authorText.textContent = 'Unknown';
    }
    else{
        // authorText.textContent= `${quote.author}`;
    authorText.textContent = quote.author;
    }
// check quoteLength to detremine styling

if(quote.text.length>120){
    quoteText.classList.add('long-quote');
}
else{
    quoteText.classList.remove('long-quote') ;
}

    quoteText.textContent = quote.text;   
    // authorText.textContent = quote.author;

// console.log(quote);
}
// newQuote on click genereate 
newQuoteBtn.addEventListener('click',newQuote );


// Get quotes form API
// async function getQuotes(){
//     const apiURL = 'https://type.fit/api/quotes';
// try{
//     const response =await fetch(apiURL);
//     apiQuotes = await response.json();
//     // console.log(apiQuotes[1])
// newQuote();
// }catch(error){
//     alert("error fetching the quotes");
//     // catch error here 
// }
// }

// getQuotes(); 
newQuote();