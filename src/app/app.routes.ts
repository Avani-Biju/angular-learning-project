import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ContactForm } from './contact-form/contact-form';

export const routes: Routes = [
    {
        path:'',component: Home
    },
    {
        path:'about',component:About
    },
    {
        path:'contact',component: ContactForm
    }
];
