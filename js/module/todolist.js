export default class ToDoList {
  constructor(form, taskInput, dinamicBox, boxOk, remove) {
    this.form = document.getElementById(form);
    this.taskInput = document.getElementById(taskInput);
    this.events = ["touchstart", "click"];
    this.addTouch = "touch";
    this.addClick = "click";
    this.activeClass = "active";
    this.dinamicBox = dinamicBox;
    this.boxOk = boxOk;
    this.remove = remove;
    this.handleKeyup = this.handleKeyup.bind(this);
    this.addCheck = this.addCheck.bind(this);
  }

  addEvents() {
    this.form.addEventListener("submit", (e) => e.preventDefault());
    this.taskInput.addEventListener("keyup", this.handleKeyup);
  }

  addEventRemove(item, event) {
    if (!item.classList.contains(this.addTouch)) {
      item.addEventListener(event, this.removeItem);
      item.classList.add(this.addTouch);
    } else if (!item.classList.contains(this.addClick)) {
      item.addEventListener(event, this.removeItem);
      item.classList.add(this.addClick);
    }
  }

  removeItem() {
    this.parentElement.remove();
  }

  addEventCheck(item, event) {
    if (!item.classList.contains(this.addTouch)) {
      item.addEventListener(event, this.addCheck);
      item.classList.add(this.addTouch);
    } else if (!item.classList.contains(this.addClick)) {
      item.addEventListener(event, this.addCheck);
      item.classList.add(this.addClick);
    }
  }

  removeBox() {
    const removeBox = document.querySelectorAll(`.${this.remove}`);
    this.events.forEach((event) => {
      removeBox.forEach((item) => {
        this.addEventRemove(item, event);
      });
    });
  }

  addCheck(e) {
    const item = e.currentTarget;
    item.classList.toggle(this.activeClass);
    if (item.classList.contains(this.activeClass)) {
      item.innerHTML = `<i class="fa-solid fa-check"></i>`;
    } else {
      item.innerHTML = "";
    }
  }

  checkBox() {
    const check = document.querySelectorAll(`.${this.boxOk}`);
    this.events.forEach((event) =>
      check.forEach((item) => this.addEventCheck(item, event))
    );
  }

  createNewTask(value) {
    const element = document.createElement("div");
    element.classList.add(this.dinamicBox);
    element.innerHTML = ` <div class="${this.boxOk}"> </div> <p> ${value} </p> <div class="${this.remove}"> X </div>`;
    this.form.appendChild(element);
    this.removeBox();
    this.checkBox();
    return element;
  }

  handleKeyup(e) {
    const key = e.key;
    let taskValue;
    if (key === "Enter") {
      taskValue = e.currentTarget.value;
      this.createNewTask(taskValue);
    }
  }

  init() {
    this.addEvents();
  }
}
