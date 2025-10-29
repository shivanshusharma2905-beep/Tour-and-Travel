import { Routes } from '@angular/router';
import { Home } from './core/pages/home/home';
import { About } from './core/pages/about/about';
import { TourDestination } from './core/shared/components/tour-destination/tour-destination';
import { TourPackage } from './core/shared/components/tour-package/tour-package';
import { Blog } from './core/pages/blog/blog';
import { Contact } from './core/pages/contact/contact';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'destination', component: TourDestination },
  { path: 'packages', component: TourPackage },
  { path: 'blog', component: Blog },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } 
];
