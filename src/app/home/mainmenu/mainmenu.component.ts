import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '../../roles';
import { Navigation } from '../../navigation';

@Component({
  selector: 'app-mainmenu',
  templateUrl:'./mainmenu.template.html',
  styles: []
})
export class MainmenuComponent implements OnInit {
  role='none';
  menu = [];
  /**
   *
   */
  constructor() {
    this.menu = Navigation.getMenu();
  }
  public setRole(){
    localStorage.setItem('current_user.role', this.role);
  }

  public hasAccess(link) :boolean{
    return Roles.hasRole(link.role);
  }

  ngOnInit() {
    
  }

}
