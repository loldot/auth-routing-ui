import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './me/me.component';
import { AllComponent } from './all/all.component';
import { Roles } from '../roles';
import { AuthenticationGuard } from '../authGuard';
import { Navigation } from '../navigation';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'me' },
  { path: 'me', component: MeComponent, canActivate: [AuthenticationGuard], data: Navigation.routeMeta.users.me },
  { path: 'all', component: AllComponent, canActivate: [AuthenticationGuard], data: Navigation.routeMeta.users.all },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
