import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

//services
import { AuthService } from '../../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(
    private authservice: AuthService,
    private http: HttpClient,

  ) { }

  //obeteniendo clase por id 
  getClase(id){
    return this.authservice.auth.pipe(
      switchMap(
        auth => {
          return this.http.get(
            auth._domain+'/clases/'+id,
            auth._header
          )
        }
      )
    );
  }

  getClaseReservations(id, page){
    return this.authservice.auth.pipe(
      switchMap(
        auth => {
          return this.http.get(
            auth._domain+'/clases/'+id+'/reservations',
            auth._header
          )
        }
      )
    );
  }

  //todas las clases proximas 
  getNextClases() {
    return this.authservice.auth.pipe(
      switchMap(
        auth => {
          return this.http.get(
            auth._domain+'/clases/coming?sort_by_asc=date',
            auth._header
          )
        }
      )
    );
  }
}
