const BASE_WORD_ROUTE = `${window.location.origin}/word`;

//Implement later when i have more of an idea of how this is going to work as a whole
// window.onpopstate = () => {
//   rootDiv.innerHTML = routes[window.location.pathname];
// };
const handleRouting = (e, pathname) => {
  e.preventDefault();
  window.history.pushState({}, pathname, BASE_WORD_ROUTE + pathname);
};

const linkComponent = () => {
  const element = document.createElement('a');
  element.innerHTML = 'Click me';
  element.href = '';
  element.onclick = function (e) {
    handleRouting(e, '/test');
  };
  return element;
};

document.body.appendChild(linkComponent());

const loadPage = () => {
  //Load loading
  //Get data
  //Update the url
  //Update the page content
};
load_page();
