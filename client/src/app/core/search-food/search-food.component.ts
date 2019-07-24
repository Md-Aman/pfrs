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
    this.buildForm();

  }

  buildForm(){
    this.searchFoodForm = this.formBuilder.group({
      food_type: ['', [Validators.required]],
      halal_status: ['', [Validators.required]],
      session: ['', [Validators.required]],
      preference: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  searchFood(inputValue) {
    console.log("Input value :", inputValue);
    if (this.searchFoodForm.valid) {
      this.router.navigate(['/user/search-result'], {
        queryParams: {
          food_type: inputValue.food_type,
          halal_status: inputValue.halal_status,
          session: inputValue.session,
          preference: inputValue.preference,
          price: inputValue.price,
        },
        queryParamsHandling: 'merge',
      });
    }
  }

}
