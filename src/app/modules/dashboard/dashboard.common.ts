import { Routes } from '@angular/router';
//import { HeaderComponent } from './components/header/header.component';
//import { FooterComponent } from './components/footer/footer.component';
//import { AddEditComponent } from './components/add-edit/add-edit.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
   // {path:"dashboard/header" , component:HeaderComponent},
    {path:"dashboard/teams-list" , component:TeamsListComponent},
   // {path:"dashboard/footer" , component:FooterComponent}
];
