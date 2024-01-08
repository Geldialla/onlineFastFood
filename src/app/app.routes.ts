import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { ProductListComponent } from './user/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ProductCreatingComponent } from './admin/product-creating/product-creating.component';
import { ProductTableComponent } from './admin/product-table/product-table.component';
import { CategoryCreatingComponent } from './admin/category-creating/category-creating.component';
import { CategoryTableComponent } from './admin/category-table/category-table.component';
import { OrderComponent } from './user/order/order.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'User/Product',
        pathMatch: 'full',
    },
    {
        path: 'Admin',
        component: AdminPageComponent,
        children: [

            {
                path: 'Product',
                component: ProductListComponent,
            },
            {
                path: 'Product-Create',
                component: ProductCreatingComponent,
            },
            {
                path: 'Product-Table',
                component: ProductTableComponent
            },
            {
                path: 'Category-Create',
                component: CategoryCreatingComponent
            },
            {
                path: 'Category-Table',
                component: CategoryTableComponent
            },
        ]
    },
    {
        path: 'User',
        component: ProductListComponent,
        children: [
            {
                path: 'Order',
                component: OrderComponent
            }
        ]
    },
    {
        path: 'Admin-Login',
        component: LoginComponent,
    }
];
