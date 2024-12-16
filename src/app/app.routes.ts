import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SingleProductComponent } from './features/single-product/single-product.component';
import { ProfileComponent } from './features/profile/profile.component';
import { OopsComponent } from './shared/components/oops/oops.component';
import { AuthorizedGuard } from './core/guards/autherized.guard';
import { NotAuthorizedGuard } from './core/guards/not-autherized.guard';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        canActivate: [NotAuthorizedGuard],
        component: LoginComponent
    },
    {
        path: 'home/:id',
        canActivate: [AuthorizedGuard],
        component: SingleProductComponent
    },
    {
        path: 'profile',
        canActivate: [AuthorizedGuard],
        component: ProfileComponent
    },
    {
        path: "**",
        component: OopsComponent
    },
];
