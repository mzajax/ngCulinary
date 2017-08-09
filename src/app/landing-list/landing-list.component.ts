import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingService } from 'app/shared/landing.service';
import { LandingItemDto } from 'app/shared/landing.model';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-landing-list',
  templateUrl: './landing-list.component.html',
  styleUrls: ['./landing-list.component.css']
})
export class LandingListComponent implements OnInit, OnDestroy {

  landingItemSubscription: ISubscription;

  landingItems: LandingItemDto[];

  constructor(private landingService: LandingService) { }

  ngOnInit() {
    this.landingItemSubscription = this.landingService.getItems().subscribe(data => {
      this.landingItems = data;
    })
  }

  ngOnDestroy(): void {
    if (this.landingItemSubscription) {
      this.landingItemSubscription.unsubscribe();
    }
  }

}
