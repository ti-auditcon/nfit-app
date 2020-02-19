import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

//services
import { AuthService } from '../../services/auth/auth.service';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class WodService {

  constructor(
    private authservice: AuthService,
    private http: HttpClient,

  ) { }

  getWod(id){
    return this.authservice.auth.pipe(
      switchMap(
        auth => {
          return this.http.get(
            auth._domain+'/wods/'+id,
            auth._header
          )
        }
      )
    );
  }

  getTodayWods() {
    return this.authservice.auth.pipe(
      switchMap(
        auth => {
          console.log(auth);
          return this.http.get(
            auth._domain+'/todaywods',
            auth._header
          )
        }
      )
    );
  }
}
