import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComputerComponent } from './my-computer/my-computer.component';
import { SecretComputerComponent } from './secret-computer/secret-computer.component';
import { AuthenticationGuard } from '../authGuard';
import { Roles } from '../roles';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'my-computer' },
  { path: 'my-computer', component: MyComputerComponent, canActivate: [AuthenticationGuard], data: { role: Roles.None } },
  { path: 'secret-computer', component: SecretComputerComponent, canActivate: [AuthenticationGuard], data: { role: Roles.ComputerAdmin } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputersRoutingModule { }
