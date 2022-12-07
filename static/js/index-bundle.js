/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./front-end/components.js":
/*!*********************************!*\
  !*** ./front-end/components.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchInputComponent\": () => (/* binding */ searchInputComponent),\n/* harmony export */   \"wordContainerComponent\": () => (/* binding */ wordContainerComponent),\n/* harmony export */   \"wordHeadingComponent\": () => (/* binding */ wordHeadingComponent)\n/* harmony export */ });\n// WORD DETAIL PAGE COMPONENTS\r\n\r\n//Search bar\r\nconst searchInputComponent = (func) => {\r\n  const element = document.createElement('input');\r\n  element.type = 'text';\r\n  element.onsubmit = function (e) {\r\n    func(e);\r\n  };\r\n  return element;\r\n};\r\n\r\n//Word info section container\r\nconst wordContainerComponent = () => {\r\n  const element = document.createElement('section');\r\n  return element;\r\n};\r\n\r\n//word and variations heading\r\nconst wordHeadingComponent = (words) => {\r\n  const elements = words.map((word, index) => {\r\n    const element = document.createElement('h2');\r\n    element.innerText = words.length - 1 == index ? `${word}` : `${word},`;\r\n  });\r\n\r\n  return elements;\r\n};\r\n\r\nconst createParagraphComponent = (text) => {\r\n  const element = document.createElement('p');\r\n  element.innerText = text;\r\n  return element;\r\n};\r\n\r\n//word definition\r\nconst wordDefinitionComponent = (text) => {\r\n  return createParagraphComponent(text);\r\n};\r\n\r\n//Examples\r\nconst wordExampleComponent = (text) => {\r\n  return createParagraphComponent(text);\r\n};\r\n\r\n//Phrases\r\nconst wordPhraseComponent = (text) => {\r\n  return createParagraphComponent(text);\r\n};\r\n\r\n\r\n//ACCOUNT PAGES COMPONENTS\r\n\n\n//# sourceURL=webpack://kreyol_pale/./front-end/components.js?");

/***/ }),

