import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'banner'
  },
  {
    path: 'banner',
    loadChildren: () =>
      import('./banner/banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'products-list',
    loadChildren: () =>
      import('./products-list/products-list.module').then(
        (m) => m.ProductsListModule
      ),
  },
  {
    path: 'timer-using-decorators',
    loadChildren: () =>
      import('./timer-using-decorators/timer-using-decorators.module').then(
        (m) => m.TimerUsingDecoratorsModule
      ),
  },
  {
    path: 'timer-using-services',
    loadChildren: () =>
      import('./timer-using-services/timer-using-services.module').then(
        (m) => m.TimerUsingServicesModule
      ),
  },
  {
    path: 'students-table',
    loadChildren: () =>
      import('./students-table/students-table.module').then(
        (m) => m.StudentsTableModule
      ),
  },
  {
    path: 'dynamic-divs',
    loadChildren: () =>
      import('./dynamic-divs/dynamic-divs.module').then(
        (m) => m.DynamicDivsModule
      ),
  },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: 'banner'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
