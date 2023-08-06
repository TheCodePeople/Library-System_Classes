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

library.addBook("The Lord of the Rings", "J.R.R. Tolkien");
console.log(books);

library.checkOutBook(11, patron);
library.checkInBook(11);
library.removeBook(1);

console.log(books);
console.log(library.getBookById(9));

