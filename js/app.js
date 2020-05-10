document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const readingListItem = createReadingListItem(event.target);
    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(readingListItem);
  
    event.target.reset();
  }
  
  const createReadingListItem = function (form) {
    const readingListItem = document.createElement('li');
    readingListItem.classList.add('reading-list-item');
  
    const country = document.createElement('h2');
    country.textContent = form.country.value;
    readingListItem.appendChild(country);
  
    const date = document.createElement('h3');
    date.textContent = form.date.value;
    readingListItem.appendChild(date);
  
    const currency = document.createElement('p');
    currency.textContent = form.currency.value;
    readingListItem.appendChild(currency);
  
    return readingListItem;
  }
  
  const handleDeleteAllClick = function (event) {
    const readingList = document.querySelector('#reading-list');
    readingList.innerHTML = '';
  }