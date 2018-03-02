import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Roles } from "./roles";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private router : Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let requiredRole = route.data.role;
        let userRole = localStorage.getItem('current_user.role');
        
        console.log(`required role: ${requiredRole}`)
        console.log(`user role: ${userRole}`)

        return Roles.hasRole(requiredRole, userRole);
    }
}