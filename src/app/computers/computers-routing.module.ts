import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComputerComponent } from './my-computer/my-computer.component';
import { SecretComputerComponent } from './secret-computer/secret-computer.component';
import { AuthenticationGuard } from '../authGuard';
import { Roles } from '../roles';
import { Navigation } from '../navigation';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'my-computer' },
  { path: 'my-computer', component: MyComputerComponent, canActivate: [AuthenticationGuard], data: Navigation.routeMeta.computers["my-computer"] },
  { path: 'secret-computer', component: SecretComputerComponent, canActivate: [AuthenticationGuard], data: Navigation.routeMeta.computers["secret-computer"] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputersRoutingModule { }
