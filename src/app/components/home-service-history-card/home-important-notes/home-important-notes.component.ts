import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-important-notes',
  templateUrl: './home-important-notes.component.html',
  styleUrls: ['./home-important-notes.component.scss']
})
export class HomeImportantNotesComponent implements OnInit {

  public importantNotes: string = `Important notes for this work order.`;

  constructor() { }

  ngOnInit(): void {
  }

}
