//angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//ionic
import { LoadingController } from '@ionic/angular';
//services
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

    doRefresh(event) {
        this.ionViewWillEnter();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }

    ionViewWillEnter() {
        let loading = this.loadingCtrl.create({
            spinner: 'crescent'
        }).then( loading => {
                loading.present();
                const id = this.activatedRoute.snapshot.paramMap.get('claseTypeId');
                this.claseService.getClaseTypeWeek(id).subscribe(
                    respose => {
                        console.log(respose);
                        this.week = respose['data'];
                        loading.dismiss();

                    }

                )
            }
        );
    }

    goToAddHour(date: string = '2015-01-01', has: boolean = false ) {
        console.log(has);

        if (has) {
            const claseTypeId = this.activatedRoute.snapshot.paramMap.get('claseTypeId');

            this.router.navigateByUrl(
                `/home/tabs/clases/clase-type/${claseTypeId}/select-day/${date}`
            );
        }
    }
            

}
