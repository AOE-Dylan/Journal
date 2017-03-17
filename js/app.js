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
    "journalEntry" : "1",
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

/*

Create a function named showALL
Pass one parameter (data)

inside the function
Inside a variable:
Iterate through data
for each object create elements
  create parent div#entry1
  create a h1 header
  append/add inner.HTML object.title to each one.
  Repeat for every value
  append all elements + values to the parent div

*/