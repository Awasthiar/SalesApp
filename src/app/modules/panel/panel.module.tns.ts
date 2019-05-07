import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelRoutingModule } from './panel-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './components/login/login.component';
import { ApisService } from '../../shared/services/apis.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    PanelRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,   
    FormsModule, ReactiveFormsModule,
   
  ],
  providers : [ApisService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PanelModule { }
