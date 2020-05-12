'use script'

console.log("Connected");




window.onload = function () {
  console.log('window loaded');
  fetchAddressBook();
}

function fetchAddressBook() {
  fetch('https://randomuser.me/api?results=10')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      processContacts(data.results)
    });
}

function processContacts(contacts) {
  contacts.forEach(function (contact) {
    let contactsUl = document.querySelector('#contacts');

    let contactsName = document.createElement('li');
    contactsName.innerText = 'Name: ' + contact.name.first;
    contactsUl.appendChild(contactsName)

    let contactsAge = document.createElement('span');
    contactsAge.innerText = ' | Age: ' + contact.dob.age;
    contactsName.appendChild(contactsAge)

    let moreInfoButton = document.createElement('button');
    moreInfoButton.innerText = 'Click here for more info';
    contactsName.appendChild(moreInfoButton)
    moreInfoButton.addEventListener('click', function(){
      //append contact name with li of other info
      let contactsCell = document.createElement('div')
      contactsCell.innerText = `Cell Phone Number: ${contact.cell}`
      contactsName.appendChild(contactsCell)

      let contactsEmail = document.createElement('div')
      contactsEmail.innerText = `Email Address: ${contact.email}`
      contactsName.appendChild(contactsEmail)
      
      let contactsCountry = document.createElement('div')
      contactsCountry.innerText = `Country of Origin: ${contact.location.country}`
      contactsName.appendChild(contactsCountry)
    })

  })
}


