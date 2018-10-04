import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderStatsComponent } from './order-stats/order-stats.component';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrderStatsService } from './Services/order-stats.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  declarations: [
    OrderComponent,
    OrdersComponent,
    OrderStatsComponent
  ],
  providers: [OrderStatsService]
})
export class OrderModule { }
