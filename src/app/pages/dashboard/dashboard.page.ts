//angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Plugins } from '@capacitor/core';

// import { Label } from 'ng2-charts';
// import { ChartDataSets, ChartOptions, Chart } from 'chart.js';

//servicios
import { WodService } from '../../services/wod/wod.service';
import { ClaseService } from '../../services/clase/clase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  todayWods: any

  constructor(
    private wodService: WodService,
    private claseService: ClaseService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  doRefresh(event) {
    console.log('refresh');
    this.ionViewWillEnter();
    setTimeout(() => {
        event.target.complete();
    }, 1000);
  }


  ionViewWillEnter() {
    this.wodService.getTodayWods().subscribe( response => {
      this.todayWods = response['data'];
    })
  }

  goToWod(wodId: any ) {
    this.router.navigate([`/home/tabs/dashboard/wods/${wodId}`]);
  }

  goToClase(claseId: string) {
    this.router.navigate([`/home/tabs/clases/${claseId}`]);
  }
}
