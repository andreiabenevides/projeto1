import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  footer = true;

  constructor() { }

  ngOnInit() {
  }

  teste() {
    this.footer = !this.footer;
  }

}
