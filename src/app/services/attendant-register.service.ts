import {Injectable, EventEmitter} from '@angular/core';
import {HttpService} from "./http.service";
import {HttpHeaders} from "@angular/common/http";
import {AttendantPaginator, Attendant} from "../views/register/attendant.object.mapper";
import {AuthService} from "./auth.service";
@Injectable()
export class AttendantRegisterService {
  public Attendantlistpaginator = new EventEmitter<AttendantPaginator>();
  constructor( private http:HttpService, private authservice: AuthService) { }

  public addAttendant(Attendants: Attendant ) {
    const token = this.authservice.getUserToken();
    return this.http.sendPostRequest('Contact-list?token=' + token, Attendants ,
      { headers : new HttpHeaders ({'Content-Type': 'application/json' }) }); }


  public getAttendantPaginator(){
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('Contact-list?token=' + token).subscribe(
      data => {this.processGetAttendantPaginator(data)},
      error => {console.log(error)} );
  }
  processGetAttendantPaginator(Attendant_data){
    if(Attendant_data && Attendant_data.Attendants){
      this.Attendantlistpaginator.emit(Attendant_data.Attendants);
    } else{
      console.log(' errror has Ocured!!');
    }
  }
  public getPaginatedAttendant(request_full_url) {
    const token = this.authservice.getUserToken();
    this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
      data => {this.processGetAttendantPaginator(data)}
    );
  }

  updateAttendant(id: number, newAttendant: Attendant ) {
    const token = this.authservice.getUserToken();
    return this.http.sendPutRequest('Contact-list/' + id + '?token=' + token , newAttendant,
      { headers : new HttpHeaders ({'Content-Type': 'application/json' })
      }); }
  deleteAttendant(id: number) {
    const token = this.authservice.getUserToken();
    return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/Contact-list/' + id + '?token=' + token); }

}
