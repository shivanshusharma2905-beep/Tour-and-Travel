import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

 showPackages = false;
  showServices = false;

  toggleDropdown(menu: string) {
    if (window.innerWidth < 992) { 
      if (menu === 'packages') {
        this.showPackages = !this.showPackages;
      } else if (menu === 'services') {
        this.showServices = !this.showServices;
      }
    }
  }
}
