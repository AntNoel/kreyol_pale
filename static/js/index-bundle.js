/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./front-end/index.js":
/*!****************************!*\
  !*** ./front-end/index.js ***!
  \****************************/
/***/ (() => {

eval("const BASE_WORD_ROUTE = `${window.location.origin}/word`;\r\n\r\n//Implement later when i have more of an idea of how this is going to work as a whole\r\n// window.onpopstate = () => {\r\n//   rootDiv.innerHTML = routes[window.location.pathname];\r\n// };\r\nconst handleRouting = (e, pathname) => {\r\n  console.log('Time to change the routing without the page');\r\n  e.preventDefault();\r\n  //Change the button color just to add some content to the page\r\n  window.history.pushState({}, pathname, BASE_WORD_ROUTE + pathname);\r\n  // window.location = 'www.google.com';\r\n};\r\n\r\n/*\r\n\r\n1. Try downloading the https://django-debug-toolbar.readthedocs.io/en/latest/installation.html to see if the caching is working. Doesn't seem like it is\r\n*/\r\n\r\nconst component = () => {\r\n  const element = document.createElement('div');\r\n  element.innerHTML = 'Hello Webpack - with button With chrome!';\r\n  return element;\r\n};\r\n\r\nconst linkComponent = () => {\r\n  const element = document.createElement('a');\r\n  element.innerHTML = 'Click me';\r\n  element.href = '';\r\n  element.onclick = function (e) {\r\n    handleRouting(e, '/test');\r\n  };\r\n  return element;\r\n};\r\n\r\ndocument.body.appendChild(component());\r\ndocument.body.appendChild(linkComponent());\r\n\n\n//# sourceURL=webpack://kreyol_pale/./front-end/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./front-end/index.js"]();
/******/ 	
/******/ })()
;