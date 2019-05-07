import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddEditRoutingModule } from './add-edit-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AddeditComponent } from './components/addedit/addedit.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NativeScriptHttpClientModule} from 'nativescript-angular/http-client';
@NgModule({
  declarations: [AddeditComponent],
  imports: [
    AddEditRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddEditModule { }
