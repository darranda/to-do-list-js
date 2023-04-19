
let toDoList = document.getElementById("toDoList");
let newInput = document.getElementById("newInput");
let addToDo = document.getElementById("addToDo");

// Add event listener to the Add button
addToDo.addEventListener("click", () => {

// Get the text from the input box
  let newToDo = newInput.value.trim();

// Only add a new to do if not empty
  if (newToDo !== "") {

// Create a new list item and add it to the list
  let newListItem = document.createElement("li");
    newListItem.textContent = newToDo;
    toDoList.appendChild(newListItem);

    
    // Clear the input box
    newInput.value = "";
    
    // Add event listener to the new list item to remove it when clicked
    newListItem.addEventListener("click", () => {
      newListItem.remove();
    });
  }
});