//environment
import { environment } from '../../environments/environment';
//angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//ionic
import { LoadingController } from '@ionic/angular';
//rxjs
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
//capacitor
import { Plugins } from '@capacitor/core';
//models
import { Auth } from '../models/auth.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth = new BehaviorSubject<Auth>(null);
  authState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  //verificar si existe auth 
  get isAuthenticated() {
    return this._auth.asObservable().pipe(map(auth => {
      if (auth) {
        return true;
      } else {
        return false;
      }
    }));    
  }

  authenticate(email, password, subdomain) {

    const data = JSON.stringify({
        username: email,
        password: password,
        grant_type: 'password',
        client_id: 1,
        client_secret: environment.apikey,
    });

    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url : string = environment.http+subdomain+environment.domain+'/oauth/token';
    console.log(url);
    return this.http.post<Auth>(
              url,
              data,
              httpOptions
            )
            .pipe( response => {
                return response;
              }
            );
  }

}
