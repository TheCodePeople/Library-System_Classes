class BookStatus {
  constructor(checkedOut = false, patron = null) {
    this.checkedOut = checkedOut;
    this.patron = patron;
  }
}
export default BookStatus;
