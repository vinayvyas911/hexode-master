import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeadsComponent } from './leads/leads.component';
import { LeadComponent } from './lead/lead.component';
import { LeadAddComponent } from './LeadAdd/LeadAdd.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './DashBoard/DashBoard.component';
import { WidgetsComponent } from './Widgets/Widgets.component';
import { AssignLeadComponent } from './AssignLead/AssignLead.component';
import { AddUserComponent } from './AddUser/AddUser.component';



@NgModule({
  declarations: [												
    AppComponent,
    NavBarComponent,
    FooterComponent,
      NotFoundComponent,
      LeadsComponent,
      LeadComponent,
      LeadAddComponent,
      LoginComponent,
      DashBoardComponent,
      WidgetsComponent,
      AssignLeadComponent,
      AddUserComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
