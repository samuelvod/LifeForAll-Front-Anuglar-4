import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {ModalModule, TabsModule} from "ngx-bootstrap";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {HttpService} from "../../services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {FilterPipe} from "../../filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    TabsModule,
    HttpClientModule
  ],
  declarations: [AdminComponent],
  providers:[AdminService, HttpService,FilterPipe]
})
export class AdminModule { }
