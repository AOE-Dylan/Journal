console.log("Reality Check");


//start of json

/*
var jsonDataBody = [{
    "header" : {
      "img" : {
        "src" : "https://avatars0.githubusercontent.com/u/20864706?v=3&s=460"
        "height" : "300px"  
        "width" : "300px"
      },
      {

      }
    }
  },
  {
    "div" : {
      "class" : "container"
    }
  }
];
*/

//start of converting entries into json

/*
var firstJsonEntry = [ {
  "div" : {
    "id" : "Titles"
    {
      "h3" : "My First Entry",
      "h5" : "8-15-16"
    }
  },
  "div" : {
    "class" : "Entries content"
    {

    }
  }
}
];
*/

var simplifiedJSON = [
  {
    "journalEntry" : "10",
    "date" : "8-15-16",
    "title" : "My First Entry",
    "content" : 
      {
      "b" : "Why I took this class",
      "p" : "I took this class because I was interested in the coding and programming skills. I also saw a presentation in the library about what they do with code that also drove my interest"
      },
    "img" : undefined
  }
];

console.log(simplifiedJSON);