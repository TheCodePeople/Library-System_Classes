import { BookStatus } from "./BookStatus.js";
export class Book
{
  title="";
  author="";
  id=undefined;
  status=new BookStatus();
  constructor(title,author,id,status)
  {
    this.title=title;
    this.author=author;
    this.id=id;
    this.status={...status};
  }
}