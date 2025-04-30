import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'my-orders', loadChildren: () => import('./pages/my-orders/my-orders.module').then(m => m.MyOrdersPageModule) },
  { path: 'tracking', loadChildren: () => import('./pages/tracking/tracking.module').then(m => m.TrackingPageModule) },
  { path: 'message', loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule) },
  { path: 'me', loadChildren: () => import('./pages/me/me.module').then(m => m.MePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

