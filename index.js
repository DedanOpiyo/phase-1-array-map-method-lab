const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

  const titleCased = () => {
    return tutorials.map(tutorial => {
      return tutorial
        .split(' ') // Split the string(Each title) into array of words.
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Get the first letter(Character at a '0' index ) of each word. Capitalize it. Concatenate the rest of the word: word.slice(1)
        .join(' '); // Join words back into a sentence
    });
  };


// Returning at every function level:
/*return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => { // Through Chaining...
      return word.charAt(0).toUpperCase() + word.slice(1); // word.slice(1).toLowerCase();
    }).join(' ');
  }); */

document.getElementById('map_result').innerHTML = titleCased() // This doesn't display correctly. Why?
console.log(titleCased());