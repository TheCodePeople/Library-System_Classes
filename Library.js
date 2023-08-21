import Book from "./addBook.js";
import BookStatus from "./bookStatus.js";
import books from "./dataOfBook.js";

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
      status: { checkedOut: false, patron: null },
    };
    const status = new BookStatus();
    const newBook = new Book(author, title, id, status);
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
        console.log(
          `bookTitle: ${books[i].title} has been checked in ${books[i].status.patron.name}`
        );
        books[i].status = new BookStatus();
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
      return this.books.filter((book) => book.isCheckedOut);
    });

    return books;
  }
}
export default Library;
