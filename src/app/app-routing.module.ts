import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from "./activate.guard";
import { ActivateAdminGuard } from "./activate.adminguard";
import { LeadsComponent } from './leads/leads.component';
import { LeadAddComponent } from './LeadAdd/LeadAdd.component';
import { AssignLeadComponent } from './AssignLead/AssignLead.component';
import { LeadComponent } from './lead/lead.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './DashBoard/DashBoard.component';
import { WidgetsComponent } from './Widgets/Widgets.component';
import { AddUserComponent } from './AddUser/AddUser.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'leads', component: LeadsComponent, canActivate: [ActivateGuard], },
  { path: 'addleads', component: LeadAddComponent, canActivate: [ActivateGuard], },
  { path: '404', component: NotFoundComponent },
  { path: '', component: DashBoardComponent , canActivate: [ActivateGuard], },
  { path: 'login', component: LoginComponent },
  { path: 'lead/:id', component: LeadComponent, canActivate: [ActivateGuard], },
  { path: 'assign/:id', component: AssignLeadComponent, canActivate: [ActivateGuard,ActivateAdminGuard], },
  { path: 'dashboard', component: DashBoardComponent , canActivate: [ActivateGuard], },
  { path: 'widgets', component: WidgetsComponent , canActivate: [ActivateGuard], },
  { path: 'addUser', component: AddUserComponent , canActivate: [ActivateGuard,ActivateAdminGuard], },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
