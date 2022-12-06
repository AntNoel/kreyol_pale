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

const handleLike = async (e, word_obj) => {
  //Toggle the clicked class
  const button = e.target;
  console.log('Adding the secondary button class');
  if (button.classList.contains('btn-secondary')) {
    button.classList.remove('btn-secondary');
    button.classList.add('btn-light');
  } else {
    button.classList.remove('btn-light');
    button.classList.add('btn-secondary');
  }

  //If the button has the click class send a http post request to the server to increment the likes by one
  //If the button doesn't have the clicked class send a http post request to the server to decrement the likes by one
  const likes_amount = button.classList.contains('btn-secondary') ? 1 : -1;

  const new_likes_amount = await sendLike(word_obj, likes_amount);
  //Update likes button
  document.querySelector(
    '.likes-button'
  ).textContent = `${new_likes_amount} 👍`;
};

//This is going to be used to add all of the initial elements to the page
// const buildPage = () => {
//   document.body.appendChild(components.searchInputComponent(handleRouting));
// };

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const sendLike = async (search_word_obj, likes_amount) => {
  let csrftoken = getCookie('csrftoken');

  try {
    const response = await fetch(
      `${URLS.BASE_WORD_ENDPOINT}/update/${search_word_obj.id}`,
      {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },

        body: JSON.stringify({ likes: likes_amount }),
      }
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse.likes;
  } catch (error) {
    // console.log(error);
  }
};

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
  console.log(word_obj);
  if (word_obj.detail) {
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
  document.querySelector('.likes-button').textContent = `${word_obj.likes} 👍`;

  //Add click event listener to likes and favorite buttons
  document.querySelector('.likes-button').addEventListener('click', (e) => {
    handleLike(e, word_obj);
  });
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
