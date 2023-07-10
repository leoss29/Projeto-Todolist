const taskInput = document.querySelector("#task-input");
const form = document.forms[0];
const events = ["touchstart", "click"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function removeBox() {
  const removeBox = document.querySelectorAll(".remove");
  const addTouch = "touch";
  const addClick = "click";
  function removeItem() {
    this.parentElement.remove();
  }
  events.forEach((event) => {
    removeBox.forEach((item) => {
      if (!item.classList.contains(addTouch)) {
        item.addEventListener(event, removeItem);
        item.classList.add(addTouch);
      } else if (!item.classList.contains(addClick)) {
        item.addEventListener(event, removeItem);
        item.classList.add(addClick);
      }
    });
  });
}

function checkBox() {
  const check = document.querySelectorAll(".box-ok");
  const addTouch = "touch";
  const addClick = "click";
  const activeClass = "active";

  function addCheck() {
    this.classList.toggle(activeClass);
    if (this.classList.contains(activeClass)) {
      this.innerHTML = `<i class="fa-solid fa-check"></i>`;
    } else {
      this.innerHTML = "";
    }
  }

  events.forEach((event) => {
    check.forEach((item) => {
      if (!item.classList.contains(addTouch)) {
        item.addEventListener(event, addCheck);
        item.classList.add(addTouch);
      } else if (!item.classList.contains(addClick)) {
        item.addEventListener(event, addCheck);
        item.classList.add(addClick);
      }
    });
  });
}

function createNewTask(value) {
  const element = document.createElement("div");
  element.classList.add("dinamic-box");
  element.innerHTML = ` <div class="box-ok"> </div> <p> ${value} </p> <div class="remove"> X </div>`;
  form.appendChild(element);
  removeBox();
  checkBox();
  return element;
}

function handleKeyup(e) {
  const key = e.key;
  let taskValue;
  if (key === "Enter") {
    taskValue = this.value;
    createNewTask(taskValue);
  }
}

taskInput.addEventListener("keyup", handleKeyup);
