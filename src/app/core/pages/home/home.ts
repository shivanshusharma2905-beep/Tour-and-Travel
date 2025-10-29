import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Enquiry } from "../enquiry/enquiry";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Enquiry],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
images = ['assets/banner/haridwar1.jpg', 'assets/banner/manali1.jpg', 'assets/banner/rishikesh1.jpg','assets/banner/shimla1.jpg'];
currentImage = 0;

ngOnInit() {
  setInterval(() => {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }, 3000); // 3 seconds
}

  packages = [
    {
      title: 'Manali',
      description: '3 Nights / 4 Days stay in Goa with beach tours and nightlife.',
      image: 'assets/packages/manali1.jpg',
    },
    {
      title: 'Haridwar',
      description: '5 Days trip covering Manali, Shimla and Solang Valley.',
      image: 'assets/packages/haridwar1.jpg',
    },
    {
      title: 'Rishikesh',
      description: 'Experience houseboats, beaches and lush greenery in Kerala.',
      image: 'assets/packages/rishikesh1.jpg',
    },
    {
      title: 'Kashmir Paradise',
      description: 'Explore Jaipur, Udaipur and Jaisalmer in 6 Days.',
      image: 'assets/packages/kashmir1.jpg',
    },
    {
      title: 'Queen of Hills  Shimla',
      description: '4 Days tour with water sports and pristine beaches.',
      image: 'assets/packages/Shimla1.jpg',
    },
    {
      title: 'Rishikesh',
      description: 'Experience houseboats, beaches and lush greenery in Kerala.',
      image: 'assets/packages/rishikesh1.jpg',
    },
    {
      title: 'Kashmir',
      description: 'Explore Jaipur, Udaipur and Jaisalmer in 6 Days.',
      image: 'assets/packages/kashmir1.jpg',
    },
    {
      title: 'Shimla',
      description: '4 Days tour with water sports and pristine beaches.',
      image: 'assets/packages/Shimla1.jpg',
    },
  ];
   places = [
    { name: 'Manali', image: 'assets/packages/manali1.jpg' },
    { name: 'Kashmir', image: 'assets/packages/kashmir1.jpg' },
    { name: 'Shimla', image: 'assets/packages/Shimla1.jpg' },
    { name: 'Haridwar', image: 'assets/packages/haridwar1.jpg' },
    { name: 'Rishikesh', image: 'assets/packages/rishikesh1.jpg' },
    { name: 'Kashmir', image: 'assets/packages/kashmir1.jpg' }
  ];

  openPlace(place: any) {
    alert(`You clicked on ${place.name}!`);
};

  Pilgrimagepackages = [
    {
      title: 'Goa Getaway',
      description: '3 Nights / 4 Days stay in Goa with beach tours and nightlife.',
      image: 'assets/img2',
    },
    {
      title: 'Himachal Hills',
      description: '5 Days trip covering Manali, Shimla and Solang Valley.',
      image: 'assets/img1',
    },
    {
      title: 'Kerala Backwaters',
      description: 'Experience houseboats, beaches and lush greenery in Kerala.',
      image: 'assets/img',
    },
    {
      title: 'Rajasthan Royal Tour',
      description: 'Explore Jaipur, Udaipur and Jaisalmer in 6 Days.',
      image: '#',
    },
    {
      title: 'Andaman Escape',
      description: '4 Days tour with water sports and pristine beaches.',
      image: '',
    },
    {
      title: 'Kashmir Paradise',
      description: '5 Days exploring Srinagar, Gulmarg and Pahalgam.',
      image: '#',
    },
    {
      title: 'Dubai Delight',
      description: 'Luxury 4 Days trip including desert safari & Burj Khalifa visit.',
      image: '#',
    },
    {
      title: 'Bali Bliss',
      description: 'Romantic 5 Days vacation with beaches and temples.',
      image: '#',
    }, 
  ];
  }
