import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  config: any;
  data = [{ key: 'value' }, { key: 'value' }, { key: 'value' }, { key: 'value' }, { key: 'value' }, { key: 'value' },
    { key: 'value' }, { key: 'value' }, { key: 'value' }, { key: 'value' }, { key: 'value' }, { key: 'value' }
  ];
  param1: string;
  param2: string;
  param3: string;
 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };
    this.activatedRoute.queryParamMap.map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);
  }


  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.param1 = params['email'];
      this.param2 = params['mobileNumber'];
      this.param3 = params['website'];
    });
    console.log("Pararms :", this.param1, this.param2, this.param3);
  }

  pageChange(newPage: number) {
    this.router.navigate(['user/search-result'], { queryParams: { page: newPage } });
  }

  goToCart(){
    this.router.navigate(['user/cart']);
  }

}
