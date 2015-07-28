// An anonymous function which calls itself with ()
// the semi-colon is used at the beginning of the file when working with multiple files
;(function() {
  var toDoItems = document.querySelector('[data-js="toDoItems"]');
  var removeNotice = document.querySelector('[data-js="emptyNotice"]');
  var input = document.querySelector('[data-js="input"]');

  document.addEventListener('submit', addItem);

  function addItem(e) {
    e.preventDefault();
    
    var newToDo = input.value;
    var inputToDo = newToDo.length;

    if (inputToDo > 0) {
      if (removeNotice.className != ' hide__listItem') {
        removeNotice.className = ' hide__listItem';
      };
      var listElement = document.createElement('li');
      listElement.className += "todo__item";
      var buttonElement = document.createElement('button');
      buttonElement.className += "todo__itemRemove";
      buttonElement.innerHTML = "&#x2717";
      var inputElement = document.createElement('input');
      inputElement.type = "checkbox";


  
      

      toDoItems.appendChild(inputElement);
      toDoItems.appendChild(newToDo);
      toDoItems.appendChild(buttonElement);
    }
    else {
      alert("Please Add Something");

    };
  };

})();

