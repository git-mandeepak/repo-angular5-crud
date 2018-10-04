import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, AfterViewInit {

  chart = [];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
