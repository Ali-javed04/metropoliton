import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { HeaderComponent } from './component/main/header/header.component';
import { FooterComponent } from './component/main/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { DriversComponent } from './component/drivers/drivers.component';
import { CustomersComponent } from './component/customers/customers.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CompanyStoreComponent } from './component/company-store/company-store.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
    CompanyStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
