//UI vars
const form = document.querySelector('#note-form');
const noteList = document.querySelector('.collection');
const input = document.querySelector('#noteCreate');
const titleInput = document.querySelector('#titleNote');

loadEventListeners();
populateNtoes();

function loadEventListeners(){
  //Add new note event 
  form.addEventListener('submit', addNote);

  //Remove note event
  noteList.addEventListener('click', removeNote);

}
//Add new Note Function 
function addNote(e){
  //Check for input
  if(input.value === null && titleInput.value === null){
    alert('Must add something');
  }else{

  //Create new li item
  const li = document.createElement('li')
  const title = document.createElement('h3');
  title.appendChild(document.createTextNode(titleInput.value));
  li.appendChild(title);
  li.className = 'note';
  li.appendChild(document.createTextNode(input.value));

  //Create icon links for li item
  const deleteLink = document.createElement('a');
  deleteLink.className = 'delete-item px-2';
  deleteLink.innerHTML = '<i class="fas fa-minus"></i>';

  const pinToTopLink = document.createElement('a');
  pinToTopLink.className = 'pin-up px-2';
  pinToTopLink.innerHTML = '<i class="fas fa-thumbtack"></i>';

  //Append links to li
  li.appendChild(pinToTopLink);
  li.appendChild(deleteLink);

  //Append li to ul
  noteList.appendChild(li);

  //Reset input
  input.value = '';
  titleInput.value ='';
  }

e.preventDefault();

}

function removeNote(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}

// function populateNtoes(){
//   let notes = [
//     {
//       noteTitle: "noteOne",
//       noteBody: "bodyOne"
//     },
//     {
//       noteTitle: "noteTwo",
//       noteBody: "bodyTwo"
//     },
//     {
//       noteTitle: "noteThree",
//       noteBody: "bodyThree"
//     },
//     {
//       noteTitle: "noteFour",
//       noteBody: "bodyFour"
//     }
//   ];

//   notes.map((note, index) => {
//     li = `
//     <li class="note">
//          <h1>${this.noteTitle}</h1>
//          <p>${this.noteBody}</p>
//          <a class = "pin-up px-2"><i class ="fas fa thumbtack"></i></a>
//          <a class = "delete-item px-2"><i class ="fas fa minus"></i></a>
//     </li>`;
//     noteList.appendChild(li);
// });
// }


