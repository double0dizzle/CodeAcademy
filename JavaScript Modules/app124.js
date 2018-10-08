// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async() => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  try {
    const response = await fetch(endpoint);
    if (response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse)
    }
  }
  catch (error)  {
    console.log(error);
}
  
}
// Code goes here


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);