import * as components from './components.js';

const BASE_WORD_ROUTE = `${window.location.origin}/word`;

//Event listener for the search bar
const handleRouting = (e, pathname) => {
  e.preventDefault();
  window.history.pushState({}, pathname, BASE_WORD_ROUTE + pathname);
  loadPage();
};

//This is going to be used to add all of the initial elements to the page
const buildPage = () => {};

//Updates the text of the word elements on the page
const updatePageContent = () => {};

const loadPage = async (searchWord) => {
  //Load loading spinner
  //Get data
  wordData = await getData(id);
  //Update the page content
  updatePageContent();
};

buildPage();
