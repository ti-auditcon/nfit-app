//angular
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//ionic
import { ModalController, ToastController  } from '@ionic/angular';
//capacitor
import { Plugins } from '@capacitor/core';
//servicios
import { ClaseService } from '../../../services/clase/clase.service';

@Component({
  selector: 'app-clase-modal',
  templateUrl: './clase-modal.page.html',
  styleUrls: ['./clase-modal.page.scss'],
})
export class ClaseModalPage {
    buttonIcon: any;
    title: any;
    message: any;
    buttonActionAdd: any;
    buttonActionRemove: any;
    buttonActionConfirm: any;
    disabled =  false;
    claseId: any;

    constructor( public viewCtrl: ModalController,
                private http: HttpClient,
                private router: Router,
                public toastController: ToastController,
                private claseService: ClaseService,

             ) {}

    async presentToast(message: string) {
      const toast = await this.toastController.create({
           message, duration: 2500, position: 'top'
      });

      toast.present();
    }

    reserve(id: string ) {
      this.claseService.claseReserve(id).subscribe( response => {
        this.viewCtrl.dismiss();
        this.presentToast('Clase reservada'); 
      })
    }

    confirm(id: string ) {
      this.claseService.claseConfirm(id).subscribe( response => {
        this.viewCtrl.dismiss();
        this.presentToast('Reserva Confirmada'); 
      })
    }

    remove(id: string) {
        this.claseService.claseRemove(id).subscribe( response => {
            this.viewCtrl.dismiss();
            this.presentToast('Reserva Confirmada'); 
        })
    }

    dismiss() {
      this.viewCtrl.dismiss();
     }


}

