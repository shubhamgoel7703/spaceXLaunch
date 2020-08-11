import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  yearStart = 2006;
  yearEnd = 2020;
  yearsArray = [];

  constructor() { }

  ngOnInit() {
    for (let i = this.yearStart; i <= this.yearEnd; i++)
      this.yearsArray.push(i);
  }

}
