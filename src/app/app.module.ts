import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { HeaderComponent } from './component/main/header/header.component';
import { FooterComponent } from './component/main/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { DriversComponent } from './component/drivers/drivers.component';
import { CustomersComponent } from './component/customers/customers.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CompanyStoreComponent } from './component/company-store/company-store.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RegistrationComponent } from './registration/registration.component';
import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyAAwuSIW39GpY7n7XALI3m2kXYhoCke3Ng",
  authDomain: "isway-mkrt-websites.firebaseapp.com",
  projectId: "isway-mkrt-websites",
  storageBucket: "isway-mkrt-websites.appspot.com",
  messagingSenderId: "762069750000",
  appId: "1:762069750000:web:a04c283973890963263235",
  measurementId: "G-GJ5JY5ZEY7"
};

firebase.initializeApp(firebaseConfig);

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    DriversComponent,
    CustomersComponent,
    ContactUsComponent,
    CompanyStoreComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
