import { Routes } from '@angular/router';
import { DocumentComponent } from './component/document/document.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'document', component: DocumentComponent },
];
