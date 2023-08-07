import books from "./dataOfBook.js";
import Library from "./Library.js";
import Patron from "./patron.js";

const newLibrary = new Library("Central Library", books);
newLibrary.addBook("hussein", "theOne", 10);
// newLibrary.removeBook(1);
const patron = new Patron("John", 2);
newLibrary.checkOutBook(2, patron);
newLibrary.checkInBook(2);
const book = newLibrary.getBookById(3);
console.log(book);

console.log(newLibrary);
console.log(newLibrary.getCheckedOutBooks());
