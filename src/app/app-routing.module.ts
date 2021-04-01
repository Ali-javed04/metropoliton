import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CompanyStoreComponent } from './component/company-store/company-store.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CustomersComponent } from './component/customers/customers.component';
import { DriversComponent } from './component/drivers/drivers.component';
import { HomeComponent } from './component/home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path:'', component:HomeComponent },
    { path:'about', component:AboutUsComponent },
    { path:'drivers', component:DriversComponent },
    { path:'customers', component:CustomersComponent },
    { path:'contact', component:ContactUsComponent },
    { path:'store', component:CompanyStoreComponent },
    { path:'register', component:RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
