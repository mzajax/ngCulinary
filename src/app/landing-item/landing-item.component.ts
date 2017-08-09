import { Component, OnInit, Input } from '@angular/core';
import { LandingItemDto } from 'app/shared/landing.model';

@Component({
  selector: 'app-landing-item',
  templateUrl: './landing-item.component.html',
  styleUrls: ['./landing-item.component.css']
})
export class LandingItemComponent implements OnInit {

  @Input() landingItem: LandingItemDto;
  @Input() flip: boolean;

  constructor() { }

  ngOnInit() {
  }

}
