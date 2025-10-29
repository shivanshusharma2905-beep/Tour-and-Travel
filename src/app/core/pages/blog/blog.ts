import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
  standalone:true,
  styleUrls: ['./blog.css'],
  imports: [CommonModule]
})
export class Blog {
  blogs = [
    {
      title: 'Explore the Beauty of Goa',
      date: 'October 2025',
      image: 'assets/images/goa.jpg',
      description: 'Feel the ocean breeze and experience the golden sands of Goa.'
    },
    {
      title: 'Romantic Escapes in Bali',
      date: 'September 2025',
      image: 'assets/images/bali.jpg',
      description: 'Discover paradise islands and stunning sunset beaches in Bali.'
    },
    {
      title: 'Adventure in the Himalayas',
      date: 'August 2025',
      image: 'assets/images/himalayas.jpg',
      description: 'Go trekking through the world’s most breathtaking mountain ranges.'
    }
  ];
}
