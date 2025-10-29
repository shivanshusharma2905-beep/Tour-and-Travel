import { Component } from '@angular/core';
import { RequestForm } from '../core/shared/components/request-form/request-form';
import { SideOffers } from '../core/shared/components/side-offers/side-offers';


@Component({
  selector: 'app-side-space',
  imports: [RequestForm, SideOffers],
  templateUrl: './side-space.html',
  styleUrl: './side-space.css',
})
export class SideSpace {

}
