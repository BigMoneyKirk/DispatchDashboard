import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingConstants } from 'src/app/constants/app-routing-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public understood: boolean = false;

  public toggleAcknowledgement() {
    this.understood = !this.understood;
  }

  public selectAVendorPage() {
    this.router.navigate([AppRoutingConstants.SelectAVendor]);
  }  

}
