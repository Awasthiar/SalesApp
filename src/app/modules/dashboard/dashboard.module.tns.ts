import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import {ApisService} from '../../shared/services/apis.service';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//import { AddEditComponent } from './components/add-edit/add-edit.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,TeamsListComponent],
  imports: [
    DashboardRoutingModule,
    NativeScriptCommonModule,
    HttpClientModule,
    HttpModule,
    NativeScriptFormsModule,   
    FormsModule, ReactiveFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptUIListViewModule
  
  ],
  providers : [ApisService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
