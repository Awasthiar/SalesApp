import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditRoutingModule } from './add-edit-routing.module';
import { AddeditComponent } from './components/addedit/addedit.component';
import {ApisService} from '../../shared/services/apis.service';

@NgModule({
  declarations: [AddeditComponent],
  imports: [
    CommonModule,
    AddEditRoutingModule
  ],
  providers :[ApisService]
})
export class AddEditModule { }
