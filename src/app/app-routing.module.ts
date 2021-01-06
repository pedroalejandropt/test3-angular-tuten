import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
  path: '', 
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/login/login.module#LoginModule'
      },
      {
        path: 'bookings',
        loadChildren: './pages/bookings/bookings.module#BookingsModule'
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
