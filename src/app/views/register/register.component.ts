import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Attendant, AttendantPaginator} from "./attendant.object.mapper";
import {AttendantRegisterService} from "../../services/attendant-register.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  public newAttendant = new Attendant;
  public attendant_list_paginator = new AttendantPaginator();
  constructor(private attendantService: AttendantRegisterService) { }

  ngOnInit() {
    this.UpdatepagePaginator();
    this.attendantService.Attendantlistpaginator.subscribe(
      data => {  this.attendant_list_paginator = data } );

  }
  public UpdatepagePaginator(){
    this.attendantService.getAttendantPaginator();
  }

  public getPaginatedAttendant(request_url) {
    this.attendantService.getPaginatedAttendant(request_url);
  }

  // pre-populate existing data on edit button
  public  onedit(attendant) {
    this.newAttendant = attendant;
  }
// update contact information
  public  onupdate() {
    console.log(this.newAttendant.id, this.newAttendant);
    this.attendantService.updateAttendant(this.newAttendant.id, this.newAttendant).subscribe(
      () => { this.UpdatepagePaginator();});

  }
// delete contact information
  public  ondelete(contacts) {

    this.attendantService.deleteAttendant(this.newAttendant.id).subscribe(
      () => { this.UpdatepagePaginator() } );

  }

}
