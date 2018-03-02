import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscRoutingModule } from './misc-routing.module';
import { HelpComponent } from './help/help.component';
import { SendMailComponent } from './send-mail/send-mail.component';

@NgModule({
  imports: [
    CommonModule,
    MiscRoutingModule
  ],
  declarations: [HelpComponent, SendMailComponent]
})
export class MiscModule { }
