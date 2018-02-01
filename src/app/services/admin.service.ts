import {Injectable, EventEmitter} from '@angular/core';
import {HttpService} from "./http.service";
import {HttpHeaders} from "@angular/common/http";
import {User, UsersPaginator} from "../views/admin/user.object.mapper";
import {AuthService} from "./auth.service";

@Injectable()
export class AdminService {

  public Userlistpaginator = new EventEmitter<UsersPaginator>();
  constructor( private http:HttpService, private authservice: AuthService) { }

  public addUser(user: User ) {
    const token = this.authservice.getUserToken();
    return this.http.sendPostRequest('Contact-list?token=' + token, user ,
      { headers : new HttpHeaders ({'Content-Type': 'application/json' }) }); }


  public getUserPaginator(){
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('Contact-list?token=' + token).subscribe(
      data => {this.processGetUserPaginator(data)},
      error => {console.log(error)} );
  }
  processGetUserPaginator(User_data){
    if(User_data && User_data.users){
      this.Userlistpaginator.emit(User_data.users);
    } else{
      console.log(' errror has Ocured!!');
    }
  }
  public getPaginatedUser(request_full_url) {
    const token = this.authservice.getUserToken();
    this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
      data => {this.processGetUserPaginator(data)}
    );
  }

  updateUser(id: number, newUser: User ) {
    const token = this.authservice.getUserToken();
    return this.http.sendPutRequest('Contact-list/' + id + '?token=' + token , newUser,
      { headers : new HttpHeaders ({'Content-Type': 'application/json' })
      }); }
  deleteUser(id: number) {
    const token = this.authservice.getUserToken();
    return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/Contact-list/' + id + '?token=' + token); }



  }
