import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MatDatepickerInputEvent } from '@angular/material';
import { OrderStatsService } from '../Services/order-stats.service';
import { TotalOrderByRange } from '../../models/TotalOrderByRange';

@Component({
  selector: 'app-order-stats',
  templateUrl: './order-stats.component.html',
  styleUrls: ['./order-stats.component.css']
})
export class OrderStatsComponent implements OnInit, AfterViewInit {

  chart = [];
  myChart: any;
  fromDate: Date;
  toDate: Date;
  totalOrdersByRangeModel: TotalOrderByRange[];
  constructor(private _orderStatsService: OrderStatsService) { }

  ngOnInit() {
  }

  onFromDateChange(date: MatDatepickerInputEvent<Date>) {
    this.fromDate = date.value;
    console.log("From: " + this.fromDate);
  }

  onToDateChange(date: MatDatepickerInputEvent<Date>) {
    this.toDate = date.value;
    console.log("To: " + this.toDate);

    this.getTotalOrdersByMonth();
  }

  getTotalOrdersByMonth() {
    this._orderStatsService.getTotalOrdersByMonth(this.fromDate, this.toDate)
      .subscribe((ordersRange: TotalOrderByRange[]) => {
        this.totalOrdersByRangeModel = ordersRange;
        console.log(this.totalOrdersByRangeModel);
        this.updateChart();
      });
  }

  updateChart() {
    if (this.myChart !== 'undefined' && this.myChart) {
      this.myChart.destroy();
    }

    const months: String[] = [];
    const rangeValues: String[] = [];
    this.totalOrdersByRangeModel.forEach((val) => {
      const monthData: String = val.MonthOfYear + " " + val.Year.toString();
      months.push(monthData);
      rangeValues.push(val.TotalOrders);
    });

    this.myChart = new Chart("canvas", {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          fillColor: "#FF0000",
          strokeColor: "#48A4D1",
          label: '# of Orders from' + this.totalOrdersByRangeModel[0].Year.toString() + " to " + this.totalOrdersByRangeModel[this.totalOrdersByRangeModel.length - 1].Year.toString(),
          data: rangeValues,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          // backgroundColor: [
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(255, 206, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(255, 159, 64, 0.2)'
          // ],
          borderColor: 'rgba(54, 162, 235, 1)',
          // borderColor: [
          //   'rgba(255,99,132,1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
          borderWidth: 2,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ngAfterViewInit() {
//   const myChart1 = new Chart('canvas', {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
  }

}
