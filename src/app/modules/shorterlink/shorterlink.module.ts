import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShorterlinkRoutingModule } from './shorterlink-routing.module';
import { ShorterlinkComponent } from './components/shorterlink/shorterlink.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShorterlinkComponent],
  imports: [
    CommonModule,
    ShorterlinkRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ShorterlinkModule {}
