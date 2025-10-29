import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-offers',
  imports: [NgForOf],
  templateUrl: './side-offers.html',
  styleUrl: './side-offers.css',
})
export class SideOffers {

    offers = [
    {
      name: 'Uttarakhand Adventure',
      image: 'assets/packages/rishikesh1.jpg',
      duration: '7 Days / 6 Nights',
      price: '₹24,999'
    },
    {
      name: 'Shimla Delight',
      image: 'assets/packages/Shimla1.jpg',
      duration: '5 Days / 4 Nights',
      price: '₹19,499'
    },
    {
      name: 'Manali Getaway',
      image: 'assets/packages/manali1.jpg',
      duration: '4 Days / 3 Nights',
      price: '₹15,999'
    },
    {
      name: 'Haridwar',
      image: 'assets/packages/haridwar1.jpg',
      duration: '2 Days / 1 Nights',
      price: '₹5,999'
    }
  ];  
}
