
//angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//ionic
import { LoadingController } from '@ionic/angular';
//capacitor
import { Plugins } from '@capacitor/core';
//services
import { ClaseService } from '../../../services/clase/clase.service';

@Component({
  selector: 'app-select-hour',
  templateUrl: './select-hour.page.html',
  styleUrls: ['./select-hour.page.scss'],
})
export class SelectHourPage {
    public clases: any = [];

    constructor( 
                 private router: Router,
                 public activatedRoute: ActivatedRoute,
                 public loadingCtrl: LoadingController,
                 private claseService: ClaseService,
                ) { }

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
                const date = this.activatedRoute.snapshot.paramMap.get('date');

                const clasetype = this.activatedRoute.snapshot.paramMap.get('claseTypeId');
                this.claseService.getClaseTypeHour(clasetype,date).subscribe(
                    respose => {
                        console.log(respose);
                        this.clases = respose['data'];
                        loading.dismiss();
                    }

                )
            }
        );
    }

    /**
     * [goToAddConfirm description]
     */
    goToAddConfirm(claseId = '0', has = false) {
        this.router.navigateByUrl(`/home/tabs/clases/${claseId}`);
    }
}
