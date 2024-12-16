import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../core/interfaces/product.interface';
import { APIs } from '../../core/configs/APIs.config';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { NoDataComponent } from '../../shared/components/no-data/no-data.component';
import { AuthenticationService } from '../../core/services/authentication.service';
import { User } from '../../core/interfaces/user.interface';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { Dialog } from '@angular/cdk/dialog';
import { OverlayComponent } from '../../shared/components/overlay/overlay.component';
import { PriceFormattingPipe } from '../../shared/pipes/price-formatting.pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NoDataComponent, MatCardModule, MatButtonModule, RouterLink, HttpClientModule, MatLabel, MatSelect, MatFormField, MatOption, LoadingComponent, PriceFormattingPipe],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
dialog = inject(Dialog);
  private _snackBar = inject(MatSnackBar);
  user: User | null = null;
  productsList: Product[] = [];
  categoriesList: string[] = [];
  selected = 'All';
  isLoading = false;

  constructor(private _titleService: Title, private _http: HttpClient, private _authenticationService: AuthenticationService) {
    this._titleService.setTitle("Home");
  }

  ngOnInit() {
    this._authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getCategoriesList();
    this.getProductsList();
  }

  getCategoriesList() {
    this._http.get<string[]>(APIs.Products.GetCategoriesList).subscribe((res) => {
      this.categoriesList = ['All', ...res];
      this.isLoading = false;
    });
  }

  getProductsList() {
    this.isLoading = true;
    this._http.get<Product[]>(APIs.Products.GetProductsList).subscribe((res) => {
      this.productsList = res;
      this.isLoading = false;
    });
  }

  selectCategory(item: String) {
    this.isLoading = true;
    if(item == 'All') {
      this.getProductsList();
      return;
    }
    this._http.get<Product[]>(APIs.Products.GetCategory + item).subscribe((res) => {
      this.productsList = res;
      this.isLoading = false;
    });
  }

  deleteProduct(item: Product) {
    this._http.delete<Product[]>(APIs.Products.DeleteProduct + item.id).subscribe((res) => {
      // in normal case, we call api again to get the updated list after delete the item
      // this.getProductsList();
      // but for now, we just remove the item from the list
      this.productsList = this.productsList.filter(product => product.id !== item.id);
      this._snackBar.open('Product deleted successfully', 'Close', {
        duration: 2000,
      });
    });
  }
  
  addProduct(product: Product) {
    const body = {...product, image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'};
    this._http.post<Product[]>(APIs.Products.AddProduct, body).subscribe((res) => {
      if (res && typeof res !== 'string') {
        this.productsList.unshift(res as Product);
        this._snackBar.open('Product added successfully', 'Close', {
          duration: 2000,
        });
      } else {
        this._snackBar.open('Something went wrong!', 'Close', {
          duration: 2000,
        });
      }
    }, (error) => {
      this._snackBar.open('Something went wrong!', 'Close', {
        duration: 2000,
      });
    });
  }

  openDialog(type: string): void {
    const dialogRef = this.dialog.open<string>(OverlayComponent, {
      width: '300px',
      data: {
        isAdd: type == 'add',
      },
    });

    dialogRef.closed.subscribe((result) => {
      if (result && typeof result !== 'string') {
        this.addProduct(result as Product);
      } else {
        this._snackBar.open('Product not valid!', 'Close', {
          duration: 2000,
        });
      }
    });
  }
}
