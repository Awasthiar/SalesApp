import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {routes} from './add-edit.common';



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditRoutingModule { }
