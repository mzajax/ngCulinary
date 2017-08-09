import { Injectable } from '@angular/core';
import { LandingItemDto } from 'app/shared/landing.model';
import { Observable } from 'rxjs/Rx';
import { MenuItemDto } from 'app/shared/menu-item.model';

@Injectable()
export class LandingService {

  landingItems: LandingItemDto[] = [
    {
      heading: 'Fichipizza',
      description: `A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado,
          honey and arugula.`,
      sideDescription: 'Our Unique Culinary Creations',
      moreLinkUrl: '#'
    },
    {
      heading: 'Weekend Grand Buffet',
      description: `Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees
          and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person`,
      sideDescription: 'This Month\'s Promotions',
      moreLinkUrl: '#'
    },
    {
      heading: 'Tommy McHugh',
      subHeading: 'Executive Chef',
      description: `Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in
          the culinary world, he specializes in creating mouthwatering Mediterranean-Italian experiences.`,
      sideDescription: 'Meet our Culinary Specialists',
      moreLinkUrl: '#'
    }
  ];

  menuItems: MenuItemDto[] = [
    {
      name: 'Item 1',
      price: 12.3,
    },
    {
      name: 'Item 2',
      price: 14.2,
    },
    {
      name: 'Item 3',
      price: 15.2,
    },
    {
      name: 'Item 4',
      price: 16.2,
    },
    {
      name: 'Item 5',
      price: 17.2,
    },
    {
      name: 'Item 6',
      price: 18.2,
    }
  ];

  constructor() { }


  getItems(): Observable<LandingItemDto[]> {
    return Observable.of(this.landingItems);
  }

  getMenu(): Observable<MenuItemDto[]> {
    return Observable.of(this.menuItems);
  }

}
