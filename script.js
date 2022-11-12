let num = Math.floor((Math.random() * 100) + 1);
let num2 = Math.floor((Math.random() * 100) + 1);
let num3 = Math.floor((Math.random() * 100) + 1);
let num4 = Math.floor((Math.random() * 100) + 1);

const chara = {
  "_id": "sample_id_123",
  "name": "December",
  "species": "Lion",
  "color": "#ff8c00",
  "description": " Digital",
  "playfulness": 1,
  "appetite": 3,
  "birthDate": "2021-12-31",
  "adopted": false
}

// set the values of form elements in order to populate them.
const charasheet = document.querySelector('#charasheet');
charasheet.elements['_id'].value = chara._id
charasheet.elements['name'].value = "The Adventurer"
charasheet.elements['occupation'].value = chara.occupation
charasheet.elements['race'].value = chara.race
charasheet.elements['description'].value = chara.description
charasheet.elements['str'].value = num;
charasheet.elements['agi'].value = num2;
charasheet.elements['int'].value = num3;
charasheet.elements['luck'].value = num4;

// listen for form submission  
charasheet.addEventListener('submit', event => {
  event.preventDefault();
  // if the user clicked "cancel", reset the form
  if (event.submitter.className == "cancel") {
    charasheet.reset()
  }
  // otherwise log the data to the console.
  else {
    // in this context "event.target" refers to the submitted form 
    // we pass it along to FormData in order to get the data from it:
    const formData = new FormData(event.target)
    // FormData is more useful when expressed as an object:
    const json = Object.fromEntries(formData)
    // log the result to the console
    console.log(json)
  }
})