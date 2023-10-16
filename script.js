

const btnEle = document.getElementById("btn");
const quoteEle = document.getElementById("quote");
const authorEle = document.getElementById("author");
btn.addEventListener("click",getQuote);

const apiUrl = "http://api.quotable.io/random";

async function getQuote(){

    try {
        btnEle.innerText = "Loading...";
        btnEle.disabled = true;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEle.innerText = quoteContent;
        authorEle.innerText = "~" + quoteAuthor;
        btnEle.innerText = "Get a quote";
        btnEle.disabled = false;
        console.log(data);

    } catch (error) {
    //    console.log(error);
       quoteEle.innerText = "An erroe happend , try again later";
       authorEle.innerText = "An error happend";
       btnEle.innerText = "Get a quote";
       btnEle.disabled = false;
    }

   
}

