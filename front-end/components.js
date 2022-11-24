// WORD DETAIL PAGE COMPONENTS

//Search bar
const searchInputComponent = (func) => {
  const element = document.createElement('input');
  element.type = 'text';
  element.onclick = function (e) {
    func(e);
  };
  return element;
};

//Word info section container
const wordContainerComponent = () => {
  const element = document.createElement('section');
  return element;
};

//word and variations heading
const wordHeadingComponent = (words) => {
  const elements = words.map((word, index) => {
    const element = document.createElement('h2');
    element.innerText = words.length - 1 == index ? `${word}` : `${word},`;
  });

  return elements;
};

const createParagraphComponent = (text) => {
  const element = document.createElement('p');
  element.innerText = text;
  return element;
};

//word definition
const wordDefinitionComponent = (text) => {
  return createParagraphComponent(text);
};

//Examples
const wordExampleComponent = (text) => {
  return createParagraphComponent(text);
};

//Phrases
const wordPhraseComponent = (text) => {
  return createParagraphComponent(text);
};

//ACCOUNT PAGES COMPONENTS
