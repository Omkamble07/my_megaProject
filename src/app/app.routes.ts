import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Features } from './components/features/features';
import { Aboutus } from './components/aboutus/aboutus';
import { ContactUs } from './components/contactus/contactus';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Upload } from './components/upload/upload';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'features', component: Features },
  { path: 'about', component: Aboutus },
  { path: 'contact', component: ContactUs },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'upload', component: Upload },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' }
];
