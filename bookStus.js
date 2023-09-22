export class bookStatus
{
  checkedout=false;
  patron=null;
  constructor(checkedout,patron)
  {
    this.checkedout=checkedout;
    this.patron={...patron};
  }
}