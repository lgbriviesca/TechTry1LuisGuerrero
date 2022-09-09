import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakingbadRoutingModule } from './breakingbad-routing.module';
import { BreakingbadComponent } from './components/breakingbad/breakingbad.component';

@NgModule({
  declarations: [BreakingbadComponent],
  imports: [CommonModule, BreakingbadRoutingModule],
})
export class BreakingbadModule {}
