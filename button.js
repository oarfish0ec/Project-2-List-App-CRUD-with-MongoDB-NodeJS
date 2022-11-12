// Import the Cat Module
import Character from './models/Character.js';

const apiURL =  "https://project-2-list-app-crud-with-mongodb-and-nodejs.av0cado.repl.co/api/characters";

// // fetch characters.
// const getCharacters = () => {
//   fetch(apiURL + '/', { "method": "GET" })
//     .then(response => response.json())
//     .then(response => {
//       // $('#content').style.background = 'none';
//       response.forEach(data => {
//         // create a new Cat object for each cat
//         // based on the data we just fetched.
//         // i.e. an instance of the Cat class.
//         // see also: Cat.js
//         const character = new Character(data)
//         console.log(character)
//         // // Note: the render() function is defined inside Cat.js
//         // character.render()
//       })
//     })
//     .catch(error => console.log(error))
// }


// getCharacters();

// // listen for form submission 
// // create or update a cat depending on the situation.
// catForm.addEventListener('submit', event => {
//   event.preventDefault();
//   if (event.submitter.className == "cancel") {
//     catForm.reset()
//     $('body').scrollIntoView();
//   }
//   else {
//     const formData = new FormData(event.target)
//     const json = Object.fromEntries(formData)
//     const cat = new Cat(json)
//     cat.save()
//   }
//   catForm.style.display = 'none'
// })

// // Listen for clicks on the "Add a Cat" button
// addButton.addEventListener('click', event => {
//   catForm.reset()
//   catForm.elements['_id'].value = ''
//   $('#catForm h2').innerHTML = 'Add a Cat'
//   catForm.style.display = 'flex'
//   $('body').scrollIntoView()
// })

// initialize the page by populating it with cats


