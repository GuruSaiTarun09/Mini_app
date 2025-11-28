import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CarsComponent } from './cars/cars.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MailComponent } from './mail/mail.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { GmailComponent } from './gmail/gmail.component';
import { WeatherComponent } from './weather/weather.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CreateVechicleComponent } from './create-vechicle/create-vechicle.component';
import { AdddeatailsComponent } from './adddeatails/adddeatails.component';
import { VechicleDetailsComponent } from './vechicle-details/vechicle-details.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WellcomeComponent,
    DataBindingComponent,
    CarsComponent,
    CalculatorComponent,
    SquareComponent,
    RectangleComponent,
    CircleComponent,
    DirectivesComponent,
    ShoppingComponent,
    MailComponent,
    VehicleComponent,
    AccountComponent,
    GmailComponent,
    WeatherComponent,
    StudentdetailsComponent,
    CreateVechicleComponent,
    AdddeatailsComponent,
    VechicleDetailsComponent,
    EditVehicleComponent,
    CreateUserComponent,
    CompanyDetailsComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // ✅ FIXED: Add RouterModule here
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', component: PageNotFoundComponent } // optional
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
