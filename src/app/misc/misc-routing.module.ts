import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { Roles } from '../roles';
import { AuthenticationGuard } from '../authGuard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'help' },
  { path: 'help', component: HelpComponent, canActivate: [AuthenticationGuard], data: { role: Roles.None } },
  { path: 'send-mail', component: SendMailComponent, canActivate: [AuthenticationGuard], data: { role: Roles.Admin } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
