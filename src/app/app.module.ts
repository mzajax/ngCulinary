import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingListComponent } from './landing-list/landing-list.component';
import { LandingItemComponent } from './landing-item/landing-item.component';
import { LandingService } from 'app/shared/landing.service';
import { FooterComponent } from './footer/footer.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingHeaderComponent,
    LandingComponent,
    NavbarComponent,
    LandingListComponent,
    LandingItemComponent,
    FooterComponent,
    RestaurantMenuComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
