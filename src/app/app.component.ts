import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title = 'DispatchDashboard';
  public understood: boolean = false;

  public toggleAcknowledgement() {
    this.understood = !this.understood;
  }
}