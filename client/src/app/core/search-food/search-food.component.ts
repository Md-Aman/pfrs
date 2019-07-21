import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})
export class SearchFoodComponent implements OnInit {

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
    this.router.navigate(['/user/search-result'], {
      queryParams: {
        email: inputValue.email,
        mobileNumber: inputValue.mobileNumber,
        website: inputValue.website
      },
      queryParamsHandling: 'merge',
    });
  }

}
