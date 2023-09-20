import { BookStatus } from "./BookStatus.js";
import { books } from "./books.js";
export class Library {
  constructor(name, books) {
    this.name = name;
    this.books = books;
  }
  addBook(title, author) {
    const bookId = books[books.length - 1].id + 1;
    const newBook = new Book(title, author, bookId);
    this.books.push(newBook);
  }
  removeBook(bookId) {
    this.books.filter((book) => book.bookId !== bookId);
  }
  getBookById(bookId) {
    this.books.find((book) => book.bookId === bookId);
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
}
