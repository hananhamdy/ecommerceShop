import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
];
