import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { LayoutcontentComponent } from './shared/components/layoutcontent/layoutcontent.component';
import { LayoutloginComponent } from './shared/components/layoutlogin/layoutlogin.component';
import { LayoutnavbarComponent } from './shared/components/layoutnavbar/layoutnavbar.component';
import { OpenBookingModalComponent } from './shared/components/open-booking-modal/open-booking-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutcontentComponent,
    LayoutloginComponent,
    LayoutnavbarComponent,
    OpenBookingModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
