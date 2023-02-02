import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingConstants } from './constants/app-routing-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title = 'DispatchDashboard';
}