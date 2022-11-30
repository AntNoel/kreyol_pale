import * as components from './components';
import { searchInputComponent } from './components';
const BASE_WORD_ROUTE = `${window.location.origin}/word`;
const URLS = {
  BASE_WORD_ENDPOINT: '/api',
};
//Event listener for the search bar
const handleRouting = (e) => {
  const pathname = `/${e.target.value}`;
  e.preventDefault();
  window.history.pushState({}, pathname, BASE_WORD_ROUTE + pathname);
  loadPage(e.target.value);
};

//This is going to be used to add all of the initial elements to the page
// const buildPage = () => {
//   document.body.appendChild(components.searchInputComponent(handleRouting));
// };

//Updates the text of the word elements on the page

const getData = async (search_word) => {
  try {
    const response = await fetch(`${URLS.BASE_WORD_ENDPOINT}/${search_word}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    // console.log(error);
  }
};

const initialPageSetup = () => {
  //Add event listener to search bar
  document.querySelector('.search-input').addEventListener('search', (e) => {
    handleRouting(e);
  });
};

const updatePageContent = (word_obj) => {
  if (word.word_obj.detail) {
    document.querySelector(
      '.word-heading'
    ).textContent = `This word doesn't exist...`;
  }
  const formatted_word_variation_string = word_obj.variations.replaceAll(
    ' ',
    ','
  );
  document.querySelector('.word-heading').textContent = `${word_obj.name}${
    formatted_word_variation_string ? ',' + formatted_word_variation_string : ''
  }`;
  document.querySelector('.word-definition').textContent = word_obj.definition;
  document.querySelector('.word-example').textContent = word_obj.examples;
  document.querySelector('.word-phrase').textContent = word_obj.phrases;
};

const loadPage = async (searchWord) => {
  //Load loading spinner
  //Get data
  const wordData = await getData(searchWord);

  //Update the page content
  updatePageContent(wordData);
};

const initialPageLoad = async () => {
  const word = window.location.pathname.split('/').pop();
  const wordData = await getData(word);
  updatePageContent(wordData);
};

initialPageSetup();
initialPageLoad();
