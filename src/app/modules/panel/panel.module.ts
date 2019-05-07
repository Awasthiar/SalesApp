import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelRoutingModule } from './panel-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ApisService } from '../../shared/services/apis.service';
import {StorageService} from './services/storage.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[ApisService,StorageService]
})
export class PanelModule { }
