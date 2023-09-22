import { books } from "./data.js";
import {Book} from "./book.js";
import { Patron } from "./patron.js";
import { BookStatus } from "./BookStatus.js";
export class Library
{
name="";
books = [];
constructor(name, books)
{
  this.name=name;
  this.books=[...books];
}
addBook(title,author)
{
  console.log("add");
  let new_book;
  let id;
  let status;
  id=this.books[this.books.length-1].id+1;
  status=new BookStatus();
  new_book=new Book(title,author,id,status);
  this.books.push(new_book);
  console.log("the book ((("+new_book.title+"))) Aadded to  the library ");
  console.log("");
}
checkOutBook (id, patron)
{
  console.log("CHECK OUT");
  let test_id=false;
  let test_book;
  test_book = this.books.find(function(v){
    return v.id == id;
  });
  if(test_book != undefined)
  {
   if(test_book.status.checkOut == false)
   {
     test_book.status.checkOut=true;
     test_book.status.patron = {...patron};
     // test_book.status.patron.id = patron.id;
     console.log("the book ((("+test_book.title+"))) cheked out from the library , by ((("+patron.name+")))");
    }else
    {
      console.log("Sooory!!! this book ((("+test_book.title+" ))) can not checked out , becuase the books is checked out");
    }
  }else
  {
    console.log("Sooory!!! the book with id : ((("+id+" ))) can not checked out , becuase the books is removed");
  }
  console.log("        ");
}
removeBook(id)
{
  console.log("REMOVE");
  let test_book;
  test_book=this.books.find(function(v){
    return v.id==id;
  });
  if(test_book)
  {
    this.books = this.books.filter(function(v){
      return v.id !== id;
   });
   console.log("the book ((("+test_book.title+" ))) removed from library");
  }else
  {
    console.log("the book with id : ((("+id+" ))) can not removed , becuase it is unavailable");
  }
  console.log("__________________________");
}
checkIn(id)
{
  let test_book;
  test_book = this.books.find(function(v){
    return v.id==id;
  });
  if(test_book)
  {
    test_book.status.checkOut=false;
    test_book.status.patron=null;
    console.log("the book ((( "+test_book.title+" ))) check in to library");

  }
}
getBookById(id)
{
  let test_book;
  test_book=this.books.find(function(v){
    return v.id == id;
  });
  return test_book;
}
display()
{
  console.log("__________________________DISPLAY__________________________");
  for(let i=0;i<this.books.length;++i)
  {
    console.log("__________________________"+this.books[i].id+"__________________________");
    for(let p in this.books[i])
    {
      if(p=="status" && this.books[i][p].patron!=null)
      {
        console.log("status-check out = "+this.books[i][p].checkOut);
        console.log("status-patron = "+this.books[i][p].patron.name);
      }else
      {
        console.log(p + " = "+this.books[i][p]);
      }
    }
   
  }
  
}
}