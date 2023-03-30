let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bienvenue Chez Bira Best Service, ' + myName;
  }
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bienvenue Chez Bira Best Service, ' + storedName;
  }
  myButton.addEventListener('click', function() {
    setUserName();
  });