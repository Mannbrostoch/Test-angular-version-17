import { Routes } from '@angular/router';
import { DashboardLoginComponent } from './components/dashboard-login/dashboard-login.component';
import { DashboardSignUpComponent } from './components/dashboard-sign-up/dashboard-sign-up.component';
import { PageNotFoudComponent } from './components/page-not-foud/page-not-foud.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'login', component: DashboardLoginComponent },
    { path: 'sign-up', component: DashboardSignUpComponent },
    { path: '**', component: PageNotFoudComponent }
];