import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})
  export class AuthService {
    private token: string;
    private isauthenticated = false;
    private authstatuslistener = new Subject<boolean>();
  usersignupsub = new Subject<any>();
  usersignupresponsemessage;
  constructor(private http: HttpClient, private router: Router) { }

gettoken() {
 return this.token;
}
 getisauth() {
   return this.isauthenticated;
 }

getauthstatuslistener() {
 return this.authstatuslistener.asObservable();
}
        postuser(newuser) {
        this.http.post<{message: string, user: string}>('http://localhost:4000/homeservicesuser' , newuser ).subscribe((response) => {
        console.log('post message is' , response);
        this.usersignupresponsemessage = 'sign up successfull,Login to continue';
        this.usersignupsub.next(this.usersignupresponsemessage);
        }); this.usersignupresponsemessage = 'something went wrong';
        this.usersignupsub.next(this.usersignupresponsemessage);
        this.router.navigate(['/login']);

        }


        getuser(user) {
        this.http.post<{token: string}>('http://localhost:4000/homeservicesuser/login', user).subscribe((response) => {

        const tokens = response.token;
        this.token = tokens;
        if (tokens) {
          this.isauthenticated = true;
          this.authstatuslistener.next(true);
        }

        console.log(this.token);
      this.router.navigate(['/home']);

        });
                }

      onlogout() {
      this.token = null;
      this.authstatuslistener.next(false);
      this.router.navigate(['/home']);
                      }


}
