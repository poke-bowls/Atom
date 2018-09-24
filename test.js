// Test Atom Runner with Basic arrow function.

console.log("I have the POWER!");

var adventures = [];
var recentAdventure = "Hello World";

var addStory = story => {
  adventures.push(story);
  return story;
}

var tellRecentStory = adventures => {
  return adventures[adventures.length - 1];
}

addStory(recentAdventure);
tellRecentStory(adventures);

console.log(tellRecentStory(adventures));
