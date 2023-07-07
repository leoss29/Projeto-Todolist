const taskInput = document.querySelector("#task-input");
const form = document.forms[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function removeBox() {
  const removeBox = document.querySelectorAll(".remove");
  removeBox.forEach((item) => {
    item.addEventListener("click", (e) => e.target.parentElement.remove());
  });
}

function checkBox() {
  const check = document.querySelectorAll(".box-ok");
  check.forEach((item) =>
    setTimeout(() => {
      item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        } else {
          item.classList.add("active");
        }
      });
    })
  );
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
