import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data = [{ key: 'value' }, { key: 'value' }, { key: 'value' }];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  placeOrder(){
    this.router.navigate(['user/order-confirm']);
  }

}
