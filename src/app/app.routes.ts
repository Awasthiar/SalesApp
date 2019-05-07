import { Routes } from '@angular/router';


export const routes: Routes = [
  {path: '',loadChildren:'./modules/panel/panel.module#PanelModule'},
  {path: 'dashboard', loadChildren:'./modules/dashboard/dashboard.module#DashboardModule'},
  {path:'add-edit',loadChildren:'./modules/add-edit/add-edit.module#AddEditModule'},

];
