const taskInput = document.querySelector("#task-input");
const form = document.forms[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function removeBox() {
  const removeBox = document.querySelectorAll(".remove");
  const addClass = "add";
  removeBox.forEach((item) => {
    if (!item.classList.contains(addClass)) {
      item.addEventListener("click", (e) => item.parentElement.remove());
      item.classList.add(addClass);
    }
  });
}

function checkBox() {
  const check = document.querySelectorAll(".box-ok");
  const addClass = "add";
  const activeClass = "active";
  check.forEach((item) => {
    if (!item.classList.contains(addClass)) {
      item.addEventListener("click", () => {
        item.classList.toggle(activeClass);
        if (item.classList.contains(activeClass)) {
          item.innerHTML = `<i class="fa-solid fa-check"></i>`;
        } else {
          item.innerHTML = "";
        }
      });
      item.classList.add(addClass);
    }
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
