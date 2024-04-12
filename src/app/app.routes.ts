import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';


//Define Routes
//export const routes: Routes = [];
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'forgot-password', component: ForgotPasswordComponent},
    {path:'**', component: NotFoundComponent}
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ]
    })
export class AppRoutingModule {}

