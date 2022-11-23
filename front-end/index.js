const BASE_WORD_ROUTE = `${window.location.origin}/word`;

//Implement later when i have more of an idea of how this is going to work as a whole
// window.onpopstate = () => {
//   rootDiv.innerHTML = routes[window.location.pathname];
// };
console.log('Is this even working');
const handleRouting = (pathname) => {
  //Change route name
  console.log('Time to change the routing without the page');
  window.history.pushState({}, pathname, BASE_WORD_ROUTE + pathname);
  // window.location = 'www.google.com';
  //Maybe at this point i'd use the onpopstate
};

/*

1. Try downloading the https://django-debug-toolbar.readthedocs.io/en/latest/installation.html to see if the caching is working. Doesn't seem like it is




*/

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Webpack - with button With chrome!';
  return element;
};

const linkComponent = () => {
  const element = document.createElement('a');
  element.innerHTML = 'Click me';
  element.href = '';
  element.onclick = function () {
    handleRouting('/test');
  };
  return element;
};
// const buttonComponent = () => {
//   const element = document.createElement('a');
//   element.innerHTML = 'Click me Button';
//   element.onclick = page_load('/test');
//   return element;
// };

document.body.appendChild(component());
document.body.appendChild(linkComponent());

// page_load('/test');
