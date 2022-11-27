import * as components from './components';
import { searchInputComponent } from './components';
const BASE_WORD_ROUTE = `${window.location.origin}/word`;
const URLS = {
  BASE_WORD_ENDPOINT: '/api',
};
//Event listener for the search bar
const handleRouting = (e, pathname) => {
  e.preventDefault();
  window.history.pushState({}, pathname, BASE_WORD_ROUTE + pathname);
  loadPage();
};

//This is going to be used to add all of the initial elements to the page
// const buildPage = () => {
//   document.body.appendChild(components.searchInputComponent(handleRouting));
// };

//Updates the text of the word elements on the page
const updatePageContent = () => {};

const getData = async (search_word) => {
  try {
    const response = await fetch(`${URLS.BASE_WORD_ENDPOINT}/${search_word}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    // console.log(error);
  }
};

const loadPage = async (searchWord) => {
  //Load loading spinner
  //Get data
  const wordData = await getData();
  //Update the page content
  updatePageContent();
};

const initialPageSetup = () => {
  //Add event listener to search bar
  document
    .getElementsByClassName('search-input')
    .addEventListener('search', (e) => {
      console.log(e);
    });
};

const initialPageLoad = async () => {
  const word = window.location.pathname.split('/').pop();
  const wordData = await getData(word);
  console.log('WordData', wordData);
};

initialPageSetup();
initialPageLoad();
