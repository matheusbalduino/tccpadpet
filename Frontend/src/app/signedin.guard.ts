import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginServiceService } from './Services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class SignedinGuard implements CanActivate {
  constructor(private login: LoginServiceService, private route: Router, private toastr: ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
      if(this.login.isLoggedIn)
      {
        return true;
      }
      this.toastr.error('Não autorizado', 'Autorização',{
        timeOut:3000
      })
      this.route.navigate(['']);
    return false;
  }

}
