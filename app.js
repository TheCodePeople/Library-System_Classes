const books = [
  { author: "J.D. Salinger", title: "The Catcher in the Rye", id: 1 },
  { author: "Harper Lee", title: "To Kill a Mockingbird", id: 2 },
  { author: "George Orwell", title: "1984", id: 3 },
  { author: "F. Scott Fitzgerald", title: "The Great Gatsby", id: 4 },
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    id: 6,
  },
  { author: "J.R.R. Tolkien", title: "The Hobbit", id: 7 },
  { author: "George Orwell", title: "The Lord of the Rings", id: 8 },
  { author: "Aldous Huxley", title: "Animal Farm", id: 9 },
  { author: "Aldous Huxley", title: "Brave New World", id: 10 },
];


class Library {
  constructor(name, books) {
    this.name = name;
    this.books = books;
  }

  addBook(title, author) {
    const id = this.books[this.books.length - 1].id + 1;
    this.books.push({ author, title, id });
  }

  removeBook(id) {
    const index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
  }

  checkOutBook(id, patron) {
    const book = this.getBookById(id)
    if (book && !book.status?.checkedOut) {
      book.status = new BookStatus(true, patron)
    } else {
      console.log("book is not available")
    }
  }

  checkInBook(id) {
    const book = this.getBookById(id)
    if (book) {
      book.status = new BookStatus(false, null)
    } else {
      console.log("book is not available")
    }
  }

  getBookById(id) {
    return this.books.find((book) => book.id === id);
  }
}

class Patron {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class Book {
  constructor(title, author, id, status) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.status = status;
  }
}

class BookStatus {
  constructor(checkedOut = false, patron = null) {
    this.checkedOut = checkedOut;
    this.patron = patron;
  }
}


const library = new Library("New York Public Library", books);
const patron = new Patron("Ali Ammar", 12345);

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  library.books.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;

    const statusElement = document.createElement("p");
    statusElement.textContent = book.status?.checkedOut
      ? `Checked Out by ${book.status.patron.name}`
      : "Available";

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(statusElement);

    bookList.appendChild(bookElement);
  });
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (title && author) {
    library.addBook(title, author);
    displayBooks();
  }
}

function searchBook() {
  const searchId = parseInt(document.getElementById("searchId").value, 10);
  if (isNaN(searchId)) {
    alert("Please enter a valid book ID.");
    return;
  }

  const book = library.getBookById(searchId);
  if (book) {
    alert(`Book found: ${book.title} by ${book.author}`);
  } else {
    alert("Book not found.");
  }
}

displayBooks();
