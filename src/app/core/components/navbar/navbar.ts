import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   isCollapsed = true;
  showPackages = false;
  showServices = false;

  // Desktop hover handling (only for large screens)
  onHover(menu: 'packages' | 'services', entering: boolean) {
    if (window.innerWidth >= 992) {
      if (menu === 'packages') this.showPackages = entering;
      if (menu === 'services') this.showServices = entering;
    }
  }

  // Toggle dropdown on click (mobile)
  toggleDropdown(menu: 'packages' | 'services') {
    if (window.innerWidth < 992) {
      if (menu === 'packages') {
        this.showPackages = !this.showPackages;
        if (this.showPackages) this.showServices = false;
      } else {
        this.showServices = !this.showServices;
        if (this.showServices) this.showPackages = false;
      }
    } else {
      // small toggle on desktop (optional)
      if (menu === 'packages') this.showPackages = !this.showPackages;
      if (menu === 'services') this.showServices = !this.showServices;
    }
  }

  // Close nav on link click (mobile)
  closeNav() {
    if (window.innerWidth < 992) {
      this.isCollapsed = true;
      this.showPackages = false;
      this.showServices = false;
    }
  }

  // Close when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (window.innerWidth < 992 && !target.closest('.navbar')) {
      this.isCollapsed = true;
      this.showPackages = false;
      this.showServices = false;
    }
  }

  // Reset states when resizing
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 992) {
      this.isCollapsed = true;
      this.showPackages = false;
      this.showServices = false;
    }
  }

  }



