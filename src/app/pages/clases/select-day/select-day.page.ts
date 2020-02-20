//angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//ionic
import { LoadingController } from '@ionic/angular';
//servicios
import { ClaseService } from '../../../services/clase/clase.service';


@Component({
  selector: 'app-select-day',
  templateUrl: './select-day.page.html',
  styleUrls: ['./select-day.page.scss'],
})
export class SelectDayPage  {
    public week: any = [];

    constructor( 
                 private router: Router,
                 public activatedRoute: ActivatedRoute,
                 public loadingCtrl: LoadingController,
                 private claseService: ClaseService,

                ) { }


    ngOnInit() {
        
    }
    ionViewWillEnter() {
        let loading = this.loadingCtrl.create({
            spinner: 'crescent'
        }).then( loading => {
                loading.present();
                this.claseService.types().subscribe(
                    respose => {


                    }

                )
            }
        );
    }
            

}
