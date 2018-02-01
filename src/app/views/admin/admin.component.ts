import { Component, OnInit } from '@angular/core';
import {UsersPaginator, User} from "./user.object.mapper";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  public usernew = new User;
  public user_list_paginator = new UsersPaginator();
  constructor(private adminService: AdminService) { }

  ngOnInit() {
      this.UpdatepagePaginator();
      this.adminService.Userlistpaginator.subscribe(
       data => {  this.user_list_paginator = data } );
            }
  public UpdatepagePaginator(){
    this.adminService.getUserPaginator();
  }

  public getPaginatedUser(request_url) {
    this.adminService.getPaginatedUser(request_url);
  }

  // pre-populate existing data on edit button
  public  onedit(users) {
    this.usernew = users;
  }
// update contact information
  public  onupdate() {
    console.log(this.usernew.id, this.usernew);
    this.adminService.updateUser(this.usernew.id, this.usernew).subscribe(
      () => { this.UpdatepagePaginator();});

  }
// delete contact information
  public  ondelete(contacts) {

    this.adminService.deleteUser(this.usernew.id).subscribe(
      () => { this.UpdatepagePaginator() } );

  }


}
