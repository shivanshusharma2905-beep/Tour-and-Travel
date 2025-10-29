import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Navbar } from './core/components/navbar/navbar';
import { SideSpace } from './side-space/side-space';
import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Navbar, CommonModule, SideSpace, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        this.isHomePage = event.urlAfterRedirects === '/';
      });
  }
}

