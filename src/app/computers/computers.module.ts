import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputersRoutingModule } from './computers-routing.module';
import { MyComputerComponent } from './my-computer/my-computer.component';
import { SecretComputerComponent } from './secret-computer/secret-computer.component';

@NgModule({
  imports: [
    CommonModule,
    ComputersRoutingModule
  ],
  declarations: [MyComputerComponent, SecretComputerComponent]
})
export class ComputersModule { }
