import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MeComponent } from './me/me.component';
import { AllComponent } from './all/all.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [MeComponent, AllComponent]
})
export class UsersModule { }
