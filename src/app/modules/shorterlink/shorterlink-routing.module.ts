import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShorterlinkComponent } from './components/shorterlink/shorterlink.component';

const routes: Routes = [
  {
    path: '',
    component: ShorterlinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShorterlinkRoutingModule {}
