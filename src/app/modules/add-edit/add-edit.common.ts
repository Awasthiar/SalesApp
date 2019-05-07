import { Routes } from '@angular/router';
import { AddeditComponent } from './components/addedit/addedit.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {path:'add-edit/addedit', component:AddeditComponent,
      
      children:[{path:'add-edit/addedit/:id',component:AddeditComponent}]
     
    },
    
];
