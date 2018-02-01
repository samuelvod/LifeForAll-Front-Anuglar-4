
export class AttendantPaginator{
  public  current_page: number;
  public first_page_url: string;
  public from: number;
  public  last_page: number;
  public  last_page_url: string;
  public  next_page_url: string;
  public path: string;
  public per_page: number;
  public  prev_page_url: string;
  public to: number;
  public  total: number;
  public data: Attendant[];

  constructor(){
    this.current_page = null;
    this.from = null;
    this.last_page = null;
    this.per_page = null;
    this.to = null;
    this.total = null;
    this.first_page_url = '';
    this.last_page_url = '';
    this.next_page_url = '';
    this.prev_page_url = '';
    this.path = '';

  }
}
export class  Attendant {
  public id:number;
  public fullname: string;
  public phonenumber: number;
  public email: string;
  public region: string;
  public school: string;
  public profession: string;


  constructor() {
    this.id= null;
    this.fullname = "";
    this.phonenumber = null;
    this.email = "";
    this.region = "";
    this.school = "";
    this.profession="";
  }
}
