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

  addBook(title, author, id) {
    const newBook = new Book(title, author, id);
    this.books.push(newBook);
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  checkOutBook(bookId, patron) {
    this.books = this.books.map((book) => {
      if (book.id === bookId) {
        const { title, author, id } = book;
        const status = new BookStatus(true, patron);
        return new Book(title, author, id, status);
      } else {
        return book;
      }
    });
  }

  checkInBook(bookId) {
    this.books = this.books.map((book) => {
      if (book.id === bookId) {
        const { title, author, id } = book;
        const status = new BookStatus();
        return new Book(title, author, id, status);
      } else {
        return book;
      }
    });
  }

  getBookById(id) {
    return this.books.find((book) => book.id === id);
  }

  getCheckedOutBooks() {
    let books = [];

    this.books.forEach((book) => {
      if (book.status?.checkedOut) {
        books.push({
          patronName: book.status.patron.name,
          bookTitle: book.title,
        });
      }
    });

    return books;
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

class Patron {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class BookStatus {
  constructor(checkedOut = false, patron = null) {
    this.checkedOut = checkedOut;
    this.patron = patron;
  }
}

const library = new Library("Central Library", books);

// Adding new books
library.addBook("The Alchemist", "Paulo Coelho", 11);
library.addBook("The Da Vinci Code", "Dan Brown", 12);

// Removing a book
library.removeBook(5);

// Creating a new patron
const patron = new Patron("John Smith", 1);

// Checking out a book for the patron
library.checkOutBook(3, patron);

// Logging the book checked out by the patron
const checkedOutBook = library.getBookById(3);

// getting all the checked out books
console.log(library.getCheckedOutBooks());

// Checking the book back in
library.checkInBook(3);

// getting all the checked out books again
console.log(library.getCheckedOutBooks());

// logging the checked in book
console.log(library.getBookById(3));
