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
  addBook(author, title, id) {
    const newBook = {
      author: author,
      title: title,
      id: id,
    };
    this.books.push(newBook);
  }
  removeBook(id) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        books.splice(i, 1);
        console.log("Book removed!");
        console.log(books);
        return;
      }
    }
  }
  checkInBook(id) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        books[i].checkedOutBy = patron.name;
        console.log(
          `bookTitle: ${books[i].title} has been checked out by ${patron.name}`
        );
        return;
      }
    }
    console.log("Book with that ID not found.");
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
const newLibrary = new Library("Central Library", books);
newLibrary.addBook("hussein", "theOne", 10);
newLibrary.removeBook(1);
const patron = new Patron("John", 2);
newLibrary.checkOutBook(2, patron);
newLibrary.checkInBook(2);
const book = newLibrary.getBookById(3);
console.log(book);

console.log(newLibrary);
console.log(newLibrary.getCheckedOutBooks());
