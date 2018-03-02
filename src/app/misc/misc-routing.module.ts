import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { Roles } from '../roles';
import { AuthenticationGuard } from '../authGuard';
import { Navigation } from '../navigation';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'help' },
  { path: 'help', component: HelpComponent, canActivate: [AuthenticationGuard], data: Navigation.routeMeta.misc.help },
  { path: 'send-mail', component: SendMailComponent, canActivate: [AuthenticationGuard], data: Navigation.routeMeta.misc["send-mail"] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