/***/ "./front-end/index.js":
/*!****************************!*\
  !*** ./front-end/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./front-end/components.js\");\n\r\n\r\nconst BASE_WORD_ROUTE = `${window.location.origin}/word`;\r\nconst URLS = {\r\n  BASE_WORD_ENDPOINT: '/api',\r\n};\r\n//Event listener for the search bar\r\nconst handleRouting = (e) => {\r\n  const pathname = `/${e.target.value}`;\r\n  e.preventDefault();\r\n  window.history.pushState({}, pathname, BASE_WORD_ROUTE + pathname);\r\n  loadPage(e.target.value);\r\n};\r\n\r\nconst handleLike = async (e, word_obj) => {\r\n  //Toggle the clicked class\r\n  const button = e.target;\r\n  console.log('Adding the secondary button class');\r\n  if (button.classList.contains('btn-secondary')) {\r\n    button.classList.remove('btn-secondary');\r\n    button.classList.add('btn-light');\r\n  } else {\r\n    button.classList.remove('btn-light');\r\n    button.classList.add('btn-secondary');\r\n  }\r\n\r\n  //If the button has the click class send a http post request to the server to increment the likes by one\r\n  //If the button doesn't have the clicked class send a http post request to the server to decrement the likes by one\r\n  const likes_amount = button.classList.contains('btn-secondary') ? 1 : -1;\r\n\r\n  const new_likes_amount = await sendLike(word_obj, likes_amount);\r\n  //Update likes button\r\n  document.querySelector(\r\n    '.likes-button'\r\n  ).textContent = `${new_likes_amount} 👍`;\r\n};\r\n\r\n//This is going to be used to add all of the initial elements to the page\r\n// const buildPage = () => {\r\n//   document.body.appendChild(components.searchInputComponent(handleRouting));\r\n// };\r\n\r\nfunction getCookie(name) {\r\n  var cookieValue = null;\r\n  if (document.cookie && document.cookie !== '') {\r\n    var cookies = document.cookie.split(';');\r\n    for (var i = 0; i < cookies.length; i++) {\r\n      var cookie = cookies[i].trim();\r\n      // Does this cookie string begin with the name we want?\r\n      if (cookie.substring(0, name.length + 1) === name + '=') {\r\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\r\n        break;\r\n      }\r\n    }\r\n  }\r\n  return cookieValue;\r\n}\r\nconst sendLike = async (search_word_obj, likes_amount) => {\r\n  let csrftoken = getCookie('csrftoken');\r\n\r\n  try {\r\n    const response = await fetch(\r\n      `${URLS.BASE_WORD_ENDPOINT}/update/${search_word_obj.id}`,\r\n      {\r\n        method: 'PUT', // or 'PUT'\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n          'X-CSRFToken': csrftoken,\r\n        },\r\n\r\n        body: JSON.stringify({ likes: likes_amount }),\r\n      }\r\n    );\r\n    const jsonResponse = await response.json();\r\n    console.log(jsonResponse);\r\n    return jsonResponse.likes;\r\n  } catch (error) {\r\n    // console.log(error);\r\n  }\r\n};\r\n\r\nconst getData = async (search_word) => {\r\n  try {\r\n    const response = await fetch(`${URLS.BASE_WORD_ENDPOINT}/${search_word}`);\r\n    const jsonResponse = await response.json();\r\n    return jsonResponse;\r\n  } catch (error) {\r\n    // console.log(error);\r\n  }\r\n};\r\n\r\nconst initialPageSetup = () => {\r\n  //Add event listener to search bar\r\n  document.querySelector('.search-input').addEventListener('search', (e) => {\r\n    handleRouting(e);\r\n  });\r\n};\r\n\r\nconst updatePageContent = (word_obj) => {\r\n  console.log(word_obj);\r\n  if (word_obj.detail == 'Not found.') {\r\n    document.querySelector(\r\n      '.word-heading'\r\n    ).textContent = `This word doesn't exist...`;\r\n\r\n    document.querySelector('.word-definition').textContent = '';\r\n    document.querySelector('.word-example').textContent = '';\r\n    document.querySelector('.word-phrase').textContent = '';\r\n    document.querySelector('.likes-button').textContent = '';\r\n    return;\r\n  }\r\n  const formatted_word_variation_string = word_obj.variations.replaceAll(\r\n    ' ',\r\n    ','\r\n  );\r\n  document.querySelector('.word-heading').textContent = `${word_obj.name}${\r\n    formatted_word_variation_string ? ',' + formatted_word_variation_string : ''\r\n  }`;\r\n  document.querySelector('.word-definition').textContent = word_obj.definition;\r\n  document.querySelector('.word-example').textContent = word_obj.examples;\r\n  document.querySelector('.word-phrase').textContent = word_obj.phrases;\r\n  document.querySelector('.likes-button').textContent = `${word_obj.likes} 👍`;\r\n\r\n  //Add click event listener to likes and favorite buttons\r\n  document.querySelector('.likes-button').addEventListener('click', (e) => {\r\n    handleLike(e, word_obj);\r\n  });\r\n};\r\n\r\nconst loadPage = async (searchWord) => {\r\n  //Load loading spinner\r\n  //Get data\r\n  const wordData = await getData(searchWord);\r\n\r\n  //Update the page content\r\n  updatePageContent(wordData);\r\n};\r\n\r\nconst initialPageLoad = async () => {\r\n  const word = window.location.pathname.split('/').pop();\r\n  const wordData = await getData(word);\r\n  updatePageContent(wordData);\r\n};\r\n\r\ninitialPageSetup();\r\ninitialPageLoad();\r\n\n\n//# sourceURL=webpack://kreyol_pale/./front-end/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./front-end/index.js");
/******/ 	
/******/ })()
;