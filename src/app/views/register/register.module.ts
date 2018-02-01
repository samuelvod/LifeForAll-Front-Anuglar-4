import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register.component";
import {RegisterRoutingModule} from "./register-routing.module";
import {ModalModule, TabsModule} from "ngx-bootstrap";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AttendantRegisterService} from "../../services/attendant-register.service";
import {HttpService} from "../../services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {FilterPipe} from "../../filter.pipe";



@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    TabsModule,
    HttpClientModule
  ],
  declarations: [ RegisterComponent],
  providers:[AttendantRegisterService, HttpService, FilterPipe]
})
export class RegisterModule { }
