import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  searchFoodForm: FormGroup;

  ngOnInit() {
    this.searchFoodForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      website: ['', [Validators.required]],
    });

  }

  searchFood(inputValue) {
    console.log("Input value :", inputValue);
    
  }

}