const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
    <div class="card">
    <div class="card-header">
    <h3 class="title">${book.title}</h3>
    <h5 class="author">${book.author}</h5>
    </div>
    <div class="card-body">
    <p class="pages">${book.pages} Pages</p>
    <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    </div>
    <div class="adjust-btn">
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
    </div>
    </div>
    `;
    libraryEl.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

let newBookBtn = document.querySelector("#new-book-btn");
let newBookForm = document.querySelector(".form-container");
if ((newBookForm.style.display.property = "none")) {
  newBookBtn.addEventListener("click", function () {
    newBookForm.style.display = "block";
  });
} else {
  newBookBtn.addEventListener("click", function () {
    newBookForm.style.display = "none";
  });
}

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function () {
    event.preventDefault();
    addBookToLibrary();
  });
