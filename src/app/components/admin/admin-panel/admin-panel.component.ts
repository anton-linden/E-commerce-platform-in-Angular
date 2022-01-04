import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  view: string = "";

  constructor() { }

  ngOnInit(): void {
    this.view = "orders";
  }

  changeView(type: string) {
    if (type.length < 1) return;
    this.view = type;
  }

}
