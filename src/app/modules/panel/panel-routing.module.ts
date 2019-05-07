import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import {routes} from './panel.common';

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
