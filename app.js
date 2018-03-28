//UI vars
const form = document.querySelector('#note-form');
const noteList = document.querySelector('.collection');
const input = document.querySelector('#noteCreate');

loadEventListeners();

function loadEventListeners(){
  //Add new note event 
  form.addEventListener('submit', addNote);

  //Remove note event
  noteList.addEventListener('click', removeNote);
}
//Add new Note Function 
function addNote(e){
  //Check for input
  if(input.value === null){
    alert('Must add something');
  }

  //Create new li item
  const li = document.createElement('li')
  li.className = 'note';
  li.appendChild(document.createTextNode(input.value));

  //Create icon links for li item
  const deleteLink = document.createElement('a');
  deleteLink.className = 'delete-item';
  deleteLink.innerHTML = '<i class="fas fa-minus"></i>';

  const pinToTopLink = document.createElement('a');
  pinToTopLink.className = 'pin-up';
  pinToTopLink.innerHTML = '<i class="fas fa-thumbtack"></i>';

  //Append links to li
  li.appendChild(pinToTopLink);
  li.appendChild(deleteLink);

  //Append li to ul
  noteList.appendChild(li);

  //Reset input
  input.value = '';

  e.preventDefault();

}

function removeNote(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}



