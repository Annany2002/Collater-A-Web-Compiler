import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateType {
  codeLanguages: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: InitialStateType = {
  codeLanguages: {
    html: `
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Todo App</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
        </head>
        <body>
        <div class="container">
          <h2>Todo App</h2>
          <input type="text" id="todo-input" placeholder="Enter your todo">
          <button id="add-btn">Add</button>
          <ul id="todo-list"></ul>
        </div>
        <script src="script.js"></script>
        </body>
    </html>`,
    css: `body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 600px;
    margin: 30px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  #todo-list {
    list-style-type: none;
    padding: 0;
  }

  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }

  .todo-item input[type="checkbox"] {
    margin-right: 10px;
  }

  .todo-item .delete-btn {
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
    `,
    javascript: `function addTodo() {
  var input = document.getElementById('todo-input');
  var todoText = input.value.trim();
  if (todoText !== '') {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var textNode = document.createTextNode(todoText);
    listItem.appendChild(checkbox);
    listItem.appendChild(textNode);
    document.getElementById('todo-list').appendChild(listItem);
    input.value = '';
  } else {
    alert('Please enter a valid todo.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', addTodo);

  var todoList = document.getElementById('todo-list');
  todoList.addEventListener('click', function(event) {
    var target = event.target;
    if (target.type === 'checkbox') {
      var listItem = target.parentNode;
      if (target.checked) {
        listItem.style.textDecoration = 'line-through';
      } else {
        listItem.style.textDecoration = 'none';
      }
    } else if (target.classList.contains('delete-btn')) {
      var listItem = target.parentNode;
      todoList.removeChild(listItem);
    }
  });
});
`,
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<InitialStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.codeLanguages[state.currentLanguage] = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;
