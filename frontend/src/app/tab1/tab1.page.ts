import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  model: NgbDateStruct;
  date: {year: number, month: number};
  show = true;

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
