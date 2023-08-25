var quoteContainer = document.getElementById("quote-cont");
var quote = document.getElementById("quote")
var author = document.getElementById("author")

function getRandomQuote() {
  quoteContainer.classList.add("opacity-100")
  var rand = Math.random()*randomquotes.length
  console.log(rand);
  var i = Math.floor(rand)
  quote.innerHTML=randomquotes[i].quote;
  author.innerHTML = randomquotes[i].author

}

var randomquotes = [
  {
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    author: "― Marilyn Monroe",
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: "― Albert Einstein",
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    author: "― Bernard M. Baruch",
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    author: "― Mae West",
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    author: "― Mark Twain",
  },
  {
    quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself”`,
    author: "― C.S. Lewis, The Four Loves",
  },
  {
    quote: `“Always forgive your enemies; nothing annoys them so much.”`,
    author: "― Oscar Wilde",
  },
];
