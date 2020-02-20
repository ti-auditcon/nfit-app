import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-index',
  templateUrl: './clase-index.page.html',
  styleUrls: ['./clase-index.page.scss'],
})
export class ClaseIndexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    this.ionViewWillEnter();
    setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

  ionViewWillEnter(){
    
  }

}
