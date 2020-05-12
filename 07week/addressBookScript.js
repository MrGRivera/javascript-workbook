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

    let contactsAge = document.createElement('li');
    contactsAge.innerText = 'Age: ' + contact.dob.age;
    contactsUl.appendChild(contactsAge)

  })
}


