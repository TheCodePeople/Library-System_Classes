import  addBookookStatus from "./bookStus.js";
export class Book
{
  title="";a
  author="";
  id=undefined;
  status=new bookStatus();
  constructor(title,author,id,status)
  {
    this.title=title;
    this.author=author;
    this.id=id;
    this.status={...status};
  }
}