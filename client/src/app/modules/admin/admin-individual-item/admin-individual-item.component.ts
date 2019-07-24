import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-individual-item',
  templateUrl: './admin-individual-item.component.html',
  styleUrls: ['./admin-individual-item.component.scss']
})
export class AdminIndividualItemComponent implements OnInit {
  data = [{ key: 'value' }, { key: 'value' }, { key: 'value' }];

  constructor(private router: Router) { 

  }
  ngOnInit() {
  }

  addMoreFood() {
    this.router.navigate(['user/order-confirm']);
  }
  viewItem(){
    this.router.navigate(['admin/food/view/75255']);
  }
}
