import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { APIs } from '../../core/configs/APIs.config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetails } from '../../core/interfaces/product-details.interface';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule, LoadingComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  productsDetails: ProductDetails = {};
  productId: string = ''
  isLoading = false;
  isFailure = false;

  constructor(private _titleService:Title, private _route: ActivatedRoute, private _http: HttpClient, private _router: Router) {
    
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.isLoading = true;
    this.isFailure = false;
    this._route.paramMap.subscribe(params => {
      this.productId = params.get('id') as string;
    });
    this._http.get(APIs.Products.GetProduct + this.productId).subscribe((res: ProductDetails) => {
      if(res) {
        this.productsDetails = res;
        this._titleService.setTitle(this.productsDetails.title as string);
        this.isFailure = false;
        this.isLoading = false;
      }
      else {
        this._router.navigate(['**']);
      }
    }, (err) => {
      this.isFailure = true;
      this.isLoading = false;
    })
  }
}
