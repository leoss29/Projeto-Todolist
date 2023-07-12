import ToDoList from "./module/todolist.js";

const initToDoList = new ToDoList(
  "task-form",
  "task-input",
  "dinamic-box",
  "box-ok",
  "remove"
);

initToDoList.init();
