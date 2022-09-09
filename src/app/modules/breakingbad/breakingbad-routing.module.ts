import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingbadComponent } from './components/breakingbad/breakingbad.component';

const routes: Routes = [
  {
    path: '',
    component: BreakingbadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakingbadRoutingModule {}
