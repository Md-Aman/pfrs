import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { UserService } from './../../../core/services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  config: any;
  searchResult = [];

  errorText: string = "Something happend wrong please try again";
 
  constructor(
    private toastrService: ToastrService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };
    this.activatedRoute.queryParamMap.map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);
  }

  food_type: string;
  halal_status: string;
  preference: string;
  session: string;
  price: number;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.food_type = params['food_type'];
      this.halal_status = params['halal_status'];
      this.preference = params['preference'];
      this.session = params['session'];
      this.price = params['price'];
    });
    console.log("Pararms :", this.food_type, this.halal_status, this.preference, this.session, this.price);
    const data = [];
    this.getSearchResult(data);
  }

  getSearchResult(data){
    this.userService.searchFood(data).subscribe((response: any) => {
      console.log("respon :", response);
      if (response.code === 200) {
        this.searchResult = response.data;
        console.log("Success status:", response.message);
      } else {
        this.toastrService.warning(response.message, 'Warning:', { enableHtml: true });
      }
    }, error => {
      this.toastrService.warning(this.errorText, 'Warning:', { enableHtml: true });
    });
  }


  pageChange(newPage: number) {
    this.router.navigate(['user/search-result'], { queryParams: { page: newPage } });
  }


  goToCart(){
    this.router.navigate(['user/cart']);
  }

}
