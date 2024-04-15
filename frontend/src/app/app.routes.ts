import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CommonModule } from '@angular/common';
import { BookTicketComponent } from './book-ticket/book-ticket.component';

// Import other components as needed

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'manager-login', component: ManagerLoginComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'book-ticket', component: BookTicketComponent },
  // Add other routes as needed
];

@NgModule({
  declarations: [
    ManagerLoginComponent,
    CustomerLoginComponent,
    BookTicketComponent,
    

    // Other declarations...
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    CommonModule,

    

  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
