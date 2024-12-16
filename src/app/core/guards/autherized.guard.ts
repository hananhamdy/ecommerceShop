import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorizedGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) { }

    //=======Services ==============
    canActivate() {
        if(this.authService.isAuthorized())
            return true;
        else {
            this.router.navigate(["/login"])
            return false;
        }
    }

}
