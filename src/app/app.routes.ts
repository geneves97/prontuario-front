import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landingPage/landingPage.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent
    },
    {
        path: "home",
        component: HomeComponent
    }
];