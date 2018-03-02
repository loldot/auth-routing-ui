import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmenuComponent } from './home/mainmenu/mainmenu.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainmenuComponent },
  { path: 'computers', loadChildren: './computers/computers.module#ComputersModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'misc', loadChildren: './misc/misc.module#MiscModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
