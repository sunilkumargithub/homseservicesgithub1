import {CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService , private router: Router) {}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
const isauth = this.authservice.getisauth();
if (!isauth) {
 this.router.navigate(['/login']);

}
  return isauth;
}
}
