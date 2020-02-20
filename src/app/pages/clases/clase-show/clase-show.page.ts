//angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

//servicios
import { ClaseService } from '../../../services/clase/clase.service';

@Component({
  selector: 'app-clase-show',
  templateUrl: './clase-show.page.html',
  styleUrls: ['./clase-show.page.scss'],
})
export class ClaseShowPage implements OnInit {
  clase: any;
  reservations: any;
  reservationPage: number;

  constructor(
    private claseService: ClaseService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    
  }

  doRefresh(event) {
    this.ionViewWillEnter();
    setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

  ionViewWillEnter() {
    this.reservationPage = 1;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.claseService.getClase(id).subscribe( response => {
      this.clase = response['data'];
      console.log(this.clase )
    })

    this.claseService.getClaseReservations(id, this.reservationPage).subscribe( response => {
      this.reservations = response['data'];
      console.log(this.reservations)
    })

  }
}
