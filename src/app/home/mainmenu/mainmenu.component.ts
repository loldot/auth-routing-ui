import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '../../roles';

@Component({
  selector: 'app-mainmenu',
  templateUrl:'./mainmenu.template.html',
  styles: []
})
export class MainmenuComponent implements OnInit {
  role='none';
  menu = [
    {
      topic: 'computers',
      links:[
        { route: '/computers/my-computer', text: 'My computer', role: 'none' },
        { route: '/computers/secret-computer', text: 'Secret computer', role: 'admin.computers' }
      ]
    },
    {
      topic: 'users',
      links:[
        { route: '/users/me', text: 'My profile', role: 'none' },
        { route: '/users/all', text: 'All users', role: 'admin.users' }
      ]
    },
    {
      topic: 'users',
      links:[
        { route: '/misc/help', text: 'faq', role: 'none' },
        { route: '/misc/send-mail', text: 'Send email', role: 'admin' }
      ]
    }
  ]
  /**
   *
   */
  constructor(private router: Router) {
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
