/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Nabila Taufiq
******************************************/

/*** 
  This is an array of 5 quotes.  
***/
var quotes = [
  {quote: 'Would you like me to give you a formula for success? It’s quite simple, really. Double your rate of failure.',
  source: 'Thomas Watson',
  category: 'Inspirational'
  },
  {quote: 'Life isn’t about finding yourself. Life is about creating yourself. ',
  source: 'George Bernard Shaw',
  },
  {quote: 'Be kind, for whenever kindness becomes part of something, it beautifies it. Whenever it is taken from something, it leaves it tarnished.',
  source: 'Prophet Muhammad (peace be upon him)',
  citation: 'https://sunnah.com/',
  category: 'Religious'
  },
  {quote: 'Indeed, Allah will not change the condition of a people until they change what is in themselves.',
  source: 'Qur’an 13:11',
  },
  {quote: 'Life is like a tree, you just have to keep growing',
  source: 'Nabila Taufiq',
  year: '2019'
  },
];




/***
 This is a function to select quotes randomly.  
  - Variable randomNumber selects a index value between 0 and the length of the quotes array.  
  - Then it returns a random quote from the quotes array using that index value that the variable randomNumber generated.
***/

function getRandomQuote(){
  var randomNumber = Math.floor (Math.random() * quotes.length);
  return quotes[randomNumber];
}

console.log(getRandomQuote());




/***
 This printQuote function prints the randomly selected quote, along with source.  If it has citation or year, it includes that too.
 - the random quote is stored into the variable result.  
 - then I created a variable named message to store the html string. To build the message:
    - In the beginning I started off with an empty string, because I have nothing to add to the message yet.
    - then I selected the quote from the result (which is the random quote that was selected from the quotes array), and added it to the message.  
      I closed off the p tag as the quote section has different formatting.
    - then I selected the source from the result, and added it to the message variable.
    - I used a conditional statement to check that if the result has a citation property, then add it to the message.  
    - I used another conditional statement to check that if the result has a year property, then add it to the message.
    - I used another conditional statement to check that if the result has a category property, and then concatenated it to the message string as well.
    - After that I used the p tag to close the message, so source, citation, year and category will have same formatting.  
  - Then I selected the 'quote-box', and set the innerHTML to the message that prints the quote, source, citation, year and category.
  
***/

function printQuote(){
  var result = getRandomQuote();
  var message = "";
  var color = random_bg_color();
  message += '<p class="quote">'+ result.quote + '</p>';
  message += '<p class="source">' + result.source ;
  
  if ( result.citation ){
    message += '<span class="citation">' + result.citation + '</span>'
  }
  if ( result.year ){
    message += '<span class="year">' + result.year + '</span>'
  }
  if (result.category){
    message += ", " + '<span class="category">'+ result.category + '</span>';

  }
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;
  
}

/***
  Then I used setinterval() method to call the printQuote function every 20 seconds.
***/

setInterval(function(){printQuote()}, 20000);



/*
- Below I added another function that changes the background color.  
- I created variables named x, y, z.  I set those variables equal to a function that finds a random number between 0 and 255.
- Then I created another variable named bgColor, and set it equal to the rgb() function, which uses the randomly generated numbers to come up with a random color.
- Then I am setting the background color equal to the background color that was randomly created. 
- When we click the "Show another quote" button, then the event listener is triggered, and it will call the random_bg_color function.

  
*/

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

  document.body.style.background = bgColor;
  document.getElementById('loadQuote').addEventListener("click", random_bg_color, false);

  }

random_bg_color();



/***
  When we click the "Show another quote" button, then event listener is triggered, and it will call the printQuote function. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/***
  I would like this project to meet exceeds expectation.  But it is okay if I just meet expectation.  
***/