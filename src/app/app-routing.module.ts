import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutloginComponent } from './shared/components/layoutlogin/layoutlogin.component';
import { LayoutcontentComponent } from './shared/components/layoutcontent/layoutcontent.component';
import { LoginGuard } from './core/guards/login.guard';
import { RolAGuard } from './core/guards/rol.guard';
import { RolBGuard } from './core/guards/rolb.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [LoginGuard],
    component: LayoutcontentComponent,
    children: [
      {
        path: 'home',
        canActivate: [RolAGuard],
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'booking',
        canActivate: [RolAGuard],
        loadChildren: () =>
          import('./modules/booking/booking.module').then(m => m.BookingModule),
      },
      {
        path: 'breakingbad',
        canActivate: [RolAGuard],
        loadChildren: () =>
          import('./modules/breakingbad/breakingbad.module').then(
            m => m.BreakingbadModule
          ),
      },
      {
        path: 'shorterlink',
        canActivate: [RolBGuard],
        loadChildren: () =>
          import('./modules/shorterlink/shorterlink.module').then(
            m => m.ShorterlinkModule
          ),
      },
    ],
  },
  {
    path: 'login',
    component: LayoutloginComponent,
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
