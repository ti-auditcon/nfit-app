import { environment } from '../../../../environments/environment';

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ModalController} from '@ionic/angular';


import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-box-select',
  templateUrl: './box-select.page.html',
  styleUrls: ['./box-select.page.scss'],
})
export class BoxSelectPage implements OnInit {

  clients:any;

  constructor(
    // private authService: AuthService,
    private http: HttpClient,
    public viewCtrl: ModalController,
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.get(environment.http+'admin'+environment.domain+'/clients-json',  httpOptions).subscribe( response => {
        this.clients = response['data'];
    });

  }

  //guardando box 
  async  storebox(name:any,subdomain:any) {
    await Storage.set({
      key: 'box',
      value: JSON.stringify({
        name: name,
        subdomain: subdomain
      })
    }).then( result => {
        this.viewCtrl.dismiss({
          'dismissed': true
        });  
    });
  }

  
}
