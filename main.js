
let quotes = document.getElementById('quotes');
let author = document.getElementById('author');
let butn = document.getElementById('butn');
let Tweet = document.getElementById('tweet');
let quote = "";
let auth = "";

const Quotes = async() =>{
    const api = "https://api.quotable.io/random";
    fetch(api).then((data) => data.json()).then((item) => {
        quotes.innerText = item.content;
        author.innerText = item.author;
        quote = item.content;
        auth = item.author;
    });
};

const tweetquote = () => {
    let post = `https://twitter.com/intent/tweet?text=${quote} ${auth}`;
    window.open(post);
};


window.addEventListener("load", Quotes);
butn.addEventListener("click", Quotes);
Tweet.addEventListener("click", tweetquote);