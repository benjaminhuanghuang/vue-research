function toDoListEntry (item) {
  const newElement = document.createElement('ul');
  newElement.innerHTML = item;
  return newElement;
}

export default toDoListEntry;