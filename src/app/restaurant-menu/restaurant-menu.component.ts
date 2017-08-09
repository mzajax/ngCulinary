import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { LandingService } from 'app/shared/landing.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit, OnDestroy {


  public menuItems: {}

  menuItemSubscription: ISubscription;

  constructor(private landingService: LandingService) { }

  ngOnInit() {
    this.menuItemSubscription = this.landingService.getMenu().subscribe(data => {
      this.menuItems = data;
    });
  }

  ngOnDestroy(): void {
    if (this.menuItemSubscription != null) {
      this.menuItemSubscription.unsubscribe();
    }
  }

}
