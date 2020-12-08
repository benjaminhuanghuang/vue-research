import toDoListEntry from "./toDoListEntry.js";

function toDoList (list) {
  const newElement = document.createElement('ul');
  newElement.innerHTML = "To Do List";
  list.forEach(item => {
    newElement.append(toDoListEntry(item));
  });
  return newElement;
}

export default toDoList;
