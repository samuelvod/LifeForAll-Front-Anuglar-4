export class UsersPaginator{
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
  public data: User[];

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


export class  User {
     public id: number;
     public fullname: string;
     public phonenumber:string;
     public email:string;
     public region:string;
     public role:string;


     constructor(){
       this.id=null;
       this.fullname= "";
       this.phonenumber="";
       this.email="";
       this.region="";
       this.role="";
     }

}
