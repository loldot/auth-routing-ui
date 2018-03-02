import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [MainmenuComponent]
})
export class HomeModule { }
