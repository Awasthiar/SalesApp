import { NgModule } from '@angular/core';
import {routes} from './panel.common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';



@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class PanelRoutingModule { }
