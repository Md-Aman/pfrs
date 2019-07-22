import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  param1: string;
  param2: string;
  param3: string;
  
  data = [{ key: 'value' }, { key: 'value' }, { key: 'value' }]
  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.param1 = params['email'];
      this.param2 = params['mobileNumber'];
      this.param3 = params['website'];
    });
    console.log("Pararms :", this.param1, this.param2, this.param3);
  }



}
