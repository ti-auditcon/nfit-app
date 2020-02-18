import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
   this.authService.isAuthenticated.subscribe(
     isAuth => {
      console.log(isAuth);
     }
   )

  }


}
